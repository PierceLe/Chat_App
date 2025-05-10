import React, { useEffect, useState } from "react";
import { Modal, Button, Spin, Avatar, Badge } from "antd";
import { UserData } from "@/core/services/contactService";
import httpRequest from "../api/baseAxios";
import { notify } from "../utils/notification";
import { getAvatarUrl } from "../utils/helper";
import { useSelector } from "react-redux";
import { getUsersOnlineSelector } from "../redux/selectors";
import { MessageOutlined, ScheduleOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { all_routes } from "@/feature-module/router/all_routes";

interface Props {
  visible: boolean;
  onClose: () => void;
  userId: string | null;
}

const ContactUserDetailModal: React.FC<Props> = ({ visible, onClose, userId }) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(false);
  const usersOnline: Set<String> = useSelector(getUsersOnlineSelector);
  const navigate = useNavigate();
  const routes = all_routes;

  useEffect(() => {
    if (visible && userId) {
      const fetchUser = async () => {
        try {
          setLoading(true);
          const res = await httpRequest.get(`/user/by-id?user_id=${userId}`);
          if (res.code === 0) {
            setUserData(res.result);
          } else {
            notify.error("Error", "Get User Detail Failed !")
          }
        } catch (error) {
          console.error("Failed to fetch user data", error);
          setUserData(null);
        } finally {
          setLoading(false);
        }
      };
  
      fetchUser();
    } else {
      setUserData(null);
    }
  }, [visible, userId]);

  const handleChat = async () => {
    // Call API get Room ID

    //navigate(`${routes.chat}/${room_id}`);
  }
  const handleTimetable = async () => {
    navigate(`${routes.timetable}/?userId=${userId}`);
    onClose();
  }

  return (
    <Modal
      title="Contact"
      open={visible}
      onCancel={onClose}
      footer={[
        <Button key="close" onClick={onClose}>
          Close
        </Button>,
      ]}
    >
      {loading ? (
      <Spin />
    ) : userData ? (
      <div>
        <div className="d-flex align-items-center flex-column">
          <div
            style={{
              position: 'relative',
              width: 90,
              height: 90,
              display: 'inline-block',
              flexShrink: 0,
            }}
          >
            <Avatar
              size={90}
              src={getAvatarUrl(userData.avatar_url)}
              style={{ width: 90, height: 90 }}
            />
            <span
              style={{
                position: 'absolute',
                bottom: 4,
                right: 4,
                width: 18,
                height: 18,
                borderRadius: '50%',
                border: '2px solid white',
                backgroundColor: usersOnline.has(userData.user_id)
                  ? '#52c41a'
                  : '#f5222d',
              }}
            />
          </div>

          <div style={{ marginTop: 12, display: 'flex', gap: 12, justifyContent: 'center' }}>
            <Button type="primary" icon={<MessageOutlined />} onClick={handleChat}>
              Chat
            </Button>
            <Button icon={<ScheduleOutlined />} onClick={handleTimetable}>
              Timetable
            </Button>
          </div>

          {/* Other user info */}
          <div style={{ fontSize: '1.5rem', marginTop: '12px' }}>
            {userData.first_name} {userData.last_name}
          </div>

          <div className="d-flex align-items-center">
            <i className="bi bi-envelope-fill me-2" style={{ fontSize: '1.2rem' }}></i>
            <span>{userData.email}</span>
          </div>

          <p>{userData.biography}</p>
        </div>
      </div>
    ) : (
      <p>No data available.</p>
)}
    </Modal>
  );
};

export default ContactUserDetailModal;
