import React, { useEffect, useState } from "react";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";

const AdminLogin = () => {
  const routes = all_routes;
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };
  useEffect(() => {
    localStorage.setItem("menuOpened", "");
  }, []);
  return (
    <>
      {/* Main Wrapper */}

      <div className="container-fluid">
        <div className="login-wrapper">
          <header className="logo-header">
            <Link to="#" className="logo-brand">
              <ImageWithBasePath
                src="assets/admin/img/full-logo.svg"
                alt="Logo"
                className="img-fluid logo-dark"
              />
            </Link>
          </header>
          <div className="login-inbox admin-login">
            <div className="log-auth">
              <div className="login-auth-wrap">
                <div className="login-content-head">
                  <h3>Login</h3>
                </div>
              </div>
              <form>
                <div className="form-group">
                  <label className="form-label">
                    Username <span>*</span>
                  </label>
                  <input type="email" className="form-control" />
                </div>
                <div className="form-group">
                  <label className="form-label">
                    Password <span>*</span>
                  </label>
                  <div className="pass-group">
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      className="form-control pass-inputs"
                    />
                    <span
                      className={`ti toggle-passwords ${
                        isPasswordVisible ? "ti-eye" : "ti-eye-off"
                      }`}
                      onClick={togglePasswordVisibility}
                    />
                  </div>
                </div>
                <div className="form-group form-remember d-flex align-items-center justify-content-between">
                  <div className="form-check d-flex align-items-center justify-content-start ps-0">
                    <label className="custom-check mt-0 mb-0">
                      <span className="remember-me">Remember Me</span>
                      <input type="checkbox" name="remeber" />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <span className="forget-pass">
                    <Link to={routes.adminForgotPassword}>Forgot Password</Link>
                  </span>
                </div>
                <Link
                  to={routes.dashboard}
                  className="btn btn-primary w-100 btn-size justify-content-center"
                >
                  Login
                </Link>
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

export default AdminLogin;
