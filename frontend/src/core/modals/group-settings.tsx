import React from "react";
import { Link } from "react-router-dom";

const GroupSettings = () => {
  return (
    <>
      {/* Group Settings */}
      <div
        className="chat-offcanvas offcanvas offcanvas-end"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex={-1}
        id="group-settings"
      >
        <div className="offcanvas-header">
          <h4 className="offcanvas-title">Group Settings</h4>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="ti ti-x" />
          </button>
        </div>
        <div className="offcanvas-body">
          <div className="chat-contact-info">
            <div className="profile-content">
              <div className="content-wrapper other-info">
                <div className="card">
                  <div className="card-body list-group profile-item">
                    <Link
                      to="#"
                      className="list-group-item"
                      data-bs-toggle="modal"
                      data-bs-target="#edit-group"
                    >
                      <div className="profile-info">
                        <h6 className="fs-16">Edit Group Settings</h6>
                        <p>All Participants</p>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="link-icon">
                          <i className="ti ti-chevron-right" />
                        </span>
                      </div>
                    </Link>
                    <div
                      className="accordion accordion-flush chat-accordion list-group-item"
                      id="send-settings"
                    >
                      <div className="accordion-item w-100">
                        <h2 className="accordion-header">
                          <Link
                            to="#"
                            className="accordion-button py-0 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#send-privacy"
                            aria-expanded="false"
                            aria-controls="send-privacy"
                          >
                            Send Messages
                          </Link>
                        </h2>
                        <p className="fs-16 p-0 mb-0">All Participants</p>
                        <div
                          id="send-privacy"
                          className="accordion-collapse collapse"
                          data-bs-parent="#send-settings"
                        >
                          <div className="accordion-body p-0 pt-3">
                            <div className="form-check mb-3">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="mute"
                                id="participant"
                                defaultChecked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="participant"
                              >
                                All Participants
                              </label>
                            </div>
                            <div className="form-check mb-3">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="mute"
                                id="admin"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="admin"
                              >
                                Only Admins
                              </label>
                            </div>
                            <Link to="#" className="btn btn-primary w-100">
                              Save Changes
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link
                      to="#"
                      className="list-group-item"
                      data-bs-toggle="modal"
                      data-bs-target="#approve-participants"
                    >
                      <div className="profile-info">
                        <h6 className="fs-16">Approve New Participants</h6>
                        <p>Off</p>
                      </div>
                      <div>
                        <span className="link-icon">
                          <i className="ti ti-chevron-right" />
                        </span>
                      </div>
                    </Link>
                    <Link
                      to="#"
                      className="list-group-item"
                      data-bs-toggle="modal"
                      data-bs-target="#edit-admin"
                    >
                      <div className="profile-info">
                        <h6 className="fs-16">Edit Group Admins</h6>
                      </div>
                      <div>
                        <span className="link-icon">
                          <i className="ti ti-chevron-right" />
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Group Settings */}
    </>
  );
};

export default GroupSettings;
