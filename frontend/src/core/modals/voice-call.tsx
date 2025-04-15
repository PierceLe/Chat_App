import React from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../common/imageWithBasePath";

const VoiceCall = () => {
  return (
    <>
      {/* Voice Call */}
      <div className="modal fade" id="voice_call">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header justify-content-center border-0">
              <span className="model-icon bg-primary d-flex justify-content-center align-items-center rounded-circle me-2">
                <i className="ti ti-phone-call" />
              </span>
              <h4 className="modal-title">Audio Calling...</h4>
            </div>
            <div className="modal-body pb-0">
              <div className="card bg-light mb-0">
                <div className="card-body d-flex justify-content-center">
                  <div>
                    <span className="avatar avatar-xxl">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-06.jpg"
                        className="rounded-circle"
                        alt="user"
                      />
                    </span>
                    <h6 className="fs-14">Edward Lietz</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-center border-0">
              <Link
                to="#"
                className="voice-icon btn btn-success rounded-circle d-flex justify-content-center align-items-center me-2"
                data-bs-toggle="modal"
                data-bs-target="#voice_attend"
              >
                <i className="ti ti-phone fs-20" />
              </Link>
              <Link
                to="#"
                className="voice-icon btn btn-danger rounded-circle d-flex justify-content-center align-items-center"
              >
                <i className="ti ti-phone-off fs-20" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* /Voice Call */}
    </>
  );
};

export default VoiceCall;
