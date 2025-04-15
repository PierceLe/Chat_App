import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
const AdminAuthFeature = () => {
  const location = useLocation();
  const htmlElement = document.documentElement;
  useEffect(() => {
    htmlElement.setAttribute("data-bs-theme", "");
  }, [location.pathname, htmlElement]);
  return (
    <div className="login-form">
      <div
        className="main-wrapper register-surv"
        style={{ visibility: "visible" }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default AdminAuthFeature;
