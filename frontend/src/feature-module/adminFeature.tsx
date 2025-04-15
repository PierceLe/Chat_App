import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import AdminHeader from "./admin/common/adminHeader";
import AdminSidebar from "./admin/common/adminSidebar";
import ThemeSettings from "./admin/common/themeSettings";
import { useDispatch, useSelector } from "react-redux";
import { setMobileSidebar } from "../core/data/redux/commonSlice";

const AdminFeature = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const miniSidebar = useSelector((state: any) => state.miniSidebar);
  const expandMenu = useSelector((state: any) => state.expandMenu);
  const mobileSidebar = useSelector((state: any) => state.mobileSidebar);
  const loaders = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  useEffect(() => {
    location.pathname.includes("index") ? loaders() : setIsLoading(false);
  }, [location.pathname]);

  return (
    <div
      className={`
      ${miniSidebar ? "mini-sidebar" : ""}
      ${expandMenu ? "expand-menu" : ""}`}
    >
      {isLoading ? (
        <div id="global-loader">
          <div className="page-loader" />
        </div>
      ) : (
        <></>
      )}

      <div className={`main-wrapper ${mobileSidebar ? "slide-nav" : ""}`}>
        <AdminHeader />
        <AdminSidebar />
        <Outlet />
        <ThemeSettings />
      </div>
      <div
        className={`sidebar-overlay ${mobileSidebar ? "opened" : ""}`}
        onClick={() => dispatch(setMobileSidebar(false))}
      ></div>
    </div>
  );
};

export default AdminFeature;
