import React, { useEffect } from "react";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import { Link } from "react-router-dom";
import UploadFile from "../../../core/modals/upload-file-image";
import NewStatus from "../../../core/modals/new-status";
import ViewStatus from "../../../core/modals/view-status";

const MyStatus = () => {
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
            <div className="inner-popup ">
              <div
                id="carouselIndicators"
                className="carousel slide slider"
                data-bs-ride="carousel"
              >
                <div className="status-user-blk">
                  <div className="user-details">
                    <div className="avatar avatar-lg me-2">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-01.jpg"
                        className="rounded-circle"
                        alt="image"
                      />
                    </div>
                    <div className="user-online">
                      <h5>My Status</h5>
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
                <Link
                  className="view-status-list br-8 py-1 px-2 position-absolute"
                  to="#"
                  data-bs-toggle="modal"
                  data-bs-target="#view-status"
                >
                  <i className="ti ti-eye-check me-2" />
                  <span className="text-gray-9">25</span>
                </Link>
              </div>
            </div>
          </div>
          {/* /Status */}
        </div>
      </div>
      {/* /Chat */}
      <UploadFile />
      <NewStatus />
      <ViewStatus />
    </>
  );
};

export default MyStatus;
