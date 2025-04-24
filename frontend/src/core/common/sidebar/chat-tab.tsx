import React, { useEffect, useState } from "react";
import ImageWithBasePath from "../imageWithBasePath";
import { Link } from "react-router-dom";
import { all_routes } from "../../../feature-module/router/all_routes";
import Scrollbars from "react-custom-scrollbars-2";
import { Swiper, SwiperSlide } from "swiper/react";
import { format } from "date-fns";

// Import Swiper styles
import "swiper/css";
import { useSelector } from "react-redux";
import { UserData } from "../../services/contactService";
import { getMeSelector } from "../../redux/selectors";
import {
  getAllGroupChatOne,
  getRoomById,
  RoomChatOneData,
  RoomData,
} from "../../services/roomService";
import useDebounce from "../../hooks/useDebounce";
import { wsClient } from "@/core/services/websocket";
import NewChat from "@/core/modals/newChat";
import { Avatar } from "antd";
import { useParams } from "react-router-dom";

const ChatTab = () => {
  const routes = all_routes;
  const [activeTab, setActiveTab] = useState("All Chats");

  const me: UserData = useSelector(getMeSelector);

  const [rooms, setRooms] = useState(Array<RoomChatOneData>);
  const [nameInput, setNameInput] = useState("");
  const debouncedValue = useDebounce(nameInput, 500);

  const [refreshKey, setRefreshKey] = useState(0);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const openNewChat = () => setIsModalVisible(true);
  const closeNewChat = () => setIsModalVisible(false);
  const [currentChatRoom, setCurrentChatRoom] = useState("")
  const { room_id: roomIDFromUrl } = useParams();


  const fetchApiGetRoomChatOne = async (friendName: string) => {
    const result: any = await getAllGroupChatOne(friendName, me.user_id);
    setRooms(result);
    console.log("ROOMS ONE: ", result);
  };

  const getRoom = async(room_id: string) => {
    return await getRoomById(room_id);
  }

  const selectCurrentChatRoom = async(room_id: string) => {
    setCurrentChatRoom(room_id)
  }

  useEffect(() => {
    setCurrentChatRoom(roomIDFromUrl)
  }, [roomIDFromUrl]);

  useEffect(() => {
    fetchApiGetRoomChatOne("");
    const handleMessage = (data: any) => {
      if (data.action === "chat"){
        setRooms((pre)=>{
          let isNewRoom = true;
          let newRooms = new Array<RoomChatOneData>();
          pre.map((item) => {
            if (item.room_id === data.data.room_id){
              isNewRoom = false;
              item.last_mess = data.data.content
              item.updated_at = data.data.updated_at
            }
            newRooms.push(item)
          })
          if (isNewRoom){
            // const newRoom: any = getRoom(data.room_id);
            // if (newRoom){
            //   newRooms.push(newRoom);
            // }
            fetchApiGetRoomChatOne(nameInput)
          }
          newRooms.sort((a, b) => {return b.updated_at.valueOf() - a.updated_at.valueOf()})
          return newRooms;
        })
      }
    };
    wsClient.onMessage(handleMessage);
    return () => {
      wsClient.offMessage(handleMessage);
    };
  }, []);

  // Listen for custom event to refresh rooms
  useEffect(() => {
    const handleChatCreated = () => {
      setRefreshKey((prev) => prev + 1); // Trigger re-fetch
    };
    window.addEventListener("chatCreated", handleChatCreated);
    return () => {
      window.removeEventListener("chatCreated", handleChatCreated);
    };
  }, []);
  // Refetch rooms when refreshKey changes
  useEffect(() => {
    fetchApiGetRoomChatOne(nameInput);
  }, [refreshKey]);

  useEffect(() => {
    fetchApiGetRoomChatOne(debouncedValue);
  }, [debouncedValue]);

  const handleChangeNameInput = (e: any) => {
    setNameInput(e.target.value);
  };

  type FriendData = {
    friend_id: string;
    friend_email: string;
    friend_frist_name: string;
    friend_last_name: string;
    friend_avatar_url: string;
  };

  const OneChatOneGroup = ({
    room_id,
    room_name,
    creator_id,
    last_mess,
    room_type,
    avatar_url,
    description,
    created_at,
    updated_at,
    friend_id,
    friend_email,
    friend_frist_name,
    friend_last_name,
    friend_avatar_url,
  }: RoomChatOneData) => {
    const data: FriendData = {
      friend_id,
      friend_email,
      friend_frist_name,
      friend_last_name,
      friend_avatar_url
    };
    return (
      <>
        <div className="chat-list">
          <Link
            to={`${routes.chat}/${room_id}`}
            state={data}
            className="chat-user-list"
            onClick={() => selectCurrentChatRoom(room_id)}
            style={{
              backgroundColor: currentChatRoom === room_id ? 'oklch(90.1% 0.058 230.902)' : 'transparent',
            }}
          >
            <div className="avatar avatar-lg online me-2">
              <Avatar
                size={32}
                src={
                  friend_avatar_url === 'default'
                    ? 'assets/img/profiles/avatar-16.jpg'
                    : `http://localhost:9990/${friend_avatar_url}`
                }
              />
            </div>
            <div className="chat-user-info">
              <div className="chat-user-msg">
                <h6>{friend_frist_name + " " + friend_last_name}</h6>
                <p>{last_mess}</p>
              </div>
              <div className="chat-user-time">
                <span className="time">{format(updated_at, "hh:mm a")}</span>
                <div className="chat-pin">
                  <i className="ti ti-pin me-2" />
                  <i className="ti ti-checks text-success" />
                </div>
              </div>
            </div>
          </Link>
          <div className="chat-dropdown">
            <Link className="#" to="#" data-bs-toggle="dropdown">
              <i className="ti ti-dots-vertical" />
            </Link>
            <ul className="dropdown-menu dropdown-menu-end p-3">
              <li>
                <Link className="dropdown-item" to="#">
                  <i className="ti ti-box-align-right me-2" />
                  Archive Chat
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
                  <i className="ti ti-check me-2" />
                  Mark as Unread
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  <i className="ti ti-pinned me-2" />
                  Pin Chats
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="#"
                  data-bs-toggle="modal"
                  data-bs-target="#delete-chat"
                >
                  <i className="ti ti-trash me-2" />
                  Delete
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {/* Chats sidebar */}
      <div id="chats" className="sidebar-content active ">
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
          <div className="">
            <div className="chat-search-header">
              <div className="header-title d-flex align-items-center justify-content-between">
                <h4 className="mb-3">Chats</h4>
                <div className="d-flex align-items-center mb-3">
                  <button
                    onClick={openNewChat}
                    className="add-icon btn btn-primary p-0 d-flex align-items-center justify-content-center fs-16 me-2"
                  >
                    <i className="ti ti-plus" />
                  </button>
                  <NewChat isModalVisible={isModalVisible} onClose={closeNewChat} />
                  
                  <div className="dropdown">
                    <Link
                      to="#"
                      data-bs-toggle="dropdown"
                      className="fs-16 text-default"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <ul className="dropdown-menu p-3">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#invite"
                        >
                          <i className="ti ti-send me-2" />
                          Invite Others
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Chat Search */}
              <div className="search-wrap">
                <form>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search For Contacts or Messages"
                      value={nameInput}
                      onChange={(e) => {
                        handleChangeNameInput(e);
                      }}
                    />
                    <span className="input-group-text">
                      <i className="ti ti-search" />
                    </span>
                  </div>
                </form>
              </div>
              {/* /Chat Search */}
            </div>
            {/* Online Contacts */}
            <div className="top-online-contacts">
              <div className="d-flex align-items-center justify-content-between">
                <h5 className="mb-3">Recent Chats</h5>
                <div className="dropdown mb-3">
                  <Link
                    to="#"
                    className="text-default"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="ti ti-dots-vertical" />
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <Link className="dropdown-item mb-1" to="#">
                        <i className="ti ti-eye-off me-2" />
                        Hide Recent
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="ti ti-users me-2" />
                        Active Contacts
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <Swiper spaceBetween={15} slidesPerView={4}>
                    <SwiperSlide>
                      <Link
                        to={routes.chat}
                        className="chat-status text-center"
                      >
                        <div className="avatar avatar-lg online d-block">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-11.jpg"
                            alt="Image"
                            className="rounded-circle"
                          />
                        </div>
                        <p>Nichol</p>
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Link
                        to={routes.chat}
                        className="chat-status text-center"
                      >
                        <div className="avatar avatar-lg online d-block">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-12.jpg"
                            alt="Image"
                            className="rounded-circle"
                          />
                        </div>
                        <p>Titus</p>
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Link
                        to={routes.chat}
                        className="chat-status text-center"
                      >
                        <div className="avatar avatar-lg online d-block">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-14.jpg"
                            alt="Image"
                            className="rounded-circle"
                          />
                        </div>
                        <p>Geoffrey</p>
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Link
                        to={routes.chat}
                        className="chat-status text-center"
                      >
                        <div className="avatar avatar-lg online d-block">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-15.jpg"
                            alt="Image"
                            className="rounded-circle"
                          />
                        </div>
                        <p>Laverty</p>
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Link
                        to={routes.chat}
                        className="chat-status text-center"
                      >
                        <div className="avatar avatar-lg online bg-primary avatar-rounded">
                          <span className="avatar-title fs-14 fw-medium">
                            KG
                          </span>
                        </div>
                        <p>Kitamura</p>
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Link
                        to={routes.chat}
                        className="chat-status text-center"
                      >
                        <div className="avatar avatar-lg online d-block">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-01.jpg"
                            alt="Image"
                            className="rounded-circle"
                          />
                        </div>
                        <p>Mark</p>
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Link
                        to={routes.chat}
                        className="chat-status text-center"
                      >
                        <div className="avatar avatar-lg online d-block">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-05.jpg"
                            alt="Image"
                            className="rounded-circle"
                          />
                        </div>
                        <p>Smith</p>
                      </Link>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            {/* /Online Contacts */}
            <div className="sidebar-body chat-body" id="chatsidebar">
              {/* Left Chat Title */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="chat-title">{activeTab}</h5>
                <div className="dropdown">
                  <Link
                    to="#"
                    className="text-default fs-16"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="ti ti-filter" />
                  </Link>
                  <ul
                    className=" dropdown-menu dropdown-menu-end p-3"
                    id="innerTab"
                    role="tablist"
                  >
                    <li role="presentation">
                      <Link
                        className="dropdown-item active"
                        id="all-chats-tab"
                        data-bs-toggle="tab"
                        to="#all-chats"
                        role="tab"
                        aria-controls="all-chats"
                        aria-selected="true"
                        onClick={() => setActiveTab("All Chats")}
                      >
                        All Chats
                      </Link>
                    </li>
                    <li role="presentation">
                      <Link
                        className="dropdown-item"
                        id="favourites-chat-tab"
                        data-bs-toggle="tab"
                        to="#favourites-chat"
                        role="tab"
                        aria-controls="favourites-chat"
                        aria-selected="false"
                        onClick={() => setActiveTab("Favourite Chats")}
                      >
                        Favourite Chats
                      </Link>
                    </li>
                    <li role="presentation">
                      <Link
                        className="dropdown-item"
                        id="pinned-chats-tab"
                        data-bs-toggle="tab"
                        to="#pinned-chats"
                        role="tab"
                        aria-controls="pinned-chats"
                        aria-selected="false"
                        onClick={() => setActiveTab("Pinned Chats")}
                      >
                        Pinned Chats
                      </Link>
                    </li>
                    <li role="presentation">
                      <Link
                        className="dropdown-item"
                        id="archive-chats-tab"
                        data-bs-toggle="tab"
                        to="#archive-chats"
                        role="tab"
                        aria-controls="archive-chats"
                        aria-selected="false"
                        onClick={() => setActiveTab("Archive Chats")}
                      >
                        Archive Chats
                      </Link>
                    </li>
                    <li role="presentation">
                      <Link
                        className="dropdown-item"
                        id="trash-chats-tab"
                        data-bs-toggle="tab"
                        to="#trash-chats"
                        role="tab"
                        aria-controls="trash-chats"
                        aria-selected="false"
                        onClick={() => setActiveTab("Trash")}
                      >
                        Trash
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /Left Chat Title */}
              <div className="tab-content" id="innerTabContent">
                <div
                  className="tab-pane fade show active"
                  id="all-chats"
                  role="tabpanel"
                  aria-labelledby="all-chats-tab"
                >
                  <div className="chat-users-wrap">
                    {rooms.map((item) => (
                      <OneChatOneGroup
                        key={item.friend_id}
                        friend_id={item.friend_id}
                        friend_email={item.friend_email}
                        friend_frist_name={item.friend_frist_name}
                        friend_last_name={item.friend_last_name}
                        friend_avatar_url={item.friend_avatar_url}
                        room_id={item.room_id}
                        room_name={item.room_name}
                        creator_id={item.creator_id}
                        last_mess={item.last_mess}
                        room_type={item.room_type}
                        avatar_url={item.avatar_url}
                        description={item.description}
                        created_at={item.created_at}
                        updated_at={item.updated_at}
                      ></OneChatOneGroup>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Scrollbars>
      </div>
      {/* / Chats sidebar */}
    </>
  );
};

export default ChatTab;
