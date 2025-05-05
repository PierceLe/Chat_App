import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../imageWithBasePath";
import { DatePickerProps, Avatar, Input } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import { Button, DatePicker, Modal, Spin, Upload } from "antd";
import LogoutModal from "../../modals/logout-modal";
import Scrollbars from "react-custom-scrollbars-2";
import { getMe } from "../../services/authService";
import { UserData } from "../../services/contactService";
import { SaveOutlined } from "@ant-design/icons";
import { notify } from "@/core/utils/notification";
import httpRequest from "@/core/api/baseAxios";
import { getMeSelector } from "@/core/redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { setMe } from "@/core/redux/reducers/getMeSlice";
import { ApiResponse } from "@/core/api/baseAxios";

type PasswordField = "confirmPassword" | "newpassword" | "oldpassword";
const SettingsTab = () => {
  const userMe: UserData = useSelector(getMeSelector); 
  const dispatch = useDispatch();

  const [passwordVisibility, setPasswordVisibility] = useState({
    confirmPassword: false,
    newpassword: false,
    oldpassword: false,
  });

  const [isModalQR2faVisible, setIsModalQR2faVisible] = useState(false);
  const [qrImage, setQrImage] = useState<string | null>(null);
  const [loadingQR2fa, setLoadingQR2fa] = useState(false);

  const togglePasswordVisibility = (field: PasswordField) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmNewPassword, setConfirmNewPassword] = useState("")
  const [loadingChangePassword, setLoadingChangePassword] = useState(false)
  const [changePasswordErrorMessage, setChangePasswordErrorMessage] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [avatarUrl, setAvatarUrl] = useState("")
  const [updateUserInfoError, setUpdateUserInfoError] = useState("")
  const [loadingUpdateUserInfo, setLoadingUpdateUserInfo] = useState(false)
  const [loadingBioUpdate, setLoadingBioUpdate] = useState(false)

  const handleChangeOldPassword = (e: any) => {
    setOldPassword(e.target.value);
  };

  const handleChangeNewPassword = (e: any) => {
    setNewPassword(e.target.value);
  };

  const handleChangeConfirmNewPassword = (e: any) => {
    setConfirmNewPassword(e.target.value);
  };

  const handleChangeFirstName = (e: any) => {
    setFirstName(e.target.value)
  };

  const handleChangeLastName = (e: any) => {
    setLastName(e.target.value)
  };

  useEffect(() => {
    if (userMe?.user_id) {
      setFirstName(userMe.first_name)
      setLastName(userMe.last_name)
      setAvatarUrl(userMe.avatar_url)
    }
  }, [userMe]);


  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  const [showModal, setShowModal] = useState(false);

  const handleEnable2FA = async () => {
    try {
      setLoadingQR2fa(true);  

      const response = await httpRequest.post('/enable-2fa');
      const imageUrl = `data:image/png;base64,${response.qr_code}`;

      setQrImage(imageUrl)
      setIsModalQR2faVisible(true);

      // update state userMe
      const responseMe: ApiResponse<UserData> = await httpRequest.post(`/user/me?ts=${Date.now()}`, {
        headers: {
          "Cache-Control": "no-cache",
          "Pragma": "no-cache",
          "Expires": "0"
        }
      });
      console.log("checkAuth: ", response)
      dispatch(setMe(responseMe.result));

    } catch (err) {
      notify.error("Enable 2FA failed", 'Failed to enable 2FA. Please try again.');
    } finally {
      setLoadingQR2fa(false);
    }
  };

  const handleChangePassword = async () => {
    setChangePasswordErrorMessage("")

    if (!oldPassword) {
      setChangePasswordErrorMessage("Old Password not be empty !")
      return
    }

    if (!newPassword) {
      setChangePasswordErrorMessage("New Password not be empty !")
      return
    }

    if (!confirmNewPassword) {
      setChangePasswordErrorMessage("Confirm New Password not be empty !")
      return
    }

    try {
      setLoadingChangePassword(true)
      const res = await httpRequest.post("/change-password", {
        old_password: oldPassword,
        new_password: newPassword,
        confirm_new_password: confirmNewPassword
      });

      if (res.code && res.code !== 0) {
        setChangePasswordErrorMessage(res.error_message)
      }
      else {
        notify.success("Change Password Successfully !")
      }
    } catch {
      notify.error("Error", "Change Password Failed !")

    } finally {
      setLoadingChangePassword(false)
    }

  }

  const handleChangeBio = async () => {
    
  }

  const handleUpdateBio =  async () => {

  }

  const handleUpdateInfo =  async () => {
    setUpdateUserInfoError("")

    if (!firstName) {
      setUpdateUserInfoError("First Name not be empty !")
      return
    }

    if (!lastName) {
      setUpdateUserInfoError("Last Name not be empty !")
      return
    }

    try {
      setLoadingUpdateUserInfo(true)
      const res = await httpRequest.put("/user/update-me", {
        first_name: firstName,
        last_name: lastName,
        avatar_url: avatarUrl
      });
      notify.success("Update Info successfully !")

      // update state userMe
      const responseMe: ApiResponse<UserData> = await httpRequest.post(`/user/me?ts=${Date.now()}`, {
        headers: {
          "Cache-Control": "no-cache",
          "Pragma": "no-cache",
          "Expires": "0"
        }
      });
      dispatch(setMe(responseMe.result));
      

    } catch {
      notify.error("Error", "Update Info failed !")

    } finally {
      setLoadingUpdateUserInfo(false)
    }


  }

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

  return (
    <>
      {/* Profile sidebar */}
      <div className="sidebar-content active slimscroll">
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          autoHeight
          autoHeightMin={0}
          autoHeightMax="100vh"
          thumbMinSize={30}
          universal={false}
          hideTracksWhenNotNeeded={true}
        >
          <div className="slimscroll">
            <div className="chat-search-header">
              <div className="header-title d-flex align-items-center justify-content-between">
                <h4 className="mb-3">Settings</h4>
              </div>
              {/* Settings Search */}
              <div className="search-wrap">
                <form>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Settings"
                    />
                    <span className="input-group-text">
                      <i className="ti ti-search" />
                    </span>
                  </div>
                </form>
              </div>
              {/* /Settings Search */}
            </div>
            <div className="sidebar-body chat-body">
              {/* Account setting */}
              <div className="content-wrapper">
                <h5 className="sub-title">Account</h5>
                <div className="chat-file">
                  <div className="file-item">
                    <div
                      className="accordion accordion-flush chat-accordion"
                      id="account-setting"
                    >
                      <div className="accordion-item others">
                        <h2 className="accordion-header">
                          <Link
                            to="#"
                            className="accordion-button"
                            data-bs-toggle="collapse"
                            data-bs-target="#chatuser-collapse"
                            aria-expanded="true"
                            aria-controls="chatuser-collapse"
                          >
                            <i className="ti ti-user me-2" />
                            Profile Info
                          </Link>
                        </h2>
                        <div
                          id="chatuser-collapse"
                          className="accordion-collapse collapse show"
                          data-bs-parent="#account-setting"
                        >
                          <div className="accordion-body">
                            {userMe?.method === "google" && (
                              <span className="text-warning small d-block mt-2 mb-3 text-center">
                                ⚠️ Information synced from Google
                              </span>
                            )}
                            <div>
                              <div className="d-flex justify-content-center align-items-center">
                                <span className="set-pro avatar avatar-xxl rounded-circle mb-3 p-1" style={{ position: 'relative' }}>
                                  <Upload
                                    name="file"
                                    customRequest={handleAvatarUpload}  
                                    listType="picture-card"
                                    showUploadList={false}
                                    accept="image/*"
                                    disabled={userMe?.method === "google"}
                                    onChange={({ file, fileList }) => {
                                      if (file.status === 'done') {
                                        setAvatarUrl(file.response);
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
                                </span>
                              </div>
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="input-icon mb-3 position-relative">
                                    <h6 className="fs-14">First Name</h6>
                                    <input
                                      type="text"
                                      defaultValue=""
                                      className="form-control"
                                      placeholder="First Name"
                                      disabled={userMe?.method === "google"}
                                      value={firstName}
                                      onChange={handleChangeFirstName}
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="input-icon mb-3 position-relative">
                                    <h6 className="fs-14">Last Name</h6>
                                    <input
                                      type="text"
                                      defaultValue=""
                                      className="form-control"
                                      placeholder="Last Name"
                                      disabled={userMe?.method === "google"}
                                      value={lastName}
                                      onChange={handleChangeLastName}
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="input-icon mb-3 position-relative">
                                    <h6 className="fs-14">Email</h6>
                                    <input
                                      type="text"
                                      defaultValue=""
                                      className="form-control"
                                      placeholder="Last Name"
                                      value={userMe?.email}
                                      disabled
                                    />
                                  </div>
                                </div>
                                {/* <div className="col-lg-12 d-flex">
                                  <Link
                                    to="#"
                                    className="btn btn-primary flex-fill"
                                  >
                                    <i className="ti ti-device-floppy me-2" />
                                    Save Changes
                                  </Link>
                                </div> */}
                              </div>
                              <Button
                                className="w-100 btn-primary"
                                icon={<SaveOutlined />}
                                size="large"
                                disabled={userMe?.method === "google"}
                                loading={loadingUpdateUserInfo}
                                onClick={() => handleUpdateInfo()}
                              >
                                Update Info
                              </Button>
                              <div className="text-danger text-center mt-2">
                                {updateUserInfoError }
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item others">
                        <h2 className="accordion-header">
                          <Link
                            to="#"
                            className="accordion-button collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#bio-collapse"
                            aria-expanded="false"
                            aria-controls="bio-collapse"
                          >
                            <i className="ti ti-user me-2" />
                            About Me
                          </Link>
                        </h2>
                        <div
                          id="bio-collapse"
                          className="accordion-collapse collapse"
                          data-bs-parent="#bio-setting"
                        >
                          <div className="accordion-body">
                            <Input.TextArea
                              rows={4}
                              placeholder="Write something about yourself..."
                              value={userMe.biography}
                              onChange={handleChangeBio}
                            />
                            <Button
                              className="w-100 btn-primary mt-2"
                              icon={<SaveOutlined />}
                              size="large"
                              loading={loadingBioUpdate}
                              onClick={() => handleUpdateBio()}
                            >
                              Update Biography
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Account setting */}
              {/* Security setting */}
              <div className="content-wrapper">
                <h5 className="sub-title">Security</h5>
                <div className="chat-file">
                  <div className="file-item">
                    <div
                      className="accordion accordion-flush chat-accordion"
                      id="pwd-setting"
                    >
                      <div className="accordion-item others mb-3">
                        <h2 className="accordion-header">
                          <Link
                            to="#"
                            className="accordion-button collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#set-pwd"
                            aria-expanded="false"
                            aria-controls="set-pwd"
                          >
                            <i className="ti ti-key me-2" />
                            Password
                          </Link>
                        </h2>
                        <div
                          id="set-pwd"
                          className="accordion-collapse collapse"
                          data-bs-parent="#pwd-setting"
                        >
                          <div className="accordion-body">
                            {userMe?.method === "google" ? (
                              <div className="text-warning text-center">
                                ⚠️ The change password feature is not available because you are logged in with Google.
                              </div>
                            ) : (
                              <div className="row">
                                <div className="col-lg-12">
                                  <label className="form-label">
                                    Old Password <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <div className="input-icon mb-3">
                                    <input
                                      type={passwordVisibility.oldpassword ? "text" : "password"}
                                      className="pass-input form-control"
                                      onChange={handleChangeOldPassword}
                                    />
                                    <span
                                      className={`ti toggle-passwords ${
                                        passwordVisibility.oldpassword ? "ti-eye" : "ti-eye-off"
                                      }`}
                                      onClick={() => togglePasswordVisibility("oldpassword")}
                                    ></span>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <label className="form-label">
                                    New Password <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <div className="input-icon mb-3">
                                    <input
                                      type={passwordVisibility.newpassword ? "text" : "password"}
                                      className="pass-input form-control"
                                      onChange={handleChangeNewPassword}
                                    />
                                    <span
                                      className={`ti toggle-passwords ${
                                        passwordVisibility.newpassword ? "ti-eye" : "ti-eye-off"
                                      }`}
                                      onClick={() => togglePasswordVisibility("newpassword")}
                                    ></span>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <label className="form-label">
                                    Confirm New Password <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <div className="input-icon mb-3">
                                    <input
                                      type={passwordVisibility.confirmPassword ? "text" : "password"}
                                      className="pass-input form-control"
                                      onChange={handleChangeConfirmNewPassword}
                                    />
                                    <span
                                      className={`ti toggle-passwords ${
                                        passwordVisibility.confirmPassword ? "ti-eye" : "ti-eye-off"
                                      }`}
                                      onClick={() => togglePasswordVisibility("confirmPassword")}
                                    ></span>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <Button
                                    className="w-100 btn-primary"
                                    icon={<SaveOutlined />}
                                    size="large"
                                    loading={loadingChangePassword}
                                    onClick={handleChangePassword}
                                  >
                                    Change Password
                                  </Button>
                                  <div className="text-danger text-center mt-2">
                                    {changePasswordErrorMessage}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item others mb-3">
                        <h2 className="accordion-header">
                          <Link
                            to="#"
                            className="accordion-button collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#set-twofa"
                            aria-expanded="false"
                            aria-controls="set-twofa"
                          >
                            <i className="ti ti-key me-2" />
                            Two Factor Authentication
                          </Link>
                        </h2>
                        <div
                          id="set-twofa"
                          className="accordion-collapse collapse"
                          data-bs-parent="#pwd-setting"
                        >
                          <div className="accordion-body">
                            <div className="">
                              <div className="row">
                              {userMe?.use_2fa_login === false ? (
                                userMe?.method === "google" ? (
                                  <div className="d-flex flex-column w-100">
                                    <div className="text-warning mb-2">
                                      ⚠️ Feature not available due to Google login
                                    </div>
                                  </div>
                                ) : (
                                  <div className="d-flex align-items-center justify-content-between w-100">
                                    <span>Enable 2FA now 👉</span>
                                    <Button type="primary" onClick={handleEnable2FA}>Enable</Button>
                                  </div>
                                )
                              ) : (
                                <div className="d-flex align-items-center gap-2">
                                  <span>2FA is enabled</span>
                                  <i className="bi bi-check-circle-fill text-success"></i>
                                </div>
                              )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Security setting */}
              {/* Privacy setting */}
            </div>
          </div>
        </Scrollbars>
      </div>
      {/* / Chats sidebar */}
      <LogoutModal showModal={showModal} setShowModal={setShowModal} />
      <Modal
        title="Scan this QR Code"
        open={isModalQR2faVisible}
        onCancel={() => setIsModalQR2faVisible(false)}
        footer={[
          <Button
            key="ok"
            type="primary"
            onClick={() => setIsModalQR2faVisible(false)}
          >
            OK
          </Button>
        ]}
      >
        {loadingQR2fa ? (
          <div style={{ textAlign: 'center' }}>
            <Spin />
          </div>
        ) : (
          <>
            <p>You have successfully enabled 2FA login. Use the Google Authenticator app to scan the code below and use it for future logins.</p>
            {qrImage && (
              <img
                src={qrImage}
                alt="2FA QR Code"
                style={{ width: '100%', maxWidth: '300px', display: 'block', margin: '0 auto' }}
              />
            )}
            <p style={{ fontSize: '12px', color: '#888', textAlign: 'center', marginTop: '10px', color: "red" }}>
              * This QR code will only be displayed once. Make sure to scan it now.
            </p>
          </>
        )}
      </Modal>

    </>
  );
};

export default SettingsTab;
