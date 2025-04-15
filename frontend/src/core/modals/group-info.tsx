import React, { useState } from "react";
import { Link } from "react-router-dom";
import VideoModal from "../hooks/video-modal";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ImageWithBasePath from "../common/imageWithBasePath";

const GroupInfo = () => {
  const [open1, setOpen1] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const videoUrl = "https://www.youtube.com/embed/Mj9WJJNp5wA";
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <>
      {/* Group Info */}
      <div
        className="chat-offcanvas offcanvas offcanvas-end"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex={-1}
        id="contact-profile"
      >
        <div className="offcanvas-header">
          <h4 className="offcanvas-title">Group Info</h4>
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
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-06.jpg"
                    className="rounded-circle"
                    alt="img"
                  />
                </div>
                <h6>The Dream Team</h6>
                <p>Group - 40 Participants</p>
              </div>
              <div className="row gx-3">
                <div className="col">
                  <Link
                    className="action-wrap"
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#group_voice"
                  >
                    <i className="ti ti-phone" />
                    <p>Audio</p>
                  </Link>
                </div>
                <div className="col">
                  <Link
                    className="action-wrap"
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#group_video"
                  >
                    <i className="ti ti-video" />
                    <p>Video</p>
                  </Link>
                </div>
                <div className="col">
                  <Link className="action-wrap" to="#">
                    <i className="ti ti-brand-hipchat" />
                    <p>Chat</p>
                  </Link>
                </div>
                <div className="col">
                  <Link className="action-wrap" to="#">
                    <i className="ti ti-search" />
                    <p>Search</p>
                  </Link>
                </div>
              </div>
              <div className="content-wrapper">
                <h5 className="sub-title">Profile Info</h5>
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex profile-info-content justify-content-between align-items-center border-bottom pb-3 mb-3">
                      <div>
                        <h6 className="fs-14">Group Description</h6>
                        <p className="fs-16">Innovate. Create. Inspire.</p>
                      </div>
                      <Link to="#" className="link-icon">
                        <i className="ti ti-edit-circle" />
                      </Link>
                    </div>
                    <p className="fs-12">
                      Group created by Edward Lietz, on 18 Feb 2022 at 1:32 pm
                    </p>
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
                              <img src="assets/img/video/video.jpg" alt="img" />
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
                              <ImageWithBasePath
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
                              <ImageWithBasePath
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
              <div className="content-wrapper other-info mb-0">
                <h5 className="sub-title">Others</h5>
                <div className="card">
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
                    <Link
                      to="#"
                      className="list-group-item"
                      data-bs-toggle="modal"
                      data-bs-target="#mute-notification"
                    >
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
                    <Link
                      to="#"
                      className="list-group-item"
                      data-bs-toggle="modal"
                      data-bs-target="#msg-disapper"
                    >
                      <div className="profile-info">
                        <h6>
                          <i className="ti ti-user-off me-2 text-info" />
                          Disappearing Messages
                        </h6>
                      </div>
                      <div>
                        <span className="link-icon">
                          <i className="ti ti-chevron-right" />
                        </span>
                      </div>
                    </Link>
                    <div className="accordion accordion-flush">
                      <div className="accordion-item border-bottom">
                        <h2 className="accordion-header">
                          <Link
                            to="#"
                            className="accordion-button px-0 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#chatuser-encryption"
                            aria-expanded="false"
                            aria-controls="chatuser-collapse1"
                          >
                            <i className="ti ti-shield me-2 text-purple" />
                            Encryption
                          </Link>
                        </h2>
                        <div
                          id="chatuser-encryption"
                          className="accordion-collapse collapse"
                        >
                          <div className="accordion-body p-0 pb-3">
                            <p className="mb-2">
                              Messages are end-to-end encrypted
                            </p>
                            <div className="text-center">
                              <Link
                                className="view-all link-primary d-inline-flex align-items-center justify-content-center"
                                to="#"
                              >
                                Click to learn more
                                <i className="ti ti-arrow-right ms-2" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link
                      to="#"
                      className="list-group-item"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#group-settings"
                    >
                      <div className="profile-info">
                        <h6>
                          <i className="ti ti-settings me-2 text-primary" />
                          Group Settings
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
              <div className="content-wrapper other-info">
                <div className="d-flex align-items-center justify-content-between">
                  <h5 className="sub-title">40 Participants</h5>
                  <Link to="#" className="link-icon">
                    <i className="ti ti-search" />
                  </Link>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center overflow-hidden">
                            <span className="avatar avatar-lg online flex-shrink-0">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-02.jpg"
                                alt="img"
                                className="rounded-circle"
                              />
                            </span>
                            <div className="ms-2 overflow-hidden">
                              <h6 className="text-truncate mb-1">
                                Sarika Jain
                              </h6>
                              <p>Busy</p>
                            </div>
                          </div>
                          <div className="d-flex align-items-center">
                            <span className="badge badge-primary-transparent me-2">
                              Admin
                            </span>
                            <div className="dropdown">
                              <Link to="#" data-bs-toggle="dropdown">
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <ul className="dropdown-menu dropdown-menu-end p-3">
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-logout-2 me-2" />
                                    Exit Group
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-trash me-2" />
                                    Delete
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-pinned me-2" />
                                    Unpin Chat
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center overflow-hidden">
                            <span className="avatar avatar-lg online flex-shrink-0">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-17.jpg"
                                alt="img"
                                className="rounded-circle"
                              />
                            </span>
                            <div className="ms-2 overflow-hidden">
                              <h6 className="text-truncate mb-1">
                                Edward Lietz
                              </h6>
                              <p>Available</p>
                            </div>
                          </div>
                          <div className="d-flex align-items-center">
                            <span className="badge badge-primary-transparent me-2">
                              Admin
                            </span>
                            <div className="dropdown">
                              <Link to="#" data-bs-toggle="dropdown">
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <ul className="dropdown-menu dropdown-menu-end p-3">
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-logout-2 me-2" />
                                    Exit Group
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-trash me-2" />
                                    Delete
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-pinned me-2" />
                                    Unpin Chat
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center overflow-hidden">
                            <span className="avatar avatar-lg online flex-shrink-0">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-03.jpg"
                                alt="img"
                                className="rounded-circle"
                              />
                            </span>
                            <div className="ms-2 overflow-hidden">
                              <h6 className="text-truncate mb-1">
                                Clyde Smith
                              </h6>
                              <p>Available</p>
                            </div>
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="dropdown">
                              <Link to="#" data-bs-toggle="dropdown">
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <ul className="dropdown-menu dropdown-menu-end p-3">
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-logout-2 me-2" />
                                    Exit Group
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-trash me-2" />
                                    Delete
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-pinned me-2" />
                                    Unpin Chat
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center overflow-hidden">
                            <span className="avatar avatar-lg online flex-shrink-0">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-05.jpg"
                                alt="img"
                                className="rounded-circle"
                              />
                            </span>
                            <div className="ms-2 overflow-hidden">
                              <h6 className="text-truncate mb-1">
                                Federico Wells
                              </h6>
                              <p>Available</p>
                            </div>
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="dropdown">
                              <Link to="#" data-bs-toggle="dropdown">
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <ul className="dropdown-menu dropdown-menu-end p-3">
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-logout-2 me-2" />
                                    Exit Group
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-trash me-2" />
                                    Delete
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-pinned me-2" />
                                    Unpin Chat
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <Link
                        className="view-all link-primary d-inline-flex align-items-center justify-content-center"
                        to="#"
                      >
                        View All(35 more)
                        <i className="ti ti-arrow-right ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-wrapper other-info mb-0">
                <div className="card mb-0">
                  <div className="card-body list-group profile-item">
                    <Link
                      to="#"
                      className="list-group-item"
                      data-bs-toggle="modal"
                      data-bs-target="#group-logout"
                    >
                      <div className="profile-info">
                        <h6>
                          <i className="ti ti-logout-2 me-2 text-danger" />
                          Exit Group
                        </h6>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="link-icon">
                          <i className="ti ti-chevron-right" />
                        </span>
                      </div>
                    </Link>
                    <Link
                      to="#"
                      className="list-group-item"
                      data-bs-toggle="modal"
                      data-bs-target="#report-group"
                    >
                      <div className="profile-info">
                        <h6>
                          <i className="ti ti-thumb-down me-2 text-danger" />
                          Report User
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
      {/* /Group Info */}
    </>
  );
};

export default GroupInfo;
