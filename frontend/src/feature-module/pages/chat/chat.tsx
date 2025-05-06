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
import { getEncryptedGroupKey } from "@/core/services/roomService";
import { decryptMessage, decryptSymmetricKey, encryptMessage } from "@/core/utils/encryption";

const Chat = () => {
  const [showReply, setShowReply] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showEmoji, setShowEmoji] = useState<Record<number, boolean>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [messages, setMessages] = useState<MessageData[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const [groupKey, setGroupKey] = useState<string>("");

  const me: UserData = useSelector(getMeSelector);
  const { room_id } = useParams<RouteParams>();
  const { state } = useLocation<LocationState>();
  const scrollbarsRef = useRef<Scrollbars>(null);
  const routes = all_routes;

  const toggleEmoji = (groupId: number): void => {
    setShowEmoji((prev) => ({
      ...prev,
      [groupId]: !prev[groupId],
    }));
  };

  const toggleSearch = (): void => {
    setShowSearch(!showSearch);
  };

  const fetchApiGetGroupKey = async (roomId: string): Promise<string | null> => {
    try {
      const encryptedGroupKey = await getEncryptedGroupKey(roomId);
      const privateKey = localStorage.getItem("privateKey");
      if (!privateKey || !encryptedGroupKey) {
        console.error("Missing privateKey or encryptedGroupKey");
        return null;
      }
      const groupKey = await decryptSymmetricKey(encryptedGroupKey, privateKey);
      setGroupKey(groupKey);
      return groupKey;
    } catch (error) {
      console.error("Error fetching group key:", error);
      return null;
    }
  };

  const fetchApiGetMessInRoom = async (roomId: string, groupKey: string): Promise<void> => {
    try {
      if (!roomId) {
        console.error("Invalid roomId: roomId is empty or undefined");
        return;
      }
      console.log(`Fetching messages for roomId: ${roomId}`);
      const result: MessageData[] = await getMoreMessInRoom(roomId, new Date());
      if (!Array.isArray(result)) {
        console.error("Invalid response from getMoreMessInRoom: result is not an array", result);
        return;
      }
      console.log(`Received ${result.length} messages`);
      if (groupKey) {
        console.log("Using groupKey for decryption:", groupKey);
        const decryptedMessages = await Promise.all(
          result.map(async (msg) => {
            try {
              if (!msg.content) {
                console.warn(`Message ${msg.id} has no content, skipping decryption`);
                return { ...msg, content: "" };
              }
              console.log(`Decrypting message ${msg.id} with content:`, msg.content);
              const decryptedContent = await decryptMessage(msg.content, groupKey);
              return { ...msg, content: decryptedContent };
            } catch (decryptError) {
              console.error(`Error decrypting message ${msg.id}:`, decryptError);
              return { ...msg, content: "" };
            }
          })
        );
        console.log("Decrypted messages:", decryptedMessages);
        setMessages(decryptedMessages);
      } else {
        console.warn("No groupKey available, using raw messages");
        setMessages(result);
      }
    } catch (error) {
      console.error("Error fetching messages:", {
        message: error.message,
        stack: error.stack,
        roomId,
      });
    }
  };

  const fetchApiGetMoreMessInRoom = async (roomId: string): Promise<void> => {
    try {
      if (!roomId) {
        console.error("Invalid roomId: roomId is empty or undefined");
        return;
      }
      if (!groupKey) {
        console.warn("No groupKey available, cannot decrypt messages");
        return;
      }
      if (messages.length === 0) {
        console.warn("No messages available to fetch more");
        return;
      }

      const lastMess = messages[0];
      if (!lastMess.created_at) {
        console.error("Invalid lastMess.created_at:", lastMess);
        return;
      }

      setIsLoading(true);
      console.log(`Fetching more messages for roomId: ${roomId}, before: ${lastMess.created_at.toISOString()}`);
      const result = await getMoreMessInRoom(roomId, lastMess.created_at);

      if (!Array.isArray(result)) {
        console.error("Invalid response from getMoreMessInRoom: result is not an array", result);
        return;
      }
      console.log(`Received ${result.length} more messages`);

      if (result.length === 0) {
        console.log("No more messages to fetch");
        setHasMore(false);
        return;
      }

      const decryptedMessages = await Promise.all(
        result.map(async (msg: MessageData) => {
          try {
            if (!msg.content) {
              console.warn(`Message ${msg.id} has no content, skipping decryption`);
              return { ...msg, content: "" };
            }
            console.log(`Decrypting message ${msg.id} with content:`, msg.content);
            const decryptedContent = await decryptMessage(msg.content, groupKey);
            return { ...msg, content: decryptedContent };
          } catch (decryptError) {
            console.error(`Error decrypting message ${msg.id}:`, decryptError);
            return { ...msg, content: "" };
          }
        })
      );

      console.log("Decrypted more messages:", decryptedMessages);
      setMessages((prev) => [...decryptedMessages, ...prev]);
    } catch (error) {
      console.error("Error fetching more messages:", {
        message: error.message,
        stack: error.stack,
        roomId,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleScroll = (values: { scrollTop: number }): void => {
    if (scrollbarsRef.current) {
      const { scrollTop } = values;
      if (scrollTop === 0 && !isLoading && hasMore && room_id) {
        fetchApiGetMoreMessInRoom(room_id);
      }
    }
  };

  const handleSendMessage = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    if (!newMessage.trim() || !room_id || !groupKey) return;

    try {
      const encryptedContent = await encryptMessage(newMessage, groupKey);
      const messageData: SendMessageData = {
        room_id,
        content: encryptedContent,
        file_url: null,
        message_type: 0,
      };

      wsClient.send({
        action: "chat",
        data: messageData,
      });

      setNewMessage("");
      scrollToBottom();
    } catch (error) {
      console.error("Error encrypting message:", error);
    }
  };

  const scrollToBottom = (): void => {
    if (scrollbarsRef.current) {
      const scrollView = scrollbarsRef.current.getScrollTop();
      const scrollHeight = scrollbarsRef.current.getScrollHeight();
      const clientHeight = scrollbarsRef.current.getClientHeight();
      const isAtBottom = scrollHeight - scrollView <= clientHeight + 600;
      if (isAtBottom) {
        scrollbarsRef.current.scrollToBottom();
      }
    }
  };

  useEffect(() => {
    const initialize = async () => {
      if (!room_id) return;

      setMessages([]);
      setGroupKey("");
      setHasMore(true);

      const userListElements = document.querySelectorAll(".chat-user-list");
      const handleUserListClick = () => {
        if (window.innerWidth <= 992) {
          const showChat = document.querySelector(".chat-messages");
          if (showChat) {
            showChat.classList.add("show");
          }
        }
      };
      userListElements.forEach((element) => {
        element.addEventListener("click", handleUserListClick);
      });

      const closeElements = document.querySelectorAll(".chat-close");
      const handleCloseClick = () => {
        if (window.innerWidth <= 992) {
          const hideChat = document.querySelector(".chat-messages");
          if (hideChat) {
            hideChat.classList.remove("show");
          }
        }
      };
      closeElements.forEach((element) => {
        element.addEventListener("click", handleCloseClick);
      });

      const groupKey = await fetchApiGetGroupKey(room_id);
      if (!groupKey) {
        console.error("Failed to fetch groupKey, skipping further initialization");
        return;
      }

      await fetchApiGetMessInRoom(room_id, groupKey);

      return () => {
        userListElements.forEach((element) => {
          element.removeEventListener("click", handleUserListClick);
        });
        closeElements.forEach((element) => {
          element.removeEventListener("click", handleCloseClick);
        });
      };
    };

    initialize();
  }, [room_id]);

  useEffect(() => {
    if (!room_id) return;

    const handleMessage = async (data: any): Promise<void> => {
      if (data.action === "chat" && data.data.room_id === room_id && groupKey) {
        try {
          const encryptedMessage = data.data.content;
          const decryptedContent = encryptedMessage
            ? await decryptMessage(encryptedMessage, groupKey)
            : "";
          const message: MessageData = {
            ...data.data,
            content: decryptedContent,
          };
          setMessages((prev) => [...prev, message]);
        } catch (error) {
          console.error("Error decrypting message:", error);
        }
      }
    };

    wsClient.onMessage(handleMessage);
    return () => {
      wsClient.offMessage(handleMessage);
    };
  }, [room_id, groupKey]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
                    <Link className="btn no-bg" to="#" data-bs-toggle="dropdown">
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-end p-3">
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
