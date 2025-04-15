import React, { useState } from "react";
import { Link } from "react-router-dom";
import VideoModal from "../hooks/video-modal";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ImageWithBasePath from "../common/imageWithBasePath";

const ContactInfo = () => {
  const [showModal, setShowModal] = useState(false);
  const [open1, setOpen1] = useState(false);
  const videoUrl = "https://www.youtube.com/embed/Mj9WJJNp5wA";
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <>
      {/* Contact Info */}
      <div
        className="chat-offcanvas offcanvas offcanvas-end"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex={-1}
        id="contact-profile"
        aria-labelledby="chatUserMoreLabel"
      >
        <div className="offcanvas-header">
          <h4 className="offcanvas-title" id="chatUserMoreLabel">
            Contact Info
          </h4>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="ti ti-x" />
          </button>
        </div>
        <div className="offcanvas-body">
          <div className="chat-contact-info">
            <div className="profile-content">
              <div className="contact-profile-info">
                <div className="avatar avatar-xxl online mb-2">
                  <img
                    src="assets/img/profiles/avatar-06.jpg"
                    className="rounded-circle"
                    alt="img"
                  />
                </div>
                <h6>Edward Lietz</h6>
                <p>Last seen at 07:15 PM</p>
              </div>
              <div className="row gx-3">
                <div className="col">
                  <Link to="#" className="action-wrap">
                    <i className="ti ti-phone" />
                    <p>Audio</p>
                  </Link>
                </div>
                <div className="col">
                  <Link to="#" className="action-wrap">
                    <i className="ti ti-video" />
                    <p>Video</p>
                  </Link>
                </div>
                <div className="col">
                  <Link to="#" className="action-wrap">
                    <i className="ti ti-brand-hipchat" />
                    <p>Chat</p>
                  </Link>
                </div>
                <div className="col">
                  <Link to="#" className="action-wrap">
                    <i className="ti ti-search" />
                    <p>Search</p>
                  </Link>
                </div>
              </div>
              <div className="content-wrapper">
                <h5 className="sub-title">Profile Info</h5>
                <div className="card">
                  <div className="card-body">
                    <ul className="list-group profile-item">
                      <li className="list-group-item">
                        <div className="profile-info">
                          <h6>Name</h6>
                          <p>Edward Lietz</p>
                        </div>
                        <div className="profile-icon">
                          <i className="ti ti-user-circle" />
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="info">
                          <h6>Email Address</h6>
                          <p>info@example.com</p>
                        </div>
                        <div className="icon">
                          <i className="ti ti-mail-heart" />
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="info">
                          <h6>Phone</h6>
                          <p>555-555-21541</p>
                        </div>
                        <div className="icon">
                          <i className="ti ti-phone-check" />
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="info">
                          <h6>Bio</h6>
                          <p>Hello, I am using DreamsChat</p>
                        </div>
                        <div className="icon">
                          <i className="ti ti-user-check" />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="content-wrapper">
                <h5 className="sub-title">Social Profiles</h5>
                <div className="card">
                  <div className="card-body">
                    <div className="social-icon">
                      <Link to="#">
                        <i className="ti ti-brand-facebook" />
                      </Link>
                      <Link to="#">
                        <i className="ti ti-brand-twitter" />
                      </Link>
                      <Link to="#">
                        <i className="ti ti-brand-instagram" />
                      </Link>
                      <Link to="#">
                        <i className="ti ti-brand-linkedin" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-wrapper">
                <h5 className="sub-title">Media Details</h5>
                <div className="chat-file">
                  <div className="file-item">
                    <div
                      className="accordion accordion-flush chat-accordion"
                      id="mediafile"
                    >
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <Link
                            to="#"
                            className="accordion-button collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#chatuser-collapse1"
                            aria-expanded="false"
                            aria-controls="chatuser-collapse1"
                          >
                            <i className="ti ti-photo-shield me-2" />
                            Photos
                          </Link>
                        </h2>
                        <div
                          id="chatuser-collapse1"
                          className="accordion-collapse collapse"
                          data-bs-parent="#mediafile"
                        >
                          <div className="accordion-body">
                            <div className="chat-user-photo">
                              <div className="chat-img contact-gallery">
                                <Lightbox
                                  open={open1}
                                  close={() => setOpen1(false)}
                                  slides={[
                                    {
                                      src: "/assets/img/gallery/gallery-02.jpg",
                                    },
                                    {
                                      src: "/assets/img/gallery/gallery-03.jpg",
                                    },
                                    {
                                      src: "/assets/img/gallery/gallery-01.jpg",
                                    },
                                    {
                                      src: "/assets/img/gallery/gallery-04.jpg",
                                    },
                                    {
                                      src: "/assets/img/gallery/gallery-05.jpg",
                                    },
                                  ]}
                                />
                                <div className="img-wrap">
                                  <ImageWithBasePath
                                    src="assets/img/gallery/gallery-01.jpg"
                                    alt="img"
                                  />
                                  <div className="img-overlay">
                                    <Link
                                      onClick={() => setOpen1(true)}
                                      className="gallery-img"
                                      data-fancybox="gallery-img"
                                      to="#"
                                      title="Demo 01"
                                    >
                                      <i className="ti ti-eye" />
                                    </Link>
                                    <Link to="#">
                                      <i className="ti ti-download" />
                                    </Link>
                                  </div>
                                </div>
                                <div className="img-wrap">
                                  <ImageWithBasePath
                                    src="assets/img/gallery/gallery-02.jpg"
                                    alt="img"
                                  />
                                  <div className="img-overlay">
                                    <Link
                                      onClick={() => setOpen1(true)}
                                      className="gallery-img"
                                      data-fancybox="gallery-img"
                                      to="#"
                                      title="Demo 02"
                                    >
                                      <i className="ti ti-eye" />
                                    </Link>
                                    <Link to="#">
                                      <i className="ti ti-download" />
                                    </Link>
                                  </div>
                                </div>
                                <div className="img-wrap">
                                  <ImageWithBasePath
                                    src="assets/img/gallery/gallery-03.jpg"
                                    alt="img"
                                  />
                                  <div className="img-overlay">
                                    <Link
                                      onClick={() => setOpen1(true)}
                                      className="gallery-img"
                                      data-fancybox="gallery-img"
                                      to="#"
                                      title="Demo 03"
                                    >
                                      <i className="ti ti-eye" />
                                    </Link>
                                    <Link to="#">
                                      <i className="ti ti-download" />
                                    </Link>
                                  </div>
                                </div>
                                <div className="img-wrap">
                                  <ImageWithBasePath
                                    src="assets/img/gallery/gallery-04.jpg"
                                    alt="img"
                                  />
                                  <div className="img-overlay">
                                    <Link
                                      onClick={() => setOpen1(true)}
                                      className="gallery-img"
                                      data-fancybox="gallery-img"
                                      to="#"
                                      title="Demo 04"
                                    >
                                      <i className="ti ti-eye" />
                                    </Link>
                                    <Link to="#">
                                      <i className="ti ti-download" />
                                    </Link>
                                  </div>
                                </div>
                                <div className="img-wrap">
                                  <ImageWithBasePath
                                    src="assets/img/gallery/gallery-05.jpg"
                                    alt="img"
                                  />
                                  <div className="img-overlay">
                                    <Link
                                      onClick={() => setOpen1(true)}
                                      className="gallery-img"
                                      data-fancybox="gallery-img"
                                      to="#"
                                      title="Demo     04"
                                    >
                                      <i className="ti ti-eye" />
                                    </Link>
                                    <Link to="#">
                                      <i className="ti ti-download" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="text-center">
                                <Link
                                  className="gallery-img view-all link-primary d-inline-flex align-items-center justify-content-center mt-3"
                                  to="#"
                                  onClick={() => setOpen1(true)}
                                  data-fancybox="gallery-img"
                                >
                                  All Images
                                  <i className="ti ti-arrow-right ms-2" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <Link
                            to="#"
                            className="accordion-button collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#media-video"
                            aria-expanded="false"
                            aria-controls="media-video"
                          >
                            <i className="ti ti-video me-2" />
                            Videos
                          </Link>
                        </h2>
                        <div
                          id="media-video"
                          className="accordion-collapse collapse"
                          data-bs-parent="#mediafile"
                        >
                          <div className="accordion-body">
                            <div className="chat-video">
                              <Link
                                to="#"
                                data-fancybox=""
                                className="fancybox video-img"
                                onClick={handleOpenModal}
                              >
                                <img
                                  src="assets/img/video/video.jpg"
                                  alt="img"
                                />
                                <span>
                                  <i className="ti ti-player-play-filled" />
                                </span>
                              </Link>
                            </div>
                            <VideoModal
                              show={showModal}
                              handleClose={handleCloseModal}
                              videoUrl={videoUrl}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <Link
                            to="#"
                            className="accordion-button collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#media-links"
                            aria-expanded="false"
                            aria-controls="media-links"
                          >
                            <i className="ti ti-unlink me-2" />
                            Links
                          </Link>
                        </h2>
                        <div
                          id="media-links"
                          className="accordion-collapse collapse"
                          data-bs-parent="#mediafile"
                        >
                          <div className="accordion-body">
                            <div className="link-item">
                              <span className="link-icon">
                                <img
                                  src="assets/img/icons/github-icon.svg"
                                  alt="icon"
                                />
                              </span>
                              <div className="ms-2">
                                <p>https://segmentfault.com/u/ans</p>
                              </div>
                            </div>
                            <div className="link-item">
                              <span className="link-icon">
                                <img
                                  src="assets/img/icons/info-icon.svg"
                                  alt="icon"
                                />
                              </span>
                              <div className="ms-2">
                                <p>https://segmentfault.com/u/ans</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <Link
                            to="#"
                            className="accordion-button collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#media-document"
                            aria-expanded="false"
                            aria-controls="media-document"
                          >
                            <i className="ti ti-unlink me-2" />
                            Documents
                          </Link>
                        </h2>
                        <div
                          id="media-document"
                          className="accordion-collapse collapse"
                          data-bs-parent="#mediafile"
                        >
                          <div className="accordion-body">
                            <div className="document-item">
                              <div className="d-flex align-items-center">
                                <span className="document-icon">
                                  <i className="ti ti-file-zip" />
                                </span>
                                <div className="ms-2">
                                  <h6>Ecommerce.zip</h6>
                                  <p>10.25 MB zip file</p>
                                </div>
                              </div>
                              <Link to="#" className="download-icon">
                                <i className="ti ti-download" />
                              </Link>
                            </div>
                            <div className="document-item">
                              <div className="d-flex align-items-center">
                                <span className="document-icon">
                                  <i className="ti ti-video" />
                                </span>
                                <div className="ms-2">
                                  <h6>video-1.mp4</h6>
                                  <p>20.50 MB video file</p>
                                </div>
                              </div>
                              <Link to="#" className="download-icon">
                                <i className="ti ti-download" />
                              </Link>
                            </div>
                            <div className="document-item">
                              <div className="d-flex align-items-center">
                                <span className="document-icon">
                                  <i className="ti ti-music" />
                                </span>
                                <div className="ms-2">
                                  <h6>Ecommerce.zip</h6>
                                  <p>6.25 MB audio file</p>
                                </div>
                              </div>
                              <Link to="#" className="download-icon">
                                <i className="ti ti-download" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-wrapper other-info">
                <h5 className="sub-title">Common in 4 Groups</h5>
                <div className="card">
                  <div className="card-body list-group profile-item">
                    <Link to="#" className="list-group-item">
                      <div className="d-flex align-items-center">
                        <div className="avatar avatar-lg bg-skyblue rounded-circle me-2">
                          GU
                        </div>
                        <div className="chat-user-info">
                          <h6>Gustov _family</h6>
                          <p>
                            Mark, Elizabeth, Aaron,{" "}
                            <span className="text-primary">More...</span>
                          </p>
                        </div>
                      </div>
                      <span className="link-icon">
                        <i className="ti ti-chevron-right" />
                      </span>
                    </Link>
                    <Link to="#" className="list-group-item border-0">
                      <div className="d-flex align-items-center">
                        <div className="avatar avatar-lg bg-info rounded-circle me-2">
                          AM
                        </div>
                        <div className="chat-user-info">
                          <h6>AM Technology</h6>
                          <p>
                            Roper, Deborah, David,{" "}
                            <span className="text-primary">More.. .</span>
                          </p>
                        </div>
                      </div>
                      <span className="link-icon">
                        <i className="ti ti-chevron-right" />
                      </span>
                    </Link>
                    <div className="text-center">
                      <Link
                        to="#"
                        className="view-all link-primary d-inline-flex align-items-center justify-content-center"
                      >
                        More Groups
                        <i className="ti ti-arrow-right ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-wrapper other-info mb-0">
                <h5 className="sub-title">Others</h5>
                <div className="card mb-0">
                  <div className="card-body list-group profile-item">
                    <Link
                      to="#"
                      className="list-group-item"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#contact-favourite"
                    >
                      <div className="profile-info">
                        <h6>
                          <i className="ti ti-graph me-2 text-default" />
                          Favorites
                        </h6>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="badge badge-danger count-message me-1">
                          12
                        </span>
                        <span className="link-icon">
                          <i className="ti ti-chevron-right" />
                        </span>
                      </div>
                    </Link>
                    <Link to="#" className="list-group-item">
                      <div className="profile-info">
                        <h6>
                          <i className="ti ti-volume-off me-2 text-warning" />
                          Mute Notifications
                        </h6>
                      </div>
                      <div>
                        <span className="link-icon">
                          <i className="ti ti-chevron-right" />
                        </span>
                      </div>
                    </Link>
                    <Link to="#" className="list-group-item">
                      <div className="profile-info">
                        <h6>
                          <i className="ti ti-user-off me-2 text-info" />
                          Block Users
                        </h6>
                      </div>
                      <div>
                        <span className="link-icon">
                          <i className="ti ti-chevron-right" />
                        </span>
                      </div>
                    </Link>
                    <Link to="#" className="list-group-item">
                      <div className="profile-info">
                        <h6>
                          <i className="ti ti-user-x me-2 text-purple" />
                          Report Users
                        </h6>
                      </div>
                      <div>
                        <span className="link-icon">
                          <i className="ti ti-chevron-right" />
                        </span>
                      </div>
                    </Link>
                    <Link
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete-chat"
                      className="list-group-item"
                    >
                      <div className="profile-info">
                        <h6>
                          <i className="ti ti-trash me-2 text-danger" />
                          Delete Chat
                        </h6>
                      </div>
                      <div>
                        <span className="link-icon">
                          <i className="ti ti-chevron-right" />
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Contact Info */}
    </>
  );
};

export default ContactInfo;
