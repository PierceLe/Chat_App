import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../../router/all_routes";
import CustomSelect from "../../../common/select/commonSelect";
import {
  OtpDigitLimit,
  OtpExpireTime,
  OtpType,
} from "../../../core/data/json/selectOption";
import EmailSettingsModal from "../../../common/modals/emailSettingsModal";

const OtpSettings = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="d-md-flex d-block align-items-center justify-content-between mb-4">
            <div className="my-auto">
              <h4 className="page-title mb-1">OTP Settings </h4>
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
                    OTP Settings
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
                      <Link
                        to={all_routes.localization_settings}
                        className="active ps-3"
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
                          className="active rounded flex-fill"
                        >
                          <i className="ti ti-password me-2" />
                          OTP Settings
                        </Link>
                      </div>
                      <div className="d-flex">
                        <Link
                          to={all_routes.LanguageSettings}
                          className="rounded flex-fill"
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
                <div className="col-md-9">
                  <div className="card setting-content mb-0">
                    <div className="card-header px-0 mx-3">
                      <h4>OTP Settings</h4>
                    </div>
                    <div className="card-body pb-0">
                      <div className="row">
                        <div className="col-md-8">
                          <div className="row align-items-center">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <h6 className="mb-2 fw-medium">OTP Type </h6>
                                <p>Your can configure the type</p>
                              </div>
                            </div>
                            <div className="col-lg-5">
                              <div className="mb-3">
                                <CustomSelect
                                  options={OtpType}
                                  className="select d-flex"
                                  placeholder="Select"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <h6 className="mb-2 fw-medium">
                                  OTP Digit Limit
                                </h6>
                                <p>Select size of the format</p>
                              </div>
                            </div>
                            <div className="col-lg-5">
                              <div className="mb-3">
                                <CustomSelect
                                  options={OtpDigitLimit}
                                  className="select d-flex"
                                  placeholder="Select"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <h6 className="mb-2 fw-medium">
                                  OTP Expire Time
                                </h6>
                                <p>Select expire time of OTP </p>
                              </div>
                            </div>
                            <div className="col-lg-5">
                              <div className="mb-3">
                                <CustomSelect
                                  options={OtpExpireTime}
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

export default OtpSettings;
