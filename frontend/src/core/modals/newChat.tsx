import React, { useEffect, useState } from "react";
import { Modal, Avatar, Button } from "antd";
import { getAllFriends, UserData } from "../services/contactService";
import { createRoom } from "../services/roomService";
import { wsClient } from "../services/websocket";

const NewChat = ({ isModalVisible, onClose }: { isModalVisible: boolean; onClose: () => void }) => {
  const [friends, setFriends] = useState<Array<UserData>>([]);
  const [selectedUserId, setSelectedUserId] = useState<string>("");

  useEffect(() => {
    if (isModalVisible) {
      fetchApiGetFriend();
    }
  }, [isModalVisible]);

  const fetchApiGetFriend = async () => {
    const result = await getAllFriends();
    setFriends(result);
  };

  const handleCheckboxChange = (user_id: string, checked: boolean) => {
    if (!checked) {
      setSelectedUserId("");
    } else {
      setSelectedUserId(user_id);
    }
  };

  const handleCreateRoom = async () => {
    if (selectedUserId) {
      const room_id: any = await createRoom("Chat 1-1", 1, "", "chat 1-1", [selectedUserId]);
      console.log("room_id: ", room_id);
      if (room_id) {
        wsClient.send({
          action: "join",
          data: {
            user_ids: [selectedUserId],
            room_id: room_id,
          },
        });
      }

      // Dispatch custom event to notify ChatTab
      const event = new Event("chatCreated");
      window.dispatchEvent(event);

      // Close the modal after creating the chat room
      onClose();
    }
  };

  const OneUserNeedAdd = ({
    user_id,
    email,
    first_name,
    last_name,
    avatar_url,
  }: UserData) => {
    return (
      <div className="contact-user d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <div className="avatar avatar-lg">
            <Avatar
              size={32}
              src={
                avatar_url === "default"
                  ? "assets/img/profiles/avatar-16.jpg"
                  : `http://localhost:9990/${avatar_url}`
              }
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
            checked={user_id === selectedUserId}
            onChange={(e) => handleCheckboxChange(user_id, e.target.checked)}
          />
        </div>
      </div>
    );
  };

  return (
    <Modal
      title="New Chat"
      visible={isModalVisible}
      onCancel={onClose}  // Handle modal close event
      footer={null}
      width={600}
    >
      <form>
        <div className="search-wrap contact-search mb-3">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
            />
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
              is_verified={true}
            />
          ))}
        </div>
        <div className="row g-3">
          <div className="col-6">
            <Button
              type="default"
              className="w-100"
              onClick={onClose}  // Close the modal when cancel is clicked
            >
              Cancel
            </Button>
          </div>
          <div className="col-6">
            <Button
              type="primary"
              className="w-100"
              onClick={handleCreateRoom}
            >
              Start Chat
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default NewChat;
