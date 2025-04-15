import React from "react";
import { Link } from "react-router-dom";

const MessageDelete = () => {
  return (
    <>
      {/* Delete */}
      <div className="modal fade" id="message-delete">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Delete Chat</h4>
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
              <form action="chat.html">
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    defaultChecked
                    name="delete-chat"
                    id="delete-for-me"
                  />
                  <label className="form-check-label" htmlFor="delete-for-me">
                    Delete For Me
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="delete-chat"
                    id="delete-for-everyone"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="delete-for-everyone"
                  >
                    Delete For Everyone
                  </label>
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
                    <button type="submit" className="btn btn-primary w-100">
                      Delete
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete */}
    </>
  );
};

export default MessageDelete;
