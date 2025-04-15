import React, { useEffect } from "react";
import ChatTab from "./chat-tab";
import ContactTab from "./contact-tab";
import GroupTab from "./group-tab";
import { ProfileTab } from "./profile-tab";
import { CallTab } from "./call-tab";
import SettingsTab from "./settings-tab";
import StatusTab from "./status-tab";
import { useLocation } from "react-router";
import { all_routes } from "../../../feature-module/router/all_routes";
import TaskTab from "./task-tab";
import TimeTableTab from "./time-table-tab";

const ChatSidebar = () => {
  const routes = all_routes;
  const location = useLocation();
  return (
    <>
      {/* sidebar group */}
      <div className="sidebar-group">
        <div className="tab-content">
          <div
            className={`tab-pane fade ${
              location.pathname.includes(routes.index) ||
              location.pathname.includes(routes.chat)
                ? "active show"
                : ""
            }`}
            id="chat-menu"
          >
            <ChatTab />
          </div>
          {/* Contact */}
          <div className="tab-pane fade" id="contact-menu">
            <ContactTab />
          </div>
          {/* /Contact */}
          {/* Group */}
          <div
            className={`tab-pane fade ${
              location.pathname.includes(routes.groupChat) ? "active show" : ""
            }`}
            id="group-menu"
          >
            <GroupTab />
          </div>
          {/* /Group */}
          {/* Profile */}
          <div className="tab-pane fade" id="profile-menu">
            <ProfileTab />
          </div>
          {/* /Profile */}
          {/* Calls */}
          <div
            className={`tab-pane fade ${
              location.pathname.includes(routes.allCalls) ? "active show" : ""
            }`}
            id="call-menu"
          >
            <CallTab />
          </div>
          {/* /Calls */}
          {/* Settings */}
          <div className="tab-pane fade" id="setting-menu">
            <SettingsTab />
          </div>
          <div className="tab-pane fade" id="tasks">
            <TaskTab />
          </div>
          <div className="tab-pane fade" id="timetable">
            <TimeTableTab />
          </div>
          {/* /Settings */}
          <div
            className={`tab-pane fade ${
              location.pathname.includes(routes.status) ||
              location.pathname.includes(routes.myStatus) ||
              location.pathname.includes(routes.userStatus)
                ? "active show"
                : ""
            }`}
            id="status-menu"
          >
            <StatusTab />
          </div>
        </div>
      </div>
      {/* /Sidebar group */}
    </>
  );
};

export default ChatSidebar;
