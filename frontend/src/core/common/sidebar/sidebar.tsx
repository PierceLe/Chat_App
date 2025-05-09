import React from "react";
import ImageWithBasePath from "../imageWithBasePath";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { all_routes } from "../../../feature-module/router/all_routes";
import { Avatar, Badge, Tooltip } from "antd";
import { setDark } from "../../data/redux/commonSlice";
import { logout } from "../../services/authService";
import { UserData } from "@/core/services/contactService";
import { getContactSelector, getMeSelector } from "@/core/redux/selectors";
import { wsClient } from "@/core/services/websocket";
import { resetMe } from "@/core/redux/reducers/getMeSlice";
import { getAvatarUrl } from "@/core/utils/helper";

const Sidebar = () => {
  const userMe: UserData = useSelector(getMeSelector); 
  const routes = all_routes;
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contact: any = useSelector(getContactSelector);

  const getActiveRoute = () => {
    if (location.pathname.includes(routes.chat)) {
      return 'chat';
    } else if (location.pathname.includes(routes.groupChat)) {
      return 'group';
    } else if (location.pathname.includes(routes.contact)) {
      return 'contact';
    } else if (location.pathname.includes(routes.settings)) {
      return 'settings';
    } else if (location.pathname.includes(routes.timetable)) {
      return 'timetable';
    }
    return '';
  };

  const activeRoute = getActiveRoute();
  
  // Get dark mode directly from Redux state
  const isDarkMode = useSelector((state: any) => state?.common?.darkMode);
  
  // Toggle dark mode using Redux action
  const toggleDarkMode = (enabled: boolean) => {
    dispatch(setDark(enabled));
  };

  const handleLogout = () => {
    dispatch(resetMe());
    wsClient.disconnect();
    logout();
    localStorage.clear();
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
                    to={routes.chat}
                    className={activeRoute === 'chat' ? 'active' : ''}
                  >
                    <i className="ti ti-message-2-heart" />
                  </Link>
                </li>
              </Tooltip>
              <Tooltip title="Group" placement="right" color={"#6338F6 "}>
                <li>
                  <Link
                    to={routes.groupChat}
                    className={activeRoute === 'group' ? 'active' : ''}
                  >
                    <i className="ti ti-users-group" />
                  </Link>
                </li>
              </Tooltip>
              <Tooltip title="Contacts" placement="right" color="#6338F6">
                <li>
                  <Badge count={contact.received_friend.length} size="large" offset={[-5, 5]} showZero={false}>
                    <Link
                      to={routes.contact}
                      className={activeRoute === 'contact' ? 'active' : ''}
                    >
                      <i className="ti ti-user-shield" />
                    </Link>
                  </Badge>
                </li>
              </Tooltip>
              <Tooltip title="Timetable" placement="right" color={"#6338F6 "}>
                <li>
                  <Link
                    to={routes.timetable}
                    className={activeRoute === 'timetable' ? 'active' : ''}
                  >
                    <i className="ti ti-calendar" />
                  </Link>
                </li>
              </Tooltip>
              <Tooltip title="Settings" placement="right" color={"#6338F6 "}>
                <li>
                  <Link
                    to={routes.settings}
                    className={activeRoute === 'settings' ? 'active' : ''}
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
                    !isDarkMode ? "active" : ""
                  }`}
                  onClick={() => toggleDarkMode(true)}
                >
                  <i className="ti ti-moon" />
                </Link>
                <Link
                  to="#"
                  id="light-mode-toggle"
                  className={`dark-mode-toggle ${
                    isDarkMode ? "active" : ""
                  }`}
                  onClick={() => toggleDarkMode(false)}
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
                    <Avatar
                      size={32}
                      src={getAvatarUrl(userMe.avatar_url)}
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
