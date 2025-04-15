import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../../router/all_routes";
import ImageWithBasePath from "../../../../../core/common/imageWithBasePath";
import IntegrationModal from "../../../common/modals/integrationModal";

const Integration = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="d-md-flex d-block align-items-center justify-content-between mb-4">
            <div className="my-auto">
              <h4 className="page-title mb-1">Integrations </h4>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={all_routes.dashboard}>
                      <i className="ti ti-home text-primary" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="#">App Settings</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Integrations
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
                          className=" rounded flex-fill"
                        >
                          <i className="ti ti-forms me-2" />
                          Authentication
                        </Link>
                      </div>
                      <div className="d-flex">
                        <Link
                          to={all_routes.socialauth}
                          className=" rounded flex-fill"
                        >
                          <i className="ti ti-social me-2" />
                          Social Authentication{" "}
                        </Link>
                      </div>
                      <div className="d-flex">
                        <Link
                          to={all_routes.ChatSettings}
                          className=" rounded flex-fill"
                        >
                          <i className="ti ti-message-circle-cog me-2" />
                          Chat Settings{" "}
                        </Link>
                      </div>
                      <div className="d-flex">
                        <Link
                          to={all_routes.video_audio_settings}
                          className=" rounded flex-fill"
                        >
                          <i className="ti ti-settings-automation me-2" />
                          Video/Audio Settings
                        </Link>
                      </div>
                      <div className="d-flex">
                        <Link
                          to={all_routes.custom_fields}
                          className=" rounded flex-fill"
                        >
                          <i className="ti ti-text-plus me-2" />
                          Custom Fields
                        </Link>
                      </div>
                      <div className="d-flex">
                        <Link
                          to={all_routes.integration}
                          className="active rounded flex-fill"
                        >
                          <i className="ti ti-plug-connected me-2" />
                          Integrations
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-9 col-md-8">
                  <div className="card setting-content mb-0">
                    <div className="card-header px-0 mx-3">
                      <h4>Integrations</h4>
                    </div>
                    <div className="card-body pb-0 ">
                      <div className="company-img pt-0">
                        <div className="row gx-3">
                          <div className="col-xl-6 col-sm-12 d-flex">
                            <div className="card social-auth flex-fill mb-3">
                              <div className="card-body">
                                <div className="header-section">
                                  <div className="company-img-title">
                                    <div className="social-icons">
                                      <span>
                                        <ImageWithBasePath
                                          src="assets/admin/img/Settings/google-captcha.svg"
                                          alt="icons"
                                          className="img-fluid"
                                        />
                                      </span>
                                      <h6>Google Captcha </h6>
                                    </div>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        defaultChecked
                                      />
                                    </div>
                                  </div>
                                  <p>
                                    Google CAPTCHA blocks bots by verifying user
                                    interactions.
                                  </p>
                                </div>
                                <div className="body-footer">
                                  <div className="footer-content d-flex">
                                    <Link
                                      to="#"
                                      className="btn btn-sm btn-white fs-13 fw-medium d-flex align-items-center"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add_captcha"
                                    >
                                      {" "}
                                      <i className="ti ti-settings-cog me-2" />{" "}
                                      View Integration
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-sm-12 d-flex">
                            <div className="card social-auth flex-fill mb-3">
                              <div className="card-body">
                                <div className="header-section">
                                  <div className="company-img-title">
                                    <div className="social-icons">
                                      <span>
                                        <ImageWithBasePath
                                          src="assets/admin/img/Settings/agora-settings.svg"
                                          alt="icons"
                                          className="img-fluid"
                                        />
                                      </span>
                                      <h6>Agora Settings</h6>
                                    </div>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        defaultChecked
                                      />
                                    </div>
                                  </div>
                                  <p>
                                    Agora provides real-time communication APIs
                                    for video, voice, and messaging
                                    applications.
                                  </p>
                                </div>
                                <div className="body-footer">
                                  <div className="footer-content d-flex">
                                    <Link
                                      to="#"
                                      className="btn btn-sm btn-white fs-13 fw-medium d-flex align-items-center"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add_agora"
                                    >
                                      {" "}
                                      <i className="ti ti-settings-cog me-2" />{" "}
                                      View Integration
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-sm-12 d-flex">
                            <div className="card social-auth flex-fill mb-3">
                              <div className="card-body">
                                <div className="header-section">
                                  <div className="company-img-title">
                                    <div className="social-icons">
                                      <span>
                                        <ImageWithBasePath
                                          src="assets/admin/img/Settings/firebase-settings.svg"
                                          alt="icons"
                                          className="img-fluid"
                                        />
                                      </span>
                                      <h6>Firebase Settings</h6>
                                    </div>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        defaultChecked
                                      />
                                    </div>
                                  </div>
                                  <p>
                                    Firebase is a platform for app development
                                    with tools for databases, authentication,
                                    and analytics.
                                  </p>
                                </div>
                                <div className="body-footer">
                                  <div className="footer-content d-flex">
                                    <Link
                                      to="#"
                                      className="btn btn-sm btn-white fs-13 fw-medium d-flex align-items-center"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add_fire"
                                    >
                                      {" "}
                                      <i className="ti ti-settings-cog me-2" />{" "}
                                      View Integration
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
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
      <IntegrationModal />
    </>
  );
};

export default Integration;
