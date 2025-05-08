import React, { useEffect, useState } from "react";
import ImageWithBasePath from "../../core/common/imageWithBasePath";
import { Link } from "react-router-dom";
import { getMe, login } from "../../core/services/authService";
import { useDispatch } from "react-redux";
import getMeSlice from "../../core/redux/reducers/getMeSlice";
import { Button, Input, Modal } from "antd";
import { notify } from "@/core/utils/notification";
import { isValidEmail } from "@/core/utils/helper"
import { LoginType } from "@/core/model/responseType";
import { useNavigate } from "react-router-dom";
import { all_routes } from "@/feature-module/router/all_routes";
import httpRequest from "@/core/api/baseAxios";
import { wsClient } from "@/core/services/websocket";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { GOOGLE_CLIENT_ID } from "@/environment"

const Signin = () => {
  const routes = all_routes;
  const navigate = useNavigate();
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const [loadingSignin, setLoadingSignin] = useState(false)
  const [is2FAModalVisible, setIs2FAModalVisible] = useState(false);
  const [twoFACode, setTwoFACode] = useState("");
  const [loading2FA, setLoading2FA] = useState(false);
  const [tokenLogin2FA, setTokenLogin2FA] = useState("");
  const [messageError2FA, setMessageError2FA] = useState("")

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const user = await getMe();
        if (user) {
          navigate(routes.index);
        }
      } catch (error) {
        console.log("Not logged in");
      }
    };
  
    checkLoggedIn();
  }, []);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };
  useEffect(() => {
    localStorage.setItem("menuOpened", "");
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    if (!email) {
      setLoginErrorMessage("Email not be empty !")
      return
    }

    if (!password) {
      setLoginErrorMessage("Password not be empty !")
      return
    }

    if (!isValidEmail(email)) {
      setLoginErrorMessage("Please enter correct email!")
      return
    }

    try {
      setLoadingSignin(true)
      const res: LoginType = await login(email, password);

      if (res.code && res.code !== 0) {
        setLoginErrorMessage(res.error_message)
      }
      else {
        if (res.login_type === "0") {
          // Login successful without 2FA
          notify.success("Login Successfully !")
          navigate(routes.index);
        } else {
          setTokenLogin2FA(res.token)
          setIs2FAModalVisible(true);
        }
        if (wsClient){
          if (!wsClient.isConnected()){
            wsClient.connect()
          }
          console.log("wsClient:", wsClient)
        }
      }
    } catch {
      notify.error("Error", "Login Failed !")

    } finally {
      setLoadingSignin(false)
    }
    
  };

  const handle2FACodeSubmit = async () => {
    setMessageError2FA("")

    if (!twoFACode || twoFACode.length !== 6) {
      notify.error("Invalid 2FA code", "Please enter a valid 6-digit code.");
      return;
    }

    try {
      setLoading2FA(true);
      const res = await httpRequest.post("/check-2fa", {
        token: tokenLogin2FA,
        code: twoFACode
      });

      if (res.code === 0) {
        notify.success("2FA Verified Successfully!");
        navigate(routes.index);
        setIs2FAModalVisible(false);
      } else {
        setMessageError2FA(res.error_message)
      }
    } catch {
      notify.error("Error", "Failed to verify 2FA code.");
    } finally {
      setLoading2FA(false);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    setLoginErrorMessage("")
    try {
      const res = await httpRequest.post("/login/google", {
        token: credentialResponse.credential,
      });

      if (res.code !== 0) {
        setLoginErrorMessage("Login with Google Account Failed !")

        return
      }
      
      notify.success("Login Successfully !")
      navigate(routes.index);
    } catch (err) {
      console.error("Google login failed", err);
    }
  };

  const handleGoogleError = () => {
    setLoginErrorMessage("Login with Google Account Failed !")
  }

  return (
    <>
      <div className="container-fuild">
        <div className=" w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap login-bg1 ">
                <div className="col-md-9 mx-auto p-4">
                  <form>
                    <div>
                      <div className="mx-auto mb-5 text-center flex items-center gap-3">
                        <img
                          src="assets/img/logo.png"
                          style={{ maxWidth: "100px" }}
                          className="img-fluid w-full"
                          alt="Logo"
                        />
                      </div>

                      <div className="card">
                        <div className="card-body">
                          <div className=" mb-4">
                            <h2 className="mb-2">Sign in</h2>
                          </div>
                          <div className="mb-3 ">
                            <label className="form-label">Email</label>
                            <div className="input-icon mb-3 position-relative">
                              <input
                                type="text"
                                defaultValue=""
                                className="form-control"
                                onChange={handleChangeEmail}
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-user" />
                              </span>
                            </div>
                            <label className="form-label">Password</label>
                            <div className="input-icon ">
                              <input
                                type={isPasswordVisible ? "text" : "password"}
                                className="pass-input form-control"
                                onChange={handleChangePassword}
                              />
                              <span
                                className={`ti toggle-password ${
                                  isPasswordVisible ? "ti-eye" : "ti-eye-off"
                                }`}
                                onClick={togglePasswordVisibility}
                              ></span>
                            </div>
                          </div>
                          <div className="form-wrap form-wrap-checkbox mb-3">
                            <div className="d-flex align-items-center">
                              <div className="form-check form-check-md mb-0">
                                <input
                                  className="form-check-input mt-0"
                                  type="checkbox"
                                />
                              </div>
                              <p className=" mb-0 ">Remember Me</p>
                            </div>
                            <div className="flex h-full justify-content-end">
                              <Link
                                to={routes.forgotPassword}
                                className="link-primary text-end"
                              >
                                Forgot Password?
                              </Link>
                            </div>
                          </div>
                          <div className="mb-4">
                            <Button className="w-100 btn btn-primary" size="large" loading={loadingSignin} onClick={() => handleSubmit()}>Sign In</Button>
                          </div>
                          <div className="login-or mb-3">
                            <span className="span-or">Or sign in with </span>
                          </div>
                          <div style={{ width: '100%', boxSizing: 'border-box' }}>
                            <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
                              <GoogleLogin
                                onSuccess={handleGoogleSuccess}
                                onError={handleGoogleError}
                                scope="openid profile email"
                                style={{ width: '100%' }}
                              />
                            </GoogleOAuthProvider>
                            {/* <div className="text-center flex-fill">
                              <Link
                                to="#"
                                className="fs-16 btn btn-white btn-shadow d-flex align-items-center justify-content-center"
                              >
                                <ImageWithBasePath
                                  className="img-fluid me-3"
                                  src="assets/img/icons/facebook.svg"
                                  alt="Facebook"
                                />
                                Facebook
                              </Link>
                            </div> */}
                          </div>
                          <div className="text-danger text-center mt-2">
                            {loginErrorMessage }
                          </div>
                        </div>
                      </div>
                      <div className="mt-5 text-center">
                        <p className="mb-0 text-gray-9">
                          Don’t have a account?{" "}
                          <Link to={routes.signup} className="link-primary">
                            Sign Up
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
                  <ImageWithBasePath
                    src="assets/img/bg/circle-1.png"
                    alt="Img"
                  />
                  <ImageWithBasePath
                    src="assets/img/bg/circle-2.png"
                    alt="Img"
                  />
                  <ImageWithBasePath
                    src="assets/img/bg/emoji-01.svg"
                    alt="Img"
                  />
                  <ImageWithBasePath
                    src="assets/img/bg/emoji-02.svg"
                    alt="Img"
                  />
                  <ImageWithBasePath
                    src="assets/img/bg/emoji-03.svg"
                    alt="Img"
                  />
                  <ImageWithBasePath
                    src="assets/img/bg/emoji-04.svg"
                    alt="Img"
                  />
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
      <Modal
        title="Enter 2FA Code"
        visible={is2FAModalVisible}
        onCancel={() => setIs2FAModalVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setIs2FAModalVisible(false)}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading2FA}
            onClick={handle2FACodeSubmit}
          >
            Submit
          </Button>
        ]}
      >
        <p>Please enter the 6-digit code from your authenticator app.</p>
        <Input
          type="number"
          value={twoFACode}
          onChange={(e) => setTwoFACode(e.target.value)}
          maxLength={6}
          style={{ textAlign: "center" }}
        />
        {messageError2FA && (
          <div className="text-danger mt-2" style={{ textAlign: "center" }}>
            {messageError2FA}
          </div>
        )}
      </Modal>
    </>
  );
};

export default Signin;
