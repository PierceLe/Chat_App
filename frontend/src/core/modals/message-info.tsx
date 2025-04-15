import React from "react";
import ImageWithBasePath from "../common/imageWithBasePath";
import { Link } from "react-router-dom";

const MessageInfo = () => {
  return (
    <>
      {/* Message Info */}
      <div
        className="chat-offcanvas fav-canvas offcanvas offcanvas-end"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex={-1}
        id="contact-message"
      >
        <div className="offcanvas-header">
          <h4 className="offcanvas-title">
            <Link to="#" data-bs-toggle="offcanvas" data-bs-dismiss="offcanvas">
              <i className="ti ti-arrow-left me-2" />
            </Link>
            Message Info
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
          <div className="info-chats">
            <div className="text-end mb-4">
              <Link to="#" className="btn btn-light">
                <i className="ti ti-heart-minus me-2" />
                Mark all Unfavourite
              </Link>
            </div>
            <div className="chats chats-right">
              <div className="chat-content">
                <div className="chat-info">
                  <div className="message-content">
                    Hey Edward! Doing well. Just finished up a client meeting.
                    How's everyone else?
                  </div>
                </div>
              </div>
              <div className="chat-avatar">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-17.jpg"
                  className="rounded-circle dreams_chat"
                  alt="image"
                />
              </div>
            </div>
            <h6 className="mb-4">
              <i className="ti ti-checks text-success me-2" />
              Read By
            </h6>
            <div className="d-flex align-items-center mb-4">
              <span className="avatar avatar-lg online">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-06.jpg"
                  alt="img"
                  className="rounded-circle"
                />
              </span>
              <div className="ms-2 overflow-hidden">
                <h6 className="text-truncate fw-normal mb-1">Edward Lietz</h6>
                <p>02:40 PM </p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-4">
              <span className="avatar avatar-lg online">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-01.jpg"
                  alt="img"
                  className="rounded-circle"
                />
              </span>
              <div className="ms-2 overflow-hidden">
                <h6 className="text-truncate fw-normal mb-1">Aaryian Jose</h6>
                <p>02:40 PM </p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-4">
              <span className="avatar avatar-lg online">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-02.jpg"
                  alt="img"
                  className="rounded-circle"
                />
              </span>
              <div className="ms-2 overflow-hidden">
                <h6 className="text-truncate fw-normal mb-1">Sarika Jain</h6>
                <p>02:40 PM </p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-0">
              <span className="avatar avatar-lg online">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-03.jpg"
                  alt="img"
                  className="rounded-circle"
                />
              </span>
              <div className="ms-2 overflow-hidden">
                <h6 className="text-truncate fw-normal mb-1">Clyde Smith</h6>
                <p>02:40 PM </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Message Info */}
    </>
  );
};

export default MessageInfo;
