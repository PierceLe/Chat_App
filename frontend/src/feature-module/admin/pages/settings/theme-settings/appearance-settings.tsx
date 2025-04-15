import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../../router/all_routes";
import EmailSettingsModal from "../../../common/modals/emailSettingsModal";
import ImageWithBasePath from "../../../../../core/common/imageWithBasePath";
import CustomSelect from "../../../common/select/commonSelect";
import { FontFamily, SidebarSzie } from "../../../core/data/json/selectOption";

const AppearanceSettings = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="d-md-flex d-block align-items-center justify-content-between mb-4">
            <div className="my-auto">
              <h4 className="page-title mb-1">Appearance</h4>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={all_routes.dashboard}>
                      <i className="ti ti-home text-primary" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="#">Theme Settings</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Appearance
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
                        className="active ps-3"
                      >
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
                          to={all_routes.AppearanceSettings}
                          className="active rounded flex-fill"
                        >
                          <i className="ti ti-globe me-2" />
                          Appearance
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-9 col-md-8">
                  <div className="card setting-content mb-0">
                    <div className="card-header px-0 mx-3">
                      <h4>Appearance</h4>
                    </div>
                    <div className="card-body pb-0 ">
                      <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-12 col-md-3">
                          <div className="setting-info mb-4">
                            <h6 className="fs-14 fw-medium">Select Theme</h6>
                          </div>
                        </div>
                        <div className="col-xl-9 col-lg-12 col-md-9">
                          <div className="d-flex align-items-center">
                            <div className="me-3">
                              <div className="card shadow-none">
                                <div className="card-body">
                                  <Link to="#">
                                    <div className="border rounded border-gray mb-2">
                                      <ImageWithBasePath
                                        src="assets/admin/img/theme/light.svg"
                                        className="img-fluid rounded"
                                        alt="theme"
                                      />
                                    </div>
                                    <p className="text-dark text-center">
                                      Light
                                    </p>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="me-3">
                              <div className="card shadow-none">
                                <div className="card-body">
                                  <Link to="#">
                                    <div className="border rounded border-gray mb-2">
                                      <ImageWithBasePath
                                        src="assets/admin/img/theme/dark.svg"
                                        className="img-fluid rounded"
                                        alt="theme"
                                      />
                                    </div>
                                    <p className="text-dark text-center">
                                      Dark
                                    </p>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="card shadow-none">
                                <div className="card-body">
                                  <Link to="#">
                                    <div className="border rounded border-gray mb-2">
                                      <ImageWithBasePath
                                        src="assets/admin/img/theme/automatic.svg"
                                        className="img-fluid rounded"
                                        alt="theme"
                                      />
                                    </div>
                                    <p className="text-dark text-center">
                                      Automatic
                                    </p>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-12 col-md-3">
                          <div className="setting-info mb-4">
                            <h6 className="fs-14 fw-medium">Accent Color</h6>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-12 col-md-4">
                          <div className="theme-colors mb-4">
                            <ul className="d-flex align-items-center">
                              <li>
                                <span className="themecolorset active">
                                  <span className="primecolor bg-primary">
                                    <span className="colorcheck text-white">
                                      <i className="ti ti-check" />
                                    </span>
                                  </span>
                                </span>
                              </li>
                              <li>
                                <span className="themecolorset">
                                  <span className="primecolor bg-secondary">
                                    <span className="colorcheck text-white">
                                      <i className="ti ti-check" />
                                    </span>
                                  </span>
                                </span>
                              </li>
                              <li>
                                <span className="themecolorset">
                                  <span className="primecolor bg-info">
                                    <span className="colorcheck text-white">
                                      <i className="ti ti-check" />
                                    </span>
                                  </span>
                                </span>
                              </li>
                              <li>
                                <span className="themecolorset">
                                  <span className="primecolor bg-purple">
                                    <span className="colorcheck text-white">
                                      <i className="ti ti-check" />
                                    </span>
                                  </span>
                                </span>
                              </li>
                              <li>
                                <span className="themecolorset">
                                  <span className="primecolor bg-pink">
                                    <span className="colorcheck text-white">
                                      <i className="ti ti-check" />
                                    </span>
                                  </span>
                                </span>
                              </li>
                              <li>
                                <span className="themecolorset">
                                  <span className="primecolor bg-warning">
                                    <span className="colorcheck text-white">
                                      <i className="ti ti-check" />
                                    </span>
                                  </span>
                                </span>
                              </li>
                              <li>
                                <span className="themecolorset">
                                  <span className="primecolor bg-danger">
                                    <span className="colorcheck text-white">
                                      <i className="ti ti-check" />
                                    </span>
                                  </span>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="row align-items-center mb-4">
                        <div className="col-xl-3 col-lg-12 col-md-3">
                          <div className="">
                            <h6 className="fs-14 fw-medium">Sidebar Size</h6>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-12 col-md-3">
                          <CustomSelect
                            options={SidebarSzie}
                            className="select d-flex"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div className="row align-items-center mb-3">
                        <div className="col-xl-3 col-lg-12 col-md-3">
                          <div className="">
                            <h6 className="fs-14 fw-medium">Font Family</h6>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-12 col-md-3">
                          <CustomSelect
                            options={FontFamily}
                            className="select d-flex"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="card-footer mx-3 px-0">
                      <div className="d-flex align-items-center justify-content-end m-0">
                        <Link to="#" className="btn btn-outline-primary me-2">
                          Cancel
                        </Link>
                        <Link to="#" className="btn btn-primary">
                          Save
                        </Link>
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
      <EmailSettingsModal />
    </>
  );
};

export default AppearanceSettings;
