import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../../router/all_routes";
import StorageModal from "../../../common/modals/storageSettingsModal";

const BackupSettings = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="d-md-flex d-block align-items-center justify-content-between mb-4">
            <div className="my-auto">
              <h4 className="page-title mb-1">Backup & Restore</h4>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={all_routes.dashboard}>
                      <i className="ti ti-home text-primary" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="#">Other Settings</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Backup & Restore
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
                      <Link to={all_routes.companysettings}>
                        <i className="ti ti-apps me-2" />
                        App Settings
                      </Link>
                      <Link to={all_routes.localization_settings}>
                        <i className="ti ti-device-ipad-horizontal-cog me-2" />
                        System Settings
                      </Link>
                      <Link
                        to={all_routes.AppearanceSettings}
                        className=" ps-3"
                      >
                        <i className="ti ti-layers-subtract me-2" />
                        Theme Settings
                      </Link>
                      <Link
                        to={all_routes.storage_settings}
                        className="active pe-3"
                      >
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
                          to={all_routes.storage_settings}
                          className=" rounded flex-fill"
                        >
                          <i className="ti ti-server-cog me-2" />
                          Storage
                        </Link>
                      </div>
                      <div className="d-flex">
                        <Link
                          to={all_routes.backup_settings}
                          className="active rounded flex-fill"
                        >
                          <i className="ti ti-arrow-back-up me-2" />
                          Backup &amp; Restore
                        </Link>
                      </div>
                      <div className="d-flex">
                        <Link
                          to={all_routes.clear_cache_settings}
                          className="  rounded flex-fill"
                        >
                          <i className="ti ti-clear-all me-2" />
                          Clear Cache
                        </Link>
                      </div>
                      <div className="d-flex">
                        <Link
                          to={all_routes.ban_address}
                          className="rounded flex-fill"
                        >
                          <i className="ti ti-ban me-2" />
                          Ban IP Address
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-9 col-md-8">
                  <div className="card setting-content mb-0">
                    <div className="card-header px-0 mx-3">
                      <h4>Backup &amp; Restore</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="card mb-0">
                            <div className="card-header">
                              <div className="d-flex align-items-center justify-content-between">
                                <h6 className="d-block">Backup List</h6>
                                <Link to="#" className="btn btn-sm btn-primary">
                                  Generate Backup
                                </Link>
                              </div>
                            </div>
                            <div className="card-body p-0">
                              <div className="table-responsive">
                                <table className="table ">
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
                                      <th>File Name</th>
                                      <th>Date</th>
                                      <th>Restore</th>
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
                                        <p className="fs-14 fw-medium text-dark">
                                          conversation_backup_group_12345_2024-09-19.txt
                                        </p>
                                      </td>
                                      <td>12 Sep 2024</td>
                                      <td>
                                        <Link
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#report_reason"
                                        >
                                          <span className="file-icon">
                                            <i className="ti ti-restore" />
                                          </span>
                                        </Link>
                                      </td>
                                      <td>
                                        <div className="d-flex align-items-center">
                                          <div className="dropdown">
                                            <Link
                                              to="#"
                                              className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"
                                              data-bs-toggle="dropdown"
                                              aria-expanded="false"
                                            >
                                              <i className="ti ti-dots-vertical fs-14" />
                                            </Link>
                                            <ul className="dropdown-menu dropdown-menu-right p-3">
                                              <li>
                                                <Link
                                                  className="dropdown-item rounded-1"
                                                  to="#"
                                                  data-bs-toggle="modal"
                                                  data-bs-target="#edit_user"
                                                >
                                                  <i className="ti ti-download me-2" />
                                                  Download
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  className="dropdown-item rounded-1"
                                                  to="#"
                                                  data-bs-toggle="modal"
                                                  data-bs-target="#"
                                                >
                                                  <i className="ti ti-trash me-2" />
                                                  Delete
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
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
                                        <p className="fs-14 fw-medium text-dark">
                                          messages_backup_Sept_2024.txt
                                        </p>
                                      </td>
                                      <td>01 Oct 2024</td>
                                      <td>
                                        <Link
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#report_reason"
                                        >
                                          <span className="file-icon">
                                            <i className="ti ti-restore" />
                                          </span>
                                        </Link>
                                      </td>
                                      <td>
                                        <div className="d-flex align-items-center">
                                          <div className="dropdown">
                                            <Link
                                              to="#"
                                              className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"
                                              data-bs-toggle="dropdown"
                                              aria-expanded="false"
                                            >
                                              <i className="ti ti-dots-vertical fs-14" />
                                            </Link>
                                            <ul className="dropdown-menu dropdown-menu-right p-3">
                                              <li>
                                                <Link
                                                  className="dropdown-item rounded-1"
                                                  to="#"
                                                  data-bs-toggle="modal"
                                                  data-bs-target="#edit_user"
                                                >
                                                  <i className="ti ti-download me-2" />
                                                  Download
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  className="dropdown-item rounded-1"
                                                  to="#"
                                                  data-bs-toggle="modal"
                                                  data-bs-target="#"
                                                >
                                                  <i className="ti ti-trash me-2" />
                                                  Delete
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
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
                                        <p className="fs-14 fw-medium text-dark">
                                          messages_backup_Aug_2024.txt
                                        </p>
                                      </td>
                                      <td>01 Sep 2024</td>
                                      <td>
                                        <Link
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#report_reason"
                                        >
                                          <span className="file-icon">
                                            <i className="ti ti-restore" />
                                          </span>
                                        </Link>
                                      </td>
                                      <td>
                                        <div className="d-flex align-items-center">
                                          <div className="dropdown">
                                            <Link
                                              to="#"
                                              className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"
                                              data-bs-toggle="dropdown"
                                              aria-expanded="false"
                                            >
                                              <i className="ti ti-dots-vertical fs-14" />
                                            </Link>
                                            <ul className="dropdown-menu dropdown-menu-right p-3">
                                              <li>
                                                <Link
                                                  className="dropdown-item rounded-1"
                                                  to="#"
                                                  data-bs-toggle="modal"
                                                  data-bs-target="#edit_user"
                                                >
                                                  <i className="ti ti-download me-2" />
                                                  Download
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  className="dropdown-item rounded-1"
                                                  to="#"
                                                  data-bs-toggle="modal"
                                                  data-bs-target="#"
                                                >
                                                  <i className="ti ti-trash me-2" />
                                                  Delete
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /App Settings */}
        </div>
      </div>
      <StorageModal />
    </>
  );
};

export default BackupSettings;
