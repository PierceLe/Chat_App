import React, { useEffect } from "react";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import { Link } from "react-router-dom";
import UploadFile from "../../../core/modals/upload-file-image";
import NewStatus from "../../../core/modals/new-status";
import { all_routes } from "../../router/all_routes";

const UserStatus = () => {
  useEffect(() => {
    document.querySelectorAll(".chat-user-list").forEach(function (element) {
      element.addEventListener("click", function () {
        if (window.innerWidth <= 992) {
          const showChat = document.querySelector(".chat-messages");
          if (showChat) {
            showChat.classList.add("show");
          }
        }
      });
    });
    document.querySelectorAll(".chat-close").forEach(function (element) {
      element.addEventListener("click", function () {
        if (window.innerWidth <= 992) {
          const hideChat = document.querySelector(".chat-messages");
          if (hideChat) {
            hideChat.classList.remove("show");
          }
        }
      });
    });
  }, []);
  return (
    <>
      {/* Chat */}
      <div className="chat chat-messages show status-msg justify-content-center">
        <div className="user-status-group">
          <div className="d-xl-none">
            <Link className="text-muted chat-close mb-3 d-block" to="#">
              <i className="fas fa-arrow-left me-2" />
              Back
            </Link>
          </div>
          {/* Status*/}
          <div className="user-stories-box ">
            <div className="inner-popup">
              <div
                id="carouselIndicators"
                className="carousel slide slider"
                data-bs-ride="carousel"
              >
                <div className="chat status-chat-footer show-chatbar">
                  <div className="chat-footer">
                    <div className="footer-form">
                      <div className="chat-footer-wrap">
                        <div className="form-item">
                          <Link to="#" className="action-circle">
                            <i className="ti ti-microphone" />
                          </Link>
                        </div>
                        <div className="form-wrap">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Type Your Message"
                          />
                        </div>
                        <div className="form-item emoj-action-foot">
                          <Link to="#" className="action-circle">
                            <i className="ti ti-mood-smile" />
                          </Link>
                          <div className="emoj-group-list-foot down-emoji-circle">
                            <ul>
                              <li>
                                <Link to="#">
                                  <ImageWithBasePath
                                    src="assets/img/icons/emonji-02.svg"
                                    alt="Icon"
                                  />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <ImageWithBasePath
                                    src="assets/img/icons/emonji-05.svg"
                                    alt="Icon"
                                  />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <ImageWithBasePath
                                    src="assets/img/icons/emonji-06.svg"
                                    alt="Icon"
                                  />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <ImageWithBasePath
                                    src="assets/img/icons/emonji-07.svg"
                                    alt="Icon"
                                  />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <ImageWithBasePath
                                    src="assets/img/icons/emonji-08.svg"
                                    alt="Icon"
                                  />
                                </Link>
                              </li>
                              <li className="add-emoj">
                                <Link to="#">
                                  <i className="ti ti-plus" />
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="form-item">
                          <Link to="#" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical" />
                          </Link>
                          <div className="dropdown-menu dropdown-menu-end p-3">
                            <Link to="#" className="dropdown-item">
                              <i className="ti ti-file-text me-2" />
                              Document
                            </Link>
                            <Link to="#" className="dropdown-item">
                              <i className="ti ti-camera-selfie me-2" />
                              Camera
                            </Link>
                            <Link to="#" className="dropdown-item">
                              <i className="ti ti-photo-up me-2" />
                              Gallery
                            </Link>
                            <Link to="#" className="dropdown-item">
                              <i className="ti ti-music me-2" />
                              Audio
                            </Link>
                            <Link to="#" className="dropdown-item">
                              <i className="ti ti-map-pin-share me-2" />
                              Location
                            </Link>
                            <Link to="#" className="dropdown-item">
                              <i className="ti ti-user-check me-2" />
                              Contact
                            </Link>
                          </div>
                        </div>
                        <div className="form-btn">
                          <Link
                            className="btn btn-primary"
                            to={all_routes.userStatus}
                          >
                            <i className="ti ti-send" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="status-user-blk">
                  <div className="user-details">
                    <div className="avatar avatar-lg me-2">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-10.jpg"
                        className="rounded-circle"
                        alt="image"
                      />
                    </div>
                    <div className="user-online">
                      <h5>Michael</h5>
                      <span>Today at 7:15 AM</span>
                    </div>
                  </div>
                  <div className="status-voice-group ">
                    <Link to="#" className="status-pause me-4">
                      <i className="ti ti-player-pause" />
                    </Link>
                    <Link to="#" className="text-white me-2 fs-24">
                      <i className="ti ti-volume" />
                    </Link>
                    <Link to="#" className="text-white fs-24">
                      <i className="ti ti-maximize" />
                    </Link>
                  </div>
                </div>
                <ol className="carousel-indicators">
                  <li
                    data-bs-target="#carouselIndicators"
                    data-bs-slide-to={0}
                    className="active"
                  />
                  <li
                    data-bs-target="#carouselIndicators"
                    data-bs-slide-to={1}
                  />
                  <li
                    data-bs-target="#carouselIndicators"
                    data-bs-slide-to={2}
                  />
                  <li
                    data-bs-target="#carouselIndicators"
                    data-bs-slide-to={3}
                  />
                  <li
                    data-bs-target="#carouselIndicators"
                    data-bs-slide-to={4}
                  />
                </ol>
                <div className="carousel-inner status_slider" role="listbox">
                  <div id="target" className="carousel-item active">
                    <ImageWithBasePath
                      src="assets/img/status/status-01.jpg"
                      alt="Image"
                    />
                  </div>
                  <div className="carousel-item">
                    <ImageWithBasePath
                      src="assets/img/status/status-02.jpg"
                      alt="Image"
                    />
                  </div>
                  <div className="carousel-item">
                    <ImageWithBasePath
                      src="assets/img/status/status-03.jpg"
                      alt="Image"
                    />
                  </div>
                  <div className="carousel-item">
                    <ImageWithBasePath
                      src="assets/img/status/status-04.jpg"
                      alt="Image"
                    />
                  </div>
                  <div className="carousel-item">
                    <ImageWithBasePath
                      src="assets/img/status/status-05.jpg"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Status */}
        </div>
      </div>
      {/* /Chat */}
      <UploadFile />
      <NewStatus />
    </>
  );
};

export default UserStatus;
