import React from "react";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";

const AdminResetPasswordSuccess = () => {
  return (
    <>
      {/* Main Wrapper */}

      <div className="container-fluid">
        <div className="login-wrapper">
          <header className="logo-header">
            <Link to={all_routes.dashboard} className="logo-brand">
              <ImageWithBasePath
                src="assets/admin/img/full-logo.svg"
                alt="Logo"
                className="img-fluid logo-dark"
              />
            </Link>
          </header>
          <div className="login-inbox">
            <div className="log-auth">
              <div className="success-pass d-flex align-items-center justify-content-center mb-2">
                <ImageWithBasePath
                  src="assets/admin/img/success.png"
                  alt="Success"
                  className="img-fluid"
                />
              </div>
              <div className="login-auth-wrap">
                <div className="login-content-head">
                  <h3>Reset Password Success</h3>
                  <p className="text-center">
                    Your new password has been successfully saved.
                    <br />
                    Now you can login with your new password
                  </p>
                </div>
              </div>
              <Link
                to={all_routes.login}
                className="btn btn-primary w-100 btn-size justify-content-center"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* /Main Wrapper --
       */}
    </>
  );
};

export default AdminResetPasswordSuccess;
