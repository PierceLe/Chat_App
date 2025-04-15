import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../../router/all_routes";
import CustomSelect from "../../../common/select/commonSelect";
import {
  LoginType,
  ValidationExpired,
} from "../../../core/data/json/selectOption";

const AuthenticationSettings = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="d-md-flex d-block align-items-center justify-content-between mb-4">
            <div className="my-auto">
              <h4 className="page-title mb-1">Authentication </h4>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={all_routes.dashboard}>
                      <i className="ti ti-home text-primary" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="#">App Settings </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Authentication
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
                      <Link
                        to={all_routes.companysettings}
                        className="active ps-3"
                      >
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
                          to={all_routes.companysettings}
                          className=" rounded flex-fill"
                        >
                          <i className="ti ti-building me-2" />
                          Company Settings
                        </Link>
                      </div>
                      <div className="d-flex">
                        <Link
                          to={all_routes.AuthenticationSettings}
                          className="active rounded flex-fill"
                        >
                          <i className="ti ti-forms me-2" />
                          Authentication
                        </Link>
                      </div>
                      <div className="d-flex">
                        <Link
                          to={all_routes.socialauth}
                          className="rounded flex-fill"
                        >
                          <i className="ti ti-social me-2" />
                          Social Authentication{" "}
                        </Link>
                      </div>
                      <div className="d-flex">
                        <Link
                          to={all_routes.ChatSettings}
                          className="rounded flex-fill"
                        >
                          <i className="ti ti-message-circle-cog me-2" />
                          Chat Settings{" "}
                        </Link>
                      </div>
                      <div className="d-flex">
                        <Link
                          to={all_routes.video_audio_settings}
                          className="rounded flex-fill"
                        >
                          <i className="ti ti-settings-automation me-2" />
                          Video/Audio Settings
                        </Link>
                      </div>
                      <div className="d-flex">
                        <Link
                          to={all_routes.custom_fields}
                          className="rounded flex-fill"
                        >
                          <i className="ti ti-text-plus me-2" />
                          Custom Fields
                        </Link>
                      </div>
                      <div className="d-flex">
                        <Link
                          to={all_routes.integration}
                          className="rounded flex-fill"
                        >
                          <i className="ti ti-plug-connected me-2" />
                          Integrations
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <>
                  {/* Autentication Settings */}
                  <div className="col-xl-9 col-md-8">
                    <div className="card setting-content mb-0">
                      <div className="card-header px-0 mx-3">
                        <h4>Authentication</h4>
                      </div>
                      <div className="card-body pb-0">
                        <div className="row">
                          <div className="col-md-8">
                            <div className="row row-gap-2 mb-3 py-2">
                              <div className="col-md-6">
                                <h6 className="fw-medium">
                                  Allow Registration
                                </h6>
                              </div>
                              <div className="col-md-6">
                                <div className="form-check form-switch">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row row-gap-2 mb-3 py-2">
                              <div className="col-md-6">
                                <h6 className="fw-medium">
                                  Verification Required
                                </h6>
                              </div>
                              <div className="col-md-6">
                                <div className="form-check form-switch">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row row-gap-2 mb-3">
                              <div className="col-md-6 d-flex">
                                <div className="d-flex align-items-center">
                                  <h6 className="fw-medium">
                                    Verification Expired
                                  </h6>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <CustomSelect
                                  options={ValidationExpired}
                                  className="select d-flex"
                                  placeholder="Select"
                                />
                              </div>
                            </div>
                            <div className="row row-gap-2 mb-3 py-2">
                              <div className="col-md-6">
                                <h6 className="fw-medium">Referral System</h6>
                              </div>
                              <div className="col-md-6">
                                <div className="form-check form-switch">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row row-gap-2 mb-3">
                              <div className="col-md-6 d-flex">
                                <div className="d-flex align-items-center">
                                  <h6 className="fw-medium">Login Type</h6>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <CustomSelect
                                  options={LoginType}
                                  className="select d-flex"
                                  placeholder="Select"
                                />
                              </div>
                            </div>
                            <div className="row row-gap-2 mb-3 py-2">
                              <div className="col-md-6">
                                <h6 className="fw-medium">Password</h6>
                              </div>
                              <div className="col-md-6">
                                <div className="form-check form-switch">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row row-gap-2 mb-3 py-2">
                              <div className="col-md-6">
                                <h6 className="fw-medium">OTP System</h6>
                              </div>
                              <div className="col-md-6">
                                <div className="form-check form-switch">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row row-gap-2 mb-3">
                              <div className="col-md-6 d-flex">
                                <div className="d-flex align-items-center">
                                  <h6 className="fw-medium">
                                    Verification Expired
                                  </h6>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <CustomSelect
                                  options={ValidationExpired}
                                  className="select d-flex"
                                  placeholder="Select"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Autentication Settings */}
                </>
              </div>
            </div>
          </div>
          {/* /App Settings */}
        </div>
      </div>
    </>
  );
};

export default AuthenticationSettings;
