import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../common/imageWithBasePath";

const VoiceGroup = () => {
  const [muteMic, setMuteMic] = useState(false);

  const toggleMute = () => {
    setMuteMic(!muteMic);
  };
  return (
    <>
      {/* Voice Call group */}
      <div
        className="modal fade"
        id="voice_group"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header d-flex border-0 pb-0">
              <div className="card bg-transparent-dark flex-fill border mb-3">
                <div className="card-body d-flex justify-content-between p-3">
                  <div className="row justify-content-between flex-fill row-gap-3">
                    <div className="col-lg-5">
                      <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2">
                        <h3>Weekly Report Call</h3>
                      </div>
                    </div>
                    <div className="col-lg-4">
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
                    <div className="col-lg-3">
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
                              id="pills-tab2"
                              role="tablist"
                            >
                              <div
                                className="nav-item me-0"
                                role="presentation"
                              >
                                <Link
                                  to="#"
                                  className="nav-link bg-white text-gray p-0 fs-16 me-2"
                                  id="pills-single1-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#pills-single1"
                                  role="tab"
                                  aria-controls="pills-single1"
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
                                  id="pills-group1-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#pills-group1"
                                  role="tab"
                                  aria-controls="pills-group1"
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
                  id="pills-single1"
                  role="tabpanel"
                  aria-labelledby="pills-single1-tab"
                >
                  <div className="card audio-crd bg-transparent-dark border">
                    <div className="modal-bgimg">
                      <span className="modal-bg1">
                        <ImageWithBasePath
                          src="assets/img/bg/bg-02.png"
                          className="img-fluid"
                          alt="bg"
                        />
                      </span>
                      <span className="modal-bg2">
                        <ImageWithBasePath
                          src="assets/img/bg/bg-03.png"
                          className="img-fluid"
                          alt="bg"
                        />
                      </span>
                    </div>
                    <div className="card-body p-3">
                      <div className="single-img d-flex justify-content-center align-items-center">
                        <span className=" avatar avatar-xxxl bg-soft-primary rounded-circle p-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-06.jpg"
                            className="rounded-circle"
                            alt="user"
                          />
                        </span>
                      </div>
                      <div className="d-flex align-items-end justify-content-end">
                        <span className="call-span border border-2 border-primary d-flex justify-content-center align-items-center rounded">
                          <span className="avatar avatar-xxl bg-soft-primary rounded-circle p-2">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-17.jpg"
                              className="rounded-circle"
                              alt="user"
                            />
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade active show"
                  id="pills-group1"
                  role="tabpanel"
                  aria-labelledby="pills-group1-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="card audio-crd bg-transparent-dark border border-primary pt-4">
                        <div className="modal-bgimg">
                          <span className="modal-bg1">
                            <ImageWithBasePath
                              src="assets/img/bg/bg-02.png"
                              className="img-fluid"
                              alt="bg"
                            />
                          </span>
                          <span className="modal-bg2">
                            <ImageWithBasePath
                              src="assets/img/bg/bg-03.png"
                              className="img-fluid"
                              alt="bg"
                            />
                          </span>
                        </div>
                        <div className="card-body ">
                          <div className="d-flex justify-content-center align-items-center">
                            <span className="avatar avatar-xxxl bg-soft-primary rounded-circle p-2">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-06.jpg"
                                className="rounded-circle"
                                alt="user"
                              />
                            </span>
                          </div>
                          <div className="d-flex align-items-end justify-content-end">
                            <span className="badge badge-info">Edwin</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card audio-crd bg-transparent-dark border pt-4">
                        <div className="modal-bgimg">
                          <span className="modal-bg1">
                            <ImageWithBasePath
                              src="assets/img/bg/bg-02.png"
                              className="img-fluid"
                              alt="bg"
                            />
                          </span>
                          <span className="modal-bg2">
                            <ImageWithBasePath
                              src="assets/img/bg/bg-03.png"
                              className="img-fluid"
                              alt="bg"
                            />
                          </span>
                        </div>
                        <div className="card-body ">
                          <div className="d-flex justify-content-center align-items-center">
                            <span className="avatar avatar-xxxl bg-soft-primary rounded-circle p-2">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-01.jpg"
                                className="rounded-circle"
                                alt="user"
                              />
                            </span>
                          </div>
                          <div className="d-flex align-items-end justify-content-end">
                            <span className="badge badge-info">Edwin</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card audio-crd bg-transparent-dark border pt-4">
                        <div className="modal-bgimg">
                          <span className="modal-bg1">
                            <ImageWithBasePath
                              src="assets/img/bg/bg-02.png"
                              className="img-fluid"
                              alt="bg"
                            />
                          </span>
                          <span className="modal-bg2">
                            <ImageWithBasePath
                              src="assets/img/bg/bg-03.png"
                              className="img-fluid"
                              alt="bg"
                            />
                          </span>
                        </div>
                        <div className="card-body ">
                          <div className="d-flex justify-content-center align-items-center">
                            <span className="avatar avatar-xxxl bg-soft-primary rounded-circle p-2">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-02.jpg"
                                className="rounded-circle"
                                alt="user"
                              />
                            </span>
                          </div>
                          <div className="d-flex align-items-end justify-content-end">
                            <span className="badge badge-info">Edwin</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card audio-crd bg-transparent-dark border pt-4">
                        <div className="modal-bgimg">
                          <span className="modal-bg1">
                            <ImageWithBasePath
                              src="assets/img/bg/bg-02.png"
                              className="img-fluid"
                              alt="bg"
                            />
                          </span>
                          <span className="modal-bg2">
                            <ImageWithBasePath
                              src="assets/img/bg/bg-03.png"
                              className="img-fluid"
                              alt="bg"
                            />
                          </span>
                        </div>
                        <div className="card-body ">
                          <div className="d-flex justify-content-center align-items-center">
                            <span className="avatar avatar-xxxl bg-soft-primary rounded-circle p-2">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-03.jpg"
                                className="rounded-circle"
                                alt="user"
                              />
                            </span>
                          </div>
                          <div className="d-flex align-items-end justify-content-end">
                            <span className="badge badge-info">Edwin</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card audio-crd bg-transparent-dark border pt-4">
                        <div className="modal-bgimg">
                          <span className="modal-bg1">
                            <ImageWithBasePath
                              src="assets/img/bg/bg-02.png"
                              className="img-fluid"
                              alt="bg"
                            />
                          </span>
                          <span className="modal-bg2">
                            <ImageWithBasePath
                              src="assets/img/bg/bg-03.png"
                              className="img-fluid"
                              alt="bg"
                            />
                          </span>
                        </div>
                        <div className="card-body">
                          <div className="d-flex justify-content-center align-items-center">
                            <span className="avatar avatar-xxxl bg-soft-primary rounded-circle p-2">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-05.jpg"
                                className="rounded-circle"
                                alt="user"
                              />
                            </span>
                          </div>
                          <div className="d-flex align-items-end justify-content-end">
                            <span className="badge badge-info">Edwin</span>
                          </div>
                        </div>
                      </div>
                    </div>
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
                  data-bs-dismiss="modal"
                  className="call-controll call-decline d-flex align-items-center justify-content-center"
                >
                  <i className="ti ti-phone" />
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
      {/* /Voice Call group */}
    </>
  );
};

export default VoiceGroup;
