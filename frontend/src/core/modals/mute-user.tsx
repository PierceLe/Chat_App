import React from "react";
import ImageWithBasePath from "../common/imageWithBasePath";
import { Link } from "react-router-dom";

const MuteUser = () => {
  return (
    <>
      {/* Mute User */}
      <div className="modal fade" id="mute-user">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Blocked User</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="link-item mb-3">
                  <input
                    type="text"
                    className="form-control border-0"
                    placeholder="Search For Muted Users "
                  />
                  <span className="input-group-text">
                    <i className="ti ti-search" />
                  </span>
                </div>
                <h6 className="mb-3 fs-16">RMuted User</h6>
                <div className="mb-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-lg me-2">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-01.jpg"
                              className="rounded-circle"
                              alt=""
                            />
                          </span>
                          <div>
                            <h6>Aaryian Jose</h6>
                            <span className="fs-14">App Developer</span>
                          </div>
                        </div>
                        <Link to="#" className="btn btn-outline-primary">
                          Unmute
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-lg me-2">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-02.jpg"
                              className="rounded-circle"
                              alt=""
                            />
                          </span>
                          <div>
                            <h6>Sarika Jain</h6>
                            <span className="fs-14">UI/UX Designer</span>
                          </div>
                        </div>
                        <Link to="#" className="btn btn-outline-primary">
                          Unmute
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-lg me-2">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-03.jpg"
                              className="rounded-circle"
                              alt=""
                            />
                          </span>
                          <div>
                            <h6>Clyde Smith</h6>
                            <span className="fs-14">Web Developer</span>
                          </div>
                        </div>
                        <Link to="#" className="btn btn-outline-primary">
                          Unmute
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-lg me-2">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-04.jpg"
                              className="rounded-circle"
                              alt=""
                            />
                          </span>
                          <div>
                            <h6>Carla Jenkins</h6>
                            <span className="fs-14">Business Analyst</span>
                          </div>
                        </div>
                        <Link to="#" className="btn btn-outline-primary">
                          Unmute
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Mute User */}
    </>
  );
};

export default MuteUser;
