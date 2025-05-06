import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Tabs, Tab, Row, Col, Card } from "react-bootstrap";
import { CreateEventRequest, UpdateEventRequest, TimetableEvent, createEvent, updateEvent } from "../../../core/services/timetableService";
import moment from "moment";
import { HexColorPicker } from "react-colorful";
import { useSelector } from "react-redux";

interface EventModalProps {
  show: boolean;
  onHide: () => void;
  onEventSaved: () => void;
  event?: TimetableEvent;
  isEdit?: boolean;
}

interface EventPreviewProps {
  title: string;
  startTime: string;
  endTime: string;
  color: string;
  useCustomColor: boolean;
  isDarkMode?: boolean;
}

const EventPreview: React.FC<EventPreviewProps> = ({ title, startTime, endTime, color, useCustomColor, isDarkMode }) => {
  const formattedTitle = title || "Your Event";
  const formattedStart = startTime ? moment(startTime, "HH:mm").format("h:mm A") : "9:00 AM";
  const formattedEnd = endTime ? moment(endTime, "HH:mm").format("h:mm A") : "10:00 AM";
  
  // Default background color for preset colors
  let bgColor = color;
  
  // Special handling for preset bootstrap colors
  if (!useCustomColor) {
    bgColor = isDarkMode ? 
      (color === 'warning' ? '#ffc107' : color === 'primary' ? '#3a8eff' : 
      color === 'success' ? '#42d29d' : color === 'danger' ? '#ff5a65' : 
      color === 'info' ? '#4ac9ff' : color === 'secondary' ? '#85878a' : 
      color === 'dark' ? '#343a40' : color) : 
      (color === 'primary' ? '#0d6efd' : color === 'success' ? '#198754' : 
      color === 'danger' ? '#dc3545' : color === 'warning' ? '#ffc107' : 
      color === 'info' ? '#0dcaf0' : color === 'secondary' ? '#6c757d' : 
      color === 'dark' ? '#212529' : color);
  }
  
  // Calculate contrast text color
  const rgb = useCustomColor ? hexToRgb(color) : null;
  const brightness = rgb ? ((rgb.r * 299) + (rgb.g * 587) + (rgb.b * 114)) / 1000 : 128;
  const textColor = useCustomColor ? (brightness > 128 ? 'black' : 'white') : 
    (color === 'warning' || (isDarkMode && color === 'light')) ? 'black' : 'white';
  
  return (
    <div 
      className="preview-card"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        padding: "10px",
        borderRadius: "4px",
        minHeight: "70px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        border: isDarkMode ? '1px solid rgba(255,255,255,0.1)' : undefined
      }}
    >
      <div className="preview-title fw-bold text-truncate">{formattedTitle}</div>
      <small>{formattedStart} - {formattedEnd}</small>
    </div>
  );
};

// Helper function for hex color conversion
const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

