import React from "react";
import { Link } from "react-router-dom";

const MessageDisapper = () => {
  return (
    <>
      {/* Disapperaing Message */}
      <div className="modal fade" id="msg-disapper">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Disappearing Messages</h4>
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
                  <p className="text-gray-9">
                    For more privacy and storage, all new messages will
                    disappear from this chat for everyone after the selected
                    duration, except when kept. Anyone in the chat can change
                    this setting.
                  </p>
                </div>
                <div className="mb-3">
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="mute"
                      id="disappear1"
                    />
                    <label className="form-check-label" htmlFor="disappear1">
                      24 Hours
                    </label>
                  </div>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="mute"
                      id="disappear2"
                    />
                    <label className="form-check-label" htmlFor="disappear2">
                      7 Days
                    </label>
                  </div>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="mute"
                      id="disappear3"
                    />
                    <label className="form-check-label" htmlFor="disappear3">
                      90 Days
                    </label>
                  </div>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="mute"
                      id="disappear4"
                    />
                    <label className="form-check-label" htmlFor="disappear4">
                      Off
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
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Disapperaing Message */}
    </>
  );
};

export default MessageDisapper;
