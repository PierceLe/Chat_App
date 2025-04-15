import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../common/imageWithBasePath";

const VoiceAttend = () => {
  const [muteMic, setMuteMic] = useState(false);

  const toggleMute = () => {
    setMuteMic(!muteMic);
  };
  return (
    <>
      {/* Voice Call attend */}
      <div
        className="modal fade"
        id="voice_attend"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header d-flex border-0 pb-0">
              <div className="card bg-transparent-dark flex-fill border mb-3">
                <div className="card-body d-flex justify-content-between p-3 flex-wrap row-gap-3">
                  <div className="d-flex align-items-center">
                    <span className="avatar avatar-lg online me-2">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-06.jpg"
                        className="rounded-circle"
                        alt="user"
                      />
                    </span>
                    <div>
                      <h6>Edward Lietz</h6>
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
                      data-bs-target="#voice_group"
                    >
                      <i className="ti ti-user-plus" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-body border-0 pt-0">
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
                  <div className="d-flex justify-content-center align-items-center pt-5">
                    <span className="avatar avatar-xxxl bg-soft-primary rounded-circle p-2">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-06.jpg"
                        className="rounded-circle"
                        alt="user"
                      />
                    </span>
                  </div>
                  <div className="d-flex align-items-end justify-content-end">
                    <span className="call-span border border-2 border-primary d-flex justify-content-center align-items-center rounded">
                      <span className="avatar avatar-xl bg-soft-primary rounded-circle p-2">
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
      {/* /Voice Call attend */}
    </>
  );
};

export default VoiceAttend;
