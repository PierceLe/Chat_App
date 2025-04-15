import React from "react";
import ImageWithBasePath from "../imageWithBasePath";
import { Link } from "react-router-dom";
import { all_routes } from "../../../feature-module/router/all_routes";
import Scrollbars from "react-custom-scrollbars-2";

const StatusTab = () => {
  const routes = all_routes;
  return (
    <div id="status" className="sidebar-content active slimscroll">
      <Scrollbars
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        autoHeight
        autoHeightMin={0}
        autoHeightMax="100vh"
        thumbMinSize={30}
        universal={false}
        hideTracksWhenNotNeeded={true}
      >
        <div className="slimscroll">
          <div className="chat-search-header">
            <div className="header-title d-flex align-items-center justify-content-between">
              <h4 className="mb-3">Status</h4>
              <div className="d-flex align-items-center mb-3">
                <Link
                  to="#"
                  data-bs-toggle="modal"
                  data-bs-target="#new-status"
                  className="add-icon text-white bg-primary fs-16 d-flex justify-content-center align-items-center"
                >
                  <i className="ti ti-plus" />
                </Link>
              </div>
            </div>
            {/* Chat Search */}
            <div className="search-wrap">
              <form action="#">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Contacts"
                  />
                  <span className="input-group-text">
                    <i className="ti ti-search" />
                  </span>
                </div>
              </form>
            </div>
            {/* /Chat Search */}
          </div>
          <div className="sidebar-body chat-body" id="chatsidebar">
            <div className="status-list">
              {/* Left Chat Title */}
              <div className="d-flex  mb-3">
                <h5>My Status</h5>
              </div>
              {/* /Left Chat Title */}
              <div className="chat-users-wrap">
                <div className="position-relative">
                  <Link to={routes.myStatus} className="chat-user-list mb-0">
                    <div className="avatar avatar-lg idle me-2">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-17.jpg"
                        className="rounded-circle"
                        alt="image"
                      />
                    </div>
                    <div className="chat-user-info">
                      <div className="chat-user-msg">
                        <h6>Rabino Desilva</h6>
                        <p>Today at 06:25 AM</p>
                      </div>
                    </div>
                  </Link>
                  <div className="chats-dropdown">
                    <Link className="#" to="#" data-bs-toggle="dropdown">
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-end p-3">
                      <li>
                        <Link className="dropdown-item" to="#">
                          <i className="ti ti-share-3 me-2" />
                          Share Status
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          <i className="ti ti-arrow-forward-up-double me-2" />
                          Forward
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          <i className="ti ti-trash me-2" />
                          Delete
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="status-list">
              {/* Left Chat Title */}
              <div className="d-flex  mb-3">
                <h5>Recent Updates</h5>
              </div>
              {/* /Left Chat Title */}
              <div className="chat-users-wrap">
                <div className="position-relative">
                  <Link to={routes.userStatus} className="chat-user-list">
                    <div className="avatar avatar-lg online me-2">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-05.jpg"
                        className="rounded-circle"
                        alt="image"
                      />
                    </div>
                    <div className="chat-user-info">
                      <div className="chat-user-msg">
                        <h6>Federico Wells</h6>
                        <p>4 hrs ago</p>
                      </div>
                    </div>
                  </Link>
                  <div className="chats-dropdown">
                    <Link className="#" to="#" data-bs-toggle="dropdown">
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-end p-3">
                      <li>
                        <Link className="dropdown-item" to="#">
                          <i className="ti ti-volume-off me-2" />
                          Mute
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="position-relative">
                  <Link to={routes.userStatus} className="chat-user-list mb-0">
                    <div className="avatar avatar-lg online me-2">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-13.jpg"
                        className="rounded-circle"
                        alt="image"
                      />
                    </div>
                    <div className="chat-user-info">
                      <div className="chat-user-msg">
                        <h6>Morkel Jerrin</h6>
                        <p>Today at 7:15 AM</p>
                      </div>
                    </div>
                  </Link>
                  <div className="chats-dropdown">
                    <Link className="#" to="#" data-bs-toggle="dropdown">
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-end p-3">
                      <li>
                        <Link className="dropdown-item" to="#">
                          <i className="ti ti-volume-off me-2" />
                          Mute
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="status-list">
              {/* Left Chat Title */}
              <div className="d-flex  mb-3">
                <h5>Already Seen</h5>
              </div>
              {/* /Left Chat Title */}
              <div className="chat-users-wrap">
                <div className="position-relative">
                  <Link to={routes.userStatus} className="chat-user-list">
                    <div className="avatar avatar-lg online me-2">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-07.jpg"
                        className="rounded-circle"
                        alt="image"
                      />
                    </div>
                    <div className="chat-user-info">
                      <div className="chat-user-msg">
                        <h6>Danielle Baker</h6>
                        <p>Just Now</p>
                      </div>
                    </div>
                  </Link>
                  <div className="chats-dropdown">
                    <Link className="#" to="#" data-bs-toggle="dropdown">
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-end p-3">
                      <li>
                        <Link className="dropdown-item" to="#">
                          <i className="ti ti-volume-off me-2" />
                          Mute
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="position-relative">
                  <Link to={routes.userStatus} className="chat-user-list">
                    <div className="avatar avatar-lg online me-2">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-06.jpg"
                        className="rounded-circle"
                        alt="image"
                      />
                    </div>
                    <div className="chat-user-info">
                      <div className="chat-user-msg">
                        <h6>Edward Lietz</h6>
                        <p>2 hrs ago</p>
                      </div>
                    </div>
                  </Link>
                  <div className="chats-dropdown">
                    <Link className="#" to="#" data-bs-toggle="dropdown">
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-end p-3">
                      <li>
                        <Link className="dropdown-item" to="#">
                          <i className="ti ti-volume-off me-2" />
                          Mute
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="position-relative">
                  <Link to={routes.userStatus} className="chat-user-list">
                    <div className="avatar avatar-lg offline me-2">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-02.jpg"
                        className="rounded-circle"
                        alt="image"
                      />
                    </div>
                    <div className="chat-user-info">
                      <div className="chat-user-msg">
                        <h6>Sarika Jain</h6>
                        <p>Today at 06:15 AM</p>
                      </div>
                    </div>
                  </Link>
                  <div className="chats-dropdown">
                    <Link className="#" to="#" data-bs-toggle="dropdown">
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-end p-3">
                      <li>
                        <Link className="dropdown-item" to="#">
                          <i className="ti ti-volume-off me-2" />
                          Mute
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="position-relative">
                  <Link to={routes.userStatus} className="chat-user-list mb-0">
                    <div className="avatar avatar-lg online me-2">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-10.jpg"
                        className="rounded-circle"
                        alt="image"
                      />
                    </div>
                    <div className="chat-user-info">
                      <div className="chat-user-msg">
                        <h6>Wilbur Martinez</h6>
                        <p>Today at 04:20 AM</p>
                      </div>
                    </div>
                  </Link>
                  <div className="chats-dropdown">
                    <Link className="#" to="#" data-bs-toggle="dropdown">
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-end p-3">
                      <li>
                        <Link className="dropdown-item" to="#">
                          <i className="ti ti-volume-off me-2" />
                          Mute
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Scrollbars>
    </div>
  );
};

export default StatusTab;
