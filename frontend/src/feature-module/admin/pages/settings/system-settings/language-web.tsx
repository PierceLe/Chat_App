import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../../router/all_routes";
import ImageWithBasePath from "../../../../../core/common/imageWithBasePath";

const LanguageWeb = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="d-md-flex d-block align-items-center justify-content-between mb-4">
            <div className="my-auto">
              <h4 className="page-title mb-1">Language</h4>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={all_routes.dashboard}>
                      <i className="ti ti-home text-primary" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="#">System Settings</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Language
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          {/* Page Header */}
          {/* App Settings */}
          <div className="card setting-card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="card d-inline-flex setting-header mb-3">
                    <div className="card-body d-flex align-items-center flex-wrap row-gap-2 p-0">
                      <Link to={all_routes.profileSettings}>
                        <i className="ti ti-settings-cog me-2" />
                        General Settings
                      </Link>
                      <Link to={all_routes.companysettings} className=" ps-3">
                        <i className="ti ti-apps me-2" />
                        App Settings
                      </Link>
                      <Link
                        to={all_routes.localization_settings}
                        className="active"
                      >
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
                          to={all_routes.localization_settings}
                          className=" rounded flex-fill"
                        >
                          <i className="ti ti-globe me-2" />
                          Localization
                        </Link>
                      </div>
                      <div className="d-flex">
                        <Link
                          to={all_routes.email_settings}
                          className=" rounded flex-fill"
                        >
                          <i className="ti ti-mail-cog me-2" />
                          Email Settings
                        </Link>
                      </div>
                      <div className="d-flex">
                        <Link
                          to={all_routes.sms_settings}
                          className=" rounded flex-fill"
                        >
                          <i className="ti ti-message-cog me-2" />
                          SMS Settings
                        </Link>
                      </div>
                      <div className="d-flex">
                        <Link
                          to={all_routes.otp_settings}
                          className=" rounded flex-fill"
                        >
                          <i className="ti ti-password me-2" />
                          OTP Settings
                        </Link>
                      </div>
                      <div className="d-flex">
                        <Link
                          to={all_routes.LanguageSettings}
                          className="active rounded flex-fill"
                        >
                          <i className="ti ti-language me-2" />
                          Language
                        </Link>
                      </div>
                      <div className="d-flex">
                        <Link
                          to={all_routes.gdpr_settings}
                          className="rounded flex-fill"
                        >
                          <i className="ti ti-cookie me-2" />
                          GDPR Cookies
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-9 col-md-8">
                  <div className="card setting-content mb-0">
                    <div className="card-header px-0 mx-3">
                      <h4>Language</h4>
                    </div>
                    <div className="card-body pb-0">
                      <div className="card mb-3">
                        <div className="card-header">
                          <div className="row align-items-center g-3">
                            <div className="col-lg-6 col-sm-4">
                              <h6>Language</h6>
                            </div>
                            <div className="col-lg-6 col-sm-8">
                              <div className="d-flex align-items-center justify-content-sm-end">
                                <Link
                                  to={all_routes.LanguageSettings}
                                  className="btn btn-sm btn-primary d-inline-flex align-items-center me-3"
                                >
                                  <i className="ti ti-arrow-left me-2" />
                                  Back to Translations
                                </Link>
                                <Link
                                  to="#"
                                  className="btn btn-sm btn-outline-dark d-inline-flex align-items-center"
                                >
                                  <ImageWithBasePath
                                    src="assets/admin/img/flag/ar.png"
                                    className="me-2"
                                    alt=""
                                  />
                                  Arabic
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-body p-0">
                          <div className="table-responsive">
                            <table className="table">
                              <thead className="thead-light">
                                <tr>
                                  <th className="no-sort">
                                    <div className="form-check form-check-md">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="select-all"
                                      />
                                    </div>
                                  </th>
                                  <th>Module Name</th>
                                  <th>Total</th>
                                  <th>Complete</th>
                                  <th>Progress </th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="form-check form-check-md">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <h6 className="fw-medium fs-14">Chat</h6>
                                  </td>
                                  <td>560</td>
                                  <td>560</td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <div
                                        className="progress progress-xs"
                                        style={{ width: 120 }}
                                      >
                                        <div
                                          className="progress-bar bg-success rounded"
                                          role="progressbar"
                                          style={{ width: "100%" }}
                                          aria-valuenow={100}
                                          aria-valuemin={0}
                                          aria-valuemax={100}
                                        />
                                      </div>
                                      <span className="d-inline-flex fs-12 ms-2">
                                        100%
                                      </span>
                                    </div>
                                  </td>
                                  <td>
                                    <Link
                                      to="#"
                                      className="btn btn-sm btn-icon border btn-light"
                                    >
                                      <i className="ti ti-edit" />
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check form-check-md">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <h6 className="fw-medium fs-14">Group</h6>
                                  </td>
                                  <td>320</td>
                                  <td>262</td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <div
                                        className="progress progress-xs"
                                        style={{ width: 120 }}
                                      >
                                        <div
                                          className="progress-bar bg-warning rounded"
                                          role="progressbar"
                                          style={{ width: "80%" }}
                                          aria-valuenow={80}
                                          aria-valuemin={0}
                                          aria-valuemax={100}
                                        />
                                      </div>
                                      <span className="d-inline-flex fs-12 ms-2">
                                        80%
                                      </span>
                                    </div>
                                  </td>
                                  <td>
                                    <Link
                                      to="#"
                                      className="btn btn-sm btn-icon border btn-light"
                                    >
                                      <i className="ti ti-edit" />
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check form-check-md">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <h6 className="fw-medium fs-14">
                                      Contacts
                                    </h6>
                                  </td>
                                  <td>270</td>
                                  <td>180</td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <div
                                        className="progress progress-xs"
                                        style={{ width: 120 }}
                                      >
                                        <div
                                          className="progress-bar bg-pink rounded"
                                          role="progressbar"
                                          style={{ width: "70%" }}
                                          aria-valuenow={70}
                                          aria-valuemin={0}
                                          aria-valuemax={100}
                                        />
                                      </div>
                                      <span className="d-inline-flex fs-12 ms-2">
                                        70%
                                      </span>
                                    </div>
                                  </td>
                                  <td>
                                    <Link
                                      to="#"
                                      className="btn btn-sm btn-icon border btn-light"
                                    >
                                      <i className="ti ti-edit" />
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check form-check-md">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <h6 className="fw-medium fs-14">Calls</h6>
                                  </td>
                                  <td>250</td>
                                  <td>154</td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <div
                                        className="progress progress-xs"
                                        style={{ width: 120 }}
                                      >
                                        <div
                                          className="progress-bar bg-purple rounded"
                                          role="progressbar"
                                          style={{ width: "40%" }}
                                          aria-valuenow={40}
                                          aria-valuemin={0}
                                          aria-valuemax={100}
                                        />
                                      </div>
                                      <span className="d-inline-flex fs-12 ms-2">
                                        40%
                                      </span>
                                    </div>
                                  </td>
                                  <td>
                                    <Link
                                      to="#"
                                      className="btn btn-sm btn-icon border btn-light"
                                    >
                                      <i className="ti ti-edit" />
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check form-check-md">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <h6 className="fw-medium fs-14">
                                      Settings
                                    </h6>
                                  </td>
                                  <td>220</td>
                                  <td>140</td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <div
                                        className="progress progress-xs"
                                        style={{ width: 120 }}
                                      >
                                        <div
                                          className="progress-bar bg-skyblue rounded"
                                          role="progressbar"
                                          style={{ width: "60%" }}
                                          aria-valuenow={40}
                                          aria-valuemin={0}
                                          aria-valuemax={100}
                                        />
                                      </div>
                                      <span className="d-inline-flex fs-12 ms-2">
                                        60%
                                      </span>
                                    </div>
                                  </td>
                                  <td>
                                    <Link
                                      to="#"
                                      className="btn btn-sm btn-icon border btn-light"
                                    >
                                      <i className="ti ti-edit" />
                                    </Link>
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
              </div>
            </div>
          </div>
          {/* /App Settings */}
        </div>
      </div>
    </>
  );
};

export default LanguageWeb;
