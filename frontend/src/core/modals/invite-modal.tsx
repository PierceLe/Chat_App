import React from "react";
import { Link } from "react-router-dom";

const InviteModal = () => {
  return (
    <>
      {/* Invite */}
      <div className="modal fade" id="invite">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Invite Others</h4>
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
                <div className="row">
                  <div className="col-lg-12">
                    <label className="form-label">
                      Email Address or Phone Number
                    </label>
                    <div className="input-icon mb-3 position-relative">
                      <input
                        type="text"
                        defaultValue=""
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <label className="form-label">Invitation Message</label>
                    <textarea className="form-control mb-3" defaultValue={""} />
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
                      className="btn btn-primary w-100"
                      data-bs-toggle="modal"
                      data-bs-target="#new-chat"
                    >
                      Send Invitation
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Invite */}
    </>
  );
};

export default InviteModal;
