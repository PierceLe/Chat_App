import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../common/imageWithBasePath";
import { getAllFriends, UserData } from "../services/contactService";
import { useSelector } from "react-redux";
import { roomDescriptionSelector, roomNameSelector } from "../redux/selectors";
import { createRoom } from "../services/roomService";
import { wsClient } from "../services/websocket";
const AddGroup = () => {
  const [friends, setFriends] = useState(Array<UserData>);
  const [usersSelected, setUsersSelected] = useState<Set<string>>(new Set());

  const roomName = useSelector(roomNameSelector);
  const roomDescription = useSelector(roomDescriptionSelector);

  useEffect(() => {
    fetchApiGetFriend();
  }, []);

  const fetchApiGetFriend = async () => {
    const result = await getAllFriends();
    setFriends(result);
  };

  const handleCheckboxChange = (user_id: string, checked: boolean) => {
    setUsersSelected((pre) => {
      const newSelected = new Set(pre);
      if (checked) {
        newSelected.add(user_id);
      } else {
        newSelected.delete(user_id);
      }
      return newSelected;
    });
  };

  const handleCreateRoom = async () => {
    console.log("CREATE ROOM: ", roomName);
    const room_id: any = await createRoom(roomName, 2, "", roomDescription, Array.from(usersSelected));
    if (room_id) {
      wsClient.send({
        action: "join",
        data: {
          user_ids: Array.from(usersSelected),
          room_id: room_id
        }
      });
    }

    // Dispatch custom event to notify ChatTab
    const event = new Event("chatGroupCreated");
    window.dispatchEvent(event);
  };

  const OneUserNeedAdd = ({
    user_id,
    email,
    first_name,
    last_name,
    avatar_url,
  }: UserData) => {
    return (
      <>
        <div className="contact-user d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <div className="avatar avatar-lg">
              <ImageWithBasePath
                src={avatar_url}
                className="rounded-circle"
                alt="image"
              />
            </div>
            <div className="ms-2">
              <h6>{first_name + " " + last_name}</h6>
              <p>{email}</p>
            </div>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="contact"
              checked={usersSelected.has(user_id)}
              onChange={(e) => handleCheckboxChange(user_id, e.target.checked)}
            />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {/* Add Group */}
      <div className="modal fade" id="add-group">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add Members</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="search-wrap contact-search mb-3">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                    <Link to="#" className="input-group-text">
                      <i className="ti ti-search" />
                    </Link>
                  </div>
                </div>
                <h6 className="mb-3 fw-medium fs-16">Contacts</h6>
                <div className="contact-scroll contact-select mb-3">
                  {friends.map((item) => (
                    <OneUserNeedAdd
                      key={item.user_id}
                      user_id={item.user_id}
                      email={item.email}
                      first_name={item.first_name}
                      last_name={item.last_name}
                      avatar_url={item.avatar_url}
                      is_verified={item.is_verified}
                    ></OneUserNeedAdd>
                  ))}
                </div>
                <div className="row g-3">
                  <div className="col-6">
                    <Link
                      to="#"
                      className="btn btn-outline-primary w-100"
                      data-bs-toggle="modal"
                      data-bs-target="#new-group"
                    >
                      Previous
                    </Link>
                  </div>
                  <div className="col-6">
                    <button
                      type="button"
                      data-bs-dismiss="modal"
                      className="btn btn-primary w-100"
                      onClick={handleCreateRoom}
                    >
                      Start Group
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Add group */}
    </>
  );
};

export default AddGroup;
