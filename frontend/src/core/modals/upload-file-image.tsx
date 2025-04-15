import React from "react";
import { Link } from "react-router-dom";

const UploadFile = () => {
  return (
    <>
      {/* Status */}
      <div className="modal fade" id="upload-file-image">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add New Status</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <div className="modal-body chat">
              <div className="row">
                <div className="col-md-12">
                  <div className="drag-and-drop-block status-view p-3 mb-3">
                    <img
                      src="assets/img/status/status-01.jpg"
                      className="status-preview"
                      alt="upload"
                    />
                  </div>
                </div>
              </div>
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
                              <img
                                src="assets/img/icons/emonji-02.svg"
                                alt="Icon"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <img
                                src="assets/img/icons/emonji-05.svg"
                                alt="Icon"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <img
                                src="assets/img/icons/emonji-06.svg"
                                alt="Icon"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <img
                                src="assets/img/icons/emonji-07.svg"
                                alt="Icon"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <img
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
                        <Link to="#" className="dropdown-item ">
                          <span>
                            <i className="ti ti-file-text" />
                          </span>
                          Document
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <span>
                            <i className="ti ti-camera-selfie" />
                          </span>
                          Camera
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <span>
                            <i className="ti ti-photo-up" />
                          </span>
                          Gallery
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <span>
                            <i className="ti ti-music" />
                          </span>
                          Audio
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <span>
                            <i className="ti ti-map-pin-share" />
                          </span>
                          Location
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <span>
                            <i className="ti ti-user-check" />
                          </span>
                          Contact
                        </Link>
                      </div>
                    </div>
                    <div className="form-btn">
                      <Link className="btn btn-primary" to="#">
                        <i className="ti ti-send" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Status */}
    </>
  );
};

export default UploadFile;
