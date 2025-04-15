import React, { useState } from "react";
import ImageWithBasePath from "../../core/common/imageWithBasePath";
import { all_routes } from "../router/all_routes";
import { Link } from "react-router-dom";
import { InputOtp } from "primereact/inputotp";
const Otp = () => {
  const routes = all_routes;
  const [token, setTokens] = useState<any>();
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
                      <ImageWithBasePath
                        src="assets/img/full-logo.svg"
                        className="img-fluid"
                        alt="Logo"
                      />
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <div className=" mb-4">
                          <h2 className="mb-2">OTP Verification</h2>
                          <p className="mb-0 fs-16">
                            We send a code to test@example.com
                          </p>
                        </div>
                        <div className="text-center digit-group">
                          <div className="d-flex justify-content-center align-items-center mb-3">
                            {/* <input
                          type="text"
                          className="border fw-bold border-dark-2 rounded py-sm-3 py-2 text-center fs-32 hw-bold me-3"
                          id="digit-1"
                          name="digit-1"
                          data-next="digit-2"
                          maxLength={1}
                        />
                        <input
                          type="text"
                          className="border fw-bold border-dark-2 rounded py-sm-3 py-2 text-center fs-32 hw-bold me-3"
                          id="digit-2"
                          name="digit-2"
                          data-next="digit-3"
                          data-previous="digit-1"
                          maxLength={1}
                        />
                        <input
                          type="text"
                          className="border fw-bold border-dark-2 rounded py-sm-3 py-2 text-center fs-32 hw-bold me-3"
                          id="digit-3"
                          name="digit-3"
                          data-next="digit-4"
                          data-previous="digit-2"
                          maxLength={1}
                        />
                        <input
                          type="text"
                          className="border fw-bold border-dark-2 rounded py-sm-3 py-2 text-center fs-32 hw-bold"
                          id="digit-4"
                          name="digit-4"
                          data-next="digit-5"
                          data-previous="digit-3"
                          maxLength={1}
                        /> */}
                            <InputOtp
                              value={token}
                              onChange={(e) => setTokens(e.value)}
                              integerOnly
                            />
                          </div>
                          <div>
                            <div className="badge bg-soft-danger mb-3">
                              <p>Otp will expire in 09:59</p>
                            </div>
                          </div>
                        </div>
                        <Link
                          to={routes.resetPassword}
                          className="btn btn-primary w-100 justify-content-center"
                        >
                          Continue
                        </Link>
                      </div>
                    </div>
                    <div className="mt-5 text-center">
                      <p className="mb-0 text-gray-9">
                        {" "}
                        Dont receive an email?{" "}
                        <Link to="#" className="link-primary">
                          click to resend
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

export default Otp;
