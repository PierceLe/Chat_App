import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../../router/all_routes";

const Notification = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="d-md-flex d-block align-items-center justify-content-between mb-4">
            <div className="my-auto">
              <h4 className="page-title mb-1">Notification</h4>
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
                    Notification
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
                          className=" rounded flex-fill"
                        >
                          <i className="ti ti-user-circle me-2" />
                          Profile Settings
                        </Link>
                      </div>
                      <div className="d-flex">
                        <Link
                          to={all_routes.Change_Password}
                          className="rounded flex-fill"
                        >
                          <i className="ti ti-lock-cog me-2" />
                          Change Password
                        </Link>
                      </div>
                      <div className="d-flex">
                        <Link
                          to={all_routes.notification_settings}
                          className=" active rounded flex-fill"
                        >
                          <i className="ti ti-bell-ringing me-2" />
                          Notification{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Notification Settings */}
                <div className="col-xl-9 col-md-8">
                  <div className="card setting-content mb-0">
                    <div className="card-header px-0 mx-3">
                      <h4>Notifications</h4>
                    </div>
                    <div className="card-body">
                      <div className="card mb-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <h6 className="fw-medium">
                              Mobile Push Notifications
                            </h6>
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                defaultChecked
                              />
                            </div>
                          </div>
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <h6 className="fw-medium">Desktop Notifications</h6>
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                defaultChecked
                              />
                            </div>
                          </div>
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <h6 className="fw-medium">Email Notifications</h6>
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                defaultChecked
                              />
                            </div>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <h6 className="fw-medium">SMS Notification</h6>
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                defaultChecked
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <h5 className="mb-3">General Notifications</h5>
                      <div className="card notification-table mb-0">
                        <div className="card-body pb-0">
                          <div className="table-responsive">
                            <table className="table">
                              <thead className="thead-light">
                                <tr>
                                  <th className="fw-semibold fs-18">Modules</th>
                                  <th className="fw-semibold fs-18">Push</th>
                                  <th className="fw-semibold fs-18">Email</th>
                                  <th className="fw-semibold fs-18">SMS</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <h6 className="fw-medium">Payment</h6>
                                  </td>
                                  <td>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        defaultChecked
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        defaultChecked
                                      />
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h6 className="fw-medium">Transaction</h6>
                                  </td>
                                  <td>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        defaultChecked
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        defaultChecked
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        defaultChecked
                                      />
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h6 className="fw-medium">
                                      Email Verification
                                    </h6>
                                  </td>
                                  <td>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        defaultChecked
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        defaultChecked
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                      />
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h6 className="fw-medium">OTP</h6>
                                  </td>
                                  <td>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        defaultChecked
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        defaultChecked
                                      />
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h6 className="fw-medium">Activity</h6>
                                  </td>
                                  <td>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        defaultChecked
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        defaultChecked
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        defaultChecked
                                      />
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h6 className="fw-medium">Account</h6>
                                  </td>
                                  <td>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        defaultChecked
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        defaultChecked
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        defaultChecked
                                      />
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Notification Settings */}
              </div>
            </div>
          </div>
          {/* /General Settings */}
        </div>
      </div>
    </>
  );
};

export default Notification;
