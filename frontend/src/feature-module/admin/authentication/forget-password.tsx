import React from "react";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import { Link, useNavigate } from "react-router-dom";
import { all_routes } from "../../router/all_routes";

const AdminForgetPassword = () => {
  const navigate = useNavigate();

  const navigatePath = () => {
    navigate(all_routes.adminResetPassword);
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
                  <h3>Forgot Password</h3>
                  <p>Enter your email to get a password reset link</p>
                </div>
              </div>
              <form action="reset-password.html">
                <div className="form-group">
                  <label className="form-label">
                    Email <span>*</span>
                  </label>
                  <input
                    className="form-control"
                    id="email"
                    name="email"
                    type="text"
                  />
                </div>
                <button
                  onClick={navigatePath}
                  type="submit"
                  className="btn btn-primary w-100 btn-size justify-content-center mb-3"
                >
                  Reset Password
                </button>
                <div className="bottom-text">
                  <p>
                    Remember your password?{" "}
                    <Link to={all_routes.login}>Login</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* /Main Wrapper --
       */}
    </>
  );
};

export default AdminForgetPassword;
