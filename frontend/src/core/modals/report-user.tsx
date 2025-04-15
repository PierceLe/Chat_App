import React from "react";
import { Link } from "react-router-dom";

const ReportUser = () => {
  return (
    <>
      {/* Report User */}
      <div className="modal fade" id="report-user">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Report User</h4>
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
                <div className="block-wrap mb-3">
                  <p className="text-grya-9 mb-3">
                    If you block this contact and clear the chat, messages will
                    only be removed from this device and your devices on the
                    newer versions of DreamsChat
                  </p>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="mute"
                      id="report"
                    />
                    <label className="form-check-label" htmlFor="report">
                      Report User
                    </label>
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
      {/* /Report User */}
    </>
  );
};

export default ReportUser;
