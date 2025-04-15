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

const GroupTab = () => {
  const routes = all_routes;

  const me: UserData = useSelector(getMeSelector);

  const [rooms, setRooms] = useState(Array<RoomData>);
  const [roomNameInput, setRoomNameInput] = useState("");

  const debouncedValue = useDebounce(roomNameInput, 500);
  const [refreshKey, setRefreshKey] = useState(0);

  const fetchApiGetRoom = async (roomName: string) => {
    const result: any = await getAllGroupChatMany(roomName, me.user_id);
    setRooms(result);
    console.log("ROOMS: ", result);
  };

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
          newRooms.sort((a, b) => { return b.updated_at.valueOf() - a.updated_at.valueOf() })
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
  }: RoomData) => {
    return (
      <>
        <div className="chat-list">
          <Link to={`${routes.groupChat}/${room_id}`} className="chat-user-list">
            <div className="avatar avatar-lg online me-2">
              <ImageWithBasePath
                src="assets/img/groups/group-08.jpg"
                className="rounded-circle"
                alt="image"
              />
            </div>
            <div className="chat-user-info">
              <div className="chat-user-msg">
                <h6>{room_name}</h6>
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
          <div className="chat-dropdown">
            <Link className="#" to="#" data-bs-toggle="dropdown">
              <i className="ti ti-dots-vertical" />
            </Link>
            <ul className="dropdown-menu dropdown-menu-end p-3">
              <li>
                <Link className="dropdown-item" to="#">
                  <i className="ti ti-box-align-right me-2" />
                  Archive Group
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  <i className="ti ti-volume-off me-2" />
                  Mute Notification
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  <i className="ti ti-logout-2 me-2" />
                  Exit Group
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  <i className="ti ti-pinned me-2" />
                  Pin Group
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  <i className="ti ti-square-check me-2" />
                  Mark as Unread
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
                  <Link
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#new-group"
                    className="add-icon btn btn-primary p-0 d-flex align-items-center justify-content-center fs-16 me-2"
                  >
                    <i className="ti ti-plus" />
                  </Link>
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
                      placeholder="Seach group"
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
