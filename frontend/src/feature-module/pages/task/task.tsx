import React from "react";

const Task = () => {
  const columns = [
    {
      title: "To Do",
      color: "primary",
      tasks: [],
    },
    {
      title: "In Progress",
      color: "warning",
      tasks: [
        {
          title: "UX/UI",
          description: "Design and implement visualization to the web",
          type: "Front-end",
        },
        {
          title: "Make edit form",
          description:
            "Render form for user to edit a specific student's information",
          type: "Back-end",
        },
        {
          title: "Get student information",
          description: "Retrieve all students information in the database",
          type: "Back-end",
        },
      ],
    },
    {
      title: "Testing",
      color: "purple",
      tasks: [
        {
          title: "Search student by their ID",
          description: "Get student's information by their specific ID",
          type: "Back-end",
        },
        {
          title: "Delete student information",
          description: "Delete a specific student of database",
          type: "Back-end",
        },
        {
          title: "Updating student information",
          description: "Make change to a specific student",
          type: "Back-end",
        },
        {
          title: "Add student information",
          description: "Add a new student to the database",
          type: "Back-end",
        },
        {
          title: "Search student name",
          description: "Get student's information by their specific name",
          type: "Back-end",
        },
        {
          title: "Clear student information",
          description: "Clear all student data",
          type: "Back-end",
        },
      ],
    },
    {
      title: "Done",
      color: "success",
      tasks: [
        {
          title: "Documentation",
          description: "Write docstring and readme for the program",
          type: "Pitcher",
        },
        {
          title: "Define model",
          description: "Define model structure of student for the application",
          type: "Specialist",
        },
      ],
    },
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        {columns.map((column, index) => (
          <div key={index} className="col-md-3">
            <div className={`card border-${column.color} mb-4`}>
              <div className={`card-header bg-${column.color} text-white`}>
                <h5 className="card-title mb-0 ">{column.title}</h5>
                <small>{column.tasks.length} tasks</small>
              </div>
              <div className="card-body">
                {column.tasks.length === 0 ? (
                  <p className="text-muted">No tasks in this column</p>
                ) : (
                  column.tasks.map((task, idx) => (
                    <div key={idx} className="mb-3 p-2 border rounded">
                      <h6 className="mb-1 text-muted">{task.title}</h6>
                      <p className="mb-1 text-muted">{task.description}</p>
                      <span className="badge bg-secondary">{task.type}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task;
