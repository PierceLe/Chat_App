import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { UserData } from "../../../core/services/contactService";
import { TimetableEvent, getEventsByDateRange, getAllEvents, deleteEvent } from "../../../core/services/timetableService";
import moment from "moment";
import { useAuth } from "../../../core/hooks/useAuth";
import EventModal from "./EventModal";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getMeSelector } from "../../../core/redux/selectors";

interface EventDisplay {
  day: string;
  time: string;
  title: string;
  details: string;
  color: string;
  originalEvent: TimetableEvent;
  isFirstSlot?: boolean;
  rowSpan?: number;
}

// Type for events that have been processed with positioning data
interface PositionedEvent extends EventDisplay {
  left: number;
  width: number;
  top: number;
  height: number;
  overlappingEvents?: number;
  positionIndex?: number;
  dayIndex?: number;
  timeIndex?: number;
  groupId?: string;
}

const TimeTable = () => {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId");
  const { isAuthenticated } = useAuth();
  const currentUser = useSelector(getMeSelector);
  const [selectedUserData, setSelectedUserData] = useState<UserData | null>(null);
  const [events, setEvents] = useState<EventDisplay[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentWeekStart, setCurrentWeekStart] = useState<Date>(
    moment().startOf("week").toDate()
  );
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<TimetableEvent | undefined>(undefined);
  const [isEditMode, setIsEditMode] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [showManageEvents, setShowManageEvents] = useState(false);
  
  // Get dark mode state from Redux
  const isDarkMode = useSelector((state: any) => state?.common?.darkMode);
  
  // Time slots and days definition
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
  ];

  // Map day name to day index for sorting
  const dayToIndex: Record<string, number> = {
    Mon: 0, Tue: 1, Wed: 2, Thu: 3, Fri: 4, Sat: 5, Sun: 6
  };

  // Enhanced function to determine text color based on background brightness
  // This ensures that text remains readable regardless of background color
  const getTextColorForBackground = (bgColor: string): string => {
    // For Bootstrap color classes, adapt based on dark mode
    if (!bgColor.startsWith('#')) {
      if (isDarkMode) {
        // For dark mode, most Bootstrap colors should use white text
        return bgColor === 'warning' ? 'black' : 'white';
      }
      return 'white'; // Default for light mode
    }
    
    // For hex colors, calculate brightness and choose black or white text
    const hex = bgColor.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    // Calculate perceived brightness using the formula
    // (299*R + 587*G + 114*B) / 1000
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    
    // Use black text on bright backgrounds, white text on dark backgrounds
    // Adjust the threshold for dark mode to improve contrast
    return brightness > (isDarkMode ? 150 : 128) ? 'black' : 'white';
  };

  const fetchTimetableData = async () => {
    setLoading(true);
    try {
      // Calculate week date range
      const weekStart = moment(currentWeekStart).startOf("day").toDate();
      const weekEnd = moment(currentWeekStart).add(6, "days").endOf("day").toDate();
      
      // Get all events for the current week
      const eventsData = await getAllEvents();
      
      // Filter events for the specific user if userId is provided
      const filteredEvents = userId 
        ? eventsData.filter((event: TimetableEvent) => event.user_id === userId)
        : eventsData;
      
      // Further filter by date range for this week
      const eventsThisWeek = filteredEvents.filter((event: TimetableEvent) => {
        const eventStartTime = new Date(event.start_time);
        const eventEndTime = new Date(event.end_time);
        // Include events that start or end within this week
        return (eventStartTime >= weekStart && eventStartTime <= weekEnd) ||
               (eventEndTime >= weekStart && eventEndTime <= weekEnd) ||
               (eventStartTime <= weekStart && eventEndTime >= weekEnd);
      });
      
      // Create a direct mapping of time slot to index and hour
      const timeSlotInfo: Array<{index: number, hour: number, minute: number, formatted: string}> = 
        timeSlots.map((slot, index) => {
          const slotMoment = moment(slot, "h:mm A");
          return {
            index,
            hour: slotMoment.hour(),
            minute: slotMoment.minute(), 
            formatted: slot
          };
        });
      
      // Convert to EventDisplay format with proper span information
      const displayEvents: EventDisplay[] = [];
      
      eventsThisWeek.forEach((event: TimetableEvent) => {
        const startTime = moment(event.start_time);
        const endTime = moment(event.end_time);
        const dayName = startTime.format("ddd");
        
        // Convert to minutes for easier comparison
        const startTotalMinutes = startTime.hour() * 60 + startTime.minute();
        const endTotalMinutes = endTime.hour() * 60 + endTime.minute();
        
        // Find start index - find the time slot that contains or is just before the start time
        let startIndex = 0; // Default to first slot
        
        for (let i = 0; i < timeSlotInfo.length; i++) {
          const slotTotalMinutes = timeSlotInfo[i].hour * 60 + timeSlotInfo[i].minute;
          
          // If this is the last slot
          if (i === timeSlotInfo.length - 1) {
            if (startTotalMinutes >= slotTotalMinutes) {
              startIndex = i;
            }
            break;
          }
          
          // Get next slot minutes for comparison
          const nextSlotTotalMinutes = timeSlotInfo[i + 1].hour * 60 + timeSlotInfo[i + 1].minute;
          
          // If event starts between this slot and the next slot
          if (startTotalMinutes >= slotTotalMinutes && startTotalMinutes < nextSlotTotalMinutes) {
            startIndex = i;
            break;
          }
        }
        
        // Find end index - find the time slot that contains or is just after the end time
        let endIndex = timeSlotInfo.length - 1; // Default to last slot
        
        for (let i = 0; i < timeSlotInfo.length; i++) {
          const slotTotalMinutes = timeSlotInfo[i].hour * 60 + timeSlotInfo[i].minute;
          
          // If this is the last slot
          if (i === timeSlotInfo.length - 1) {
            if (endTotalMinutes <= slotTotalMinutes) {
              endIndex = i;
            }
            break;
          }
          
          // Get next slot minutes for comparison
          const nextSlotTotalMinutes = timeSlotInfo[i + 1].hour * 60 + timeSlotInfo[i + 1].minute;
          
          // If event ends between this slot and the next slot or exactly at this slot
          if (endTotalMinutes > slotTotalMinutes && endTotalMinutes <= nextSlotTotalMinutes) {
            endIndex = i + 1;
            break;
          }
        }
        
        // Ensure endIndex is not less than startIndex
        if (endIndex < startIndex) {
          endIndex = startIndex;
        }
        
        // Calculate number of rows this event spans
        const rowSpan = endIndex - startIndex + 1;
        
        // Add to display events
        displayEvents.push({
          day: dayName,
          time: timeSlots[startIndex],
          title: event.title,
          details: `${startTime.format("h:mm A")} - ${endTime.format("h:mm A")}`,
          color: event.color || "info",
          originalEvent: event,
          isFirstSlot: true,
          rowSpan
        });
      });
      
      setEvents(displayEvents);
    } catch (error) {
      console.error("Error fetching timetable data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Handle window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    fetchTimetableData();
  }, [userId, currentWeekStart]);

  const navigateWeek = (direction: number) => {
    setCurrentWeekStart(prev => 
      moment(prev).add(direction, "weeks").toDate()
    );
  };

  const formatWeekRange = () => {
    const start = moment(currentWeekStart).format("DD/MM/YYYY");
    const end = moment(currentWeekStart).add(6, "days").format("DD/MM/YYYY");
    const isCurrentWeek = moment().isBetween(
      moment(currentWeekStart), 
      moment(currentWeekStart).add(6, "days"), 
      null, 
      "[]"
    );
    return `${start} - ${end}${isCurrentWeek ? " (current week)" : ""}`;
  };

  const handleAddEvent = () => {
    setSelectedEvent(undefined);
    setIsEditMode(false);
    setShowModal(true);
  };

  const handleEditEvent = (event: TimetableEvent) => {
    setSelectedEvent(event);
    setIsEditMode(true);
    setShowModal(true);
  };

  const handleDeleteEvent = async () => {
    if (!selectedEvent) return;
    
    setDeleteLoading(true);
    try {
      const success = await deleteEvent(selectedEvent.event_id);
      if (success) {
        setShowDeleteModal(false);
        fetchTimetableData();
      }
    } catch (error) {
      console.error("Error deleting event:", error);
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleEventClick = (event: TimetableEvent) => {
    if (userId && userId !== currentUser.user_id) {
      // Only view event details if viewing someone else's calendar
      setSelectedEvent(event);
      setShowDeleteModal(false);
      setShowModal(true);
      setIsEditMode(false);
    } else {
      // Show edit options for own calendar
      setSelectedEvent(event);
      setShowDeleteModal(true);
    }
  };

  const handleEditFromList = (event: TimetableEvent) => {
    setShowManageEvents(false);
    handleEditEvent(event);
  };

  const handleDeleteFromList = (event: TimetableEvent) => {
    setShowManageEvents(false);
    setSelectedEvent(event);
    setShowDeleteModal(true);
  };

  return (
    <div className="container mt-4">
      {/* Header Section */}
      <div className={`d-flex justify-content-between align-items-center ${isDarkMode ? 'bg-dark text-light' : 'bg-light'} p-3 rounded mb-3`}>
        <h5 className="mb-0">
          {userId && userId !== currentUser.user_id
            ? "Friend's Timetable"
            : "My Timetable"}
        </h5>
        <div className="d-flex align-items-center">
          <button 
            className={`btn ${isDarkMode ? 'btn-outline-light' : 'btn-outline-secondary'} me-2`}
            onClick={() => navigateWeek(-1)}
          >
            <i className="bi bi-arrow-left"></i>
          </button>
          <span className="fw-bold">
            {formatWeekRange()}
          </span>
          <button 
            className={`btn ${isDarkMode ? 'btn-outline-light' : 'btn-outline-secondary'} ms-2`}
            onClick={() => navigateWeek(1)}
          >
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
        <div>
          {!userId || userId === currentUser.user_id ? (
            <>
              <button className="btn btn-primary me-2" onClick={handleAddEvent}>
                <i className="bi bi-plus"></i> Add Event
              </button>
              <button className={`btn ${isDarkMode ? 'btn-dark' : 'btn-secondary'} me-2`} onClick={() => setShowManageEvents(true)}>
                <i className="bi bi-list-ul"></i> Manage Events
              </button>
              <button className={`btn ${isDarkMode ? 'btn-dark' : 'btn-secondary'}`}>
                <i className="bi bi-funnel"></i> Filter
              </button>
            </>
          ) : null}
        </div>
      </div>

      {/* Timetable Table */}
      {loading ? (
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div
          className="table-responsive position-relative"
          style={{ maxHeight: "700px", overflowY: "auto" }}
        >
          <table className={`table table-bordered ${isDarkMode ? 'table-dark' : ''}`}>
            <thead className={isDarkMode ? "table-dark" : "table-light"}>
              <tr>
                <th style={{ width: "10%" }}>Time</th>
                {days.map((day, index) => (
                  <th key={index} className="text-center" style={{ width: `${90 / days.length}%` }}>
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((time, index) => (
                <tr key={index} style={{ height: "60px" }}>
                  <td className="align-middle">{time}</td>
                  {days.map((day, dayIndex) => (
                    <td key={dayIndex} className="position-relative p-0">
                      {/* Cell is deliberately empty as events will be positioned absolutely */}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          {/* Render events with dark mode awareness */}
          {/* Overlay events with absolute positioning */}
          {(() => {
            // Process all events to detect and handle overlaps
            const positionedEvents: PositionedEvent[] = [];
            
            // Get table dimensions for all events at once
            const table = document.querySelector('.table');
            const firstRow = document.querySelector('.table tr:first-child');
            const timeCell = document.querySelector('.table tr:first-child th:first-child');
            
            // Default dimensions
            let cellWidth = 100 / (days.length + 1);
            let timeColumnWidth = 10;
            
            if (table && firstRow && timeCell) {
              const tableWidth = table.getBoundingClientRect().width;
              timeColumnWidth = (timeCell.getBoundingClientRect().width / tableWidth) * 100;
              cellWidth = (100 - timeColumnWidth) / days.length;
            }
            
            // Position each event
            events.forEach((event) => {
              const dayIndex = dayToIndex[event.day];
              const timeIndex = timeSlots.findIndex(slot => slot === event.time);
              
              if (timeIndex === -1 || dayIndex === undefined) return;
              
              // Get accurate timestamps
              const startTime = moment(event.originalEvent.start_time);
              const endTime = moment(event.originalEvent.end_time);
              
              // Calculate position with minute precision
              const startHour = startTime.hour();
              const startMinute = startTime.minute();
              const baseSlotHour = moment(event.time, "h:mm A").hour();
              const minuteOffset = (startHour === baseSlotHour) ? startMinute / 60 : 0;
              
              const endHour = endTime.hour();
              const endMinute = endTime.minute();
              
              // Calculate duration
              const startTotalHours = startHour + (startMinute / 60);
              const endTotalHours = endHour + (endMinute / 60);
              const durationHours = endTotalHours - startTotalHours;
              
              // Calculate position
              const rowHeight = 60;
              const headerHeight = 41;
              const baseTop = (timeIndex * rowHeight) + headerHeight;
              const topAdjustment = minuteOffset * rowHeight;
              const top = baseTop + topAdjustment;
              const height = durationHours * rowHeight - 6;
              
              // Calculate default left and width
              const left = timeColumnWidth + (dayIndex * cellWidth) + 0.5;
              const width = cellWidth - 1;
              
              // Store positioned event
              positionedEvents.push({
                ...event,
                top,
                height,
                left,
                width,
                dayIndex,
                timeIndex
              });
            });
            
            // Find overlapping events
            for (let i = 0; i < positionedEvents.length; i++) {
              const event1 = positionedEvents[i];
              
              // Group events that occupy the same day column
              const sameColumnEvents = positionedEvents.filter(e => 
                e.day === event1.day && e !== event1
              );
              
              // Find events that overlap in time with this event
              const overlappingEvents = sameColumnEvents.filter(e => {
                const event1Top = event1.top;
                const event1Bottom = event1.top + event1.height;
                const e2Top = e.top;
                const e2Bottom = e.top + e.height;
                
                // Check if they overlap in time
                return (event1Bottom > e2Top && event1Top < e2Bottom);
              });
              
              if (overlappingEvents.length > 0) {
                // Group overlapping events into collision groups
                // A collision group is a set of events that all mutually overlap
                
                // First, find all events that this event overlaps with
                const directOverlaps = [...overlappingEvents, event1];
                
                // Then, create a unique identifier for this collision group
                // Sort event IDs to ensure consistent grouping
                const groupIds = directOverlaps
                  .map(e => e.originalEvent.event_id)
                  .sort()
                  .join('-');
                
                // Set the overlappingEvents count and assign the groupId
                event1.overlappingEvents = directOverlaps.length - 1; // subtract self
                event1.groupId = groupIds;
                
                // Determine position index within the group (by start time, then by ID for ties)
                directOverlaps.sort((a, b) => {
                  const aTime = moment(a.originalEvent.start_time);
                  const bTime = moment(b.originalEvent.start_time);
                  if (aTime.isSame(bTime)) {
                    return a.originalEvent.event_id.localeCompare(b.originalEvent.event_id);
                  }
                  return aTime.diff(bTime);
                });
                
                // Assign position index
                event1.positionIndex = directOverlaps.findIndex(e => 
                  e.originalEvent.event_id === event1.originalEvent.event_id
                );
              }
            }
            
            // Process events by collision groups
            // First, find all unique collision groups
            const groupIds = new Set<string>();
            positionedEvents.forEach(event => {
              if (event.groupId) groupIds.add(event.groupId);
            });
            
            // For each collision group, adjust the events' positions
            groupIds.forEach(groupId => {
              const groupEvents = positionedEvents.filter(e => e.groupId === groupId);
              const groupSize = groupEvents.length;
              
              // For each event in the group
              groupEvents.forEach(event => {
                // Calculate the width for each event in this group
                const adjustedWidth = (event.width / groupSize) - 1;
                
                // Calculate the horizontal position based on position index
                const positionIndex = event.positionIndex || 0;
                const positionShift = positionIndex * (adjustedWidth + 1);
                
                // Update event dimensions
                event.width = adjustedWidth;
                event.left = event.left + positionShift;
              });
            });
            
            // Render all positioned events with dark mode awareness
            return positionedEvents.map((event, eventIndex) => {
              // Check if color is a hex value or a Bootstrap class
              const isHexColor = event.color && event.color.startsWith('#');
              
              // Adjust colors for dark mode if needed
              let finalBgColor = event.color;
              if (isDarkMode && !isHexColor) {
                // Make bootstrap colors more vibrant in dark mode
                // This makes standard bootstrap colors pop more against the dark background
                switch(event.color) {
                  case 'primary': finalBgColor = '#3a8eff'; break;
                  case 'success': finalBgColor = '#42d29d'; break;
                  case 'danger': finalBgColor = '#ff5a65'; break;
                  case 'warning': finalBgColor = '#ffbe2e'; break;
                  case 'info': finalBgColor = '#4ac9ff'; break;
                  case 'secondary': finalBgColor = '#85878a'; break;
                  case 'dark': finalBgColor = '#343a40'; break;
                  default: finalBgColor = event.color;
                }
              }
              
              const dynamicStyles: React.CSSProperties = {
                top: `${event.top}px`,
                left: `${event.left}%`,
                width: `${event.width}%`,
                height: `${event.height}px`,
                zIndex: event.overlappingEvents ? (10 + (event.positionIndex || 0)) : 10,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                overflow: "hidden",
                transition: "all 0.2s ease",
                // Strong border to separate events clearly - adapt for dark mode
                border: `2px solid ${isDarkMode ? 'rgba(0, 0, 0, 0.2)' : 'white'}`,
                // Add box shadow for depth - more subtle in dark mode
                boxShadow: isDarkMode ? '0 2px 6px rgba(0,0,0,0.3)' : '0 2px 4px rgba(0,0,0,0.1)'
              };
              
              // Add background color if it's a hex color
              if (isHexColor) {
                dynamicStyles.backgroundColor = finalBgColor;
                // Set text color based on background brightness
                dynamicStyles.color = getTextColorForBackground(finalBgColor);
              }
              
              return (
                <div
                  key={eventIndex}
                  className={isHexColor ? 'p-2 rounded shadow cursor-pointer position-absolute' : `bg-${event.color} text-white p-2 rounded shadow cursor-pointer position-absolute`}
                  style={dynamicStyles}
                  onClick={() => handleEventClick(event.originalEvent)}
                  title={`${event.title}: ${event.details}${event.originalEvent.description ? `\nDescription: ${event.originalEvent.description}` : ''}${event.originalEvent.location ? `\nLocation: ${event.originalEvent.location}` : ''}`}
                  onMouseEnter={(e) => {
                    const target = e.currentTarget;
                    target.style.transform = 'scale(1.05)';
                    // Adjust shadow for dark mode for better visibility
                    target.style.boxShadow = isDarkMode ? 
                      '0 6px 12px rgba(0,0,0,0.5)' : 
                      '0 6px 12px rgba(0,0,0,0.3)';
                    target.style.zIndex = '100';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.currentTarget;
                    target.style.transform = '';
                    // Restore original shadow
                    target.style.boxShadow = isDarkMode ?
                      '0 2px 6px rgba(0,0,0,0.3)' :
                      '0 2px 4px rgba(0,0,0,0.1)';
                    target.style.zIndex = event.overlappingEvents ? `${10 + (event.positionIndex || 0)}` : '10';
                  }}
                >
                  {event.width < 8 ? (
                    // Show dot indicator for very narrow events
                    <div className={`${isDarkMode ? 'bg-light' : 'bg-white'} rounded-circle`} style={{ width: '8px', height: '8px', marginTop: '4px' }}></div>
                  ) : (
                    <>
                      <strong className="w-100 text-center text-truncate mb-1">{event.title}</strong>
                      <small className="w-100 text-center text-truncate">{event.details}</small>
                      {event.overlappingEvents && event.overlappingEvents > 0 && (
                        <div 
                          className={`position-absolute top-0 end-0 badge ${isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'} rounded-pill m-1`} 
                          style={{ 
                            fontSize: '0.65rem',
                            padding: '2px 6px',
                            opacity: 0.9
                          }}
                        >
                          +{event.overlappingEvents}
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            });
          })()}
        </div>
      )}

      {/* Manage Events Modal */}
      <Modal 
        show={showManageEvents} 
        onHide={() => setShowManageEvents(false)} 
        centered
        size="lg"
        contentClassName={isDarkMode ? 'bg-dark text-light' : ''}
      >
        <Modal.Header closeButton className={isDarkMode ? 'border-secondary' : ''}>
          <Modal.Title>Manage My Events</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-end mb-3">
            <Button 
              variant="primary" 
              size="sm"
              onClick={() => {
                setShowManageEvents(false);
                handleAddEvent();
              }}
            >
              <i className="bi bi-plus"></i> Add New Event
            </Button>
          </div>
          {loading ? (
            <div className="text-center p-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : events.length === 0 ? (
            <div className="text-center p-5">
              <p className={isDarkMode ? 'text-light' : 'text-muted'}>No events found</p>
            </div>
          ) : (
            <div className="table-responsive">
              <table className={`table table-bordered table-hover ${isDarkMode ? 'table-dark' : ''}`}>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[...events]
                    .sort((a, b) => 
                      new Date(a.originalEvent.start_time).getTime() - 
                      new Date(b.originalEvent.start_time).getTime()
                    )
                    .map(event => (
                      <tr key={event.originalEvent.event_id}>
                        <td className="fw-bold">{event.originalEvent.title}</td>
                        <td>{moment(event.originalEvent.start_time).format('ddd, MMM D, YYYY')}</td>
                        <td>{moment(event.originalEvent.start_time).format('h:mm A')} - {moment(event.originalEvent.end_time).format('h:mm A')}</td>
                        <td>
                          <Button 
                            variant={isDarkMode ? "outline-light" : "outline-primary"} 
                            size="sm" 
                            className="me-1"
                            onClick={() => handleEditFromList(event.originalEvent)}
                          >
                            <i className="bi bi-pencil"></i>
                          </Button>
                          <Button 
                            variant="outline-danger" 
                            size="sm"
                            onClick={() => handleDeleteFromList(event.originalEvent)}
                          >
                            <i className="bi bi-trash"></i>
                          </Button>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer className={isDarkMode ? 'border-secondary' : ''}>
          <Button variant={isDarkMode ? "dark" : "secondary"} onClick={() => setShowManageEvents(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Event Modal */}
      <EventModal 
        show={showModal}
        onHide={() => setShowModal(false)}
        onEventSaved={fetchTimetableData}
        event={selectedEvent}
        isEdit={isEditMode}
      />

      {/* Delete Confirmation Modal */}
      <Modal 
        show={showDeleteModal} 
        onHide={() => setShowDeleteModal(false)} 
        centered
        contentClassName={isDarkMode ? 'bg-dark text-light' : ''}
      >
        <Modal.Header closeButton className={isDarkMode ? 'border-secondary' : ''}>
          <Modal.Title>Event Options</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>{selectedEvent?.title}</h5>
          <p>
            <strong>Time:</strong> {selectedEvent ? `${moment(selectedEvent.start_time).format("ddd, MMM D, YYYY h:mm A")} - ${moment(selectedEvent.end_time).format("h:mm A")}` : ""}
          </p>
          {selectedEvent?.description && (
            <p><strong>Description:</strong> {selectedEvent.description}</p>
          )}
          {selectedEvent?.location && (
            <p><strong>Location:</strong> {selectedEvent.location}</p>
          )}
        </Modal.Body>
        <Modal.Footer className={isDarkMode ? 'border-secondary' : ''}>
          <Button 
            variant={isDarkMode ? "dark" : "secondary"}
            onClick={() => {
              setShowDeleteModal(false);
              handleEditEvent(selectedEvent!);
            }}
          >
            Edit
          </Button>
          <Button 
            variant="danger" 
            onClick={handleDeleteEvent}
            disabled={deleteLoading}
          >
            {deleteLoading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Deleting...
              </>
            ) : "Delete"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TimeTable;
