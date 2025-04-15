import React, { useState } from "react";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import { Link, useNavigate } from "react-router-dom";
import { all_routes } from "../../router/all_routes";

const AdminResetPassword = () => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible((prevState) => !prevState);
  };

  const navigate = useNavigate();

  const navigatePath = () => {
    navigate(all_routes.adminResetPasswordSuccess);
  };

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
              <div className="login-auth-wrap">
                <div className="login-content-head">
                  <h3>Reset Password</h3>
                  <p>
                    Your new password must be different from previous used
                    passwords.
                  </p>
                </div>
              </div>
              <form action="reset-password-success.html">
                <div className="form-group">
                  <label className="form-label">
                    New Password <span>*</span>
                  </label>
                  <div className="pass-group" id="passwordInput">
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      className="form-control pass-input"
                    />
                    <span
                      className={`ti toggle-passwords ${
                        isPasswordVisible ? "ti-eye" : "ti-eye-off"
                      }`}
                      onClick={togglePasswordVisibility}
                    />
                  </div>
                  <div className="password-strength" id="passwordStrength">
                    <span id="poor" />
                    <span id="weak" />
                    <span id="strong" />
                    <span id="heavy" />
                  </div>
                  <div id="passwordInfo" />
                </div>
                <div className="form-group reset-group">
                  <label className="form-label">
                    Confirm Password <span>*</span>
                  </label>
                  <div className="pass-group">
                    <input
                      type={isConfirmPasswordVisible ? "text" : "password"}
                      className="form-control pass-input"
                    />
                    <span
                      className={`ti toggle-passwords ${
                        isConfirmPasswordVisible ? "ti-eye" : "ti-eye-off"
                      }`}
                      onClick={toggleConfirmPasswordVisibility}
                    />
                  </div>
                </div>
                <button
                  onClick={navigatePath}
                  type="submit"
                  className="btn btn-primary w-100 btn-size justify-content-center"
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* /Main Wrapper */}
    </>
  );
};

export default AdminResetPassword;
