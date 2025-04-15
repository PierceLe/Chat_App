import React, { useEffect, useState } from "react";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import { useDispatch, useSelector } from "react-redux";
import {
  setMiniSidebar,
  setMobileSidebar,
} from "../../../core/data/redux/commonSlice";

const AdminHeader = () => {
  const routes = all_routes;
  const [themeSetting, setThemeSetting] = useState(false);
  const [layoutBs, setLayoutBs] = useState(
    localStorage.getItem("layoutThemeColors") || "light",
  );
  const dispatch = useDispatch();
  const mobileSidebar = useSelector((state: any) => state.mobileSidebar);
  const miniSidebar = useSelector((state: any) => state.miniSidebar);

  const toggleMobileSidebar = () => {
    dispatch(setMobileSidebar(!mobileSidebar));
  };
  const toggleMiniSidebar = () => {
    dispatch(setMiniSidebar(!miniSidebar));
  };
  const LayoutDark = () => {
    localStorage.setItem("layoutThemeColors", "dark");
    setThemeSetting(true);
    setLayoutBs("dark");
    document.documentElement.setAttribute("data-bs-theme", "dark");
  };
  const LayoutLight = () => {
    localStorage.setItem("layoutThemeColors", "light");
    // setLayoutTheme("light");
    setLayoutBs("light");

    setThemeSetting(false);

    document.documentElement.setAttribute("data-bs-theme", "light");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", layoutBs);
    layoutBs === "dark" ? setThemeSetting(true) : setThemeSetting(false);
  }, [layoutBs, themeSetting]);
  return (
    <>
      {/* Header */}
      <div className="header">
        {/* Logo */}
        <div className="header-left active">
          <Link to={routes.dashboard} className="logo logo-normal">
            <ImageWithBasePath
              src="assets/admin/img/full-logo.svg"
              alt="Logo"
            />
          </Link>
          <Link to={routes.dashboard} className="logo-small">
            <ImageWithBasePath
              src="assets/admin/img/logo-small.svg"
              alt="Logo"
            />
          </Link>
        </div>
        {/* /Logo */}
        <Link
          id="mobile_btn"
          className="mobile_btn"
          to="#sidebar"
          onClick={toggleMobileSidebar}
        >
          <span className="bar-icon">
            <span />
            <span />
            <span />
          </span>
        </Link>
        <div className="header-user">
          <div className="nav user-menu">
            {/* Search */}
            <div className="nav-item nav-search-inputs me-auto">
              <div className="top-nav-search">
                <Link to="#" className="responsive-search">
                  <i className="fa fa-search" />
                </Link>
                <div className="d-flex align-items-center">
                  <Link
                    id="toggle_btn"
                    to="#"
                    onClick={toggleMiniSidebar}
                    className="me-2"
                  >
                    <i className="ti ti-menu-2" />
                  </Link>
                  <form action="#" className="dropdown">
                    <div className="searchinputs" id="dropdownMenuClickable">
                      <input type="text" placeholder="Search" />
                      <div className="search-addon">
                        <span>
                          <i className="ti ti-search" />
                        </span>
                      </div>
                      <div className="search-addon-command">
                        <span>
                          <i className="ti ti-command" />
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* /Search */}
            <div className="d-flex align-items-center">
              <div className="provider-head-links ">
                <div className="dark-mode">
                  <Link
                    to="#"
                    id="dark-mode-toggle"
                    className={`dark-mode-toggle header-icon ${themeSetting ? "" : "activate"}`}
                    onClick={LayoutDark}
                  >
                    <i className="fa-regular fa-moon" />
                  </Link>
                  <Link
                    to="#"
                    id="light-mode-toggle"
                    className={`dark-mode-toggle header-icon ${themeSetting ? "activate" : ""}`}
                    onClick={LayoutLight}
                  >
                    <i className="ti ti-sun-filled" />
                  </Link>
                </div>
              </div>
              <div className="dropdown">
                <Link
                  to="#"
                  className="header-icon flag-icon"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <ImageWithBasePath
                    src="assets/admin/img/flag/flag-01.png"
                    alt="Language"
                    className="img-fluid rounded-pill"
                  />
                </Link>
                <div className="dropdown-menu dropdown-menu-right p-3">
                  <Link
                    to="#"
                    className="dropdown-item active d-flex align-items-center"
                  >
                    <ImageWithBasePath
                      className="me-2 rounded-pill"
                      src="assets/admin/img/flag/flag-01.png"
                      alt="Img"
                      height={22}
                      width={22}
                    />{" "}
                    English
                  </Link>
                  <Link
                    to="#"
                    className="dropdown-item d-flex align-items-center"
                  >
                    <ImageWithBasePath
                      className="me-2 rounded-pill"
                      src="assets/admin/img/flag/flag-02.png"
                      alt="Img"
                      height={22}
                      width={22}
                    />{" "}
                    French
                  </Link>
                  <Link
                    to="#"
                    className="dropdown-item d-flex align-items-center"
                  >
                    <ImageWithBasePath
                      className="me-2 rounded-pill"
                      src="assets/admin/img/flag/flag-03.png"
                      alt="Img"
                      height={22}
                      width={22}
                    />{" "}
                    Spanish
                  </Link>
                  <Link
                    to="#"
                    className="dropdown-item d-flex align-items-center"
                  >
                    <ImageWithBasePath
                      className="me-2 rounded-pill"
                      src="assets/admin/img/flag/flag-04.png"
                      alt="Img"
                      height={22}
                      width={22}
                    />{" "}
                    German
                  </Link>
                </div>
              </div>
              <div className="provider-head-links">
                <Link
                  to={routes.chats}
                  className="d-flex align-items-center justify-content-center header-icon active-dot"
                >
                  <i className="ti ti-message fs-16" />
                </Link>
              </div>
              <div className="provider-head-links">
                <Link
                  to="#"
                  className="d-flex align-items-center justify-content-center dropdown-toggle header-icon active-dot"
                  data-bs-toggle="dropdown"
                >
                  <i className="feather icon-bell fs-16" />
                </Link>
                <div className="dropdown-menu dropdown-menu-end notification-dropdown p-4">
                  <div className="d-flex dropdown-body align-items-center justify-content-between border-bottom p-0 pb-3 mb-3">
                    <h6 className="notification-title">
                      Notifications <span className="fs-18 text-gray">(2)</span>
                    </h6>
                    <div className="d-flex align-items-center">
                      <Link to="#" className="text-primary fs-15 me-3 lh-1">
                        Mark all as read
                      </Link>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="bg-white dropdown-toggle"
                          data-bs-toggle="dropdown"
                          data-bs-auto-close="outside"
                        >
                          <i className="ti ti-calendar-due me-1" />
                          Today
                        </Link>
                        <ul className="dropdown-menu mt-2 p-3">
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              This Week
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Last Week
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Last Week
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="noti-content">
                    <div className="d-flex flex-column">
                      <div className="border-bottom mb-3 pb-3">
                        <Link to="#">
                          <div className="d-flex">
                            <span className="avatar avatar-lg me-2 flex-shrink-0">
                              <ImageWithBasePath
                                src="assets/admin/img/profiles/avatar-52.jpg"
                                alt="Profile"
                                className="rounded-circle"
                              />
                            </span>
                            <div className="flex-grow-1">
                              <div className="d-flex align-items-center">
                                <p className="mb-1 w-100">
                                  <span className="text-dark fw-semibold">
                                    Stephan Peralt
                                  </span>
                                  rescheduled the service to 14/01/2024.{" "}
                                </p>
                                <span className="d-flex justify-content-end ">
                                  {" "}
                                  <i className="ti ti-point-filled text-primary" />
                                </span>
                              </div>
                              <span>Just Now</span>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="border-bottom mb-3 pb-3">
                        <Link to="#" className="pb-0">
                          <div className="d-flex">
                            <span className="avatar avatar-lg me-2 flex-shrink-0">
                              <ImageWithBasePath
                                src="assets/admin/img/profiles/avatar-36.jpg"
                                alt="Profile"
                                className="rounded-circle"
                              />
                            </span>
                            <div className="flex-grow-1">
                              <div className="d-flex align-items-center">
                                <p className="mb-1 w-100">
                                  <span className="text-dark fw-semibold">
                                    Harvey Smith
                                  </span>
                                  has requested your service.
                                </p>
                                <span className="d-flex justify-content-end ">
                                  {" "}
                                  <i className="ti ti-point-filled text-primary" />
                                </span>
                              </div>
                              <span>5 mins ago</span>
                              <div className="d-flex justify-content-start align-items-center mt-2">
                                <span className="btn btn-light btn-sm me-2">
                                  Deny
                                </span>
                                <span className="btn btn-dark btn-sm">
                                  Accept
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="border-bottom mb-3 pb-3">
                        <Link to="#">
                          <div className="d-flex">
                            <span className="avatar avatar-lg me-2 flex-shrink-0">
                              <ImageWithBasePath
                                src="assets/admin/img/profiles/avatar-02.jpg"
                                alt="Profile"
                                className="rounded-circle"
                              />
                            </span>
                            <div className="flex-grow-1">
                              <p className="mb-1">
                                <span className="text-dark fw-semibold">
                                  {" "}
                                  Anthony Lewis
                                </span>{" "}
                                has left feedback for your recent service
                              </p>
                              <span>10 mins ago</span>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="border-0 mb-3 pb-0">
                        <Link to="#">
                          <div className="d-flex">
                            <span className="avatar avatar-lg me-2 flex-shrink-0">
                              <ImageWithBasePath
                                src="assets/admin/img/profiles/avatar-22.jpg"
                                alt="Profile"
                                className="rounded-circle"
                              />
                            </span>
                            <div className="flex-grow-1">
                              <p className="mb-1">
                                <span className="text-dark fw-semibold">
                                  Brian Villaloboshas{" "}
                                </span>{" "}
                                cancelled the service scheduled for 14/01/2024.
                              </p>
                              <span>15 mins ago</span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex p-0 notification-footer-btn">
                    <Link to="#" className="btn btn-light rounded  me-2">
                      Cancel
                    </Link>
                    <Link to="#" className="btn btn-dark rounded ">
                      View All
                    </Link>
                  </div>
                </div>
              </div>
              <div className="dropdown">
                <Link to="#" data-bs-toggle="dropdown">
                  <div className="booking-user d-flex align-items-center">
                    <span className="user-img me-2">
                      <ImageWithBasePath
                        src="assets/admin/img/users/user-08.jpg"
                        alt="user"
                      />
                    </span>
                    <div>
                      <h6 className="fs-14 fw-medium">Thomas Rethman</h6>
                      <span className="text-primary fs-12">Administrator</span>
                    </div>
                  </div>
                </Link>
                <ul className="dropdown-menu p-2">
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center"
                      to={routes.login}
                    >
                      <i className="ti ti-logout me-1" />
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className="dropdown mobile-user-menu">
          <Link
            to="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa fa-ellipsis-v" />
          </Link>
          <div className="dropdown-menu dropdown-menu-end">
            <Link className="dropdown-item" to={routes.profileSettings}>
              Settings
            </Link>
            <Link className="dropdown-item" to={routes.login}>
              Logout
            </Link>
          </div>
        </div>
        {/* /Mobile Menu */}
      </div>
      {/* /Header */}
    </>
  );
};

export default AdminHeader;
