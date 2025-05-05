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

export const useAuth = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPinModal, setShowPinModal] = useState(false);
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
            setShowPinModal(true);
          }
        } else {
          setIsAuthenticated(true);
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

  const handleSubmitPin = async () => {
    if (pinInput.length !== 6 || isNaN(Number(pinInput))) {
      message.warning("PIN must be exactly 6 digits long.");
      return;
    }

    try {
      setSubmittingPin(true);
      ////////////////////////// CALL API /////////////////
      const response = await httpRequest.post("/user/set-pin", {
        pin: pinInput,
      });

      if (response.code === 0) {
        message.success("PIN created successfully.");
      } else {
        notify.error("Error", "Create Pin failed!");
      }

      // Call api get userMe again 
      const responseUserMe: ApiResponse<UserData> = await httpRequest.post(`/user/me?ts=${Date.now()}`, {
        headers: {
          "Cache-Control": "no-cache",
          "Pragma": "no-cache",
          "Expires": "0"
        }
      });

      dispatch(setMe(responseUserMe.result));
      if (responseUserMe.result.pin) {
        setShowPinModal(false);
      }
    } catch (err) {
      notify.error("Error", "Create Pin failed!");
    } finally {
      setSubmittingPin(false);
    }
  };

  const PinModal = (
    <Modal
      title="Create PIN"
      open={showPinModal}
      onOk={handleSubmitPin}
      confirmLoading={submittingPin}
      onCancel={() => {}}
      okText="Confirm"
      closable={false}
      maskClosable={false}
    >
      <p>You need to create a Pin code to encrypt data when using the application.</p>
      <Input.Password
        placeholder="Enter 6 digit PIN"
        maxLength={6}
        value={pinInput}
        onChange={(e) => setPinInput(e.target.value)}
      />
    </Modal>
  );

  return { loading, isAuthenticated, PinModal };
};
