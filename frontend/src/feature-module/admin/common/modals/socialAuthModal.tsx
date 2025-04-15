import React from "react";
import { Link } from "react-router-dom";

const SocailAthuModal = () => {
  return (
    <>
      {/* Add Google */}
      <div className="modal fade" id="add_google">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Google Login Settings</h4>
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
                    <div className="mb-3">
                      <label className="form-label">Client ID </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Consumer Secret (Secret Key){" "}
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div>
                      <label className="form-label">Login Redirect URL </label>
                      <input type="email" className="form-control" />
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
                    type="button"
                    className="btn btn-primary d-flex justify-content-center w-100"
                    data-bs-dismiss="modal"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Google */}

      {/* Facebook */}
      <div className="modal fade" id="add_facebook">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Facebook Login Settings</h4>
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
                    <div className="mb-3">
                      <label className="form-label">
                        Consumer Key (API Key){" "}
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Consumer Secret (Secret Key){" "}
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div>
                      <label className="form-label">Login Redirect URL </label>
                      <input type="email" className="form-control" />
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
                    type="button"
                    className="btn btn-primary d-flex justify-content-center w-100"
                    data-bs-dismiss="modal"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Facebook */}
      {/* Apple */}
      <div className="modal fade" id="add_apple">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Apple Login Settings</h4>
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
                    <div className="mb-3">
                      <label className="form-label">Client ID </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Consumer Secret (Secret Key){" "}
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div>
                      <label className="form-label">Login Redirect URL </label>
                      <input type="email" className="form-control" />
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
                    type="button"
                    className="btn btn-primary d-flex justify-content-center w-100"
                    data-bs-dismiss="modal"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Apple */}
    </>
  );
};

export default SocailAthuModal;
