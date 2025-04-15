import React from "react";
import { Link } from "react-router-dom";

const GroupLogout = () => {
  return (
    <>
      {/* Logout */}
      <div className="modal fade" id="group-logout">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Logout</h4>
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
                    <i className="ti ti-logout-2 text-danger" />
                  </span>
                  <div className="d-flex justify-content-center align-items-center">
                    <i className="ti ti-info-square-rounded me-1 fs-16" />
                    <p className="text-gray-9">
                      Only group admins will be notified that you left the
                      group.
                    </p>
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
                      Exit Group
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Logout */}
    </>
  );
};

export default GroupLogout;
