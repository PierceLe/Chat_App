import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../common/imageWithBasePath";

const VideoGroup = () => {
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
      {/* Video Call group */}
      <div
        className="modal fade"
        id="video_group"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header d-flex border-0 pb-0">
              <div className="card bg-transparent-dark flex-fill border mb-3">
                <div className="card-body d-flex justify-content-between p-3">
                  <div className="row justify-content-between flex-fill row-gap-3">
                    <div className="col-lg-5 col-sm-12">
                      <div className="d-flex justify-content-between align-items-center row-gap-2">
                        <h3>Weekly Report Call</h3>
                      </div>
                    </div>
                    <div className="col-lg-5 col-sm-12">
                      <div className="d-flex justify-content-start align-items-center">
                        <span className="badge border border-primary  text-primary badge-sm me-3">
                          <i className="ti ti-point-filled" />
                          01:15:25
                        </span>
                        <Link
                          to="#"
                          data-bs-toggle="modal"
                          className="badge badge-danger badge-sm"
                        >
                          Leave
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-12">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex">
                          <span className="user-add bg-primary d-flex justify-content-center align-items-center rounded-circle me-2">
                            6
                          </span>
                          <Link
                            to="#"
                            className="user-add bg-primary rounded d-flex justify-content-center align-items-center text-white"
                          >
                            <i className="ti ti-user-plus" />
                          </Link>
                        </div>
                        <div className="row justify-content-center">
                          <div className="layout-tab d-flex justify-content-center ">
                            <div
                              className="nav nav-pills inner-tab "
                              id="pills-tab3"
                              role="tablist"
                            >
                              <div
                                className="nav-item me-0"
                                role="presentation"
                              >
                                <Link
                                  to="#"
                                  className="nav-link bg-white text-gray p-0 fs-16 me-2"
                                  id="pills-single2-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#pills-single2"
                                  role="tab"
                                  aria-controls="pills-single2"
                                  aria-selected="false"
                                  tabIndex={-1}
                                >
                                  <i className="ti ti-square" />
                                </Link>
                              </div>
                              <div className="nav-item" role="presentation">
                                <Link
                                  to="#"
                                  className="nav-link active bg-white text-gray p-0 fs-16"
                                  id="pills-group2-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#pills-group2"
                                  role="tab"
                                  aria-controls="pills-group2"
                                  aria-selected="false"
                                  tabIndex={-1}
                                >
                                  <i className="ti ti-layout-grid" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-body border-0 pt-0">
              <div className="tab-content dashboard-tab">
                <div
                  className="tab-pane fade"
                  id="pills-single2"
                  role="tabpanel"
                  aria-labelledby="pills-single2-tab"
                >
                  <div className="row">
                    <div className="col-md-12">
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
                            <span className="avatar avatar-lg rounded-circle bg-primary">
                              RG
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade active show"
                  id="pills-group2"
                  role="tabpanel"
                  aria-labelledby="pills-group2-tab"
                >
                  <div className="row row-gap-4">
                    <div className="col-md-6 d-flex">
                      <div className="video-call-view br-8 overflow-hidden flex-fill">
                        <ImageWithBasePath
                          src="assets/img/video/video-member-02.jpg"
                          alt="user-image"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 d-flex">
                      <div className="video-call-view br-8 overflow-hidden flex-fill">
                        <ImageWithBasePath
                          src="assets/img/video/video-member-03.jpg"
                          alt="user-image"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 d-flex">
                      <div className="video-call-view br-8 overflow-hidden flex-fill">
                        <ImageWithBasePath
                          src="assets/img/video/video-member-05.jpg"
                          alt="user-image"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 d-flex">
                      <div className="video-call-view br-8 overflow-hidden flex-fill">
                        <ImageWithBasePath
                          src="assets/img/video/video-member-04.jpg"
                          alt="user-image"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 d-flex">
                      <div className="video-call-view br-8 overflow-hidden default-mode d-flex align-items-center  flex-fill">
                        <div className="bg-soft-primary mx-auto default-profile rounded-circle d-flex align-items-center justify-content-center">
                          <span className="avatar  avatar-lg rounded-circle bg-primary ">
                            RG
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer justify-content-center border-0">
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
      </div>
      {/* /Video Call group */}
    </>
  );
};

export default VideoGroup;
