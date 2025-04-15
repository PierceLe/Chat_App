import React from "react";
import { Link } from "react-router-dom";

const ReportGroup = () => {
  return (
    <>
      {/* Report Group */}
      <div className="modal fade" id="report-group">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Report Wilbur Martinez</h4>
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
                <div className="block-wrap text-center mb-3">
                  <span className="user-icon mb-3 mx-auto bg-transparent-danger">
                    <i className="ti ti-thumb-down text-danger" />
                  </span>
                  <div className="d-flex justify-content-center align-items-center mb-3   ">
                    <p className="text-gray-9">
                      If you block this contact and clear the chat, messages
                      will only be removed from this device and your devices on
                      the newer versions of DreamsChat
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="contact"
                      />
                    </div>
                    <p className="text-gray-9">Block Contact and Clear Chat</p>
                  </div>
                </div>
                <div className="row g-3">
                  <div className="col-6">
                    <Link
                      to="#"
                      className="btn btn-outline-primary w-100"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      Cancel
                    </Link>
                  </div>
                  <div className="col-6">
                    <button
                      type="button"
                      data-bs-dismiss="modal"
                      className="btn btn-primary w-100"
                    >
                      Report
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Report Group */}
    </>
  );
};

export default ReportGroup;
