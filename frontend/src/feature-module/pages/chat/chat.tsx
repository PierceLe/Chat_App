import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ContactInfo from "../../../core/modals/contact-info-off-canva";
import ContactFavourite from "../../../core/modals/contact-favourite-canva";
import { Avatar, Tooltip } from "antd";
import ForwardMessage from "../../../core/modals/forward-message";
import MessageDelete from "../../../core/modals/message-delete";
import Scrollbars from "react-custom-scrollbars-2";
import { all_routes } from "../../router/all_routes";
import {
  getAllMessInRoom,
  getMoreMessInRoom,
  MessageData,
  SendMessageData,
} from "../../../core/services/messageService";
import { UserData } from "../../../core/services/contactService";
import { useSelector } from "react-redux";
import { getMeSelector } from "../../../core/redux/selectors";
import { format } from "date-fns";
import { wsClient } from "../../../core/services/websocket";

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


  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

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

  const me: UserData = useSelector(getMeSelector);

  const [messages, setMessages] = useState(Array<MessageData>);

  const [newMessage, setNewMessage] = useState<string>("");

  const fetchApiGetMessInRoom = async (room_id: any) => {
    const result: Array<MessageData> = await getMoreMessInRoom(room_id, new Date());
    setMessages(result);
  };

  const fetchApiGetMoreMessInRoom = async (room_id: string) => {
    try {
      if (messages.length > 0){
        const lastMess = messages[0]
        setIsLoading(true)
        const result = await getMoreMessInRoom(room_id, lastMess.created_at)
        console.log("fetchApiGetMoreMessInRoom: ", result)
        if (result.length === 0){
          setHasMore(false)
        } else {
          setMessages((pre)=>[...result, ...pre])
        }
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleScroll = (values: any) => {
    if (scrollbarsRef.current) {
      const { scrollTop } = values;
      console.log(scrollTop, isLoading, hasMore)
      if (scrollTop === 0  && !isLoading && hasMore && room_id) {
        fetchApiGetMoreMessInRoom(room_id);
      }
    }
  }; 

  const { room_id } = useParams();

  const { state } = useLocation();

  useEffect(() => {
    console.log("ME: ", me)
    fetchApiGetMessInRoom(room_id);
    console.log("messages: ", messages);

    const handleMessage = (data: any) => {
      console.log("data: ", data);
      if (data.action === "chat" && data.data.room_id === room_id) {
        setMessages((prev) => [...prev, data.data]);
      }
    };
    wsClient.onMessage(handleMessage);
    return () => {
      wsClient.offMessage(handleMessage);
    };
  }, [room_id]);

  const scrollbarsRef = useRef<Scrollbars>(null);
  const scrollToBottom = () => {
    if (scrollbarsRef.current) {
      const scrollView = scrollbarsRef.current.getScrollTop();
      const scrollHeight = scrollbarsRef.current.getScrollHeight();
      const clientHeight = scrollbarsRef.current.getClientHeight();
      const isAtBottom = scrollHeight - scrollView <= clientHeight + 600; // Khoảng cách 100px
      if (isAtBottom) {
        scrollbarsRef.current.scrollToBottom();
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !room_id) return;

    const messageData: SendMessageData = {
      room_id,
      content: newMessage,
      file_url: null,
      message_type: 0,
    };

    wsClient.send({
      action: "chat",
      data : messageData
      });

    setNewMessage("");
    scrollToBottom();
  };

  const OneMessageInLeft = ({
    id,
    room_id,
    content,
    file_url,
    created_at,
    updated_at,
    sender,
  }: MessageData) => {
    return (
      <>
        <div className="chats" id={id}>
          <div className="chat-avatar">
            <Avatar
              size={32}
              src={
                sender.avatar_url === 'default'
                  ? 'assets/img/profiles/avatar-16.jpg'
                  : sender.avatar_url.includes('bucket')
                    ? `http://localhost:9990/${sender.avatar_url}`
                    : sender.avatar_url
              }
            />
          </div>
          <div className="chat-content">
            <div className="chat-profile-name">
              <h6>
                {`${sender.first_name} ${sender.last_name}`}
                <i className="ti ti-circle-filled fs-7 mx-2" />
                <span className="chat-time">
                  {format(created_at, "dd/MM/yyyy HH:mm:ss")}
                </span>
                <span className="msg-read success">
                  <i className="ti ti-checks" />
                </span>
              </h6>
            </div>
            <div className="chat-info">
              <div className="message-content">
                {content}
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
      </>
    );
  };

  const OneMessageInRight = ({
    id,
    room_id,
    content,
    file_url,
    created_at,
    updated_at,
    sender,
  }: MessageData) => {
    return (
      <>
        <div className="chats chats-right" id={id}>
          <div className="chat-content">
            <div className="chat-profile-name text-end">
              <h6>
                You
                <i className="ti ti-circle-filled fs-7 mx-2" />
                <span className="chat-time">
                  {format(created_at, "dd/MM/yyyy HH:mm:ss")}
                </span>
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
                {content}
              </div>
            </div>
          </div>
          <div className="chat-avatar">
            <Avatar
              size={32}
              src={
                me.avatar_url === 'default'
                  ? 'assets/img/profiles/avatar-16.jpg'
                  : me.avatar_url.includes('bucket')
                    ? `http://localhost:9990/${me.avatar_url}`
                    : me.avatar_url
              }
            />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
    
      {/* Chat */}
      <div className={`chat chat-messages show`} id="middle">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
          }}
          
          >
          <div style={{ flex: 1, overflowY: "auto" }}>
            <div className="chat-header">
              <div className="user-details">
                <div className="d-xl-none">
                  <Link className="text-muted chat-close me-2" to="#">
                    <i className="fas fa-arrow-left" />
                  </Link>
                </div>
                <div className="avatar avatar-lg online flex-shrink-0">
                  {state && (
                    <Avatar
                      size={32}
                      src={
                        state.friend_avatar_url === 'default'
                          ? 'assets/img/profiles/avatar-16.jpg'
                          : state.friend_avatar_url.includes('bucket')
                            ? `http://localhost:9990/${state.friend_avatar_url}`
                            : state.friend_avatar_url
                      }
                    />
                  )}
                </div>
                <div className="ms-2 overflow-hidden">
                  {state && (
                    <h6>{`${state.friend_frist_name} ${state.friend_last_name}`}</h6>
                  )}
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
              ref={scrollbarsRef}
              autoHide
              autoHideTimeout={1000}
              autoHideDuration={200}
              autoHeight
              autoHeightMin={0}
              autoHeightMax="88vh"
              thumbMinSize={30}
              universal={false}
              hideTracksWhenNotNeeded={true}
              onScrollFrame={handleScroll}
            >
              <div className="chat-body chat-page-group ">
                <div className="messages">
                  {messages.map((item) => {
                    if (item.sender.user_id === me.user_id) {
                      return (
                        <OneMessageInRight
                          key={item.id}
                          id={item.id}
                          room_id={item.room_id}
                          message_type={item.message_type}
                          content={item.content}
                          file_url={item.file_url}
                          created_at={item.created_at}
                          updated_at={item.updated_at}
                          sender={item.sender}
                        ></OneMessageInRight>
                      );
                    } else {
                      return (
                        <OneMessageInLeft
                          key={item.id}
                          id={item.id}
                          room_id={item.room_id}
                          message_type={item.message_type}
                          content={item.content}
                          file_url={item.file_url}
                          created_at={item.created_at}
                          updated_at={item.updated_at}
                          sender={item.sender}
                        ></OneMessageInLeft>
                      );
                    }
                  })}
                </div>
              </div>
            </Scrollbars>
          </div>
        </div>
        <div 
          className="chat-footer" 
          style={{
          borderTop: "1px solid #eee",
          background: "#fff",
          padding: "10px",
        }}>
          <form className="footer-form" onSubmit={handleSendMessage}>
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
                    {state && (
                      <Avatar
                        size={32}
                        src={
                          state.friend_avatar_url === 'default'
                            ? 'assets/img/profiles/avatar-16.jpg'
                            : state.friend_avatar_url.includes('bucket')
                              ? `http://localhost:9990/${state.friend_avatar_url}`
                              : state.friend_avatar_url
                        }
                      />
                    )}
                  </div>
                  <div className="chat-content">
                    <div className="chat-profile-name">
                      {state && (
                        <h6>
                          {`${state.friend_frist_name} ${state.friend_last_name}`}
                          <i className="ti ti-circle-filled fs-7 mx-2" />
                          <span className="chat-time">02:39 PM</span>
                          <span className="msg-read success">
                            <i className="ti ti-checks" />
                          </span>
                        </h6>
                      )}
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
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
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
