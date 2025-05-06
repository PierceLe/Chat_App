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
import { encryptSymmetricKey, generateSymmetricKey } from "../utils/encryption";

interface Props {
  open: boolean;
  onClose: () => void;
  onBack?: () => void;
}

const AddGroupModal: React.FC<Props> = ({ open, onClose, onBack }) => {
  const [friends, setFriends] = useState<UserData[]>([]);
  const [usersSelected, setUsersSelected] = useState<Map<string, UserData>>(new Map());

  const roomName = useSelector(roomNameSelector);
  const roomDescription = useSelector(roomDescriptionSelector);
  const roomAvatarUrl = useSelector(roomAvatarUrlSelector)

  const fetchApiGetFriend = async () => {
    const result = await getAllFriends();
    setFriends(result);
  };

  const handleCheckboxChange = (user: UserData, checked: boolean) => {
    setUsersSelected((prev) => {
      const newMap = new Map(prev);
      if (checked) {
        newMap.set(user.user_id, user);
      }
      else newMap.delete(user.user_id);
      return newMap;
    });
  };

  useEffect(() => {
    if (open) {
      fetchApiGetFriend();
      setUsersSelected(new Map());
    }
  }, [open]);

  const handleCreateRoom = async () => {
    const userIds: string[] = [];
    const encryptedGroupKeys: string[] = [];
    const groupKey = await generateSymmetricKey()

    const encryptedGroupKey = await encryptSymmetricKey(groupKey, localStorage.getItem("publicKey") as any)

    for (const [userId, userData] of usersSelected.entries()) {
      if (userData.public_key) {
        try {
          userIds.push(userId);
          const memberEncryptedKey = await encryptSymmetricKey(groupKey, userData.public_key);
          encryptedGroupKeys.push(memberEncryptedKey);
        } catch (error) {
          console.error(`Error encrypting key for user ${userId}:`, error);
        }
      } else {
        console.warn(`No public key for user ${userId}`);
      }
    }
    const room_id = await createRoom(
      roomName,
      2,
      roomAvatarUrl,
      roomDescription,
      userIds,
      encryptedGroupKeys,
      encryptedGroupKey
    );

    if (room_id) {
      wsClient.send({
        action: "join",
        data: {
          user_ids: Array.from(usersSelected.keys()),
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
                    user.avatar_url === 'default'
                      ? 'assets/img/profiles/avatar-16.jpg'
                      : user.avatar_url.includes('bucket')
                        ? `http://localhost:9990/${user.avatar_url}`
                        : user.avatar_url
                  }
                  icon={<UploadOutlined />}
                />}
                title={`${user.first_name} ${user.last_name}`}
                description={user.email}
              />
              <Checkbox
                checked={usersSelected.has(user.user_id)}
                onChange={(e) =>
                  handleCheckboxChange(user, e.target.checked)
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
          disabled={usersSelected.size < 1}
        >
          Start Group
        </Button>
      </div>
    </Modal>
  );
};

export default AddGroupModal;