const EventModal: React.FC<EventModalProps> = ({ 
  show, 
  onHide, 
  onEventSaved, 
  event, 
  isEdit = false 
}) => {
  // Get dark mode state from Redux
  const isDarkMode = useSelector((state: any) => state?.common?.darkMode);
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [location, setLocation] = useState("");
  const [color, setColor] = useState("info");
  const [customColor, setCustomColor] = useState("#38b6ff");
  const [useCustomColor, setUseCustomColor] = useState(false);
  const [colorTab, setColorTab] = useState("preset");
  const [isRecurring, setIsRecurring] = useState(false);
  const [recurrencePattern, setRecurrencePattern] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const colorOptions = [
    { value: "primary", label: "Blue", hex: "#0d6efd" },
    { value: "success", label: "Green", hex: "#198754" },
    { value: "danger", label: "Red", hex: "#dc3545" },
    { value: "warning", label: "Yellow", hex: "#ffc107" },
    { value: "info", label: "Light Blue", hex: "#0dcaf0" },
    { value: "secondary", label: "Grey", hex: "#6c757d" },
    { value: "dark", label: "Black", hex: "#212529" }
  ];

  useEffect(() => {
    if (event && isEdit) {
      setTitle(event.title || "");
      setDescription(event.description || "");
      
      const startMoment = moment(event.start_time);
      setStartDate(startMoment.format("YYYY-MM-DD"));
      setStartTime(startMoment.format("HH:mm"));
      
      const endMoment = moment(event.end_time);
      setEndDate(endMoment.format("YYYY-MM-DD"));
      setEndTime(endMoment.format("HH:mm"));
      
      setLocation(event.location || "");
      
      if (event.color && event.color.startsWith('#')) {
        setCustomColor(event.color);
        setUseCustomColor(true);
        setColorTab("custom");
      } else {
        setColor(event.color || "info");
        setUseCustomColor(false);
        setColorTab("preset");
      }
      
      setIsRecurring(event.is_recurring);
      setRecurrencePattern(event.recurrence_pattern || "");
    } else {
      const now = moment();
      const endTime = moment().add(1, "hour");
      
      setTitle("");
      setDescription("");
      setStartDate(now.format("YYYY-MM-DD"));
      setStartTime(now.format("HH:mm"));
      setEndDate(now.format("YYYY-MM-DD"));
      setEndTime(endTime.format("HH:mm"));
      setLocation("");
      setColor("info");
      setCustomColor("#38b6ff");
      setUseCustomColor(false);
      setColorTab("preset");
      setIsRecurring(false);
      setRecurrencePattern("");
    }
  }, [event, isEdit, show]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      const startDateTime = `${startDate}T${startTime}:00`;
      const endDateTime = `${endDate}T${endTime}:00`;
      
      if (moment(startDateTime).isAfter(moment(endDateTime))) {
        setError("Start time must be before end time");
        setLoading(false);
        return;
      }
      
      const finalColor = useCustomColor ? customColor : color;
      
      if (isEdit && event) {
        const eventData: UpdateEventRequest = {
          event_id: event.event_id,
          title,
          description: description || undefined,
          start_time: startDateTime,
          end_time: endDateTime,
          location: location || undefined,
          color: finalColor,
          is_recurring: isRecurring,
          recurrence_pattern: isRecurring ? recurrencePattern : undefined
        };
        
        await updateEvent(eventData);
      } else {
        const eventData: CreateEventRequest = {
          title,
          description: description || undefined,
          start_time: startDateTime,
          end_time: endDateTime,
          location: location || undefined,
          color: finalColor,
          is_recurring: isRecurring,
          recurrence_pattern: isRecurring ? recurrencePattern : undefined
        };
        
        await createEvent(eventData);
      }
      
      onEventSaved();
      onHide();
    } catch (error) {
      console.error("Error saving event:", error);
      setError("Failed to save event. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const calculateDuration = () => {
    if (!startDate || !startTime || !endDate || !endTime) return "Not set";
    
    const start = moment(`${startDate}T${startTime}`);
    const end = moment(`${endDate}T${endTime}`);
    
    if (!start.isValid() || !end.isValid()) return "Invalid dates";
    if (end.isBefore(start)) return "Invalid time range";
    
    const duration = moment.duration(end.diff(start));
    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();
    
    let result = "";
    if (days > 0) result += `${days} day${days > 1 ? 's' : ''} `;
    if (hours > 0) result += `${hours} hour${hours > 1 ? 's' : ''} `;
    if (minutes > 0) result += `${minutes} minute${minutes > 1 ? 's' : ''}`;
    
    return result.trim() || "0 minutes";
  };

  return (
    <Modal 
      show={show} 
      onHide={onHide} 
      centered 
      backdrop="static" 
      size="lg"
      contentClassName={isDarkMode ? 'bg-dark text-light' : ''}
    >
      <Modal.Header closeButton className={isDarkMode ? 'border-secondary' : ''}>
        <Modal.Title>{isEdit ? "Edit Event" : "Add New Event"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>
              <i className="bi bi-card-heading me-1"></i> Title *
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter a descriptive title for your event"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              isInvalid={title.trim().length === 0}
              maxLength={50}
              required
              className={`${title ? "border-primary" : ""} ${isDarkMode ? 'bg-dark text-light border-dark' : ''}`}
            />
            <div className="d-flex justify-content-between mt-1">
              <Form.Text className={isDarkMode ? 'text-light-50' : 'text-muted'}>
                {title.trim().length === 0 && (
                  <span className="text-danger">Title is required</span>
                )}
              </Form.Text>
              <small className={title.length > 40 ? "text-danger" : (isDarkMode ? 'text-light-50' : 'text-muted')}>
                {title.length}/50 characters
              </small>
            </div>
          </Form.Group>
          
          <Form.Group className="mb-4">
            <Form.Label>
              <i className="bi bi-card-text me-1"></i> Description
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Add details about your event (optional)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={200}
              className={isDarkMode ? 'bg-dark text-light border-dark' : ''}
            />
            <div className="d-flex justify-content-end mt-1">
              <small className={description.length > 180 ? "text-danger" : (isDarkMode ? 'text-light-50' : 'text-muted')}>
                {description.length}/200 characters
              </small>
            </div>
          </Form.Group>
          
          <Form.Group className="mb-4">
            <Form.Label>Event Time</Form.Label>
            <Card className={`border-light shadow-sm ${isDarkMode ? 'bg-dark text-light border-dark' : ''}`}>
              <Card.Body>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>
                        <i className="bi bi-calendar-event me-1"></i> Start Date *
                      </Form.Label>
                      <Form.Control
                        type="date"
                        value={startDate}
                        onChange={(e) => {
                          setStartDate(e.target.value);
                          // If end date is before start date, update end date
                          if (e.target.value > endDate) {
                            setEndDate(e.target.value);
                          }
                        }}
                        required
                        className={`border-primary ${isDarkMode ? 'bg-dark text-light' : ''}`}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>
                        <i className="bi bi-clock me-1"></i> Start Time *
                      </Form.Label>
                      <Form.Control
                        type="time"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        required
                        className={`border-primary ${isDarkMode ? 'bg-dark text-light' : ''}`}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Row>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>
                        <i className="bi bi-calendar-event me-1"></i> End Date *
                      </Form.Label>
                      <Form.Control
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        min={startDate}
                        required
                        isInvalid={endDate < startDate}
                        className={isDarkMode ? 'bg-dark text-light border-dark' : ''}
                      />
                      {endDate < startDate && (
                        <Form.Control.Feedback type="invalid">
                          End date cannot be before start date
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>
                        <i className="bi bi-clock me-1"></i> End Time *
                      </Form.Label>
                      <Form.Control
                        type="time"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        required
                        isInvalid={endDate === startDate && endTime <= startTime}
                        className={isDarkMode ? 'bg-dark text-light border-dark' : ''}
                      />
                      {endDate === startDate && endTime <= startTime && (
                        <Form.Control.Feedback type="invalid">
                          End time must be after start time on the same day
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </Col>
                </Row>
                
                <div className={`mt-3 ${isDarkMode ? 'text-light-50' : 'text-muted'} small`}>
                  <i className="bi bi-info-circle me-1"></i>
                  Event duration: {calculateDuration()}
                </div>
              </Card.Body>
            </Card>
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>
              <i className="bi bi-geo-alt me-1"></i> Location
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Where will this event take place? (optional)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              maxLength={100}
              className={isDarkMode ? 'bg-dark text-light border-dark' : ''}
            />
            <div className="d-flex justify-content-end mt-1">
              <small className={location.length > 80 ? "text-danger" : (isDarkMode ? 'text-light-50' : 'text-muted')}>
                {location.length}/100 characters
              </small>
            </div>
          </Form.Group>
          
          <Form.Group className="mb-4">
            <Form.Label>Color</Form.Label>
            <Row>
              <Col md={4}>
                <div className="mb-3">
                  <label className="mb-2">Preview</label>
                  <EventPreview 
                    title={title}
                    startTime={startTime}
                    endTime={endTime}
                    color={useCustomColor ? customColor : color}
                    useCustomColor={useCustomColor}
                    isDarkMode={isDarkMode}
                  />
                </div>
              </Col>
              <Col md={8}>
                <Tabs
                  activeKey={colorTab}
                  onSelect={(k) => {
                    if (k) {
                      setColorTab(k);
                      setUseCustomColor(k === "custom");
                    }
                  }}
                  className={`mb-3 ${isDarkMode ? 'nav-tabs-dark' : ''}`}
                >
                  <Tab eventKey="preset" title="Preset Colors">
                    <div className="d-flex flex-wrap justify-content-start mb-2">
                      {colorOptions.map(option => (
                        <div 
                          key={option.value}
                          className="d-flex flex-column align-items-center mx-2 mb-3"
                          style={{ width: '75px' }}
                        >
                          <div 
                            onClick={() => {
                              setColor(option.value);
                              setUseCustomColor(false);
                            }}
                            className={`color-box ${color === option.value && !useCustomColor ? 'selected' : ''}`}
                            style={{
                              width: '50px',
                              height: '50px',
                              cursor: 'pointer',
                              borderRadius: '4px',
                              backgroundColor: isDarkMode ? 
                                (option.value === 'warning' ? option.hex : option.value === 'primary' ? '#3a8eff' : 
                                option.value === 'success' ? '#42d29d' : option.value === 'danger' ? '#ff5a65' : 
                                option.value === 'info' ? '#4ac9ff' : option.value === 'secondary' ? '#85878a' : 
                                option.value === 'dark' ? '#343a40' : option.hex) : 
                                option.hex,
                              border: color === option.value && !useCustomColor ? 
                                `3px solid ${isDarkMode ? '#fff' : '#000'}` : 
                                `1px solid ${isDarkMode ? '#444' : '#ddd'}`,
                              boxShadow: color === option.value && !useCustomColor ? '0 0 5px rgba(0,0,0,0.3)' : 'none',
                              marginBottom: '5px',
                              transition: 'all 0.2s ease'
                            }}
                            title={`Use ${option.label} color`}
                          />
                          <small className="text-center">{option.label}</small>
                          <small 
                            className={isDarkMode ? 'text-light-50' : 'text-muted'}
                            style={{ fontSize: '10px', cursor: 'pointer' }}
                            onClick={() => {
                              setColorTab("custom");
                              setUseCustomColor(true);
                              setCustomColor(option.hex);
                            }}
                            title="Use as custom color"
                          >
                            {option.hex}
                          </small>
                        </div>
                      ))}
                    </div>
                  </Tab>
                  <Tab eventKey="custom" title="Custom Color">
                    <Row>
                      <Col md={7}>
                        <HexColorPicker 
                          color={customColor} 
                          onChange={setCustomColor} 
                          style={{ width: '100%', height: '180px', marginBottom: '15px' }} 
                        />
                      </Col>
                      <Col md={5}>
                        <div className="d-flex flex-column">
                          <label className="mb-2">Selected Color</label>
                          <div
                            style={{
                              backgroundColor: customColor,
                              width: '100%',
                              height: '50px',
                              borderRadius: '4px',
                              border: `1px solid ${isDarkMode ? '#444' : '#ddd'}`,
                              marginBottom: '10px'
                            }}
                          />
                          <Form.Control
                            type="text"
                            value={customColor}
                            onChange={(e) => setCustomColor(e.target.value)}
                            placeholder="#RRGGBB"
                            className={`mb-2 ${isDarkMode ? 'bg-dark text-light border-dark' : ''}`}
                          />
                          <div className="d-flex justify-content-between mt-2">
                            <Button 
                              size="sm" 
                              variant={isDarkMode ? "outline-light" : "outline-secondary"}
                              onClick={() => setCustomColor("#FF5733")}
                              className="me-1"
                            >
                              Red
                            </Button>
                            <Button 
                              size="sm" 
                              variant={isDarkMode ? "outline-light" : "outline-secondary"}
                              onClick={() => setCustomColor("#33FF57")}
                              className="me-1"
                            >
                              Green
                            </Button>
                            <Button 
                              size="sm" 
                              variant={isDarkMode ? "outline-light" : "outline-secondary"}
                              onClick={() => setCustomColor("#3357FF")}
                            >
                              Blue
                            </Button>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Tab>
                </Tabs>
              </Col>
            </Row>
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Check 
              type="checkbox"
              label="Recurring Event"
              checked={isRecurring}
              onChange={(e) => setIsRecurring(e.target.checked)}
              className={isDarkMode ? 'text-light' : ''}
            />
          </Form.Group>
          
          {isRecurring && (
            <Form.Group className="mb-3">
              <Form.Label>Recurrence Pattern</Form.Label>
              <Form.Select
                value={recurrencePattern}
                onChange={(e) => setRecurrencePattern(e.target.value)}
                className={isDarkMode ? 'bg-dark text-light border-dark' : ''}
              >
                <option value="">Select pattern</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="bi-weekly">Bi-weekly</option>
                <option value="monthly">Monthly</option>
              </Form.Select>
            </Form.Group>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer className={isDarkMode ? 'border-secondary' : ''}>
        <Button variant={isDarkMode ? "dark" : "secondary"} onClick={onHide} disabled={loading}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit} disabled={loading}>
          {loading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Saving...
            </>
          ) : (
            isEdit ? "Update Event" : "Add Event"
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EventModal; 