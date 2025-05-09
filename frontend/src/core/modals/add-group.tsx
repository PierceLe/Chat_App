import React, { useEffect, useState } from "react";
import { Modal, Input, Checkbox, Button, Avatar, List } from "antd";
import { getAllFriends, UserData } from "../services/contactService";
import { useSelector } from "react-redux";
import {
  roomDescriptionSelector,
  roomNameSelector,
  roomAvatarUrlSelector
} from "../redux/selectors";
import { createRoom } from "../services/roomService";
import { wsClient } from "../services/websocket";
import { UploadOutlined } from '@ant-design/icons';

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
  const roomAvatarUrl = useSelector(roomAvatarUrlSelector)

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

  useEffect(() => {
    if (open) {
      setUsersSelected(new Set());
    }
  }, [open]);

  const handleCreateRoom = async () => {
    const room_id = await createRoom(
      roomName,
      2,
      roomAvatarUrl,
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
                className="d-flex align-items-center"
                avatar={<Avatar
                  size={30}
                  src={
                    user.avatar_url === 'default1'
                      ? 'assets/img/profiles/avatar-16.jpg'
                      : `http://localhost:9990/${user.avatar_url}`
                  }
                  icon={<UploadOutlined />}
                />}
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
        <Button
          type="primary"
          onClick={handleCreateRoom}
          style={{ flex: 1 }}
          disabled={usersSelected.size < 2}
        >
          Start Group
        </Button>
      </div>
    </Modal>
  );
};

export default AddGroupModal;
