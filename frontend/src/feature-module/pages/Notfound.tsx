import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../router/all_routes";

const route = all_routes;

const NotFound = () => {
  return (
    <div
      style={{
        textAlign: "center",
        paddingTop: "100px",
        color: "#6c757d",
      }}
    >
      {/* Icon */}
      <div style={{ fontSize: "80px", marginBottom: "20px" }}>
        <i className="fas fa-exclamation-triangle text-warning"></i>
      </div>

      {/* Title & Message */}
      <h1 style={{ fontSize: "36px" }}>404 - Not Found</h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        The page you are looking for does not exist or has been deleted.
      </p>

      {/* Link to home page */}
      <Link to={route.chat} className="btn btn-primary">
        Back to home page
      </Link>
    </div>
  );
};

export default NotFound;
