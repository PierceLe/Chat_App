import React from "react";
import { Link } from "react-router-dom";

const BanIpAddress = () => {
  return (
    <>
      {/* Add Ban Address */}
      <div className="modal fade" id="add_ban">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add New IP Address</h4>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form action="ban-address.html">
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">IP Address</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div>
                      <label className="form-label">Reason</label>
                      <textarea className="form-control" defaultValue={""} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer pt-0">
                <div className="d-flex w-100 justify-content-between">
                  <Link
                    to="#"
                    className="btn btn-outline-primary me-2 d-flex justify-content-center w-100"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    className="btn btn-primary d-flex justify-content-center w-100"
                  >
                    Add IP Addresss
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* / Add Ban Address */}

      {/* Edit Ban Address */}
      <div className="modal fade" id="edit_ban">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Ban IP Address</h4>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form action="ban-address.html">
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">IP Address</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="198.120.16.01"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div>
                      <label className="form-label">Reason</label>
                      <textarea
                        className="form-control"
                        defaultValue={
                          "Temporarily block to protect user accounts from internet fraudsters"
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer pt-0">
                <div className="d-flex w-100 justify-content-between">
                  <Link
                    to="#"
                    className="btn btn-outline-primary me-2 d-flex justify-content-center w-100"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    className="btn btn-primary d-flex justify-content-center w-100"
                  >
                    Add IP Addresss
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Edit Ban Address */}
    </>
  );
};

export default BanIpAddress;
