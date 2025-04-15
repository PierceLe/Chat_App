import React from "react";
import { Link } from "react-router-dom";

const BlockUser = () => {
  return (
    <>
      {/* Block User */}
      <div className="modal fade" id="block-user">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Block User</h4>
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
                  <span className="user-icon mb-3 mx-auto bg-transparent-info">
                    <i className="ti ti-user-off text-info" />
                  </span>
                  <p className="text-grya-9">
                    Blocked contacts will no longer be able to call you or send
                    you messages.
                  </p>
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
                      Block
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Block User */}
    </>
  );
};

export default BlockUser;
