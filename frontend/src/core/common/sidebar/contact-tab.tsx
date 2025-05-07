import React, { useEffect, useState } from "react";
import ImageWithBasePath from "../imageWithBasePath";
import { Link } from "react-router-dom";
import Scrollbars from "react-custom-scrollbars-2";
import {
  acceptFriend,
  getAllFriends,
  getFriendDrafts,
  unFriend,
  UserData,
} from "../../services/contactService";
import useDebounce from "../../hooks/useDebounce";
import ContactDetailsCustom from "../../modals/contact-details-custom";
import { wsClient } from "@/core/services/websocket";
import { getOnlineUserIds } from "@/core/services/messageService";
import { Avatar } from "antd";
import { getAvatarUrl } from "@/core/utils/helper";

const ContactTab = () => {
  const [friends, setFriends] = useState(Array<UserData>);
  const [friendDrafts, setFriendDrafts] = useState(Array<UserData>);
  const [searchInput, setSearchInput] = useState("");
  const debouncedValue = useDebounce(searchInput, 500);
  const [onlineUserIds, setOnlineUserIds] = useState<Set<string>>(new Set());

  const fetchApiGetFriend = async () => {
    const result = await getAllFriends();
    setFriends(result);
    console.log("contact: ", result);
  };

  const fetchApiGetFriendDraft = async () => {
    const result = await getFriendDrafts();
    setFriendDrafts(result);
    console.log("getFriendDrafts: ", result);
  };

  const fetchApiGetOnlineUsers = async () => {
    const result = await getOnlineUserIds();
    console.log("online_user_ids: ", result)
    setOnlineUserIds(new Set(result))
  }
  
  useEffect(() => {
    console.log("Contact: Rerender")
    fetchApiGetFriend()
    fetchApiGetFriendDraft()
    fetchApiGetOnlineUsers()
    const handleMessage = (data: any) => {
      if (data.action === "make-request-friend") {
        fetchApiGetFriendDraft()
      } else if (data.action === "update-status") {
        fetchApiGetOnlineUsers()
      }
    }
    wsClient.onMessage(handleMessage);
    return () => {
      wsClient.offMessage(handleMessage)
    }
  }, [])

  useEffect(() => {
    fetchApiGetFriend();
    fetchApiGetFriendDraft();
  }, [debouncedValue]);

  const handleChange = (e: any) => {
    setSearchInput(e.target.value);
  };

  const handleAccept = async (user_id: string, is_accept: boolean) => {
    console.log("ACCEPT: ", user_id);
    const res: any = await acceptFriend(user_id, is_accept);
    console.log("ACCEPT: ", res);
    if (res.code === 0) {
      fetchApiGetFriend();
      fetchApiGetFriendDraft();
    }
  };

  const [showModal, setShowModal] = useState(false); // State controlling modal
  const [modalData, setModalData] = useState<UserData | null>(null);

  const openModal = (data: UserData) => {
    setModalData(data);
    setShowModal(true);
    console.log("showModal: ", showModal);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalData(null);
  };

  const handleUnfriend = (user_id: string) => {
    unFriend(user_id);
    fetchApiGetFriend();
    fetchApiGetFriendDraft();
  };

  const OneContactTab = ({
    user_id,
    email,
    first_name,
    last_name,
    avatar_url,
    is_online
  }: any) => {
    return (
      <>
        <div className="mb-4">
          <div className="chat-list">
            <Link
              to=""
              // data-bs-toggle="modal"
              // data-bs-target="#contact-details"
              className="chat-user-list"
              onClick={(e) => {
                e.preventDefault();
                openModal({
                  user_id,
                  email,
                  first_name,
                  last_name,
                  avatar_url,
                  is_verified: true,
                });
              }}
            >
              <div className={`avatar avatar-lg ${is_online ? 'online' : 'offline'} me-2`}>
                <Avatar
                  size={32}
                  src={getAvatarUrl(avatar_url)}
                  />
              </div>
              <div className="chat-user-info">
                <div className="chat-user-msg">
                  <h6>
                    {first_name} {last_name}
                  </h6>
                  <p>{email}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </>
    );
  };

  const OneContactRequestTab = ({
    user_id,
    email,
    first_name,
    last_name,
    avatar_url,
    is_online
  }:any) => {
    return (
      <>
        <div className="mb-4">
          <div className="chat-list">
            <Link
              to="/user_id"
              // data-bs-toggle="modal"
              // data-bs-target="#contact-details"
              className="chat-user-list"
              onClick={(e) => {
                e.preventDefault();
                openModal({
                  user_id,
                  email,
                  first_name,
                  last_name,
                  avatar_url,
                  is_verified: true,
                });
              }}
            >
              <div className={`avatar avatar-lg ${is_online ? 'online' : 'offline'} me-2`}>
                <Avatar
                  size={32}
                  src={getAvatarUrl(avatar_url)}
                />
              </div>
              <div className="chat-user-info">
                <div className="chat-user-msg">
                  <h6>
                    {first_name} {last_name}
                  </h6>
                  <p>{email}</p>
                </div>
              </div>
              <button
                type="button"
                className="btn-yes"
                // data-bs-dismiss="modal"
                aria-label="Close"
                style={{
                  background: 'transparent',
                  color: 'oklch(72.3% 0.219 149.579)',
                  marginRight: '2px'
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  handleAccept(user_id, true);
                }}
              >
                <i className="ti ti-check rounded-btn" />
              </button>
              <button
                type="button"
                className="btn-yes"
                // data-bs-dismiss="modal"
                aria-label="Close"
                style={{
                  background: 'transparent',
                  color: '#ff4d4f'
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  handleAccept(user_id, false);
                }}
              >
                <i className="ti ti-x" />
              </button>
            </Link>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {/* Chats sidebar */}
      <div className="sidebar-content active slimscroll">
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          autoHeight
          autoHeightMin={0}
          autoHeightMax="100vh"
          thumbMinSize={30}
          universal={false}
          hideTracksWhenNotNeeded={true}
        >
          <div className="slimscroll">
            <div className="chat-search-header">
              <div className="header-title d-flex align-items-center justify-content-between">
                <h4 className="mb-3">Contacts</h4>
                <div className="d-flex align-items-center mb-3">
                  <Link
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#add-contact"
                    className="add-icon btn btn-primary p-0 d-flex align-items-center justify-content-center fs-16 me-2"
                  >
                    <i className="ti ti-plus" />
                  </Link>
                </div>
              </div>
              {/* Chat Search */}
              <div className="search-wrap">
                <form>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Contacts"
                      value={searchInput}
                      onChange={handleChange}
                    />
                    <span className="input-group-text">
                      <i className="ti ti-search" />
                    </span>
                  </div>
                </form>
              </div>
              {/* /Chat Search */}
            </div>
            <div className="sidebar-body chat-body">
              {/* Left Chat Title */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5>Request</h5>
              </div>
              {/* /Left Chat Title */}
              <div className="chat-users-wrap">
                {friendDrafts.map((item) => (
                  <OneContactRequestTab
                    key={item.user_id}
                    user_id={item.user_id}
                    email={item.email}
                    first_name={item.first_name}
                    last_name={item.last_name}
                    avatar_url={item.avatar_url}
                    is_verified={item.is_verified}
                    is_online = {onlineUserIds.has(item.user_id)}
                  ></OneContactRequestTab>
                ))}
              </div>
              {/* Left Chat Title */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5>All Contacts</h5>
              </div>
              {/* /Left Chat Title */}
              <div className="chat-users-wrap">
                {friends.map((item) => (
                  <OneContactTab
                    key={item.user_id}
                    user_id={item.user_id}
                    email={item.email}
                    first_name={item.first_name}
                    last_name={item.last_name}
                    avatar_url={item.avatar_url}
                    is_verified={item.is_verified}
                    is_online = {onlineUserIds.has(item.user_id)}
                  ></OneContactTab>
                ))}
              </div>
            </div>
          </div>
        </Scrollbars>
      </div>
      <ContactDetailsCustom
        show={showModal}
        onClose={closeModal}
        modalData={modalData}
        onUnfriend={handleUnfriend}
      />
      {/* / Chats sidebar */}
    </>
  );
};

export default ContactTab;
