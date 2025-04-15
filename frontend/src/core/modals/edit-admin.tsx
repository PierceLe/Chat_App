import React from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../common/imageWithBasePath";

const EditAdmin = () => {
  return (
    <>
      {/* Edit Group Admins */}
      <div className="modal fade" id="edit-admin">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Group Admins</h4>
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
                <div className="search-wrap contact-search mb-3">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                    <Link to="#" className="input-group-text">
                      <i className="ti ti-search" />
                    </Link>
                  </div>
                </div>
                <h6 className="mb-3 fw-medium fs-16">Contacts</h6>
                <div className="contact-scroll contact-select mb-3">
                  <div className="contact-user d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-lg">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-01.jpg"
                          className="rounded-circle"
                          alt="image"
                        />
                      </div>
                      <div className="ms-2">
                        <h6>Aaryian Jose</h6>
                        <p>App Developer</p>
                      </div>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="contact"
                      />
                    </div>
                  </div>
                  <div className="contact-user d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-lg">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-02.jpg"
                          className="rounded-circle"
                          alt="image"
                        />
                      </div>
                      <div className="ms-2">
                        <h6>Sarika Jain</h6>
                        <p>UI/UX Designer</p>
                      </div>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="contact"
                      />
                    </div>
                  </div>
                  <div className="contact-user d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-lg">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-03.jpg"
                          className="rounded-circle"
                          alt="image"
                        />
                      </div>
                      <div className="ms-2">
                        <h6>Clyde Smith</h6>
                        <p>Web Developer</p>
                      </div>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="contact"
                      />
                    </div>
                  </div>
                  <div className="contact-user d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-lg">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-04.jpg"
                          className="rounded-circle"
                          alt="image"
                        />
                      </div>
                      <div className="ms-2">
                        <h6>Carla Jenkins</h6>
                        <p>Business Analyst</p>
                      </div>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="contact"
                      />
                    </div>
                  </div>
                </div>
                <div className="row g-3">
                  <div className="col-6">
                    <Link
                      to="#"
                      className="btn btn-outline-primary w-100"
                      data-bs-dismiss="modal"
                      aria-label="close"
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
      {/* /Edit Group Admins */}
    </>
  );
};

export default EditAdmin;
