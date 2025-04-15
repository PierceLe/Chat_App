import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ContactInfo from "../../../core/modals/contact-info-off-canva";
import ContactFavourite from "../../../core/modals/contact-favourite-canva";
import { Tooltip } from "antd";
import ForwardMessage from "../../../core/modals/forward-message";
import MessageDelete from "../../../core/modals/message-delete";
import Scrollbars from "react-custom-scrollbars-2";
import { all_routes } from "../../router/all_routes";

const Chat = () => {
  const [open1, setOpen1] = useState(false);
  const [showReply, setShowReply] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showEmoji, setShowEmoji] = useState<Record<number, boolean>>({});
  const toggleEmoji = (groupId: number) => {
    setShowEmoji((prev) => ({
      ...prev,
      [groupId]: !prev[groupId], // Toggle the state for this specific group
    }));
  };
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

  const { room_id } = useParams();
  useEffect(() => {
    console.log(room_id);
    console.log("XXXXXXX");
  }, [room_id]);

  return (
    <>
      {/* Chat */}
      <div className={`chat chat-messages show`} id="middle">
        <div>
          <div className="chat-header">
            <div className="user-details">
              <div className="d-xl-none">
                <Link className="text-muted chat-close me-2" to="#">
                  <i className="fas fa-arrow-left" />
                </Link>
              </div>
              <div className="avatar avatar-lg online flex-shrink-0">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-06.jpg"
                  className="rounded-circle"
                  alt="image"
                />
              </div>
              <div className="ms-2 overflow-hidden">
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
                  <Tooltip title="Contact Info" placement="bottom">
                    <Link
                      to="#"
                      className="btn"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#contact-profile"
                    >
                      <i className="ti ti-info-circle" />
                    </Link>
                  </Tooltip>
                </li>
                <li>
                  <Link className="btn no-bg" to="#" data-bs-toggle="dropdown">
                    <i className="ti ti-dots-vertical" />
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <Link to={all_routes.dashboard} className="dropdown-item">
                        <i className="ti ti-x me-2" />
                        Close Chat
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item"
                        data-bs-toggle="modal"
                        data-bs-target="#mute-notification"
                      >
                        <i className="ti ti-volume-off me-2" />
                        Mute Notification
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item"
                        data-bs-toggle="modal"
                        data-bs-target="#disappearing-messages"
                      >
                        <i className="ti ti-clock-hour-4 me-2" />
                        Disappearing Message
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item"
                        data-bs-toggle="modal"
                        data-bs-target="#clear-chat"
                      >
                        <i className="ti ti-clear-all me-2" />
                        Clear Message
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item"
                        data-bs-toggle="modal"
                        data-bs-target="#delete-chat"
                      >
                        <i className="ti ti-trash me-2" />
                        Delete Chat
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item"
                        data-bs-toggle="modal"
                        data-bs-target="#report-user"
                      >
                        <i className="ti ti-thumb-down me-2" />
                        Report
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item"
                        data-bs-toggle="modal"
                        data-bs-target="#block-user"
                      >
                        <i className="ti ti-ban me-2" />
                        Block
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* Chat Search */}
            <div
              className={`chat-search search-wrap contact-search ${showSearch ? "visible-chat" : ""}`}
            >
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
                        <span className="msg-read success">
                          <i className="ti ti-checks" />
                        </span>
                      </h6>
                    </div>
                    <div className="chat-info">
                      <div className="message-content">
                        Hi there! I'm interested in your services.
                        <div className="emoj-group">
                          <ul>
                            <li className="emoj-action">
                              <Link to="#" onClick={() => toggleEmoji(1)}>
                                <i className="ti ti-mood-smile" />
                              </Link>
                              <div
                                className="emoj-group-list"
                                onClick={() => toggleEmoji(1)}
                                style={{
                                  display: showEmoji[1] ? "block" : "none",
                                }}
                              >
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
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-03.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-10.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-09.svg"
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
                            </li>
                            <li>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#forward-message"
                              >
                                <i className="ti ti-arrow-forward-up" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="chat-actions">
                        <Link className="#" to="#" data-bs-toggle="dropdown">
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              className="dropdown-item"
                              onClick={() => setShowReply(true)}
                              to="#"
                            >
                              <i className="ti ti-arrow-back-up me-2" />
                              Reply
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-arrow-forward-up-double me-2" />
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
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#message-delete"
                            >
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
                        Can you tell me more about what you offer?, Can you
                        explain it breifly...
                        <div className="emoj-group">
                          <ul>
                            <li className="emoj-action">
                              <Link to="#" onClick={() => toggleEmoji(2)}>
                                <i className="ti ti-mood-smile" />
                              </Link>
                              <div
                                className="emoj-group-list"
                                onClick={() => toggleEmoji(2)}
                                style={{
                                  display: showEmoji[2] ? "block" : "none",
                                }}
                              >
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
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-03.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-10.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-09.svg"
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
                            </li>
                            <li>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#forward-message"
                              >
                                <i className="ti ti-arrow-forward-up" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="chat-actions">
                        <Link className="#" to="#" data-bs-toggle="dropdown">
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              className="dropdown-item"
                              onClick={() => setShowReply(true)}
                              to="#"
                            >
                              <i className="ti ti-arrow-back-up me-2" />
                              Reply
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-arrow-forward-up-double me-2" />
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
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#message-delete"
                            >
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
                        <span className="msg-read success">
                          <i className="ti ti-checks" />
                        </span>
                      </h6>
                    </div>
                    <div className="chat-info">
                      <div className="chat-actions">
                        <Link className="#" to="#" data-bs-toggle="dropdown">
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              className="dropdown-item"
                              onClick={() => setShowReply(true)}
                              to="#"
                            >
                              <i className="ti ti-arrow-back-up me-2" />
                              Reply
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-arrow-forward-up-double me-2" />
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
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#message-delete"
                            >
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
                        Hello! Absolutely, we provide a range of services
                        tailored to meet various business needs. Could you
                        specify what you're looking for?
                        <div className="emoj-group">
                          <ul>
                            <li className="emoj-action">
                              <Link to="#" onClick={() => toggleEmoji(3)}>
                                <i className="ti ti-mood-smile" />
                              </Link>
                              <div
                                className="emoj-group-list"
                                onClick={() => toggleEmoji(3)}
                                style={{
                                  display: showEmoji[3] ? "block" : "none",
                                }}
                              >
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
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-03.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-10.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-09.svg"
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
                            </li>
                            <li>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#forward-message"
                              >
                                <i className="ti ti-arrow-forward-up" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="emonji-wrap">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/icons/emonji-02.svg"
                          className="me-2"
                          alt="icon"
                        />
                        24
                      </Link>
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/icons/emonji-03.svg"
                          className="me-2"
                          alt="icon"
                        />
                        15
                      </Link>
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/icons/emonji-04.svg"
                          className="me-2"
                          alt="icon"
                        />
                        15
                      </Link>
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
                <div className="chat-line">
                  <span className="chat-date">Today, July 24</span>
                </div>
                <div className="chats">
                  <div className="chat-avatar">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-06.jpg"
                      className="rounded-circle dreams_chat"
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
                  </div>
                </div>
                <div className="chats chats-right">
                  <div className="chat-content">
                    <div className="chat-profile-name justify-content-end">
                      <h6>
                        You
                        <i className="ti ti-circle-filled fs-7 mx-2" />
                        <span className="chat-time">02:39 PM</span>
                        <span className="msg-read success">
                          <i className="ti ti-checks" />
                        </span>
                      </h6>
                    </div>
                    <div className="message-content">
                      <div className="file-attach">
                        <span className="file-icon">
                          <i className="ti ti-files" />
                        </span>
                        <div className="ms-2 overflow-hidden">
                          <h6 className="mb-1">Ecommerce.zip</h6>
                          <p>14.23 KB</p>
                        </div>
                        <Link to="#" className="download-icon">
                          <i className="ti ti-download" />
                        </Link>
                      </div>
                      <div className="emoj-group wrap-emoji-group ">
                        <ul>
                          <li
                            className="emoj-action"
                            onClick={() => toggleEmoji(4)}
                          >
                            <Link to="#">
                              <i className="ti ti-mood-smile" />
                            </Link>
                            <div
                              className="emoj-group-list"
                              onClick={() => toggleEmoji(4)}
                              style={{
                                display: showEmoji[4] ? "block" : "none",
                              }}
                            >
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
                          </li>
                          <li>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#forward-message"
                            >
                              <i className="ti ti-arrow-forward-up" />
                            </Link>
                          </li>
                        </ul>
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
                        <span className="msg-read success">
                          <i className="ti ti-checks" />
                        </span>
                      </h6>
                    </div>
                    <div className="chat-info">
                      <div className="message-content">
                        Hi there! I'm interested in learning more
                        <div className="emoj-group">
                          <ul>
                            <li className="emoj-action">
                              <Link to="#" onClick={() => toggleEmoji(5)}>
                                <i className="ti ti-mood-smile" />
                              </Link>
                              <div
                                className="emoj-group-list"
                                onClick={() => toggleEmoji(5)}
                                style={{
                                  display: showEmoji[5] ? "block" : "none",
                                }}
                              >
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
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-03.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-10.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-09.svg"
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
                            </li>
                            <li>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#forward-message"
                              >
                                <i className="ti ti-arrow-forward-up" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="chat-actions">
                        <Link className="#" to="#" data-bs-toggle="dropdown">
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              className="dropdown-item"
                              onClick={() => setShowReply(true)}
                              to="#"
                            >
                              <i className="ti ti-arrow-back-up me-2" />
                              Reply
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-arrow-forward-up-double me-2" />
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
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#message-delete"
                            >
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
                    <div className="emonji-wrap">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/icons/emonji-02.svg"
                          className="me-2"
                          alt="icon"
                        />
                        24
                      </Link>
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/icons/emonji-03.svg"
                          className="me-2"
                          alt="icon"
                        />
                        15
                      </Link>
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/icons/emonji-04.svg"
                          className="me-2"
                          alt="icon"
                        />
                        15
                      </Link>
                    </div>
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
                        <span className="msg-read success">
                          <i className="ti ti-checks" />
                        </span>
                      </h6>
                    </div>
                    <div className="chat-info">
                      <div className="message-content">
                        <div className="chat-img">
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
                        <Link
                          className="gallery-img view-all d-flex align-items-center justify-content-center mt-3"
                          to="#"
                          onClick={() => setOpen1(true)}
                          data-fancybox="gallery-img"
                        >
                          View All Images
                          <i className="ti ti-arrow-right ms-2" />
                        </Link>
                        <div className="emoj-group">
                          <ul>
                            <li className="emoj-action">
                              <Link to="#" onClick={() => toggleEmoji(6)}>
                                <i className="ti ti-mood-smile" />
                              </Link>
                              <div
                                className="emoj-group-list"
                                onClick={() => toggleEmoji(6)}
                                style={{
                                  display: showEmoji[6] ? "block" : "none",
                                }}
                              >
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
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-03.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-10.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-09.svg"
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
                            </li>
                            <li>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#forward-message"
                              >
                                <i className="ti ti-arrow-forward-up" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="chat-actions">
                        <Link className="#" to="#" data-bs-toggle="dropdown">
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              className="dropdown-item"
                              onClick={() => setShowReply(true)}
                              to="#"
                            >
                              <i className="ti ti-arrow-back-up me-2" />
                              Reply
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-arrow-forward-up-double me-2" />
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
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#message-delete"
                            >
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
                        <span className="msg-read success">
                          <i className="ti ti-checks" />
                        </span>
                      </h6>
                    </div>
                    <div className="chat-info">
                      <div className="chat-actions">
                        <Link className="#" to="#" data-bs-toggle="dropdown">
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              className="dropdown-item"
                              onClick={() => setShowReply(true)}
                              to="#"
                            >
                              <i className="ti ti-arrow-back-up me-2" />
                              Reply
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-arrow-forward-up-double me-2" />
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
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#message-delete"
                            >
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
                        Send me your Profile Video if Any??
                        <div className="emoj-group">
                          <ul>
                            <li className="emoj-action">
                              <Link to="#" onClick={() => toggleEmoji(7)}>
                                <i className="ti ti-mood-smile" />
                              </Link>
                              <div
                                className="emoj-group-list"
                                onClick={() => toggleEmoji(7)}
                                style={{
                                  display: showEmoji[7] ? "block" : "none",
                                }}
                              >
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
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-03.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-10.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-09.svg"
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
                            </li>
                            <li>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#forward-message"
                              >
                                <i className="ti ti-arrow-forward-up" />
                              </Link>
                            </li>
                          </ul>
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
                        <span className="msg-read success">
                          <i className="ti ti-checks" />
                        </span>
                      </h6>
                    </div>
                    <div className="chat-info">
                      <div className="message-content">
                        <div className="message-link">
                          <div className="link-img">
                            <ImageWithBasePath
                              src="assets/img/icons/github.svg"
                              alt="Icon"
                            />
                          </div>
                          <Link to="#" className="link-primary mt-2">
                            https://segmentfault.com/u/guanguans/articles
                          </Link>
                        </div>
                        <div className="emoj-group">
                          <ul>
                            <li className="emoj-action">
                              <Link to="#" onClick={() => toggleEmoji(8)}>
                                <i className="ti ti-mood-smile" />
                              </Link>
                              <div
                                className="emoj-group-list"
                                onClick={() => toggleEmoji(8)}
                                style={{
                                  display: showEmoji[8] ? "block" : "none",
                                }}
                              >
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
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-03.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-10.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-09.svg"
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
                            </li>
                            <li>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#forward-message"
                              >
                                <i className="ti ti-arrow-forward-up" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="chat-actions">
                        <Link className="#" to="#" data-bs-toggle="dropdown">
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              className="dropdown-item"
                              onClick={() => setShowReply(true)}
                              to="#"
                            >
                              <i className="ti ti-arrow-back-up me-2" />
                              Reply
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-arrow-forward-up-double me-2" />
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
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#message-delete"
                            >
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
                        <div className="chat-forward">
                          <div className="forward-text text-primary">
                            <i className="ti ti-arrow-forward me-2" />
                            Forward
                          </div>
                        </div>
                        <div className="file-attach">
                          <span className="file-icon">
                            <i className="ti ti-files" />
                          </span>
                          <div className="ms-2 overflow-hidden">
                            <h6 className="mb-1">Ecommerce.zip</h6>
                            <p>14.23 KB</p>
                          </div>
                          <Link to="#" className="download-icon">
                            <i className="ti ti-download" />
                          </Link>
                        </div>
                        <div className="emoj-group">
                          <ul>
                            <li className="emoj-action">
                              <Link to="#" onClick={() => toggleEmoji(9)}>
                                <i className="ti ti-mood-smile" />
                              </Link>
                              <div
                                className="emoj-group-list"
                                onClick={() => toggleEmoji(9)}
                                style={{
                                  display: showEmoji[9] ? "block" : "none",
                                }}
                              >
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
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-03.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-10.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-09.svg"
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
                            </li>
                            <li>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#forward-message"
                              >
                                <i className="ti ti-arrow-forward-up" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="chat-actions">
                        <Link className="#" to="#" data-bs-toggle="dropdown">
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              className="dropdown-item"
                              onClick={() => setShowReply(true)}
                              to="#"
                            >
                              <i className="ti ti-arrow-back-up me-2" />
                              Reply
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-arrow-forward-up-double me-2" />
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
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#message-delete"
                            >
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
                        <span className="msg-read success">
                          <i className="ti ti-checks" />
                        </span>
                      </h6>
                    </div>
                    <div className="chat-info">
                      <div className="chat-actions">
                        <Link className="#" to="#" data-bs-toggle="dropdown">
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              className="dropdown-item"
                              onClick={() => setShowReply(true)}
                              to="#"
                            >
                              <i className="ti ti-arrow-back-up me-2" />
                              Reply
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-arrow-forward-up-double me-2" />
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
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#message-delete"
                            >
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
                        Send me your Profile Video if Any??
                        <div className="emoj-group">
                          <ul>
                            <li className="emoj-action">
                              <Link to="#" onClick={() => toggleEmoji(10)}>
                                <i className="ti ti-mood-smile" />
                              </Link>
                              <div
                                className="emoj-group-list"
                                onClick={() => toggleEmoji(10)}
                                style={{
                                  display: showEmoji[10] ? "block" : "none",
                                }}
                              >
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
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-03.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-10.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-09.svg"
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
                            </li>
                            <li>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#forward-message"
                              >
                                <i className="ti ti-arrow-forward-up" />
                              </Link>
                            </li>
                          </ul>
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
                        <span className="msg-read success">
                          <i className="ti ti-checks" />
                        </span>
                      </h6>
                    </div>
                    <div className="chat-info">
                      <div className="message-content">
                        <div className="message-video">
                          <video width={400} controls>
                            <source
                              src="assets/img/video/video.mp4"
                              type="video/mp4"
                            />
                            Your browser does not support HTML5 video.
                          </video>
                        </div>
                        <div className="emoj-group">
                          <ul>
                            <li className="emoj-action">
                              <Link to="#" onClick={() => toggleEmoji(11)}>
                                <i className="ti ti-mood-smile" />
                              </Link>
                              <div
                                className="emoj-group-list"
                                onClick={() => toggleEmoji(11)}
                                style={{
                                  display: showEmoji[11] ? "block" : "none",
                                }}
                              >
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
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-03.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-10.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-09.svg"
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
                            </li>
                            <li>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#forward-message"
                              >
                                <i className="ti ti-arrow-forward-up" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="chat-actions">
                        <Link className="#" to="#" data-bs-toggle="dropdown">
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              className="dropdown-item"
                              onClick={() => setShowReply(true)}
                              to="#"
                            >
                              <i className="ti ti-arrow-back-up me-2" />
                              Reply
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-arrow-forward-up-double me-2" />
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
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#message-delete"
                            >
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
                        <span className="msg-read success">
                          <i className="ti ti-checks" />
                        </span>
                      </h6>
                    </div>
                    <div className="chat-info">
                      <div className="chat-actions">
                        <Link className="#" to="#" data-bs-toggle="dropdown">
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              className="dropdown-item"
                              onClick={() => setShowReply(true)}
                              to="#"
                            >
                              <i className="ti ti-arrow-back-up me-2" />
                              Reply
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-arrow-forward-up-double me-2" />
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
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#message-delete"
                            >
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
                        Thanks for Sharing!!! Can we have a call
                        <div className="emoj-group">
                          <ul>
                            <li className="emoj-action">
                              <Link to="#" onClick={() => toggleEmoji(12)}>
                                <i className="ti ti-mood-smile" />
                              </Link>
                              <div
                                className="emoj-group-list"
                                onClick={() => toggleEmoji(12)}
                                style={{
                                  display: showEmoji[12] ? "block" : "none",
                                }}
                              >
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
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-03.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-10.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-09.svg"
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
                            </li>
                            <li>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#forward-message"
                              >
                                <i className="ti ti-arrow-forward-up" />
                              </Link>
                            </li>
                          </ul>
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
                        <span className="msg-read success">
                          <i className="ti ti-checks" />
                        </span>
                      </h6>
                    </div>
                    <div className="chat-info">
                      <div className="message-content">
                        <div className="chat-profile-name">
                          <h6>You</h6>
                        </div>
                        <div className="message-reply">
                          Thanks for Sharing!!! Can we have a call??
                        </div>
                        Yes Please
                        <div className="emoj-group">
                          <ul>
                            <li className="emoj-action">
                              <Link to="#" onClick={() => toggleEmoji(13)}>
                                <i className="ti ti-mood-smile" />
                              </Link>
                              <div
                                className="emoj-group-list"
                                onClick={() => toggleEmoji(13)}
                                style={{
                                  display: showEmoji[13] ? "block" : "none",
                                }}
                              >
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
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-03.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-10.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-09.svg"
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
                            </li>
                            <li>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#forward-message"
                              >
                                <i className="ti ti-arrow-forward-up" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="chat-actions">
                        <Link className="#" to="#" data-bs-toggle="dropdown">
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              className="dropdown-item"
                              onClick={() => setShowReply(true)}
                              to="#"
                            >
                              <i className="ti ti-arrow-back-up me-2" />
                              Reply
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-arrow-forward-up-double me-2" />
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
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#message-delete"
                            >
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
                          <Link to="#" className="download-icon">
                            <i className="ti ti-download" />
                          </Link>
                        </div>
                        <div className="emoj-group">
                          <ul>
                            <li className="emoj-action">
                              <Link to="#" onClick={() => toggleEmoji(14)}>
                                <i className="ti ti-mood-smile" />
                              </Link>
                              <div
                                className="emoj-group-list"
                                onClick={() => toggleEmoji(14)}
                                style={{
                                  display: showEmoji[14] ? "block" : "none",
                                }}
                              >
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
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-03.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-10.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-09.svg"
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
                            </li>
                            <li>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#forward-message"
                              >
                                <i className="ti ti-arrow-forward-up" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="chat-actions">
                        <Link className="#" to="#" data-bs-toggle="dropdown">
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              className="dropdown-item"
                              onClick={() => setShowReply(true)}
                              to="#"
                            >
                              <i className="ti ti-arrow-back-up me-2" />
                              Reply
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-arrow-forward-up-double me-2" />
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
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#message-delete"
                            >
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
                        <span className="msg-read success">
                          <i className="ti ti-checks" />
                        </span>
                      </h6>
                    </div>
                    <div className="chat-info">
                      <div className="chat-actions">
                        <Link className="#" to="#" data-bs-toggle="dropdown">
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              className="dropdown-item"
                              onClick={() => setShowReply(true)}
                              to="#"
                            >
                              <i className="ti ti-arrow-back-up me-2" />
                              Reply
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <i className="ti ti-arrow-forward-up-double me-2" />
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
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#message-delete"
                            >
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
                          <Link to="#" className="download-icon">
                            <i className="ti ti-download" />
                          </Link>
                        </div>
                        <div className="emoj-group">
                          <ul>
                            <li className="emoj-action">
                              <Link to="#" onClick={() => toggleEmoji(15)}>
                                <i className="ti ti-mood-smile" />
                              </Link>
                              <div
                                className="emoj-group-list"
                                onClick={() => toggleEmoji(15)}
                                style={{
                                  display: showEmoji[15] ? "block" : "none",
                                }}
                              >
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
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-03.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-10.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <ImageWithBasePath
                                        src="assets/img/icons/emonji-09.svg"
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
                            </li>
                            <li>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#forward-message"
                              >
                                <i className="ti ti-arrow-forward-up" />
                              </Link>
                            </li>
                          </ul>
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
                        <span className="msg-read success">
                          <i className="ti ti-checks" />
                        </span>
                      </h6>
                    </div>
                    <div className="message-content">
                      <span className="animate-typing">
                        is typing
                        <span className="dot mx-1" />
                        <span className="dot me-1" />
                        <span className="dot" />
                      </span>
                      <div className="emoj-group">
                        <ul>
                          <li className="emoj-action">
                            <Link to="#" onClick={() => toggleEmoji(16)}>
                              <i className="ti ti-mood-smile" />
                            </Link>
                            <div
                              className="emoj-group-list"
                              onClick={() => toggleEmoji(16)}
                              style={{
                                display: showEmoji[16] ? "block" : "none",
                              }}
                            >
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
                          </li>
                          <li>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#forward-message"
                            >
                              <i className="ti ti-arrow-forward-up" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Scrollbars>
        </div>
        <div className="chat-footer">
          <form className="footer-form">
            <div className="chat-footer-wrap">
              <div className="form-item">
                <Link to="#" className="action-circle">
                  <i className="ti ti-microphone" />
                </Link>
              </div>
              <div className="form-wrap">
                <div
                  className={`chats reply-chat ${
                    showReply ? "d-flex" : "d-none"
                  }`}
                >
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
                        <div className="message-reply reply-content">
                          Thank you for your support
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link
                    to="#"
                    className="close-replay"
                    onClick={() => setShowReply(false)}
                  >
                    <i className="ti ti-x" />
                  </Link>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type Your Message"
                />
              </div>
              <div className="form-item emoj-action-foot">
                <Link
                  to="#"
                  className="action-circle"
                  onClick={() => toggleEmoji(17)}
                >
                  <i className="ti ti-mood-smile" />
                </Link>
                <div
                  className="emoj-group-list-foot down-emoji-circle"
                  onClick={() => toggleEmoji(17)}
                  style={{ display: showEmoji[17] ? "block" : "none" }}
                >
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
        </div>
      </div>
      {/* /Chat */}
      <ContactInfo />
      <ContactFavourite />
      <ForwardMessage />
      <MessageDelete />
    </>
  );
};

export default Chat;
