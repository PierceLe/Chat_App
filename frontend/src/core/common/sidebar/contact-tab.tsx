import React, { useEffect, useState } from "react";
import ImageWithBasePath from "../imageWithBasePath";
import { Link } from "react-router-dom";
import Scrollbars from "react-custom-scrollbars-2";
import {
  acceptFriend,
  getAllContact,
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
import { useDispatch, useSelector } from "react-redux";
import { getContactSelector, getMeSelector, getUsersOnlineSelector } from "@/core/redux/selectors";
import { setUsersOnline } from "@/core/redux/reducers/getUsersOnlineSlice";
import { setContact } from "@/core/redux/reducers/getContactSlice";
import ContactUserDetailModal from "@/core/modals/user-detail";

const ContactTab = () => {
  const dispatch = useDispatch();
  const [friends, setFriends] = useState(Array<UserData>);
  const [friendDrafts, setFriendDrafts] = useState(Array<UserData>);
  const [searchInput, setSearchInput] = useState("");
  const debouncedValue = useDebounce(searchInput, 500);
  const [onlineUserIds, setOnlineUserIds] = useState<Set<string>>(new Set());

  const usersOnline: Set<String> = useSelector(getUsersOnlineSelector);
  const contact: any = useSelector(getContactSelector);

  const me: UserData = useSelector(getMeSelector);

  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenUserDetail = (userId: string) => {
    setSelectedUserId(userId);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedUserId(null);
  };
  

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
    // setOnlineUserIds(new Set(result))
    dispatch(setUsersOnline(result));
  }

  const fetchApiGetAllContact = async () => {
    const result = await getAllContact();
    console.log("fetchApiGetAllContact: ", result)
    dispatch(setContact(result))
  }
  
  useEffect(() => {
    fetchApiGetFriend()
    fetchApiGetFriendDraft()
    fetchApiGetOnlineUsers()
    fetchApiGetAllContact()
    const handleMessage = (data: any) => {
      if (data.action === "make-request-friend") {
        fetchApiGetFriendDraft()
      } else if (data.action === "update-status") {
        fetchApiGetOnlineUsers()
      } else if (data.action === "change-contact") {
        fetchApiGetAllContact()
        fetchApiGetFriendDraft()
        fetchApiGetFriend()
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
    fetchApiGetAllContact();
  }, [debouncedValue]);

  const handleChange = (e: any) => {
    setSearchInput(e.target.value);
  };

  const handleAccept = async (user_id: string, is_accept: boolean) => {
    const res: any = await acceptFriend(user_id, is_accept);
    const userIds : Array<String> = [user_id, me.user_id]
    if (res.code === 0) {
      fetchApiGetFriend();
      fetchApiGetFriendDraft();
    }
    wsClient.send({
      action: "change-contact",
      data: {
        list_user_id: userIds
      },
    });
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
              to="#"
              // data-bs-toggle="modal"
              // data-bs-target="#contact-details"
              className="chat-user-list"
              onClick={(e) => {
                e.preventDefault();
                handleOpenUserDetail(user_id);
              }}
            >
              <div className={`avatar avatar-lg me-2`}>
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
              to="#"
              // data-bs-toggle="modal"
              // data-bs-target="#contact-details"
              className="chat-user-list"
              onClick={(e) => {
                e.preventDefault();
                handleOpenUserDetail(user_id);
              }}
            >
              <div className={`avatar avatar-lg me-2`}>
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
              {/* <div className="search-wrap">
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
              </div> */}
              {/* /Chat Search */}
            </div>
            <div className="sidebar-body chat-body">
              {/* Left Chat Title */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5>Send Request</h5>
              </div>
              {/* /Left Chat Title */}
              <div className="chat-users-wrap">
                {contact.send_friend.map((item) => (
                  <OneContactTab
                    key={item.user_id}
                    user_id={item.user_id}
                    email={item.email}
                    first_name={item.first_name}
                    last_name={item.last_name}
                    avatar_url={item.avatar_url}
                    is_verified={item.is_verified}
                    is_online = {usersOnline.has(item.user_id)}
                ></OneContactTab>
                ))}
              </div>
              {/* Left Chat Title */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5>Request</h5>
              </div>
              {/* /Left Chat Title */}
              <div className="chat-users-wrap">
                {contact.received_friend.map((item) => (
                  <OneContactRequestTab
                    key={item.user_id}
                    user_id={item.user_id}
                    email={item.email}
                    first_name={item.first_name}
                    last_name={item.last_name}
                    avatar_url={item.avatar_url}
                    is_verified={item.is_verified}
                    is_online = {usersOnline.has(item.user_id)}
                  ></OneContactRequestTab>
                ))}
              </div>
              {/* Left Chat Title */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5>All Contacts</h5>
              </div>
              {/* /Left Chat Title */}
              <div className="chat-users-wrap">
                {contact.friend.map((item) => (
                  <OneContactTab
                    key={item.user_id}
                    user_id={item.user_id}
                    email={item.email}
                    first_name={item.first_name}
                    last_name={item.last_name}
                    avatar_url={item.avatar_url}
                    is_verified={item.is_verified}
                    is_online = {usersOnline.has(item.user_id)}
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
      <ContactUserDetailModal
        visible={isModalVisible}
        onClose={handleCloseModal}
        userId={selectedUserId}
      />
    </>
  );
};

export default ContactTab;
