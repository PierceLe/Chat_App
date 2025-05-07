import React, { useEffect, useState } from "react";
import ImageWithBasePath from "../imageWithBasePath";
import { Link } from "react-router-dom";
import { all_routes } from "../../../feature-module/router/all_routes";
import Scrollbars from "react-custom-scrollbars-2";
import { getAllGroupChatMany, RoomData } from "../../services/roomService";
import { format } from "date-fns";
import { getMeSelector } from "../../redux/selectors";
import { useSelector } from "react-redux";
import { UserData } from "../../services/contactService";
import useDebounce from "../../hooks/useDebounce";
import { wsClient } from "@/core/services/websocket";
import { Avatar, Button } from "antd";
import NewGroupModal from "@/core/modals/new-group";
import AddGroupModal from "@/core/modals/add-group";
import { useParams } from "react-router-dom";
import { getAvatarUrl } from "@/core/utils/helper";

const GroupTab = () => {
  const routes = all_routes;

  const me: UserData = useSelector(getMeSelector);
  
  const [rooms, setRooms] = useState(Array<RoomData>);
  const [roomNameInput, setRoomNameInput] = useState("");

  const debouncedValue = useDebounce(roomNameInput, 500);
  const [refreshKey, setRefreshKey] = useState(0);
  const [currentChatRoom, setCurrentChatRoom] = useState("")

  const { room_id: roomIDFromUrl } = useParams();

  const fetchApiGetRoom = async (roomName: string) => {
    const result: any = await getAllGroupChatMany(roomName, me.user_id);
    setRooms(result);
    console.log("ROOMS: ", result);
  };

  const [isModalNewGroupOpen, setIsModalNewGroupOpen] = useState(false);
  const [isModalAddGroupOpen, setIsModalAddGroupOpen] = useState(false);

  const handleOpenNewGroup = () => setIsModalNewGroupOpen(true);
  const handleCloseNewGroup = () => setIsModalNewGroupOpen(false);

  const handleOpenAddGroup = () => setIsModalAddGroupOpen(true);
  const handleCloseAddGroup = () => setIsModalAddGroupOpen(false);

  const handleNext = () => {
    handleCloseNewGroup(); // close current modal
    handleOpenAddGroup();  // open next modal
  };

  const selectCurrentChatRoom = async(room_id: string) => {
    setCurrentChatRoom(room_id)
  }

  useEffect(() => {
    setCurrentChatRoom(roomIDFromUrl)
  }, [roomIDFromUrl]);

  useEffect(() => {
    fetchApiGetRoom("");
    const handleMessage = (data: any) => {
      if (data.action === "chat"){
        setRooms((pre) => {
          let isNewRoom = true;
          let newRooms = new Array<RoomData>();
          pre.map((item) => {
            if (item.room_id === data.data.room_id) {
              isNewRoom = false;
              item.last_mess = data.data.content
              item.updated_at = data.data.updated_at
            }
            newRooms.push(item)
          })
          if (isNewRoom) {
            // const newRoom: any = getRoom(data.room_id);
            // if (newRoom){
            //   newRooms.push(newRoom);
            // }
            fetchApiGetRoom(roomNameInput)
          }
          newRooms.sort((a, b) => {
            return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
          });
          return newRooms;
        })
      }
    };
    wsClient.onMessage(handleMessage);
    return () => {
      wsClient.offMessage(handleMessage);
    };
  }, []);

  useEffect(() => {
    const handleChatGroupCreated = () => {
      setRefreshKey((prev) => prev + 1); // Trigger re-fetch
    };
    window.addEventListener("chatGroupCreated", handleChatGroupCreated);
    return () => {
      window.removeEventListener("chatGroupCreated", handleChatGroupCreated);
    };
  }, []);

  useEffect(() => {
    fetchApiGetRoom(roomNameInput);
  }, [refreshKey]);

  useEffect(() => {
    fetchApiGetRoom(debouncedValue);
  }, [debouncedValue]);

  const handleChangeNameInput = (e: any) => {
    setRoomNameInput(e.target.value);
  };

  const OneChatGroup = ({
    room_id,
    room_name,
    creator_id,
    last_mess,
    room_type,
    avatar_url,
    description,
    created_at,
    updated_at,
    // last_sender_user_id,
    // last_sender_first_name,
    // las_sender_last_name,
    // last_sender_avatar_url
  }: RoomData) => {
    return (
      <>
        <div className="chat-list">
          <Link 
            to={`${routes.groupChat}/${room_id}`} 
            className="chat-user-list"
            onClick={() => selectCurrentChatRoom(room_id)}
            style={{
              backgroundColor: currentChatRoom === room_id ? 'oklch(90.1% 0.058 230.902)' : 'transparent',
            }}
          >
            <div className="avatar avatar-lg online me-2">
              <Avatar
                size={32}
                src={getAvatarUrl(avatar_url)}
              />
            </div>
            <div className="chat-user-info">
              <div className="chat-user-msg">
                <h6>{room_name}</h6>
                {/* <div className="d-flex">
                  <span style={{fontWeight: 'bold'}}>{last_sender_user_id === me.user_id ? "You: " : `${last_sender_first_name}: `}</span>
                  <p style={{marginLeft: '5px'}}>{last_mess}</p>
                </div> */}
                <p>{last_mess ?? ""}</p>
              </div>
              <div className="chat-user-time">
                <span className="time">{format(updated_at, "hh:mm a")}</span>
                <div className="chat-pin">
                  {/* <span className="count-message fs-12 fw-semibold">
                    25
                  </span> */}
                </div>
              </div>
            </div>
          </Link>
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
                <h4 className="mb-3">Group</h4>
                <div className="d-flex align-items-center mb-3">
                  <Button className="btn-primary" size="small" shape="circle" onClick={handleOpenNewGroup}>
                    +
                  </Button>

                  <NewGroupModal
                    open={isModalNewGroupOpen}
                    onClose={handleCloseNewGroup}
                    onNext={handleNext}
                  />

                  <AddGroupModal
                    open={isModalAddGroupOpen}
                    onClose={handleCloseAddGroup}
                    onBack={() => {
                      handleCloseAddGroup();
                      handleOpenNewGroup();
                    }}
                  />
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
                      placeholder="Search group"
                      value={roomNameInput}
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
            <div className="sidebar-body chat-body">
              {/* Left Chat Title */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5>All Groups</h5>
              </div>
              {/* /Left Chat Title */}
              <div className="chat-users-wrap">
                {rooms.map((item) => (
                  <OneChatGroup
                    key={item.room_id}
                    room_id={item.room_id}
                    room_name={item.room_name}
                    creator_id={item.creator_id}
                    last_mess={item.last_mess}
                    room_type={item.room_type}
                    avatar_url={item.avatar_url}
                    description={item.description}
                    created_at={item.created_at}
                    updated_at={item.updated_at}
                    // last_sender_user_id={item.last_sender.user_id}
                    // last_sender_first_name={item.last_sender.first_name}
                    // las_sender_last_name={item.last_sender.last_name}
                    // last_sender_avatar_url={item.last_sender.avatar_url}
                  ></OneChatGroup>
                ))}
              </div>
            </div>
          </div>
        </Scrollbars>
      </div>
      {/* / Chats sidebar */}
    </>
  );
};

export default GroupTab;
