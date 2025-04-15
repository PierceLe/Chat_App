import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../../router/all_routes";
import ImageWithBasePath from "../../../../../core/common/imageWithBasePath";
import SocailAthuModal from "../../../common/modals/socialAuthModal";

const SocialAuth = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="d-md-flex d-block align-items-center justify-content-between mb-4">
            <div className="my-auto">
              <h4 className="page-title mb-1">Social Authentication </h4>
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
                    Social Authentication
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
                          className="active rounded flex-fill"
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

                {/* Social Autentication */}
                <div className="col-xl-9 col-md-8">
                  <div className="card setting-content mb-0">
                    <div className="card-header px-0 mx-3">
                      <h4>Social Authentication</h4>
                    </div>
                    <div className="card-body pb-0 ">
                      <div className="company-img pt-0">
                        <div className="row gx-3">
                          <div className="col-xl-6 col-sm-12">
                            <div className="card social-auth mb-3">
                              <div className="card-body">
                                <div className="header-section">
                                  <div className="company-img-title">
                                    <div className="social-icons">
                                      <span>
                                        <ImageWithBasePath
                                          src="assets/admin/img/Settings/google-icon.svg"
                                          alt="icons"
                                          className="img-fluid"
                                        />
                                      </span>
                                      <h6>Google </h6>
                                    </div>
                                    <span className="badge badge-success">
                                      Connected
                                    </span>
                                  </div>
                                  <p>
                                    Sign in securely with your Google account
                                    for quick and easy access.
                                  </p>
                                </div>
                                <div className="body-footer">
                                  <div className="footer-content">
                                    <Link
                                      to="#"
                                      className="btn btn-sm btn-light"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add_google"
                                    >
                                      View Integration
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-sm-12">
                            <div className="card social-auth mb-3">
                              <div className="card-body">
                                <div className="header-section">
                                  <div className="company-img-title">
                                    <div className="social-icons">
                                      <span>
                                        <ImageWithBasePath
                                          src="assets/admin/img/Settings/face-book-icons.svg"
                                          alt="icons"
                                          className="img-fluid"
                                        />
                                      </span>
                                      <h6>Facebook </h6>
                                    </div>
                                    <span className="badge badge-light text-dark">
                                      Not Connected
                                    </span>
                                  </div>
                                  <p>
                                    Connect easily using your Facebook account
                                    for fast and secure access.
                                  </p>
                                </div>
                                <div className="body-footer">
                                  <div className="footer-content">
                                    <Link
                                      to="#"
                                      className="btn btn-sm btn-light"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add_facebook"
                                    >
                                      View Integration
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-sm-12">
                            <div className="card social-auth mb-3">
                              <div className="card-body">
                                <div className="header-section">
                                  <div className="company-img-title">
                                    <div className="social-icons">
                                      <span>
                                        <ImageWithBasePath
                                          src="assets/admin/img/Settings/apple-icons.svg"
                                          alt="icons"
                                          className="img-fluid"
                                        />
                                      </span>
                                      <h6>Apple </h6>
                                    </div>
                                    <span className="badge badge-success">
                                      Connected
                                    </span>
                                  </div>
                                  <p>
                                    Sign in securely with your Apple ID for a
                                    seamless and private login experience
                                  </p>
                                </div>
                                <div className="body-footer">
                                  <div className="footer-content">
                                    <Link
                                      to="#"
                                      className="btn btn-sm btn-light"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add_apple"
                                    >
                                      Connect Now
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
                {/* /Social Autentication */}
              </div>
            </div>
          </div>
          {/* /App Settings */}
        </div>
      </div>
      <SocailAthuModal />
    </>
  );
};

export default SocialAuth;
