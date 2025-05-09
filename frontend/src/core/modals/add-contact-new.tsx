import React, { useState } from "react";
import { Modal, Button, Input, Avatar, Spin, Form } from "antd";
import { notify } from "../utils/notification";
import { getAvatarUrl } from "../utils/helper";
import httpRequest from "../api/baseAxios";
import { addFriend, getUserByEmail, UserData } from "../services/contactService";
import { useSelector } from "react-redux";
import { getMeSelector } from "../redux/selectors";
import { wsClient } from "../services/websocket";

interface Props {
  visible: boolean;
  onClose: () => void;
}

const AddContactNewModal: React.FC<Props> = ({ visible, onClose }) => {
  const [form] = Form.useForm();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [sending, setSending] = useState(false);

  const me: UserData = useSelector(getMeSelector);

  const handleSearch = async () => {
    if (!email.trim()) {
      notify.warning("Warning", "Please enter an email");
      return;
    }

    try {
      setLoading(true);
      setUserData(null);
      setNotFound(false);

      const res = await httpRequest.get(`/user/by-email?email=${encodeURIComponent(email)}`);
      if (res.code === 0 && res.result) {
        setUserData(res.result);
      } else {
        setNotFound(true);
      }
    } catch (error) {
      console.error("Search user error:", error);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    form.resetFields();
    setUserData(null);
    setNotFound(false);
    setEmail("");
    onClose();
  };

  const handleAddContact = async () => {
    try {
      setSending(true)
      let userIds = new Array<string>();
      userIds.push(me.user_id);
  
      const userSendFromCurrentUser = await getUserByEmail(email);
      if (userSendFromCurrentUser) {
        userIds.push(userSendFromCurrentUser.user_id);
      }
  
      await addFriend(email);
  
      wsClient.send({
        action: "change-contact",
        data: {
          list_user_id: userIds,
        },
      });
  
      notify.success("Friend request sent!");
      onClose();
    } catch (error) {
      console.error("Add contact failed:", error);
      notify.error("Error", "Failed to add contact.");
    } finally {
      setSending(false)
    }
  };

  return (
    <Modal
      title="New Contact"
      open={visible}
      onCancel={handleClose}
      footer={[
        <Button key="cancel" onClick={handleClose}>
          Cancel
        </Button>,
        <Button
          key="add"
          type="primary"
          disabled={!userData}
          loading={sending}
          onClick={handleAddContact}
        >
          Add
        </Button>
      ]}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <label style={{ minWidth: '40px' }}>Email</label>
        <Input.Search
          placeholder="Enter user's email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          enterButton="Search"
          onSearch={handleSearch}
          loading={loading}
          style={{ flex: 1 }}
        />
      </div>

      {loading ? (
        <Spin />
      ) : userData ? (
        <div className="d-flex align-items-center flex-column mt-4">
          <Avatar size={90} src={getAvatarUrl(userData.avatar_url)} />
          <div style={{ fontSize: "1.5rem", marginTop: "5px" }}>
            {userData.first_name} {userData.last_name}
          </div>
          <div className="d-flex align-items-center">
            <i className="bi bi-envelope-fill me-2" style={{ fontSize: "1.2rem" }}></i>
            <span>{userData.email}</span>
          </div>
          <p>{userData.biography}</p>
        </div>
      ) : notFound ? (
        <p style={{ marginTop: "20px", color: "#ff4d4f", textAlign: "center", width: "100%" }}>
          User not found.
        </p>
      ) : null}
    </Modal>
  );
};

export default AddContactNewModal;
