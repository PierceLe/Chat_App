import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../../router/all_routes";
import StorageModal from "../../../common/modals/storageSettingsModal";

const ClearCache = () => {
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
                          className="active  rounded flex-fill"
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
                      <h4>Clear Cache</h4>
                    </div>
                    <div className="card-body pb-0 ">
                      <div className="cache-content">
                        <p className="fs-14 text-dark mb-3">
                          {" "}
                          <span className="me-2">
                            <i className="ti ti-info-circle text-danger" />
                          </span>
                          Clearing the cache may improve performance but will
                          remove temporary files, stored preferences, and cached
                          data from websites and applications.
                        </p>
                        <div className="d-flex align-items-center justify-content-end mb-3">
                          <Link to="#" className="btn btn-outline-primary me-3">
                            Cancel
                          </Link>
                          <Link to="#" className="btn btn-primary">
                            Clear Cache
                          </Link>
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

export default ClearCache;
