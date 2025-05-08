import { useEffect, useState } from "react";
import httpRequest, { ApiResponse } from "../api/baseAxios";
import { useNavigate } from "react-router-dom";
import { all_routes } from "../../feature-module/router/all_routes";
import { useDispatch, useSelector } from "react-redux";
import { setMe } from "@/core/redux/reducers/getMeSlice";
import { UserData } from "../services/contactService";
import { getMeSelector } from "../redux/selectors";

import { Modal, Input, message } from "antd";
import { notify } from "../utils/notification";
import { decryptPrivateKey, encryptPrivateKey, generateAsymmetricKeyPair } from "../utils/encryption";

export const useAuth = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Modal states
  const [showPinSetupModal, setShowPinSetupModal] = useState(false);
  const [showPinRestoreModal, setShowPinRestoreModal] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [submittingPin, setSubmittingPin] = useState(false);

  const navigate = useNavigate();
  const userMe: UserData = useSelector(getMeSelector);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        if (userMe.user_id === "") {
          const response: ApiResponse<UserData> = await httpRequest.post(`/user/me?ts=${Date.now()}`, {
            headers: {
              "Cache-Control": "no-cache",
              "Pragma": "no-cache",
              "Expires": "0"
            }
          });

          dispatch(setMe(response.result));
          setIsAuthenticated(true);

          if (!response.result.pin) {
            setShowPinSetupModal(true);
          } else {
            const localPrivateKey = localStorage.getItem("privateKey");
            if (!localPrivateKey) {
              setShowPinRestoreModal(true);
            }
          }
        } else {
          setIsAuthenticated(true);

          if (userMe.pin) {
            const localPrivateKey = localStorage.getItem("privateKey");
            if (!localPrivateKey) {
              setShowPinRestoreModal(true);
            }
          }
        }
      } catch (error) {
        setIsAuthenticated(false);
        navigate(all_routes.signin);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [navigate]);

  const handleSubmitPinSetup = async () => {
    if (pinInput.length !== 6 || isNaN(Number(pinInput))) {
      message.warning("PIN must be exactly 6 digits.");
      return;
    }

    try {
      setSubmittingPin(true);
      const { publicKey, privateKey } = await generateAsymmetricKeyPair();
      const encryptedPrivateKey = await encryptPrivateKey(privateKey, pinInput);

      /////////////////// API 1: Create Pin
      const response = await httpRequest.post("/user/set-pin", {
        pin: pinInput,
        public_key: publicKey,
        encrypted_private_key: encryptedPrivateKey
      });

      console.log(response)

      if (response.code === 0) {
        notify.success("PIN created successfully.");
        localStorage.setItem("publicKey", publicKey)
        localStorage.setItem("privateKey", privateKey)
        const responseUserMe: ApiResponse<UserData> = await httpRequest.post(`/user/me?ts=${Date.now()}`, {
          headers: {
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Expires": "0"
          }
        });

        dispatch(setMe(responseUserMe.result));
        if (responseUserMe.result.pin) {
          setShowPinSetupModal(false);
        }
      } else {
        notify.error("Error", "Create Pin failed!");
      }
    } catch (err) {
      notify.error("Error", "Create Pin failed!");
    } finally {
      setSubmittingPin(false);
    }
  };

  const handleSubmitPinRestore = async () => {
    if (pinInput.length !== 6 || isNaN(Number(pinInput))) {
      message.warning("PIN must be exactly 6 digits.");
      return;
    }

    try {
      setSubmittingPin(true);

      /////////////////// API 2: Get private Key again
      const response = await httpRequest.post("/user/restore-private-key", {
        pin: pinInput,
      });
      console.log("Get private Key again: ", response)
      if (response.code === 0 && response.result?.encrypted_private_key) {
        const encryptedPrivateKey = response.result.encrypted_private_key;
        const privateKey = await decryptPrivateKey(encryptedPrivateKey, pinInput);
        console.log("encryptPrivateKey after decrypt: ", privateKey)
        localStorage.setItem("publicKey", response.result.public_key);
        localStorage.setItem("privateKey", privateKey);
        notify.success("Message sync successful");
        setShowPinRestoreModal(false);
      } else {
        notify.error("Error", "Message sync failed");
      }
    } catch (err) {
      notify.error("Error", "Message sync failed");
    } finally {
      setSubmittingPin(false);
      window.location.reload();
    }
  };

  const PinSetupModal = (
    <Modal
      title="Create PIN"
      open={showPinSetupModal}
      onOk={handleSubmitPinSetup}
      confirmLoading={submittingPin}
      onCancel={() => {}}
      okText="Confirm"
      closable={false}
      maskClosable={false}
    >
      <p>You need to create a PIN code to encrypt data when using the application.</p>
      <Input.Password
        placeholder="Enter 6 digit PIN"
        maxLength={6}
        value={pinInput}
        onChange={(e) => setPinInput(e.target.value)}
      />
    </Modal>
  );

  const PinRestoreModal = (
    <Modal
      title="Enter PIN to Restore Access"
      open={showPinRestoreModal}
      onOk={handleSubmitPinRestore}
      confirmLoading={submittingPin}
      onCancel={() => {}}
      okText="Restore"
      closable={false}
      maskClosable={false}
    >
      <p>Please enter pin code to synchronize data.</p>
      <Input.Password
        placeholder="Enter your PIN"
        maxLength={6}
        value={pinInput}
        onChange={(e) => setPinInput(e.target.value)}
      />
    </Modal>
  );

  return { loading, isAuthenticated, PinSetupModal, PinRestoreModal };
};
