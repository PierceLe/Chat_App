import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../router/all_routes";
import ImageWithBasePath from "../../core/common/imageWithBasePath";
import { Button } from "antd";
import httpRequest from "@/core/api/baseAxios";
import { notify } from "@/core/utils/notification";

const ForgotPassword = () => {
  const routes = all_routes;
  const [email, setEmail] = useState("");
  const [loadingSendEmail, setLoadingSendEmail] = useState(false)
  const [messageCheckMail, setMessageCheckMail] = useState("")

  const handleChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const sendEmail = async () => {
    setMessageCheckMail("")
    try {
      setLoadingSendEmail(true)
      const res = await httpRequest.post(`/forgot-password?email=${encodeURIComponent(email)}`, {
        headers: {
          'Accept': 'application/json',
        }
      });
      setMessageCheckMail("A verification request has been sent to your Email. Please check your mailbox to verify.")
    } catch {
      notify.error("Error", "Confirm by Email has error")
    } finally {
      setLoadingSendEmail(false)
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
                          <h2 className="mb-2">Forgot Password?</h2>
                          <p className="mb-0 fs-16">
                            Enter your email, we will send you a link to indentify .
                          </p>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="mb-3">
                              <label className="form-label">Email</label>
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
                        </div>
                        {/* <Link
                          to={routes.otp}
                          className="btn btn-primary w-100 justify-content-center"
                        >
                          Confirm 
                        </Link> */}
                        <div>
                          <Button
                            className="w-100 h-100 btn btn-primary"
                            loading={loadingSendEmail}
                            onClick={sendEmail} 
                          >
                            Confirm
                          </Button>
                        <div className="text-success text-center mt-2">
                            {messageCheckMail }
                          </div>
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

export default ForgotPassword;
