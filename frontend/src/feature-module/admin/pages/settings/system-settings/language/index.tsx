import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../../../router/all_routes";
import CustomSelect from "../../../../common/select/commonSelect";
import { Language } from "../../../../core/data/json/selectOption";
import ImageWithBasePath from "../../../../../../core/common/imageWithBasePath";
import EmailSettingsModal from "../../../../common/modals/emailSettingsModal";
import CircleProgress from "./circleProgress";

const LanguageSettings = () => {
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
                      <div className="row g-3 align-items-center">
                        <div className="col-md-6 col-sm-4">
                          <h4>Language</h4>
                        </div>
                        <div className="col-md-6 col-sm-8">
                          <div className="d-flex justify-content-sm-end align-items-center flex-wrap row-gap-2">
                            <div className="me-3">
                              <CustomSelect
                                options={Language}
                                className="select d-flex"
                                placeholder="Select"
                              />
                            </div>
                            <Link
                              to={all_routes.add_LanguageSettings}
                              className="btn btn-primary"
                            >
                              Add Language
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body pb-0">
                      <div className="card mb-3">
                        <div className="card-header">
                          <div className="row align-items-center g-3">
                            <div className="col-sm-8">
                              <h6>Language List</h6>
                            </div>
                            <div className="col-sm-4">
                              <div className="position-relative search-input">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Search"
                                />
                                <div className="search-addon">
                                  <span>
                                    <i className="ti ti-search" />
                                  </span>
                                </div>
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
                                  <th>Language</th>
                                  <th>Code</th>
                                  <th>RTL</th>
                                  <th>Default </th>
                                  <th>Total</th>
                                  <th>Done</th>
                                  <th>Progress</th>
                                  <th>Status</th>
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
                                    <h6 className="d-flex align-items-center fw-medium">
                                      <ImageWithBasePath
                                        src="assets/admin/img/flag/ar.png"
                                        className="me-2"
                                        alt=""
                                      />
                                      Arabic
                                    </h6>
                                  </td>
                                  <td>en</td>
                                  <td>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        defaultChecked
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        defaultChecked
                                      />
                                    </div>
                                  </td>
                                  <td>1620</td>
                                  <td>1296</td>
                                  <td>
                                    <CircleProgress value={80} />
                                  </td>
                                  <td>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        defaultChecked
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <Link
                                        to="#"
                                        className="btn btn-sm btn-icon btn-light border me-2"
                                      >
                                        <i className="ti ti-download" />
                                      </Link>
                                      <Link
                                        to={all_routes.language_web_settings}
                                        className="btn btn-sm border me-2"
                                      >
                                        Web
                                      </Link>
                                      <Link
                                        to={all_routes.language_web_settings}
                                        className="btn btn-sm border me-2"
                                      >
                                        App
                                      </Link>
                                      <Link
                                        to={all_routes.language_web_settings}
                                        className="btn btn-sm border me-2"
                                      >
                                        Admin
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm btn-icon btn-light border"
                                      >
                                        <i className="ti ti-trash" />
                                      </Link>
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
                                    <h6 className="d-flex align-items-center fw-medium">
                                      <ImageWithBasePath
                                        src="assets/admin/img/flag/cn.png"
                                        className="me-2"
                                        alt=""
                                      />
                                      Chinese
                                    </h6>
                                  </td>
                                  <td>zh</td>
                                  <td>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                      />
                                    </div>
                                  </td>
                                  <td>1620</td>
                                  <td>972</td>
                                  <td>
                                    <CircleProgress value={60} />
                                  </td>
                                  <td>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        defaultChecked
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <Link
                                        to="#"
                                        className="btn btn-sm btn-icon btn-light border me-2"
                                      >
                                        <i className="ti ti-download" />
                                      </Link>
                                      <Link
                                        to={all_routes.language_web_settings}
                                        className="btn btn-sm border me-2"
                                      >
                                        Web
                                      </Link>
                                      <Link
                                        to={all_routes.language_web_settings}
                                        className="btn btn-sm border me-2"
                                      >
                                        App
                                      </Link>
                                      <Link
                                        to={all_routes.language_web_settings}
                                        className="btn btn-sm border me-2"
                                      >
                                        Admin
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm btn-icon btn-light border"
                                      >
                                        <i className="ti ti-trash" />
                                      </Link>
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
                                    <h6 className="d-flex align-items-center fw-medium">
                                      <ImageWithBasePath
                                        src="assets/admin/img/flag/us.png"
                                        className="me-2"
                                        alt=""
                                      />
                                      English
                                    </h6>
                                  </td>
                                  <td>en</td>
                                  <td>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        defaultChecked
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                      />
                                    </div>
                                  </td>
                                  <td>1620</td>
                                  <td>810</td>
                                  <td>
                                    <CircleProgress value={50} />
                                  </td>
                                  <td>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        defaultChecked
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <Link
                                        to="#"
                                        className="btn btn-sm btn-icon btn-light border me-2"
                                      >
                                        <i className="ti ti-download" />
                                      </Link>
                                      <Link
                                        to={all_routes.language_web_settings}
                                        className="btn btn-sm border me-2"
                                      >
                                        Web
                                      </Link>
                                      <Link
                                        to={all_routes.language_web_settings}
                                        className="btn btn-sm border me-2"
                                      >
                                        App
                                      </Link>
                                      <Link
                                        to={all_routes.language_web_settings}
                                        className="btn btn-sm border me-2"
                                      >
                                        Admin
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm btn-icon btn-light border"
                                      >
                                        <i className="ti ti-trash" />
                                      </Link>
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
                                    <h6 className="d-flex align-items-center fw-medium">
                                      <ImageWithBasePath
                                        src="assets/admin/img/flag/in.png"
                                        className="me-2"
                                        alt=""
                                      />
                                      Hindi
                                    </h6>
                                  </td>
                                  <td>hi</td>
                                  <td>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                      />
                                    </div>
                                  </td>
                                  <td>1620</td>
                                  <td>324</td>
                                  <td>
                                    <CircleProgress value={20} />
                                  </td>
                                  <td>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        defaultChecked
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <Link
                                        to="#"
                                        className="btn btn-sm btn-icon btn-light border me-2"
                                      >
                                        <i className="ti ti-download" />
                                      </Link>
                                      <Link
                                        to={all_routes.language_web_settings}
                                        className="btn btn-sm border me-2"
                                      >
                                        Web
                                      </Link>
                                      <Link
                                        to={all_routes.language_web_settings}
                                        className="btn btn-sm border me-2"
                                      >
                                        App
                                      </Link>
                                      <Link
                                        to={all_routes.language_web_settings}
                                        className="btn btn-sm border me-2"
                                      >
                                        Admin
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm btn-icon btn-light border"
                                      >
                                        <i className="ti ti-trash" />
                                      </Link>
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
          {/* /App Settings */}
        </div>
      </div>
      <EmailSettingsModal />
    </>
  );
};

export default LanguageSettings;
