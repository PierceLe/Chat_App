import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import { Tooltip } from "antd";
import BlockUser from "../../../core/modals/block-user";
import ClearCalls from "../../../core/modals/clear-calls";
import NewCall from "../../../core/modals/new-call";
import Scrollbars from "react-custom-scrollbars-2";
const AllCalls = () => {
  const [showCall, setShowCall] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
  useEffect(() => {
    document.querySelectorAll(".chat-user-list").forEach(function (element) {
      element.addEventListener("click", function () {
        if (window.innerWidth <= 992) {
          const showChat = document.querySelector(".chat-messages");
          if (showChat) {
            showChat.classList.add("show");
          }
        }
      });
    });
    document.querySelectorAll(".chat-close").forEach(function (element) {
      element.addEventListener("click", function () {
        if (window.innerWidth <= 992) {
          const hideChat = document.querySelector(".chat-messages");
          if (hideChat) {
            hideChat.classList.remove("show");
          }
        }
      });
    });
  }, []);
  return (
    <>
      {/* Chat */}
      <div className="chat chat-messages show" id="middle">
        <div>
          <div className="chat-header">
            <div className="user-details">
              <div className="d-xl-none">
                <Link className="text-muted chat-close me-2" to="#">
                  <i className="fas fa-arrow-left" />
                </Link>
              </div>
              <div className="avatar avatar-lg online">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-06.jpg"
                  className="rounded-circle"
                  alt="image"
                />
              </div>
              <div className="ms-2">
                <h6>Edward Lietz</h6>
                <span className="last-seen">Online</span>
              </div>
            </div>
            <div className="chat-options">
              <ul>
                <li>
                  <Tooltip title="Search" placement="bottom">
                    <Link
                      to="#"
                      className="btn chat-search-btn"
                      onClick={() => toggleSearch()}
                    >
                      <i className="ti ti-search" />
                    </Link>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip title="Video Call" placement="bottom">
                    <Link
                      to="#"
                      className="btn"
                      data-bs-toggle="modal"
                      data-bs-target="#video-call"
                    >
                      <i className="ti ti-video" />
                    </Link>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip title="Voice Call" placement="bottom">
                    <Link
                      to="#"
                      className="btn"
                      data-bs-toggle="modal"
                      data-bs-target="#voice_call"
                    >
                      <i className="ti ti-phone" />
                    </Link>
                  </Tooltip>
                </li>

                <li>
                  <Link className="btn no-bg" to="#" data-bs-toggle="dropdown">
                    <i className="ti ti-dots-vertical" />
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item">
                        <i className="ti ti-copy me-2"></i>Copy Number
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item"
                        data-bs-toggle="modal"
                        data-bs-target="#block-user"
                      >
                        <i className="ti ti-ban me-2"></i>Block
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* Chat Search */}
            <div className="chat-search search-wrap contact-search">
              <form>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Contacts"
                  />
                  <span className="input-group-text">
                    <i className="ti ti-search" />
                  </span>
                </div>
              </form>
            </div>
            {/* /Chat Search */}
          </div>
          <Scrollbars
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
            autoHeight
            autoHeightMin={0}
            autoHeightMax="88vh"
            thumbMinSize={30}
            universal={false}
            hideTracksWhenNotNeeded={true}
          >
            <div className="chat-body chat-page-group ">
              <div className="messages">
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
                        <span className="msg-read success" />
                      </h6>
                    </div>
                    <div className="chat-info">
                      <div className="message-content">
                        <div className="file-attach">
                          <div className="d-flex align-items-center">
                            <span className="file-icon bg-danger text-white">
                              <i className="ti ti-phone-call" />
                            </span>
                            <div className="ms-2 overflow-hidden">
                              <h6 className="mb-1 text-truncate">
                                Missed Audio Call
                              </h6>
                              <p>10 Min 23 Sec</p>
                            </div>
                          </div>
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
                              Reply
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Forward
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-file-export me-2" />
                              Copy
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
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
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-box-align-right me-2" />
                              Archeive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chat
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chats chats-right">
                  <div className="chat-content">
                    <div className="chat-profile-name text-end">
                      <h6>
                        You
                        <i className="ti ti-circle-filled fs-7 mx-2" />
                        <span className="chat-time">02:39 PM</span>
                        <span className="msg-read success" />
                      </h6>
                    </div>
                    <div className="chat-info">
                      <div className="chat-actions">
                        <Link className="#" to="#" data-bs-toggle="dropdown">
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Reply
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Forward
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-file-export me-2" />
                              Copy
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
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
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-box-align-right me-2" />
                              Archeive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chat
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="message-content">
                        <div className="file-attach">
                          <span className="file-icon bg-success text-white">
                            <i className="ti ti-phone-incoming" />
                          </span>
                          <div className="ms-2 overflow-hidden">
                            <h6 className="mb-1">Audio Call Ended</h6>
                            <p>07 Min 34 Sec</p>
                          </div>
                        </div>
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
                        <span className="msg-read success" />
                      </h6>
                    </div>
                    <div className="chat-info">
                      <div className="message-content">
                        <div className="file-attach">
                          <div className="d-flex align-items-center">
                            <span className="file-icon bg-danger text-white">
                              <i className="ti ti-video" />
                            </span>
                            <div className="ms-2 overflow-hidden">
                              <h6 className="mb-1 text-truncate">
                                Missed Video Call
                              </h6>
                              <p>10 Min 23 Sec</p>
                            </div>
                          </div>
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
                              Reply
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Forward
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-file-export me-2" />
                              Copy
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
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
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-box-align-right me-2" />
                              Archeive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chat
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chats chats-right">
                  <div className="chat-content">
                    <div className="chat-profile-name text-end">
                      <h6>
                        You
                        <i className="ti ti-circle-filled fs-7 mx-2" />
                        <span className="chat-time">02:39 PM</span>
                        <span className="msg-read success" />
                      </h6>
                    </div>
                    <div className="chat-info">
                      <div className="chat-actions">
                        <Link className="#" to="#" data-bs-toggle="dropdown">
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Reply
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Forward
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-file-export me-2" />
                              Copy
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
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
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-box-align-right me-2" />
                              Archeive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chat
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="message-content">
                        <div className="file-attach">
                          <span className="file-icon bg-success text-white">
                            <i className="ti ti-video" />
                          </span>
                          <div className="ms-2 overflow-hidden">
                            <h6 className="mb-1">Video Call Ended</h6>
                            <p>07 Min 34 Sec</p>
                          </div>
                        </div>
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
                        <span className="msg-read success" />
                      </h6>
                    </div>
                    <div className="chat-info">
                      <div className="message-content">
                        <div className="file-attach">
                          <div className="d-flex align-items-center">
                            <span className="file-icon bg-danger text-white">
                              <i className="ti ti-phone-call" />
                            </span>
                            <div className="ms-2 overflow-hidden">
                              <h6 className="mb-1 text-truncate">
                                Missed Audio Call
                              </h6>
                              <p>10 Min 23 Sec</p>
                            </div>
                          </div>
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
                              Reply
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Forward
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-file-export me-2" />
                              Copy
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
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
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-box-align-right me-2" />
                              Archeive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chat
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chats chats-right">
                  <div className="chat-content">
                    <div className="chat-profile-name text-end">
                      <h6>
                        You
                        <i className="ti ti-circle-filled fs-7 mx-2" />
                        <span className="chat-time">02:39 PM</span>
                        <span className="msg-read success" />
                      </h6>
                    </div>
                    <div className="chat-info">
                      <div className="chat-actions">
                        <Link className="#" to="#" data-bs-toggle="dropdown">
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Reply
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Forward
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-file-export me-2" />
                              Copy
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-heart me-2" />
                              Mark as Favourite
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
                              <i className="ti ti-check me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-box-align-right me-2" />
                              Archeive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-pinned me-2" />
                              Pin Chat
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="message-content">
                        <div className="file-attach">
                          <span className="file-icon bg-success text-white">
                            <i className="ti ti-video" />
                          </span>
                          <div className="ms-2 overflow-hidden">
                            <h6 className="mb-1">Video Call Ended</h6>
                            <p>07 Min 34 Sec</p>
                          </div>
                        </div>
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
                <div className="chats incoming d-flex">
                  <div className="chat-content flex-fill">
                    <div className="chat-info">
                      <div className="message-content">
                        <div className="file-attach">
                          <div className="d-flex align-items-center">
                            <span className="incoming-phone file-icon bg-success text-white">
                              <i className="ti ti-phone-call" />
                            </span>
                            <div className="ms-2 overflow-hidden me-2">
                              <h6 className="mb-1 text-truncate">
                                Incoming Call
                              </h6>
                              <span className="text-gray-5 fs-16">
                                Not answer yet
                              </span>
                            </div>
                            <div className="overlay">
                              <Link
                                to="#"
                                onClick={() => setShowCall(true)}
                                className="badge badge-success me-2"
                              >
                                Accept
                              </Link>
                              <Link to="#" className="badge badge-danger">
                                Reject
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chats incoming d-flex">
                  <div className="chat-content flex-fill">
                    <div className="chat-info">
                      <div className="message-content">
                        <div className="file-attach">
                          <div className="d-flex align-items-center">
                            <span className=" file-icon bg-success text-white">
                              <i className="ti ti-access-point" />
                            </span>
                            <div className="ms-2 overflow-hidden me-2">
                              <h6 className="mb-1 text-truncate">
                                Call In Progress
                              </h6>
                              <span className="text-gray-5 fs-16">
                                You answered
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chats incoming d-flex">
                  <div className="chat-content flex-fill">
                    <div className="chat-info">
                      <div className="message-content">
                        <div className="file-attach">
                          <div className="d-flex align-items-center">
                            <span className=" file-icon bg-white">
                              <i className="ti ti-phone-call" />
                            </span>
                            <div className="ms-2 overflow-hidden me-2">
                              <h6 className="mb-1 text-truncate">
                                Call Completed
                              </h6>
                              <span className="text-gray-5 fs-16">
                                10 Min 23 Sec
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chats incoming d-flex">
                  <div className="chat-content flex-fill">
                    <div className="chat-info">
                      <div className="message-content">
                        <div className="file-attach">
                          <div className="d-flex align-items-center">
                            <span className=" file-icon bg-danger text-white">
                              <i className="ti ti-phone-off" />
                            </span>
                            <div className="ms-2 overflow-hidden me-2">
                              <h6 className="mb-1 text-truncate">
                                Call Rejected
                              </h6>
                              <span className="text-gray-5 fs-16">
                                You rejected
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Scrollbars>
        </div>
        <div className="chat-footer position-relative">
          <form className="footer-form">
            <div className="chat-footer-wrap">
              <div className="form-item">
                <Link to="#" className="action-circle">
                  <i className="ti ti-microphone" />
                </Link>
              </div>
              <div className="form-wrap">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type Your Message"
                />
              </div>
              <div className="form-item emoj-action-foot">
                <Link to="#" className="action-circle">
                  <i className="ti ti-mood-smile" />
                </Link>
                <div className="emoj-group-list-foot down-emoji-circle">
                  <ul>
                    <li>
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/icons/emonji-02.svg"
                          alt="Icon"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/icons/emonji-05.svg"
                          alt="Icon"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/icons/emonji-06.svg"
                          alt="Icon"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/icons/emonji-07.svg"
                          alt="Icon"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/icons/emonji-08.svg"
                          alt="Icon"
                        />
                      </Link>
                    </li>
                    <li className="add-emoj">
                      <Link to="#">
                        <i className="ti ti-plus" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="form-item position-relative d-flex align-items-center justify-content-center ">
                <Link
                  to="#"
                  className="action-circle file-action position-absolute"
                >
                  <i className="ti ti-folder" />
                </Link>
                <input
                  type="file"
                  className="open-file position-relative"
                  name="files"
                  id="files"
                />
              </div>
              <div className="form-item">
                <Link to="#" data-bs-toggle="dropdown">
                  <i className="ti ti-dots-vertical" />
                </Link>
                <div className="dropdown-menu dropdown-menu-end p-3">
                  <Link to="#" className="dropdown-item">
                    <i className="ti ti-file-text me-2" />
                    Document
                  </Link>
                  <Link to="#" className="dropdown-item">
                    <i className="ti ti-camera-selfie me-2" />
                    Camera
                  </Link>
                  <Link to="#" className="dropdown-item">
                    <i className="ti ti-photo-up me-2" />
                    Gallery
                  </Link>
                  <Link to="#" className="dropdown-item">
                    <i className="ti ti-music me-2" />
                    Audio
                  </Link>
                  <Link to="#" className="dropdown-item">
                    <i className="ti ti-map-pin-share me-2" />
                    Location
                  </Link>
                  <Link to="#" className="dropdown-item">
                    <i className="ti ti-user-check me-2" />
                    Contact
                  </Link>
                </div>
              </div>
              <div className="form-btn">
                <button className="btn btn-primary" type="submit">
                  <i className="ti ti-send" />
                </button>
              </div>
            </div>
          </form>
          <div
            className={`card call-details-popup position-absolute ${showCall ? "show" : ""}`}
          >
            <div className="card-header">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <h4 className="me-2">Call Details</h4>
                  <span className="badge border border-primary  text-primary badge-sm me-2">
                    <i className="ti ti-point-filled" />
                    10:23
                  </span>
                </div>
                <Link
                  to="#"
                  className="float-end user-add bg-primary rounded d-flex justify-content-center align-items-center text-white"
                  data-bs-toggle="modal"
                  data-bs-target="#video_group"
                >
                  <i className="ti ti-user-plus" />
                </Link>
              </div>
            </div>
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="avatar avatar-lg me-2">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-17.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                </div>
                <div className="chat-user-info">
                  <div className="chat-user-msg">
                    <h6>Steve Merrell (you)</h6>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="avatar avatar-lg me-2">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-06.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                </div>
                <div className="chat-user-info">
                  <div className="chat-user-msg">
                    <h6>Edward Lietz</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer border-0 pt-0">
              <div className="call-controll-block d-flex align-items-center justify-content-center">
                <Link
                  to="#"
                  className="call-controll mute-bt d-flex align-items-center justify-content-center"
                >
                  <i className="ti ti-microphone" />
                </Link>
                <Link
                  to="#"
                  className="call-controll d-flex align-items-center justify-content-center"
                >
                  <i className="ti ti-volume" />
                </Link>
                <Link
                  to="#"
                  onClick={() => setShowCall(false)}
                  className="call-controll call-decline d-flex align-items-center justify-content-center"
                >
                  <i className="ti ti-phone" />
                </Link>
                <Link
                  to="#"
                  onClick={() => setShowCall(false)}
                  data-bs-toggle="modal"
                  data-bs-target="#voice_attend"
                  className="call-controll d-flex align-items-center justify-content-center"
                >
                  <i className="ti ti-maximize" />
                </Link>
                <Link
                  to="#"
                  className="call-controll d-flex align-items-center justify-content-center"
                >
                  <i className="ti ti-dots" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BlockUser />
      <NewCall />
      <ClearCalls />
      {/* /Chat */}
    </>
  );
};

export default AllCalls;
