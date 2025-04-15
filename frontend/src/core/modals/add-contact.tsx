import React, { useState } from "react";
import { Link } from "react-router-dom";
import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";
import { addFriend } from "../services/contactService";
import { wsClient } from "../services/websocket";

const AddContact = () => {
  const handleAddContact = async () => {
    await addFriend(email);
    console.log("ADD FRIEND: ", email);
    wsClient.send({
      action: "make-request-friend", 
      data: {
        to: email
      }
    })
  };

  const handleEmailInput = (e: any) => {
    setEmail(e.target.value);
  };

  const [email, setEmail] = useState("");

  return (
    <>
      {/* Add Contact */}
      <div className="modal fade" id="add-contact">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add Contact</h4>
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
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <div className="input-icon position-relative">
                        <input
                          type="text"
                          className="form-control"
                          value={email}
                          onChange={handleEmailInput}
                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-mail" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12"></div>
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
                      onClick={handleAddContact}
                    >
                      Add Contact
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Contact */}
    </>
  );
};

export default AddContact;
