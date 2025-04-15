import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../common/imageWithBasePath";

const StartVideoCall = () => {
  const [muteMic, setMuteMic] = useState(false);
  const [muteVideo, setMuteVideo] = useState(false);

  const toggleMute = () => {
    setMuteMic(!muteMic);
  };
  const toggleVideo = () => {
    setMuteVideo(!muteVideo);
  };
  return (
    <>
      <div
        className="modal video-call-popup fade"
        id="start-video-call"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header d-flex border-0 pb-0">
              <div className="card bg-transparent-dark flex-fill border">
                <div className="card-body d-flex justify-content-between">
                  <div className="d-flex align-items-center">
                    <span className="avatar avatar-lg online me-2">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-05.jpg"
                        className="rounded-circle"
                        alt="user"
                      />
                    </span>
                    <div>
                      <h6>Federico Wells</h6>
                      <span>+22-555-345-11</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="badge border border-primary  text-primary badge-sm me-2">
                      <i className="ti ti-point-filled" />
                      01:15:25
                    </span>
                    <Link
                      to="#"
                      className="user-add bg-primary rounded d-flex justify-content-center align-items-center text-white"
                      data-bs-toggle="modal"
                      data-bs-target="#video_group"
                    >
                      <i className="ti ti-user-plus" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-body border-0 pt-0">
              <div className="video-call-view br-8 overflow-hidden position-relative">
                <ImageWithBasePath
                  src="assets/img/video/video-member-01.jpg"
                  alt="user-image"
                />
                <div
                  className={`mini-video-view active br-8 overflow-hidden position-absolute ${muteVideo ? "no-video" : ""}`}
                >
                  <ImageWithBasePath
                    src="assets/img/video/user-image.jpg"
                    alt=""
                  />
                  <div className="bg-soft-primary mx-auto default-profile rounded-circle align-items-center justify-content-center">
                    <span className="avatar  avatar-lg rounded-circle bg-primary ">
                      RG
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-center border-0 pt-0">
              <div className="call-controll-block d-flex align-items-center justify-content-center rounded-pill">
                <Link
                  to="#"
                  onClick={toggleMute}
                  className={`call-controll mute-bt d-flex align-items-center justify-content-center ${muteMic ? "stop" : ""}`}
                >
                  <i
                    className={`ti  ${muteMic ? "ti-microphone-off" : "ti-microphone"}`}
                  />
                </Link>
                <Link
                  to="#"
                  className="call-controll d-flex align-items-center justify-content-center"
                >
                  <i className="ti ti-volume" />
                </Link>
                <Link
                  to="#"
                  onClick={toggleVideo}
                  className={`call-controll mute-video d-flex align-items-center justify-content-center ${muteVideo ? "stop" : ""}`}
                >
                  <i
                    className={`ti  ${muteVideo ? "ti-video-off" : "ti-video"}`}
                  />
                </Link>
                <Link
                  to="#"
                  data-bs-dismiss="modal"
                  className="call-controll call-decline d-flex align-items-center justify-content-center"
                >
                  <i className="ti ti-phone" />
                </Link>
                <Link
                  to="#"
                  className="call-controll d-flex align-items-center justify-content-center"
                >
                  <i className="ti ti-mood-smile" />
                </Link>
                <Link
                  to="#"
                  className="call-controll d-flex align-items-center justify-content-center"
                >
                  <i className="ti ti-maximize" />
                </Link>
                <Link
                  to="#"
                  className="call-controll d-flex align-items-center justify-content-center"
                >
                  <i className="ti ti-dots" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartVideoCall;
