import React, { useState } from "react";
import { all_routes } from "../router/all_routes";
import ImageWithBasePath from "../../core/common/imageWithBasePath";
import { Link, useLocation } from "react-router-dom";
import { Button } from "antd";
import httpRequest from "@/core/api/baseAxios";
import { notify } from "@/core/utils/notification";

type PasswordField = "confirmPassword" | "newpassword";
const ResetPassword = () => {
  const routes = all_routes;
  const [passwordVisibility, setPasswordVisibility] = useState({
    confirmPassword: false,
    newpassword: false,
  });
  const [loadingResetPassword, setLoadingResetPassword] = useState(false)
  const [newpassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const location = useLocation();
  const [messageError, setMessageError] = useState("")
  const [messageSuccess, setMessageSuccess] = useState("")
  const [disabledButton, setDisabledButton] = useState(false)

  const togglePasswordVisibility = (field: PasswordField) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };
  

  const handleChangeNewPassword = (e: any) => {
    setNewPassword(e.target.value);
  };

  const handleChangeConfirmNewPassword = (e: any) => {
    setConfirmNewPassword(e.target.value);
  };

  const resetPassword = async () => {
    try {
      setLoadingResetPassword(true)

      const urlParams = new URLSearchParams(location.search);
      const token = urlParams.get("token");
      const res = await httpRequest.post("/reset-password", 
        {
          token: token,
          new_password: newpassword,
          confirm_new_password: confirmNewPassword
        }, 
        {
          headers: {
            'Accept': 'application/json'
          }
        });

        if (res.code && res.code !==0 ) {
          setMessageError(res.error_message)
        } else {
          setMessageSuccess("Reset password Successfully. Please sign in again !")
          setMessageError("")
          setDisabledButton(true)
        }
    } catch {
      notify.error("Error", "Confirm by Email has error")
    } finally {
      setLoadingResetPassword(false)
    }
  };

  return (
    <div className="container-fuild">
      <div className=" w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap login-bg1 ">
              <div className="col-md-9 mx-auto p-4">
                <form>
                  <div>
                    <div className=" mx-auto mb-5 text-center">
                      <img
                        src="assets/img/logo.png"
                        style={{ maxWidth: "100px" }}
                        className="img-fluid"
                        alt="Logo"
                      />
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <div className=" mb-4">
                          <h2 className="mb-2">Set New Password</h2>
                          <p className="mb-0 fs-16">
                            Your new password must be different from previous
                            passwords.
                          </p>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="mb-3">
                              <label className="form-label">New Password</label>
                              <div className="input-icon ">
                                <input
                                  type={
                                    passwordVisibility.newpassword
                                      ? "text"
                                      : "password"
                                  }
                                  className="pass-input form-control"
                                  onChange={handleChangeNewPassword}
                                />
                                <span
                                  className={`ti toggle-passwords ${
                                    passwordVisibility.newpassword
                                      ? "ti-eye"
                                      : "ti-eye-off"
                                  }`}
                                  onClick={() =>
                                    togglePasswordVisibility("newpassword")
                                  }
                                ></span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="mb-3">
                              <label className="form-label">
                                Confirm Password
                              </label>
                              <div className="input-icon ">
                                <input
                                  type={
                                    passwordVisibility.confirmPassword
                                      ? "text"
                                      : "password"
                                  }
                                  className="pass-input form-control"
                                  onChange={handleChangeConfirmNewPassword}
                                />
                                <span
                                  className={`ti toggle-passwords ${
                                    passwordVisibility.confirmPassword
                                      ? "ti-eye"
                                      : "ti-eye-off"
                                  }`}
                                  onClick={() =>
                                    togglePasswordVisibility("confirmPassword")
                                  }
                                ></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Button
                          className="w-100 h-100 btn btn-primary"
                          loading={loadingResetPassword}
                          onClick={resetPassword} 
                          disabled={disabledButton}
                        >
                          Reset Password
                        </Button>
                        <div className="text-danger text-center mt-2">
                          {messageError }
                        </div>
                        <div className="text-success text-center mt-2">
                          {messageSuccess }
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 text-center">
                      <p className="mb-0 text-gray-9">
                        {" "}
                        <i className="ti ti-circle-arrow-left" /> Back to{" "}
                        <Link to={routes.signin} className="link-primary">
                          Sign In
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6 p-0">
            <div className="d-lg-flex align-items-center justify-content-center position-relative d-lg-block d-none flex-wrap vh-100 overflowy-auto login-bg2 ">
              <div className="floating-bg">
                <ImageWithBasePath src="assets/img/bg/circle-1.png" alt="Img" />
                <ImageWithBasePath src="assets/img/bg/circle-2.png" alt="Img" />
                <ImageWithBasePath src="assets/img/bg/emoji-01.svg" alt="Img" />
                <ImageWithBasePath src="assets/img/bg/emoji-02.svg" alt="Img" />
                <ImageWithBasePath src="assets/img/bg/emoji-03.svg" alt="Img" />
                <ImageWithBasePath src="assets/img/bg/emoji-04.svg" alt="Img" />
                <ImageWithBasePath
                  src="assets/img/bg/right-arrow-01.svg"
                  alt="Img"
                />
                <ImageWithBasePath
                  src="assets/img/bg/right-arrow-02.svg"
                  alt="Img"
                />
              </div>
              <div className="floating-avatar ">
                <span className="avatar avatar-xl avatar-rounded border border-white">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-12.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-xl avatar-rounded border border-white">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-03.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-xl avatar-rounded border border-white">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-02.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-xl avatar-rounded border border-white">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-05.jpg"
                    alt="img"
                  />
                </span>
              </div>
              <div className="text-center">
                <ImageWithBasePath
                  src="assets/img/bg/login-bg-1.png"
                  className="login-img"
                  alt="Img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
