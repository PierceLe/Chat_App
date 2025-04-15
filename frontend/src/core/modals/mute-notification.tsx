import React from "react";
import { Link } from "react-router-dom";

const MuteNotification = () => {
  return (
    <>
      {/* Mute */}
      <div className="modal fade" id="mute-notification">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Mute Notifications</h4>
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
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="mute"
                    id="mute1"
                  />
                  <label className="form-check-label" htmlFor="mute1">
                    30 Minutes
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="mute"
                    id="mute2"
                  />
                  <label className="form-check-label" htmlFor="mute2">
                    1 Hour
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="mute"
                    id="mute3"
                  />
                  <label className="form-check-label" htmlFor="mute3">
                    1 Day
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="mute"
                    id="mute4"
                  />
                  <label className="form-check-label" htmlFor="mute4">
                    1 Week
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="mute"
                    id="mute5"
                  />
                  <label className="form-check-label" htmlFor="mute5">
                    1 Month
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="mute"
                    id="mute6"
                  />
                  <label className="form-check-label" htmlFor="mute6">
                    1 Year
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="mute"
                    id="mute7"
                  />
                  <label className="form-check-label" htmlFor="mute7">
                    Always
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
                    <button type="button" className="btn btn-primary w-100">
                      Mute
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Mute */}
    </>
  );
};

export default MuteNotification;
