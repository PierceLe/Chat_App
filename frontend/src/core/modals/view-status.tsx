import React from "react";
import ImageWithBasePath from "../common/imageWithBasePath";

const ViewStatus = () => {
  return (
    <>
      {/* view-status */}
      <div className="modal fade" id="view-status">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Status Viewed</h4>
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
                <div className="contact-scroll contact-select">
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
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /view-status */}
    </>
  );
};

export default ViewStatus;
