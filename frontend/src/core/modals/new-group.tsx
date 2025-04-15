import React, { useState } from "react";
import { Link } from "react-router-dom";
import createRoomSlice from "../redux/reducers/createRoomSlice";
import { useDispatch } from "react-redux";

const NewGroup = () => {
  const [roomName, setRoomName] = useState("");
  const [roomDescription, setRoomDescription] = useState("");

  const dispatch = useDispatch();

  const handleChangeRoomName = (e: any) => {
    setRoomName(e.target.value);
    dispatch(createRoomSlice.actions.setRoomName(e.target.value));
  };

  const handleChangeRoomDescription = (e: any) => {
    setRoomDescription(e.target.value);
    dispatch(createRoomSlice.actions.setDescription(roomDescription));
  };

  const handleNext = () => {
    setRoomName("");
    setRoomDescription("");
  };

  return (
    <>
      {/* New Group */}
      <div className="modal fade" id="new-group">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">New Group</h4>
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
                <div className="d-flex justify-content-center align-items-center">
                  <label
                    htmlFor="avatar-upload"
                    className="set-pro avatar avatar-xxl rounded-circle mb-3 p-1"
                  >
                    <span className="avatar avatar-xl bg-transparent-dark rounded-circle" />
                    <span className="add avatar avatar-sm d-flex justify-content-center align-items-center">
                      <i className="ti ti-plus rounded-circle d-flex justify-content-center align-items-center" />
                    </span>
                  </label>
                  <input
                    type="file"
                    id="avatar-upload"
                    style={{ display: "none" }}
                    accept="image/*"
                  />
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <label className="form-label">Group Name</label>
                    <div className="input-icon mb-3 position-relative">
                      <input
                        type="text"
                        defaultValue=""
                        className="form-control"
                        placeholder="Group Name"
                        value={roomName}
                        onChange={(e) => handleChangeRoomName(e)}
                      />
                      <span className="icon-addon">
                        <i className="ti ti-users-group" />
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <label className="form-label">About</label>
                    <div className="input-icon mb-3 position-relative">
                      <input
                        type="text"
                        defaultValue=""
                        className="form-control"
                        placeholder="About"
                        value={roomDescription}
                        onChange={(e) => handleChangeRoomDescription(e)}
                      />
                      <span className="icon-addon">
                        <i className="ti ti-info-octagon" />
                      </span>
                    </div>
                  </div>
                  <label className="form-label">Group Type</label>
                  <div className="d-flex">
                    <div className="form-check me-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="mute"
                        id="mute1"
                      />
                      <label className="form-check-label" htmlFor="mute1">
                        One
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
                        Many
                      </label>
                    </div>
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
                      className="btn btn-primary w-100"
                      data-bs-toggle="modal"
                      data-bs-target="#add-group"
                      onClick={() => {
                        handleNext();
                      }}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /New Group */}
    </>
  );
};

export default NewGroup;
