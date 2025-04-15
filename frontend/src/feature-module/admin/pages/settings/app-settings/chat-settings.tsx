import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../../router/all_routes";
import ChatSettingsModal from "../../../common/modals/charSettingsModal";

const ChatSettings = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="d-md-flex d-block align-items-center justify-content-between mb-4">
            <div className="my-auto">
              <h4 className="page-title mb-1">Chat Settings</h4>
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
                    Chat Settings
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
                          className="active rounded flex-fill"
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

                <div className="col-xl-9 col-md-8">
                  <div className="card setting-content mb-0">
                    <div className="card-header px-0 mx-3">
                      <h4>Chat Settings</h4>
                    </div>
                    <div className="card-body  pb-0 ">
                      <div className="row">
                        <div className="col-md-8 col-sm-12">
                          <div className="row align-items-center mb-3">
                            <div className="col-lg-6">
                              <div className="chat-settings">
                                <h6 className="fw-medium">Message Length</h6>
                              </div>
                            </div>
                            <div className="col-lg-5">
                              <div className="chat-options">
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue={1000}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center chat-settings-lists mb-3 py-2">
                            <div className="col-lg-6">
                              <h6 className="fw-medium">Enable Gif</h6>
                            </div>
                            <div className="col-lg-6">
                              <div className="d-flex align-items-center ">
                                <div className="form-check form-switch me-3 mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    defaultChecked
                                  />
                                </div>
                                <Link
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#add_gif"
                                >
                                  <span className="chat-setting-icons">
                                    <i className="ti ti-settings" />
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center mb-3 py-2">
                            <div className="col-lg-6">
                              <h6 className="fw-medium">Enable Stickers</h6>
                            </div>
                            <div className="col-lg-5">
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
                          <div className="row align-items-center mb-3 py-2">
                            <div className="col-lg-6">
                              <h6 className="fw-medium">Enable Images</h6>
                            </div>
                            <div className="col-lg-5">
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
                          <div className="row  align-items-center mb-3 py-2">
                            <div className="col-lg-6">
                              <h6 className="fw-medium">Enable Videos</h6>
                            </div>
                            <div className="col-lg-5">
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
                          <div className="row  align-items-center mb-3 py-2">
                            <div className="col-lg-6">
                              <h6 className="fw-medium">
                                Enable Audio Messages
                              </h6>
                            </div>
                            <div className="col-lg-5">
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
                          <div className="row  align-items-center mb-3 py-2">
                            <div className="col-lg-6">
                              <h6 className="fw-medium">Enable Codes</h6>
                            </div>
                            <div className="col-lg-5">
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
                          <div className="row  align-items-center mb-3 py-2">
                            <div className="col-lg-6">
                              <h6 className="fw-medium">Enable Files</h6>
                            </div>
                            <div className="col-lg-5">
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
                          <div className="row  align-items-center mb-3 py-2">
                            <div className="col-lg-6">
                              <h6 className="fw-medium">File Extension List</h6>
                            </div>
                            <div className="col-lg-6">
                              <textarea
                                className="form-control"
                                defaultValue={
                                  ".doc, .docs, .xls, .xlsx, .ppt, .pptx, .txt, .pdf, .jpeg, .png"
                                }
                              />
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
      <ChatSettingsModal />
    </>
  );
};

export default ChatSettings;
