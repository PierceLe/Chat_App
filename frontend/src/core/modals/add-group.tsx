import React, { useEffect, useState } from "react";
import { Modal, Input, Checkbox, Button, Avatar, List } from "antd";
import { getAllFriends, UserData } from "../services/contactService";
import { useSelector } from "react-redux";
import {
  roomDescriptionSelector,
  roomNameSelector,
} from "../redux/selectors";
import { createRoom } from "../services/roomService";
import { wsClient } from "../services/websocket";

interface Props {
  open: boolean;
  onClose: () => void;
  onBack?: () => void;
}

const AddGroupModal: React.FC<Props> = ({ open, onClose, onBack }) => {
  const [friends, setFriends] = useState<UserData[]>([]);
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
    setUsersSelected((prev) => {
      const newSelected = new Set(prev);
      if (checked) newSelected.add(user_id);
      else newSelected.delete(user_id);
      return newSelected;
    });
  };

  const handleCreateRoom = async () => {
    const room_id = await createRoom(
      roomName,
      2,
      "",
      roomDescription,
      Array.from(usersSelected)
    );

    if (room_id) {
      wsClient.send({
        action: "join",
        data: {
          user_ids: Array.from(usersSelected),
          room_id,
        },
      });

      // Dispatch custom event to notify ChatTab
      const event = new Event("chatGroupCreated");
      window.dispatchEvent(event);

      onClose();
    }
  };

  return (
    <Modal
      title="Add Members"
      open={open}
      onCancel={onClose}
      footer={null}
      centered
    >
      <Input.Search placeholder="Search" style={{ marginBottom: 16 }} />

      <h6 style={{ fontWeight: 600, fontSize: 16, marginBottom: 12 }}>
        Contacts
      </h6>

      <div style={{ maxHeight: 300, overflowY: "auto", marginBottom: 24 }}>
        <List
          dataSource={friends}
          renderItem={(user) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={user.avatar_url} />}
                title={`${user.first_name} ${user.last_name}`}
                description={user.email}
              />
              <Checkbox
                checked={usersSelected.has(user.user_id)}
                onChange={(e) =>
                  handleCheckboxChange(user.user_id, e.target.checked)
                }
              />
            </List.Item>
          )}
        />
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <Button onClick={onBack} style={{ flex: 1 }}>
          Previous
        </Button>
        <Button type="primary" onClick={handleCreateRoom} style={{ flex: 1 }}>
          Start Group
        </Button>
      </div>
    </Modal>
  );
};

export default AddGroupModal;
