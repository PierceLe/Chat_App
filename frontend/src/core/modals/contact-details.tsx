import { Link } from "react-router-dom";
import { all_routes } from "../../feature-module/router/all_routes";
import ImageWithBasePath from "../common/imageWithBasePath";
import { UserData } from "../services/contactService";

interface ContactModalProps {
  show: boolean;
  onClose: () => void;
  modalData: UserData | null;
}

const ContactDetails = ({ show, onClose, modalData }: ContactModalProps) => {
  const routes = all_routes;
  if (!show) return null;
  console.log(show);
  return (
    <>
      {/* Contact Detail */}
      <div className="modal fade" id="contact-details">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Contact Detail</h4>
              <div className="d-flex align-items-center">
                <div className="dropdown me-2">
                  <Link className="d-block" to="#" data-bs-toggle="dropdown">
                    <i className="ti ti-dots-vertical" />
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-share-3 me-2" />
                        Share
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-contact"
                      >
                        <i className="ti ti-edit me-2" />
                        Edit
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#block-user"
                      >
                        <i className="ti ti-ban me-2" />
                        Block
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-trash me-2" />
                        Delete
                      </Link>
                    </li>
                  </ul>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ti ti-x" />
                </button>
              </div>
            </div>
            <div className="modal-body">
              <div className="card bg-light shadow-none">
                <div className="card-body pb-1">
                  <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <div className="d-flex align-items-center mb-3">
                      <span className="avatar avatar-lg">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-01.jpg"
                          className="rounded-circle"
                          alt="img"
                        />
                      </span>
                      <div className="ms-2">
                        <h6>{modalData?.email}</h6>
                        <p>App Developer</p>
                      </div>
                    </div>
                    <div className="contact-actions d-flex align-items-center mb-3">
                      <Link to={routes.chat} className="me-2">
                        <i className="ti ti-message" />
                      </Link>
                      <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#voice_call"
                      >
                        <i className="ti ti-phone" />
                      </Link>
                      <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#video-call"
                      >
                        <i className="ti ti-video" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card border mb-3">
                <div className="card-header border-bottom">
                  <h6>Personal Information</h6>
                </div>
                <div className="card-body pb-1">
                  <div className="mb-2">
                    <div className="row align-items-center">
                      <div className="col-sm-6">
                        <p className="mb-2 d-flex align-items-center">
                          <i className="ti ti-clock-hour-4 me-1" />
                          Local Time
                        </p>
                      </div>
                      <div className="col-sm-6">
                        <h6 className="fw-medium fs-14 mb-2">10:00 AM</h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="mb-2 d-flex align-items-center">
                          <i className="ti ti-calendar-event me-1" />
                          Date of Birth
                        </p>
                      </div>
                      <div className="col-sm-6">
                        <h6 className="fw-medium fs-14 mb-2">22 July 2024</h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="mb-2 d-flex align-items-center">
                          <i className="ti ti-phone me-1" />
                          Phone Number
                        </p>
                      </div>
                      <div className="col-sm-6">
                        <h6 className="fw-medium fs-14 mb-2">+20-482-038-29</h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="mb-2 d-flex align-items-center">
                          <i className="ti ti-mail me-1" />
                          Email
                        </p>
                      </div>
                      <div className="col-sm-6">
                        <h6 className="fw-medium fs-14 mb-2">
                          aariyan@example.com
                        </h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="mb-2 d-flex align-items-center">
                          <i className="ti ti-globe me-1" />
                          Website Address
                        </p>
                      </div>
                      <div className="col-sm-6">
                        <h6 className="fw-medium fs-14 mb-2">
                          www.examplewebsite.com
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card border mb-0">
                <div className="card-header border-bottom">
                  <h6>Social Information</h6>
                </div>
                <div className="card-body pb-1">
                  <div className="mb-2">
                    <div className="row align-items-center">
                      <div className="col-sm-6">
                        <p className="mb-2 d-flex align-items-center">
                          <i className="ti ti-brand-facebook me-1" />
                          Facebook
                        </p>
                      </div>
                      <div className="col-sm-6">
                        <h6 className="fw-medium fs-14 mb-2">
                          www.facebook.com
                        </h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="mb-2 d-flex align-items-center">
                          <i className="ti ti-brand-twitter me-1" />
                          Twitter
                        </p>
                      </div>
                      <div className="col-sm-6">
                        <h6 className="fw-medium fs-14 mb-2">
                          www.twitter.com
                        </h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="mb-2 d-flex align-items-center">
                          <i className="ti ti-brand-instagram me-1" />
                          Instagram
                        </p>
                      </div>
                      <div className="col-sm-6">
                        <h6 className="fw-medium fs-14 mb-2">
                          www.instagram.com
                        </h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="mb-2 d-flex align-items-center">
                          <i className="ti ti-brand-linkedin me-1" />
                          Linkedin
                        </p>
                      </div>
                      <div className="col-sm-6">
                        <h6 className="fw-medium fs-14 mb-2">
                          www.linkedin.com
                        </h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="mb-2 d-flex align-items-center">
                          <i className="ti ti-brand-youtube me-1" />
                          YouTube
                        </p>
                      </div>
                      <div className="col-sm-6">
                        <h6 className="fw-medium fs-14 mb-2">
                          www.youtube.com
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Contact Detail */}
    </>
  );
};

export default ContactDetails;
