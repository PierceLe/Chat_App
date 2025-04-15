import React from "react";
import { Link } from "react-router-dom";

const DeleteAccount = () => {
  return (
    <>
      {/* Delete  Account */}
      <div className="modal fade" id="delete-account">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Delete Account</h4>
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
                  <h6 className="fs-16">
                    Are you sure you want to delete your account?{" "}
                  </h6>
                  <p className="text-grya-9">
                    This action is irreversible and all your data will be
                    permanently deleted.
                  </p>
                </div>
                <div className="mb-3">
                  <ul>
                    <li className="d-flex align-items-center fs-16 mb-2">
                      <i className="ti ti-arrow-badge-right me-2 fs-20 text-primary" />
                      Delete your account info and profile photo
                    </li>
                    <li className="d-flex align-items-center fs-16 mb-2">
                      <i className="ti ti-arrow-badge-right me-2 fs-20 text-primary" />
                      Delete you from all dreamschat groups
                    </li>
                    <li className="d-flex fs-16 mb-2">
                      <i className="ti ti-arrow-badge-right me-2 fs-20 text-primary" />
                      Delete your message history on this phone and your icloud
                      backup
                    </li>
                  </ul>
                </div>
                <div className="d-flex mb-3">
                  <div>
                    <input type="checkbox" className="me-2" />
                  </div>
                  <div>
                    <p className="text-grya-9">
                      I understand that deleting my account is irreversible and
                      all my data will be permanently deleted.
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
                      Delete
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Account */}
    </>
  );
};

export default DeleteAccount;
