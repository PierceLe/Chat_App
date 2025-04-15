import React from "react";
import ImageWithBasePath from "../common/imageWithBasePath";
import { Link } from "react-router-dom";

const ContactFavourite = () => {
  return (
    <>
      <>
        {/* Favourites Info */}
        <div
          className="chat-offcanvas fav-canvas offcanvas offcanvas-end"
          data-bs-scroll="true"
          data-bs-backdrop="false"
          tabIndex={-1}
          id="contact-favourite"
        >
          <div className="offcanvas-header">
            <h4 className="offcanvas-title">
              <Link
                to="#"
                data-bs-toggle="offcanvas"
                data-bs-target="#contact-profile"
                data-bs-dismiss="offcanvas"
              >
                <i className="ti ti-arrow-left me-2" />
              </Link>
              Favourites
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
            <div className="favourite-chats">
              <div className="text-end mb-4">
                <Link to="#" className="btn btn-light">
                  <i className="ti ti-heart-minus me-2" />
                  Mark all Unfavourite
                </Link>
              </div>
              <div className="chats">
                <div className="chat-avatar">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-06.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                </div>
                <div className="chat-content">
                  <div className="chat-profile-name">
                    <h6>
                      Edward Lietz
                      <i className="ti ti-circle-filled fs-7 mx-2" />
                      <span className="chat-time">02:39 PM</span>
                      <span className="msg-read success">
                        <i className="ti ti-checks" />
                      </span>
                    </h6>
                  </div>
                  <div className="chat-info">
                    <div className="message-content">
                      Thanks!!!, I ll Update you Once i check the Examples
                    </div>
                    <div className="chat-actions">
                      <Link className="#" to="#" data-bs-toggle="dropdown">
                        <i className="ti ti-dots-vertical" />
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-end p-3">
                        <li>
                          <Link className="dropdown-item" to="#">
                            <i className="ti ti-heart me-2" />
                            Unfavourite
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
                  </div>
                  <p>Saved on 23 Septemer 2024</p>
                </div>
              </div>
              <div className="chats">
                <div className="chat-avatar">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-04.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                </div>
                <div className="chat-content">
                  <div className="chat-profile-name">
                    <h6>
                      Carla Jenkins
                      <i className="ti ti-circle-filled fs-7 mx-2" />
                      <span className="chat-time">02:45 PM</span>
                      <span className="msg-read success">
                        <i className="ti ti-checks" />
                      </span>
                    </h6>
                  </div>
                  <div className="chat-info">
                    <div className="message-content bg-transparent p-0">
                      <div className="message-audio">
                        <audio controls>
                          <source
                            src="assets/img/audio/audio.mp3"
                            type="audio/mpeg"
                          />
                          Your browser does not support the audio element.
                        </audio>
                      </div>
                    </div>
                    <div className="chat-actions">
                      <Link className="#" to="#" data-bs-toggle="dropdown">
                        <i className="ti ti-dots-vertical" />
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-end p-3">
                        <li>
                          <Link className="dropdown-item" to="#">
                            <i className="ti ti-heart me-2" />
                            Unfavourite
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
                  </div>
                  <p>Saved on 26 Septemer 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Favourites Info */}
      </>
    </>
  );
};

export default ContactFavourite;
