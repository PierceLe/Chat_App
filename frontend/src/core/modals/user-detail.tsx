import React, { useEffect, useState } from "react";
import { Modal, Button, Spin, Avatar } from "antd";
import { UserData } from "@/core/services/contactService";
import httpRequest from "../api/baseAxios";
import { notify } from "../utils/notification";
import { getAvatarUrl } from "../utils/helper";

interface Props {
  visible: boolean;
  onClose: () => void;
  userId: string | null;
}

const ContactUserDetailModal: React.FC<Props> = ({ visible, onClose, userId }) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(false);

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
            <Avatar
              size={90}
              src={getAvatarUrl(userData.avatar_url)}
            />
            <div style={{fontSize: '1.5rem', marginTop: '5px'}}>{userData.first_name} {userData.last_name}</div>
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
