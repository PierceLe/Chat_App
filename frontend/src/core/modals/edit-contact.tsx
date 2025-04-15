import React from "react";
import { Link } from "react-router-dom";
import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";
import dayjs from "dayjs";
const EditContact = () => {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <>
      {/* Edit Contact */}
      <div className="modal fade" id="edit-contact">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Contact</h4>
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
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">First Name</label>
                      <div className="input-icon position-relative">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Aaryian"
                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-user" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Last Name</label>
                      <div className="input-icon position-relative">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Jose"
                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-user" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <div className="input-icon position-relative">
                        <input type="text" className="form-control" />
                        <span className="input-icon-addon">
                          <i className="ti ti-mail" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Phone</label>
                      <div className="input-icon position-relative">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="+20-482-038-29"
                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-phone" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Date of Birth</label>
                      <div className="input-icon antd-pickers position-relative">
                        <DatePicker
                          defaultValue={dayjs()}
                          getPopupContainer={(trigger) =>
                            trigger.parentElement || document.body
                          }
                          className="form-control datetimepicker"
                          onChange={onChange}
                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-calendar-event" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Website Address</label>
                      <div className="input-icon position-relative">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="www.examplewebsite.com"
                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-globe" />
                        </span>
                      </div>
                    </div>
                    <div className="card border">
                      <div className="card-header border-bottom">
                        <h6>Social Information</h6>
                      </div>
                      <div className="card-body pb-1">
                        <div className="row align-items-center">
                          <div className="col-md-4">
                            <label className="form-label text-default fw-normal mb-3">
                              Facebook
                            </label>
                          </div>
                          <div className="col-md-8">
                            <div className="input-icon position-relative mb-3">
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="www.facebook.com"
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-brand-facebook" />
                              </span>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label text-default fw-normal mb-3">
                              Twitter
                            </label>
                          </div>
                          <div className="col-md-8">
                            <div className="input-icon position-relative mb-3">
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="www.twitter.com"
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-brand-twitter" />
                              </span>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <label className="form-labe text-default fw-normall mb-3">
                              Instagram
                            </label>
                          </div>
                          <div className="col-md-8">
                            <div className="input-icon position-relative mb-3">
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="www.instagram.com"
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-brand-instagram" />
                              </span>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label text-default fw-normal mb-3">
                              Linked in
                            </label>
                          </div>
                          <div className="col-md-8">
                            <div className="input-icon position-relative mb-3">
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="www.linkedin.com"
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-brand-linkedin" />
                              </span>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label text-default fw-normal mb-3">
                              YouTube
                            </label>
                          </div>
                          <div className="col-md-8">
                            <div className="input-icon position-relative mb-3">
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="www.youtube.com"
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-brand-youtube" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
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
                      data-bs-dismiss="modal"
                      className="btn btn-primary w-100"
                    >
                      Update Contact
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Contact */}
    </>
  );
};

export default EditContact;
