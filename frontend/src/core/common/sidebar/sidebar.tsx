import React, { useEffect, useState } from "react";
import ImageWithBasePath from "../imageWithBasePath";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { all_routes } from "../../../feature-module/router/all_routes";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { Tooltip } from "antd";
import { setDark } from "../../data/redux/commonSlice";
import { logout } from "../../services/authService";

const Sidebar = () => {
  const routes = all_routes;
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode"));
  const LayoutDark = () => {
    if (darkMode === "enabled") {
      localStorage.setItem("darkMode", "enabled");
      dispatch(setDark(true));
      setDarkMode("enabled");
    } else {
      localStorage.setItem("darkMode", "disabled");
      dispatch(setDark(false));
      setDarkMode("disabled");
    }
  };
  useEffect(() => {
    setDarkMode(localStorage.getItem("darkMode"));
    LayoutDark();
  }, [darkMode]);

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      {/* Left Sidebar Menu */}
      <div className="sidebar-menu">
        <div className="logo">
          <Link to={routes.index} className="logo-normal">
            <img src="assets/img/logo.png" alt="Logo" />
          </Link>
        </div>
        <div className="menu-wrap">
          <div className="main-menu">
            <ul className="nav">
              <Tooltip title="Chat" placement="right" color={"#6338F6 "}>
                <li>
                  <Link
                    to={routes.index}
                    className={
                      location.pathname.includes(routes.index) ||
                      location.pathname.includes(routes.chat)
                        ? "active"
                        : ""
                    }
                    data-bs-toggle="tab"
                    data-bs-target="#chat-menu"
                  >
                    <i className="ti ti-message-2-heart" />
                  </Link>
                </li>
              </Tooltip>
              <Tooltip title="Contacts" placement="right" color={"#6338F6 "}>
                <li>
                  <Link
                    to="#"
                    data-bs-toggle="tab"
                    data-bs-target="#contact-menu"
                  >
                    <i className="ti ti-user-shield" />
                  </Link>
                </li>
              </Tooltip>
              <Tooltip title="Group" placement="right" color={"#6338F6 "}>
                <li>
                  <Link
                    to="#"
                    className={
                      location.pathname.includes(routes.groupChat)
                        ? "active"
                        : ""
                    }
                    data-bs-toggle="tab"
                    data-bs-target="#group-menu"
                  >
                    <i className="ti ti-users-group" />
                  </Link>
                </li>
              </Tooltip>
              {/* <Tooltip title="Status" placement="right" color={"#6338F6 "}>
                <li>           
                  <Link
                    onClick={() => navigate(routes.status)}
                    to={routes.status}
                    data-bs-toggle="tab"
                    data-bs-target="#status-menu"
                    className={
                      location.pathname.includes(routes.status) ||
                      location.pathname.includes(routes.myStatus) ||
                      location.pathname.includes(routes.userStatus)
                        ? "active"
                        : ""
                    }
                  >
                    <i className="ti ti-circle-dot" />
                  </Link>
                </li>
              </Tooltip> */}
              {/* <Tooltip title="Calls" placement="right" color={"#6338F6 "}>
                <li>
                  <Link
                    to="#"
                    className={
                      location.pathname.includes(routes.allCalls)
                        ? "active"
                        : ""
                    }
                    data-bs-toggle="tab"
                    data-bs-target="#call-menu"
                  >
                    <i className="ti ti-phone-call" />
                  </Link>
                </li>
              </Tooltip> */}
              <Tooltip title="Profile" placement="right" color={"#6338F6 "}>
                <li>
                  <Link
                    to="#"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-menu"
                  >
                    <i className="ti ti-user-circle" />
                  </Link>
                </li>
              </Tooltip>
              <Tooltip title="Tasks" placement="right" color={"#6338F6 "}>
                <li>
                  <Link
                    to="#"
                    className={
                      location.pathname.includes(routes.tasks) ? "active" : ""
                    }
                    data-bs-toggle="tab"
                    data-bs-target="#tasks"
                  >
                    <i className="ti ti-receipt" />
                  </Link>
                </li>
              </Tooltip>
              <Tooltip title="Timetable" placement="right" color={"#6338F6 "}>
                <li>
                  <Link
                    to="#"
                    className={
                      location.pathname.includes(routes.timetable)
                        ? "active"
                        : ""
                    }
                    data-bs-toggle="tab"
                    data-bs-target="#timetable"
                  >
                    <i className="ti ti-calendar" />
                  </Link>
                </li>
              </Tooltip>
              <Tooltip title="Settings" placement="right" color={"#6338F6 "}>
                <li>
                  <Link
                    to="#"
                    data-bs-toggle="tab"
                    data-bs-target="#setting-menu"
                  >
                    <i className="ti ti-settings" />
                  </Link>
                </li>
              </Tooltip>
            </ul>
          </div>
          <div className="profile-menu">
            <ul>
              <li>
                <Link
                  to="#"
                  id="dark-mode-toggle"
                  className={`dark-mode-toggle ${
                    darkMode === "disabled" ? "active" : ""
                  }`}
                  onClick={() => setDarkMode("enabled")}
                >
                  <i className="ti ti-moon" />
                </Link>
                <Link
                  to="#"
                  id="light-mode-toggle"
                  className={`dark-mode-toggle ${
                    darkMode === "enabled" ? "active" : ""
                  }`}
                  onClick={() => setDarkMode("disabled")}
                >
                  <i className="ti ti-sun" />
                </Link>
              </li>
              <li>
                <div className="dropdown">
                  <Link
                    to="#"
                    className="avatar avatar-md"
                    data-bs-toggle="dropdown"
                  >
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-16.jpg"
                      alt="img"
                      className="rounded-circle"
                    />
                  </Link>
                  <div className="dropdown-menu dropdown-menu-end p-3">
                    <Link
                      to={routes.signin}
                      className="dropdown-item"
                      onClick={handleLogout}
                    >
                      <i className="ti ti-logout-2 me-2" />
                      Logout{" "}
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* /Left Sidebar Menu */}
    </>
  );
};

export default Sidebar;
