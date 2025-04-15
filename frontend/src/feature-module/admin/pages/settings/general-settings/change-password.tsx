import React, { useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../../router/all_routes";

const ChangePassword = () => {
  // Separate states for each password field visibility
  const [isCurrentPasswordVisible, setCurrentPasswordVisible] = useState(false);
  const [isNewPasswordVisible, setNewPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  // Toggle functions for each password field
  const toggleCurrentPasswordVisibility = () => {
    setCurrentPasswordVisible((prevState) => !prevState);
  };

  const toggleNewPasswordVisibility = () => {
    setNewPasswordVisible((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible((prevState) => !prevState);
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="d-md-flex d-block align-items-center justify-content-between mb-4">
            <div className="my-auto">
              <h4 className="page-title mb-1">Change Password</h4>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={all_routes.dashboard}>
                      <i className="ti ti-home text-primary" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="#">General Settings</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Change Password
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          {/* Page Header */}
          {/* General Settings */}
          <div className="card setting-card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="card d-inline-flex setting-header mb-3">
                    <div className="card-body d-flex align-items-center flex-wrap row-gap-2 p-0">
                      <Link
                        to={all_routes.profileSettings}
                        className="active ps-3"
                      >
                        <i className="ti ti-settings-cog me-2" />
                        General Settings
                      </Link>
                      <Link to={all_routes.companysettings}>
                        <i className="ti ti-apps me-2" />
                        App Settings
                      </Link>
                      <Link to={all_routes.localization_settings}>
                        <i className="ti ti-device-ipad-horizontal-cog me-2" />
                        System Settings
                      </Link>
                      <Link to={all_routes.AppearanceSettings}>
                        <i className="ti ti-layers-subtract me-2" />
                        Theme Settings
                      </Link>
                      <Link to={all_routes.storage_settings} className="pe-3">
                        <i className="ti ti-settings-2 me-2" />
                        Other Settings
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row gx-3">
                <div className="col-xl-3 col-md-4">
                  <div className="card mb-3 mb-md-0">
                    <div className="card-body setting-sidebar">
                      <div className="d-flex">
                        <Link
                          to={all_routes.profileSettings}
                          className="rounded flex-fill"
                        >
                          <i className="ti ti-user-circle me-2" />
                          Profile Settings
                        </Link>
                      </div>
                      <div className="d-flex">
                        <Link
                          to={all_routes.Change_Password}
                          className="active rounded flex-fill"
                        >
                          <i className="ti ti-lock-cog me-2" />
                          Change Password
                        </Link>
                      </div>
                      <div className="d-flex">
                        <Link
                          to={all_routes.notification_settings}
                          className="rounded flex-fill"
                        >
                          <i className="ti ti-bell-ringing me-2" />
                          Notification{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Change Password */}
                <div className="col-xl-9 col-md-8">
                  <div className="card setting-content mb-0">
                    <div className="card-header px-0 mx-3">
                      <h4>Change Password</h4>
                    </div>
                    <div className="card-body pb-0">
                      <div className="row">
                        {/* Current Password Field */}
                        <div className="col-md-10 col-lg-10">
                          <div className="row change-password d-flex align-items-center">
                            <div className="col-md-5">
                              <label className="form-label flex-fill">
                                Current Password
                              </label>
                            </div>
                            <div className="col-md-6">
                              <div className="pass-group flex-fill">
                                <input
                                  type={
                                    isCurrentPasswordVisible
                                      ? "text"
                                      : "password"
                                  }
                                  className="form-control pass-input"
                                />
                                <span
                                  className={`ti toggle-passwords ${isCurrentPasswordVisible ? "ti-eye" : "ti-eye-off"}`}
                                  onClick={toggleCurrentPasswordVisibility}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* New Password Field */}
                        <div className="col-md-10 col-lg-10">
                          <div className="row change-password d-flex align-items-center">
                            <div className="col-md-5">
                              <label className="form-label flex-fill">
                                New Password
                              </label>
                            </div>
                            <div className="col-md-6">
                              <div className="pass-group flex-fill">
                                <input
                                  type={
                                    isNewPasswordVisible ? "text" : "password"
                                  }
                                  className="form-control pass-input"
                                />
                                <span
                                  className={`ti toggle-passwords ${isNewPasswordVisible ? "ti-eye" : "ti-eye-off"}`}
                                  onClick={toggleNewPasswordVisibility}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Confirm Password Field */}
                        <div className="col-md-10 col-lg-10">
                          <div className="row change-password d-flex align-items-center mb-3">
                            <div className="col-md-5">
                              <label className="form-label flex-fill">
                                Confirm Password
                              </label>
                            </div>
                            <div className="col-md-6">
                              <div className="pass-group flex-fill">
                                <input
                                  type={
                                    isConfirmPasswordVisible
                                      ? "text"
                                      : "password"
                                  }
                                  className="form-control pass-input"
                                />
                                <span
                                  className={`ti toggle-passwords ${isConfirmPasswordVisible ? "ti-eye" : "ti-eye-off"}`}
                                  onClick={toggleConfirmPasswordVisibility}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer mx-3 px-0">
                      <div className="d-flex align-items-center justify-content-end m-0">
                        <Link to="#" className="btn btn-outline-primary me-2">
                          Cancel
                        </Link>
                        <Link to="#" className="btn btn-primary">
                          Save
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Change Password */}
              </div>
            </div>
          </div>
          {/* /General Settings */}
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
