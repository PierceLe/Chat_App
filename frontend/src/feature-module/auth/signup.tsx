import React, { useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../router/all_routes";
import ImageWithBasePath from "../../core/common/imageWithBasePath";
import { isValidEmail } from "@/core/utils/helper"
import { notify } from "@/core/utils/notification";
import { Button } from "antd";
import httpRequest from "@/core/api/baseAxios";

const Signup = () => {
  const routes = all_routes;
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [singupErrorMessage, setSignupErrorMessage] = useState("");
  const [checkEmailMessage, setCheckEmailMessage] = useState("");
  const [loadingSignup, setLoadingSignup] = useState(false)
  const [agreeTerms, setAgreeTerms] = useState(false);


  const handleChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleChangeFirstName = (e: any) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e: any) => {
    setLastName(e.target.value);
  };

  const handleClickSignup = async () => {
    setSignupErrorMessage("")
    setCheckEmailMessage("")

    if (!email) {
      setSignupErrorMessage("Email not be empty !")
      return
    }

    if (!password) {
      setSignupErrorMessage("Password not be empty !")
      return
    }

    if (!isValidEmail(email)) {
      setSignupErrorMessage("Please enter correct email!")
      return
    }

    if (!firstName) {
      setSignupErrorMessage("First Name not be empty !")
      return
    }

    if (!lastName) {
      setSignupErrorMessage("Last Name not be empty !")
      return
    }

    if (!agreeTerms) {
      setSignupErrorMessage("You must agree to the Terms and Privacy Policy. !")
      return
    }

    try {
      setLoadingSignup(true)
      const res = await httpRequest.post("/signup", {
        email,
        password,
        first_name: firstName,
        last_name: lastName,
        avatar_url: "default"
      })

      if (res.code && res.code !== 0) {
        setSignupErrorMessage(res.error_message)
      }
      else {
        setCheckEmailMessage("A verification request has been sent to your Email. Please check your mailbox to verify.")

      }
    } catch {
      notify.error("Error", "Signup Failed !")

    } finally {
      setLoadingSignup(false)
    }
    
  };
  

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
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
                          <h2 className="mb-2">Sign up</h2>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="mb-3">
                            <label className="form-label">
                              Email <span style={{ color: "red" }}>*</span>
                            </label>
                              <div className="input-icon mb-3 position-relative">
                                <input
                                  type="email"
                                  defaultValue=""
                                  className="form-control"
                                  onChange={handleChangeEmail}
                                />
                                <span className="input-icon-addon">
                                  <i className="ti ti-mail" />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12">
                            <div className="mb-3">
                            <label className="form-label">
                              Password <span style={{ color: "red" }}>*</span>
                            </label>
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
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <div className="mb-3 ">
                            <label className="form-label">
                              First Name <span style={{ color: "red" }}>*</span>
                            </label>
                              <div className="input-icon mb-3 position-relative">
                                <input
                                  type="text"
                                  defaultValue=""
                                  className="form-control"
                                  onChange={handleChangeFirstName}
                                />
                                <span className="input-icon-addon">
                                  <i className="ti ti-user" />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <div className="mb-3">
                            <label className="form-label">
                              Last Name <span style={{ color: "red" }}>*</span>
                            </label>
                              <div className="input-icon mb-3 position-relative">
                                <input
                                  type="text"
                                  defaultValue=""
                                  className="form-control"
                                  onChange={handleChangeLastName}
                                />
                                <span className="input-icon-addon">
                                  <i className="ti ti-user" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-wrap form-wrap-checkbox mb-3">
                          <div className="d-flex align-items-center">
                            <div className="form-check form-check-md mb-0">
                              <input
                                className="form-check-input mt-0"
                                type="checkbox"
                                checked={agreeTerms}
                                onChange={(e) => setAgreeTerms(e.target.checked)}
                              />
                            </div>
                            <p className=" mb-0 ">
                              I agree to
                              <Link to="#" className="link-primary">
                                Terms of use{" "}
                              </Link>
                              &amp;
                              <Link to="#" className="link-primary">
                                {" "}
                                Privacy policy
                              </Link>
                            </p>
                          </div>
                        </div>
                        <div className="mb-4">
                            <Button className="btn btn-primary w-100 h-100 justify-content-center" loading={loadingSignup} onClick={() => handleClickSignup()}>Sign Up</Button>
                            <div className="text-danger text-center mt-2">
                              {singupErrorMessage }
                            </div>
                            <div className="text-success text-center mt-2">
                              {checkEmailMessage }
                            </div>
                          </div>
                      </div>
                    </div>
                    <div className="mt-5 text-center">
                      <p className="mb-0 text-gray-9">
                        Already have a account?{" "}
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

export default Signup;
