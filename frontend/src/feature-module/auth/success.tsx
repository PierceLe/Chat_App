import React from "react";
import ImageWithBasePath from "../../core/common/imageWithBasePath";
import { Link } from "react-router-dom";
import { all_routes } from "../router/all_routes";

const Success = () => {
  const routes = all_routes;
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
                      <div className="card-body text-center">
                        <div className="bg-soft-success mx-auto success-badge d-flex align-items-center justify-content-center mb-4">
                          <span className="avatar  avatar-xl rounded-circle bg-success ">
                            <i className="ti ti-checks fs-24" />
                          </span>
                        </div>
                        <h3 className="mb-2">All Done!</h3>
                        <p className="fs-16">
                          Your new password has been successfully saved.
                          <br />
                          Now you can signin with your new password
                        </p>
                        <Link
                          to={routes.signin}
                          className="btn btn-primary w-100 justify-content-center"
                        >
                          Back to Sign In
                        </Link>
                      </div>
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

export default Success;
