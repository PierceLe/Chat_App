import React from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../common/imageWithBasePath";

const NewCall = () => {
  return (
    <>
      {/* Add Call */}
      <div className="modal fade" id="new-call">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">New Call</h4>
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
                          src="assets/img/profiles/avatar-06.jpg"
                          className="rounded-circle"
                          alt="image"
                        />
                      </div>
                      <div className="ms-2">
                        <h6>Edward Lietz</h6>
                        <p>App Developer</p>
                      </div>
                    </div>
                    <div className="d-inline-flex">
                      <Link
                        to="#"
                        className="model-icon bg-light d-flex justify-content-center align-items-center rounded-circle me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#voice_call"
                      >
                        <span>
                          <i className="ti ti-phone" />
                        </span>
                      </Link>
                      <Link
                        to="#"
                        className="model-icon bg-light d-flex justify-content-center align-items-center rounded-circle"
                        data-bs-toggle="modal"
                        data-bs-target="#video-call"
                      >
                        <span>
                          <i className="ti ti-video" />
                        </span>
                      </Link>
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
                    <div className="d-inline-flex">
                      <Link
                        to="#"
                        className="model-icon bg-light d-flex justify-content-center align-items-center rounded-circle me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#voice_call"
                      >
                        <span>
                          <i className="ti ti-phone" />
                        </span>
                      </Link>
                      <Link
                        to="#"
                        className="model-icon bg-light d-flex justify-content-center align-items-center rounded-circle"
                        data-bs-toggle="modal"
                        data-bs-target="#video-call"
                      >
                        <span>
                          <i className="ti ti-video" />
                        </span>
                      </Link>
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
                    <div className="d-inline-flex">
                      <Link
                        to="#"
                        className="model-icon bg-light d-flex justify-content-center align-items-center rounded-circle me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#voice_call"
                      >
                        <span>
                          <i className="ti ti-phone" />
                        </span>
                      </Link>
                      <Link
                        to="#"
                        className="model-icon bg-light d-flex justify-content-center align-items-center rounded-circle"
                        data-bs-toggle="modal"
                        data-bs-target="#video-call"
                      >
                        <span>
                          <i className="ti ti-video" />
                        </span>
                      </Link>
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
                    <div className="d-inline-flex">
                      <Link
                        to="#"
                        className="model-icon bg-light d-flex justify-content-center align-items-center rounded-circle me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#voice_call"
                      >
                        <span>
                          <i className="ti ti-phone" />
                        </span>
                      </Link>
                      <Link
                        to="#"
                        className="model-icon bg-light d-flex justify-content-center align-items-center rounded-circle"
                        data-bs-toggle="modal"
                        data-bs-target="#video-call"
                      >
                        <span>
                          <i className="ti ti-video" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Call */}
    </>
  );
};

export default NewCall;
