import React from "react";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import Sidebar from "../core/common/sidebar/sidebar";
import ChatSidebar from "../core/common/sidebar/chatSidebar";
import CommonModals from "../core/modals/common-modals";
import { useAuth } from "../core/hooks/useAuth";

const ProtectedFeature = () => {
  const { loading, isAuthenticated } = useAuth();
  const themeDark = useSelector((state: any) => state?.darkMode);
  if (loading) {
    return <div>Loading...</div>; // Hoặc spinner loading
  }
  if (!isAuthenticated) {
    return null;
  }
  return (
    <div className={themeDark ? "darkmode" : ""}>
      <div className="main-wrapper" style={{ visibility: "visible" }}>
        <div className="content main_content">
          <Sidebar />
          <ChatSidebar />
          <Outlet />
        </div>
        <CommonModals />
      </div>
    </div>
  );
};

export default ProtectedFeature;
