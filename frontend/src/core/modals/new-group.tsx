import React, { useState } from "react";
import { Modal, Input, Radio, Upload, Button, Avatar } from "antd";
import { PlusOutlined, InfoCircleOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import createRoomSlice from "../redux/reducers/createRoomSlice";
import { UploadOutlined } from '@ant-design/icons';
import { notify } from "@/core/utils/notification";
import httpRequest from "@/core/api/baseAxios";
import { useEffect } from "react";


interface Props {
  open: boolean;
  onClose: () => void;
  onNext: () => void;
}

const NewGroupModal: React.FC<Props> = ({ open, onClose, onNext }) => {
  const [roomName, setRoomName] = useState("");
  const [roomDescription, setRoomDescription] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("")

  const dispatch = useDispatch();

  const handleChangeRoomName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomName(e.target.value);
    dispatch(createRoomSlice.actions.setRoomName(e.target.value));
  };

  const handleChangeRoomDescription = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const value = e.target.value;
    setRoomDescription(value);
    dispatch(createRoomSlice.actions.setDescription(value));
  };

  const handleNextClick = () => {
    setRoomName("");
    setRoomDescription("");
    onNext();
    onClose();
  };

  const handleAvatarUpload = async (options) => {
    const { file, onSuccess, onError } = options;
  
    const formData = new FormData();
    formData.append('file', file);
  
    try {
      const response = await httpRequest.post("/file/upload", formData, {
        params: { type: 'public' },
        headers: {
          Accept: 'application/json'
        },
      });
  
      if (response.code !== 0) {
        notify.error("Upload Avatar Failed", "Upload Avatar image failed !")
        onError(new Error('Upload Avatar Failed'));
        return
      }
  
      const uploadedUrl = response.result;
      onSuccess(uploadedUrl);
      setAvatarUrl(uploadedUrl)
    } catch (error) {
      onError(error);
      notify.error("Upload Avatar Failed", "Upload Avatar image failed !")
    }
  };

  useEffect(() => {
    if (open) {
      // Reset local state
      setRoomName("");
      setRoomDescription("");
      setAvatarUrl("");
  
      // Reset redux state
      dispatch(createRoomSlice.actions.setRoomName(""));
      dispatch(createRoomSlice.actions.setDescription(""));
      dispatch(createRoomSlice.actions.setAvatarUrl(""));
    }
  }, [open]);

  return (
    <Modal
      title="New Group"
      open={open}
      onCancel={onClose}
      footer={null}
      centered
    >
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <Upload
          name="file"
          customRequest={handleAvatarUpload}  
          listType="picture-card"
          showUploadList={false}
          accept="image/*"
          onChange={({ file, fileList }) => {
            if (file.status === 'done') {
              setAvatarUrl(file.response);
              dispatch(createRoomSlice.actions.setAvatarUrl(file.response));
            }
          }}
        >
          <Avatar
            size={100}
            src={
              avatarUrl === 'default'
                ? 'assets/img/profiles/avatar-16.jpg'
                : avatarUrl.includes('bucket')
                  ? `http://localhost:9990/${avatarUrl}`
                  : avatarUrl
            }
            icon={<UploadOutlined />}
          />
        </Upload>
                                
      </div>

      <div style={{ marginBottom: 16 }}>
        <label>Group Name</label>
        <Input
          placeholder="Group Name"
          prefix={<UsergroupAddOutlined />}
          value={roomName}
          onChange={handleChangeRoomName}
        />
      </div>

      <div style={{ marginBottom: 16 }}>
        <label>About</label>
        <Input.TextArea
          placeholder="About"
          value={roomDescription}
          onChange={handleChangeRoomDescription}
          rows={4}
        />
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <Button onClick={onClose} style={{ flex: 1 }}>
          Cancel
        </Button>
        <Button
          type="primary"
          onClick={handleNextClick}
          style={{ flex: 1 }}
          disabled={!roomName.trim() || !roomDescription.trim()}
        >
          Next
        </Button>
      </div>
    </Modal>
  );
};

export default NewGroupModal;
