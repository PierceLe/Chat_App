import React from "react";

const TimeTable = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  const events = [
    { day: "Tue", time: "9:00 AM", title: "Tutorial 14", details: "4/3-15/4" },
    {
      day: "Thu",
      time: "12:00 PM",
      title: "COMP2017 Systems Programming",
      details: "6/3-17/4, 1/5-22/5",
    },
    {
      day: "Fri",
      time: "1:00 PM",
      title: "COMP2017 Lecture 02",
      details: "28/2-11/4, 2/5-30/5",
    },
    {
      day: "Fri",
      time: "3:00 PM",
      title: "SOFT3202 Lecture 02",
      details: "26/2-16/4",
    },
    {
      day: "Fri",
      time: "4:00 PM",
      title: "INFO2222 Lecture 01",
      details: "27/2-27/3",
    },
  ];

  return (
    <div className="container mt-4">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center bg-light p-3 rounded mb-3">
        <h5 className="mb-0">Timetable Weeks</h5>
        <div className="d-flex align-items-center">
          <button className="btn btn-outline-secondary me-2">
            <i className="bi bi-arrow-left"></i>
          </button>
          <span className="fw-bold">
            24/03/2025 - 30/03/2025 (current week)
          </span>
          <button className="btn btn-outline-secondary ms-2">
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
        <div>
          <button className="btn btn-primary me-2">
            <i className="bi bi-upload"></i> Import
          </button>
          <button className="btn btn-secondary">
            <i className="bi bi-funnel"></i> Filter Weeks
          </button>
        </div>
      </div>

      {/* Timetable Table */}
      <div
        className="table-responsive"
        style={{ maxHeight: "500px", overflowY: "auto" }}
      >
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>Time</th>
              {days.map((day, index) => (
                <th key={index} className="text-center">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((time, index) => (
              <tr key={index}>
                <td className="align-middle">{time}</td>
                {days.map((day, dayIndex) => {
                  const event = events.find(
                    (e) => e.day === day && e.time === time,
                  );
                  return (
                    <td key={dayIndex} className="text-center align-middle">
                      {event ? (
                        <div className="bg-info text-white p-2 rounded">
                          <strong>{event.title}</strong>
                          <br />
                          <small>{event.details}</small>
                        </div>
                      ) : null}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TimeTable;
