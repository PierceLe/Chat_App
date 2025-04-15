import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../../router/all_routes";
import BanIpAddress from "../../../common/modals/banIPModal";

const BanAddress = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="d-md-flex d-block align-items-center justify-content-between mb-4">
            <div className="my-auto">
              <h4 className="page-title mb-1">Clear Cache</h4>
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
                    Clear Cache
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
                          className="rounded flex-fill"
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
                          className="active rounded flex-fill"
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
                      <div className="d-flex align-items-center justify-content-between">
                        <h4>Ban IP Address</h4>
                        <Link
                          to="#"
                          className="btn btn-primary btn-sm d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#add_ban"
                        >
                          <i className="ti ti-circle-plus me-2" />
                          Add New IP Address
                        </Link>
                      </div>
                    </div>
                    <div className="card-body pb-0 ">
                      <div className="row bx-3">
                        <div className="col-lg-6">
                          <div className="card mb-3">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between border-bottom mb-2 pb-2">
                                <div className="d-flex align-items-center">
                                  <span className="d-inline-flex me-2">
                                    <i className="ti ti-ban" />
                                  </span>
                                  <p className="fs-14 fw-medium text-dark">
                                    198.120.16.01
                                  </p>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="me-2"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit_ban"
                                  >
                                    <span className="text-gray">
                                      <i className="ti ti-edit" />
                                    </span>
                                  </Link>
                                  <Link to="#">
                                    <span className="text-gray">
                                      <i className="ti ti-trash" />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <p>
                                  <span className="me-2">
                                    <i className="ti ti-info-circle" />
                                  </span>
                                  Temporarily block to protect user accounts
                                  from internet fraudsters
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="card mb-3">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between border-bottom mb-2 pb-2">
                                <div className="d-flex align-items-center">
                                  <span className="d-inline-flex me-2">
                                    <i className="ti ti-ban" />
                                  </span>
                                  <p className="fs-14 fw-medium text-dark">
                                    198.160.11.20
                                  </p>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="me-2"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit_ban"
                                  >
                                    <span className="text-gray">
                                      <i className="ti ti-edit" />
                                    </span>
                                  </Link>
                                  <Link to="#">
                                    <span className="text-gray">
                                      <i className="ti ti-trash" />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <p>
                                  <span className="me-2">
                                    <i className="ti ti-info-circle" />
                                  </span>
                                  Unauthorized access attempts, or other signs
                                  of a potential security
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="card mb-3">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between border-bottom mb-2 pb-2">
                                <div className="d-flex align-items-center">
                                  <span className="d-inline-flex me-2">
                                    <i className="ti ti-ban" />
                                  </span>
                                  <p className="fs-14 fw-medium text-dark">
                                    198.123.10.2
                                  </p>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="me-2"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit_ban"
                                  >
                                    <span className="text-gray">
                                      <i className="ti ti-edit" />
                                    </span>
                                  </Link>
                                  <Link to="#">
                                    <span className="text-gray">
                                      <i className="ti ti-trash" />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <p>
                                  <span className="me-2">
                                    <i className="ti ti-info-circle" />
                                  </span>
                                  Attempts to scrape large amounts of HR data
                                  from the system without authorization.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="card mb-3">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between border-bottom mb-2 pb-2">
                                <div className="d-flex align-items-center">
                                  <span className="d-inline-flex me-2">
                                    <i className="ti ti-ban" />
                                  </span>
                                  <p className="fs-14 fw-medium text-dark">
                                    198.110.01.05
                                  </p>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="me-2"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit_ban"
                                  >
                                    <span className="text-gray">
                                      <i className="ti ti-edit" />
                                    </span>
                                  </Link>
                                  <Link to="#">
                                    <span className="text-gray">
                                      <i className="ti ti-trash" />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <p>
                                  <span className="me-2">
                                    <i className="ti ti-info-circle" />
                                  </span>
                                  Found downloading or uploading inappropriate
                                  content
                                </p>
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
      <BanIpAddress />
    </>
  );
};

export default BanAddress;
