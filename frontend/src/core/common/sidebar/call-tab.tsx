import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../imageWithBasePath";
import { all_routes } from "../../../feature-module/router/all_routes";
import Scrollbars from "react-custom-scrollbars-2";

export const CallTab = () => {
  const routes = all_routes;
  const [activeTab, setActiveTab] = useState("All Calls");
  return (
    <>
      <div className="sidebar-content active slimscroll">
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
                <h4 className="mb-3">Calls</h4>
                <div className="d-flex align-items-center mb-3">
                  <Link
                    to="#"
                    className="call-icon d-flex justify-content-center align-items-center text-white bg-primary rounded-circle me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#new-call"
                  >
                    <i className="ti ti-phone-plus fs-16" />
                  </Link>
                  <div className="dropdown">
                    <Link
                      to="#"
                      data-bs-toggle="dropdown"
                      className="fs-16 text-default"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <ul className="dropdown-menu p-3">
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#clear-call"
                        >
                          <span>
                            <i className="ti ti-phone-x" />
                          </span>
                          Clear Call Log
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Chat Search */}
              <div className="search-wrap">
                <form>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
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
              {/* Left Chat Title */}
              <div className="d-flex  align-items-center mb-3">
                <h5 className="chat-title2 me-2">{activeTab}</h5>
                <div className="dropdown">
                  <Link
                    to="#"
                    className="text-default fs-16"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="ti ti-chevron-down" />
                  </Link>
                  <ul
                    className=" dropdown-menu dropdown-menu-end p-3"
                    id="innerTab"
                    role="tablist"
                  >
                    <li role="presentation">
                      <Link
                        className="dropdown-item active"
                        id="all-calls-tab"
                        data-bs-toggle="tab"
                        to="#all-calls"
                        role="tab"
                        aria-controls="all-calls"
                        aria-selected="true"
                        onClick={() => setActiveTab("All Calls")}
                      >
                        All Calls
                      </Link>
                    </li>
                    <li role="presentation">
                      <Link
                        className="dropdown-item"
                        id="audio-calls-tab"
                        data-bs-toggle="tab"
                        to="#audio-calls"
                        role="tab"
                        aria-controls="audio-calls"
                        aria-selected="false"
                        onClick={() => setActiveTab("Audio Calls")}
                      >
                        Audio Calls
                      </Link>
                    </li>
                    <li role="presentation">
                      <Link
                        className="dropdown-item"
                        id="video-calls-tab"
                        data-bs-toggle="tab"
                        to="#video-calls"
                        role="tab"
                        aria-controls="video-calls"
                        aria-selected="false"
                        onClick={() => setActiveTab("Video Calls")}
                      >
                        Video Calls
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /Left Chat Title */}
              <div className="tab-content" id="innerTabContent">
                <div
                  className="tab-pane fade show active"
                  id="all-calls"
                  role="tabpanel"
                  aria-labelledby="all-calls-tab"
                >
                  <div className="chat-users-wrap">
                    <div className="chat-list">
                      <Link to={routes.allCalls} className="chat-user-list">
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
                            <p>
                              <i className="ti ti-phone-outgoing text-purple me-2" />
                              20 Min Ago
                            </p>
                          </div>
                          <div className="chat-user-time">
                            <span className="time">08m 12s</span>
                            <div>
                              <i className="ti ti-phone-call text-pink" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.allCalls} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-01.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6 className="">Mark Villiams</h6>
                            <p className="fs-14">
                              <i className="ti ti-phone-incoming me-2 fs-14 text-success" />
                              20 Min Ago
                            </p>
                          </div>
                          <div className="chat-user ">
                            <span className="mb-2">08m 12s</span>
                            <div className="d-flex justify-content-end">
                              <i className="ti ti-phone-call text-pink" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.allCalls} className="chat-user-list">
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
                            <p>
                              <i className="ti ti-video-off text-danger me-2" />
                              20 Min Ago
                            </p>
                          </div>
                          <div className="chat-user-time">
                            <span className="time">08m 12s</span>
                            <div>
                              <i className="ti ti-video text-pink" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.allCalls} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-03.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Clyde Smith</h6>
                            <p>
                              <i className="ti ti-phone-outgoing text-purple me-2" />
                              20 Min Ago
                            </p>
                          </div>
                          <div className="chat-user-time">
                            <span className="time">08m 12s</span>
                            <div>
                              <i className="ti ti-phone-call text-pink" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.allCalls} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-04.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Carla Jenkins</h6>
                            <p>
                              <i className="ti ti-video text-success me-2" />
                              20 Min Ago
                            </p>
                          </div>
                          <div className="chat-user-time">
                            <span className="time">08m 12s</span>
                            <div>
                              <i className="ti ti-video text-pink" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.allCalls} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-02.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Sarika Jain</h6>
                            <p>
                              <i className="ti ti-phone-off text-danger me-2" />
                              20 Min Ago
                            </p>
                          </div>
                          <div className="chat-user-time">
                            <span className="time">08m 12s</span>
                            <div>
                              <i className="ti ti-phone-call text-pink" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.allCalls} className="chat-user-list">
                        <div className="avatar avatar-lg bg-purple offline avatar-rounded me-2">
                          <span className="avatar-title fs-14 fw-medium">
                            AG
                          </span>
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Amfr_boys_Group</h6>
                            <p>
                              <i className="ti ti-video-minus text-purple me-2" />
                              20 Min Ago
                            </p>
                          </div>
                          <div className="chat-user-time">
                            <span className="time">08m 12s</span>
                            <div>
                              <i className="ti ti-video text-pink" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.allCalls} className="chat-user-list">
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
                            <p>
                              <i className="ti ti-phone-off text-danger me-2" />
                              20 Min Ago
                            </p>
                          </div>
                          <div className="chat-user-time">
                            <span className="time">08m 12s</span>
                            <div>
                              <i className="ti ti-phone-call text-pink" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="audio-calls"
                  role="tabpanel"
                  aria-labelledby="audio-calls-tab"
                >
                  <div className="chat-users-wrap">
                    <div className="chat-list">
                      <Link to={routes.allCalls} className="chat-user-list">
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
                            <p>
                              <i className="ti ti-phone-outgoing text-purple me-2" />
                              20 Min Ago
                            </p>
                          </div>
                          <div className="chat-user-time">
                            <span className="time">08m 12s</span>
                            <div>
                              <i className="ti ti-phone-call text-pink" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.allCalls} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-01.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6 className="">Mark Villiams</h6>
                            <p className="fs-14">
                              <i className="ti ti-phone-incoming me-2 fs-14 text-success" />
                              20 Min Ago
                            </p>
                          </div>
                          <div className="chat-user ">
                            <span className="mb-2">08m 12s</span>
                            <div className="d-flex justify-content-end">
                              <i className="ti ti-phone-call text-pink" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.allCalls} className="chat-user-list">
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
                            <p className="fs-14">
                              <i className="ti ti-phone-incoming me-2 fs-14 text-success" />
                              20 Min Ago
                            </p>
                          </div>
                          <div className="chat-user ">
                            <span className="mb-2">08m 12s</span>
                            <div className="d-flex justify-content-end">
                              <i className="ti ti-phone-call text-pink" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.allCalls} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-03.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Clyde Smith</h6>
                            <p>
                              <i className="ti ti-phone-outgoing text-purple me-2" />
                              20 Min Ago
                            </p>
                          </div>
                          <div className="chat-user-time">
                            <span className="time">08m 12s</span>
                            <div>
                              <i className="ti ti-phone-call text-pink" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.allCalls} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-04.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Carla Jenkins</h6>
                            <p>
                              <i className="ti ti-phone-off text-danger me-2" />
                              20 Min Ago
                            </p>
                          </div>
                          <div className="chat-user-time">
                            <span className="time">08m 12s</span>
                            <div>
                              <i className="ti ti-phone-call text-pink" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.allCalls} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-02.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Sarika Jain</h6>
                            <p>
                              <i className="ti ti-phone-off text-danger me-2" />
                              20 Min Ago
                            </p>
                          </div>
                          <div className="chat-user-time">
                            <span className="time">08m 12s</span>
                            <div>
                              <i className="ti ti-phone-call text-pink" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.allCalls} className="chat-user-list">
                        <div className="avatar avatar-lg bg-purple avatar-rounded me-2">
                          <span className="avatar-title fs-14 fw-medium">
                            AG
                          </span>
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Amfr_boys_Group</h6>
                            <p className="fs-14">
                              <i className="ti ti-phone-incoming me-2 fs-14 text-success" />
                              20 Min Ago
                            </p>
                          </div>
                          <div className="chat-user ">
                            <span className="mb-2">08m 12s</span>
                            <div className="d-flex justify-content-end">
                              <i className="ti ti-phone-call text-pink" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.allCalls} className="chat-user-list">
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
                            <p>
                              <i className="ti ti-phone-off text-danger me-2" />
                              20 Min Ago
                            </p>
                          </div>
                          <div className="chat-user-time">
                            <span className="time">08m 12s</span>
                            <div>
                              <i className="ti ti-phone-call text-pink" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="video-calls"
                  role="tabpanel"
                  aria-labelledby="video-calls-tab"
                >
                  <div className="chat-users-wrap">
                    <div className="chat-list">
                      <Link to={routes.allCalls} className="chat-user-list">
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
                            <p>
                              <i className="ti ti-video text-success me-2" />
                              20 Min Ago
                            </p>
                          </div>
                          <div className="chat-user-time">
                            <span className="time">08m 12s</span>
                            <div>
                              <i className="ti ti-video text-pink" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.allCalls} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-01.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6 className="">Mark Villiams</h6>
                            <p>
                              <i className="ti ti-video-off text-danger me-2" />
                              20 Min Ago
                            </p>
                          </div>
                          <div className="chat-user-time">
                            <span className="time">08m 12s</span>
                            <div>
                              <i className="ti ti-video text-pink" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.allCalls} className="chat-user-list">
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
                            <p>
                              <i className="ti ti-video-off text-danger me-2" />
                              20 Min Ago
                            </p>
                          </div>
                          <div className="chat-user-time">
                            <span className="time">08m 12s</span>
                            <div>
                              <i className="ti ti-video text-pink" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.allCalls} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-03.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Clyde Smith</h6>
                            <p>
                              <i className="ti ti-video-minus text-purple me-2" />
                              20 Min Ago
                            </p>
                          </div>
                          <div className="chat-user-time">
                            <span className="time">08m 12s</span>
                            <div>
                              <i className="ti ti-video text-pink" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.allCalls} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-04.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Carla Jenkins</h6>
                            <p>
                              <i className="ti ti-video text-success me-2" />
                              20 Min Ago
                            </p>
                          </div>
                          <div className="chat-user-time">
                            <span className="time">08m 12s</span>
                            <div>
                              <i className="ti ti-video text-pink" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.allCalls} className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-02.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Sarika Jain</h6>
                            <p>
                              <i className="ti ti-video-minus text-purple me-2" />
                              20 Min Ago
                            </p>
                          </div>
                          <div className="chat-user-time">
                            <span className="time">08m 12s</span>
                            <div>
                              <i className="ti ti-video text-pink" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.allCalls} className="chat-user-list">
                        <div className="avatar avatar-lg bg-purple avatar-rounded me-2">
                          <span className="avatar-title fs-14 fw-medium">
                            AG
                          </span>
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Amfr_boys_Group</h6>
                            <p>
                              <i className="ti ti-video-off text-danger me-2" />
                              20 Min Ago
                            </p>
                          </div>
                          <div className="chat-user-time">
                            <span className="time">08m 12s</span>
                            <div>
                              <i className="ti ti-video text-pink" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="chat-list">
                      <Link to={routes.allCalls} className="chat-user-list">
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
                            <p>
                              <i className="ti ti-video-minus text-purple me-2" />
                              20 Min Ago
                            </p>
                          </div>
                          <div className="chat-user-time">
                            <span className="time">08m 12s</span>
                            <div>
                              <i className="ti ti-video text-pink" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Scrollbars>
      </div>
    </>
  );
};
