import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../../router/all_routes";
import CustomFieldsModal from "../../../common/modals/customfieldsModal";

const CustomeFields = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="d-md-flex d-block align-items-center justify-content-between mb-4">
            <div className="my-auto">
              <h4 className="page-title mb-1">Custom Fields </h4>
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
                    Custom Fields
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
                          className="active rounded flex-fill"
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

                {/* Custom Fields */}
                <div className="col-xl-9 col-md-8">
                  <div className="card setting-content mb-0">
                    <div className="card-header">
                      <div className="d-flex justify-content-between align-items-center">
                        <h4>Custom Fields</h4>
                        <Link
                          to="#"
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#new-field"
                        >
                          <i className="ti ti-circle-plus me-2" />
                          Add New Fields
                        </Link>
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
                              <th className="fw-semibold">Module</th>
                              <th className="fw-semibold">Label</th>
                              <th className="fw-semibold">Type</th>
                              <th className="fw-semibold">Default Value</th>
                              <th className="fw-semibold">Required</th>
                              <th className="fw-semibold">Status</th>
                              <th className="fw-semibold">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th className="no-sort">
                                <div className="form-check form-check-md">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                  />
                                </div>
                              </th>
                              <th>User</th>
                              <th className="text-gray fw-normal">
                                Middle Name
                              </th>
                              <th className="text-gray fw-normal">Text</th>
                              <th className="text-gray fw-normal">-</th>
                              <th>
                                <div className="form-check form-switch">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    defaultChecked
                                  />
                                </div>
                              </th>
                              <th className="d-flex">
                                <span className="badge badge-success badge-sm d-flex align-items-center">
                                  <i className="ti ti-point-filled" />
                                  Active
                                </span>
                              </th>
                              <th>
                                <div className="dropdown">
                                  <Link
                                    to="#"
                                    className="text-gray"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="ti ti-dots-vertical" />
                                  </Link>
                                  <div className="dropdown-menu">
                                    <Link
                                      to="#"
                                      className="dropdown-item"
                                      data-bs-toggle="modal"
                                      data-bs-target="#edit-field"
                                    >
                                      <i className="ti ti-edit me-2" />
                                      Edit
                                    </Link>
                                    <Link to="#" className="dropdown-item">
                                      <i className="ti ti-trash me-2" />
                                      Delete
                                    </Link>
                                  </div>
                                </div>
                              </th>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Custom Fields */}
              </div>
            </div>
          </div>
          {/* /App Settings */}
        </div>
      </div>
      <CustomFieldsModal />
    </>
  );
};

export default CustomeFields;
