import React from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/common/imageWithBasePath";
import CustomSelect from "../select/commonSelect";
import { CountryOptions } from "../../core/data/json/selectOption";

const UserModal = () => {
  return (
    <>
      {/* Add user */}
      <div className="modal fade" id="add_user">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add New User</h4>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="d-flex align-items-center row-gap-2 mb-3 upload-frames">
                      <div className="outer-frames">
                        <Link to="#" id="uploadLink">
                          <div className="frames"></div>
                          <span className="frame-add rounded-circle">
                            <i className="ti ti-plus" />
                          </span>
                        </Link>
                        <input
                          type="file"
                          id="imageInput"
                          accept="image/*"
                          style={{ display: "none" }}
                        />
                      </div>
                      <div className="profile-upload">
                        <div className="profile-content">
                          <p className="fs-14">Upload Image</p>
                          <span>Image should be below 4 mb</span>
                        </div>
                        <div className="profile-uploader d-flex align-items-center">
                          <div className="drag-upload-btn mb-0">
                            Upload
                            <input
                              type="file"
                              className="form-control image-sign"
                              multiple
                            />
                          </div>
                          <Link
                            to="#"
                            className="btn btn-md btn-outline-primary mb-0"
                          >
                            Remove
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">First Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Last Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Email Address</label>
                      <input type="email" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Phone Number</label>
                      <input type="email" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12 dropdown">
                    <label className="form-label">Country</label>
                    <CustomSelect
                      options={CountryOptions}
                      modal={true}
                      className="select d-flex"
                      placeholder="Select Country"
                    />
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
                    type="button"
                    className="btn btn-primary d-flex justify-content-center w-100"
                    data-bs-dismiss="modal"
                  >
                    Add User
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add user */}
      {/* Edit user */}
      <div className="modal fade" id="edit_user">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit User</h4>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="d-flex align-items-center row-gap-2 mb-3 upload-frames">
                      <div className="outer-frames">
                        <Link to="#">
                          <div className="frames d-flex justify-content-center align-items-end">
                            <ImageWithBasePath
                              src="assets/admin/img/users/user-01.jpg"
                              alt="image"
                              className="img-fluid avatar avatar-xl  rounded-circle"
                            />
                          </div>
                          <span className="frame-add rounded-circle">
                            <i className="ti ti-plus" />
                          </span>
                        </Link>
                      </div>
                      <div className="profile-upload">
                        <div className="profile-content">
                          <p className="fs-14">Upload Image</p>
                          <span>Image should be below 4 mb</span>
                        </div>
                        <div className="profile-uploader d-flex align-items-center">
                          <div className="drag-upload-btn mb-0">
                            Upload
                            <input
                              type="file"
                              className="form-control image-sign"
                              multiple
                            />
                          </div>
                          <Link
                            to="#"
                            className="btn btn-md btn-outline-primary mb-0"
                          >
                            Remove
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Aaryian "
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Jose"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        defaultValue="aaryian@example.com"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Phone Number</label>
                      <input
                        type="email"
                        className="form-control"
                        defaultValue="514-245-98315"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 dropdown">
                    <label className="form-label">Country</label>
                    <CustomSelect
                      defaultValue={CountryOptions[1].value}
                      options={CountryOptions}
                      modal={true}
                      className="select d-flex"
                      placeholder="Select Country"
                    />
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
                    type="button"
                    className="btn btn-primary d-flex justify-content-center w-100"
                    data-bs-dismiss="modal"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Edit user */}
      {/* Delete Modal */}
      <div className="modal fade" id="delete-modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <form>
              <div className="modal-body text-center">
                <span className="delete-icon">
                  <i className="ti ti-trash-x" />
                </span>
                <h4>Confirm Deletion</h4>
                <p>
                  You want to delete all the marked items, this cant be undone
                  once you delete.
                </p>
                <div className="d-flex justify-content-center">
                  <Link
                    to="#"
                    className="btn btn-light me-3"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </Link>
                  <button
                    type="button"
                    data-bs-dismiss="modal"
                    className="btn btn-danger"
                  >
                    Yes, Delete
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Delete Modal */}
      {/* Report Modal */}
      <div className="modal fade" id="report_reason">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Report Reason</h4>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <div className="modal-body">
              <p>
                <i className="ti ti-info-circle me-2" />
                Directing hate against a protected category (e.g., race,
                religion, gender, orientation, disability)
              </p>
              <div className="close-btn">
                <Link
                  to="#"
                  className="btn btn-primary close-btn"
                  data-bs-dismiss="modal"
                >
                  Close
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Report Modal */}
    </>
  );
};

export default UserModal;
