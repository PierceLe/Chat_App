import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../../router/all_routes";
import ImageWithBasePath from "../../../../../core/common/imageWithBasePath";
import CustomSelect from "../../../common/select/commonSelect";
import {
  CountryOptions,
  StateOptions,
} from "../../../core/data/json/selectOption";

const CompanySettings = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="d-md-flex d-block align-items-center justify-content-between mb-4">
            <div className="my-auto">
              <h4 className="page-title mb-1">Company Settings</h4>
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
                    Company Settings
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
                          className="active rounded flex-fill"
                        >
                          <i className="ti ti-building me-2" />
                          Company Settings
                        </Link>
                      </div>
                      <div className="d-flex">
                        <Link
                          to={all_routes.AuthenticationSettings}
                          className="rounded flex-fill"
                        >
                          <i className="ti ti-forms me-2" />
                          Authentication
                        </Link>
                      </div>
                      <div className="d-flex">
                        <Link
                          to={all_routes.socialauth}
                          className="rounded flex-fill"
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
                {/* Company Settings */}
                <div className="col-xl-9 col-md-8">
                  <div className="card setting-content mb-0">
                    <div className="card-header px-0 mx-3">
                      <h4>Company Settings</h4>
                    </div>
                    <div className="card-body pb-0">
                      <div className="border-bottom">
                        <div className="company-title mb-3">
                          <h6>Basic Information</h6>
                        </div>
                        <div className="row">
                          <div className="col-md-6 col-sm-12">
                            <div className="mb-3">
                              <label className="form-label">Site Name</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="mb-3">
                              <label className="form-label">
                                Email Address
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="mb-3">
                              <label className="form-label">Phone</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="mb-3">
                              <label className="form-label">Fax</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="company-img">
                        <div className="mb-3">
                          <h6>Company Images</h6>
                        </div>
                        <div className="row gx-3">
                          <div className="col-xl-6 col-sm-12">
                            <div className="card mb-3">
                              <div className="card-body">
                                <div className="company-img-title">
                                  <h6>Logo</h6>
                                  <p>
                                    Upload Logo of your Company to display in
                                    website
                                  </p>
                                </div>
                                <div className="row align-items-center row-gap-3">
                                  <div className="col-sm-6">
                                    <div className="company-img-content">
                                      <ImageWithBasePath
                                        src="assets/admin/img/full-logo.svg"
                                        alt=""
                                        className="img-fluid"
                                      />
                                      <Link to="#">
                                        <span>
                                          <i className="ti ti-trash" />
                                        </span>
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="d-flex align-items-end justify-content-end flex-column flex-wrap">
                                      <div className="profile-uploader d-flex align-items-center mb-2">
                                        <div className="drag-upload-btn btn-sm btn mb-0">
                                          Change Photo
                                          <input
                                            type="file"
                                            className="form-control image-sign"
                                            multiple
                                          />
                                        </div>
                                      </div>
                                      <p className="fs-10">
                                        Recommended size is <br /> 250px * 100px
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-sm-12">
                            <div className="card mb-3">
                              <div className="card-body">
                                <div className="company-img-title">
                                  <h6>Dark Logo</h6>
                                  <p>
                                    Upload Dark Logo of your Company to display
                                    in website
                                  </p>
                                </div>
                                <div className="row align-items-center row-gap-3">
                                  <div className="col-sm-6">
                                    <div className="company-img-content img-dark ">
                                      <ImageWithBasePath
                                        src="assets/admin/img/dark-logo.svg"
                                        alt=""
                                        className="img-fluid"
                                      />
                                      <Link to="#">
                                        <span>
                                          <i className="ti ti-trash" />
                                        </span>
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="d-flex align-items-end justify-content-end flex-column flex-wrap">
                                      <div className="profile-uploader d-flex align-items-center mb-2">
                                        <div className="drag-upload-btn btn-sm btn mb-0">
                                          Change Photo
                                          <input
                                            type="file"
                                            className="form-control image-sign"
                                            multiple
                                          />
                                        </div>
                                      </div>
                                      <p className="fs-10">
                                        Recommended size is <br /> 250px * 100px
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-sm-12">
                            <div className="card mb-3">
                              <div className="card-body">
                                <div className="company-img-title">
                                  <h6>Mini Icon</h6>
                                  <p>
                                    Upload Mini Icon of your Company to display
                                    in website
                                  </p>
                                </div>
                                <div className="row align-items-center row-gap-3">
                                  <div className="col-sm-6">
                                    <div className="company-img-content mini-icon">
                                      <Link to="#">
                                        <span>
                                          <i className="ti ti-trash" />
                                        </span>
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="d-flex align-items-end justify-content-end flex-column flex-wrap">
                                      <div className="profile-uploader d-flex align-items-center mb-2">
                                        <div className="drag-upload-btn btn-sm btn mb-0">
                                          Upload Photo
                                          <input
                                            type="file"
                                            className="form-control image-sign"
                                            multiple
                                          />
                                        </div>
                                      </div>
                                      <p className="fs-10">
                                        Recommended size is <br /> 30px * 30px
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-sm-12">
                            <div className="card mb-3">
                              <div className="card-body">
                                <div className="company-img-title">
                                  <h6>Dark Mini Icon</h6>
                                  <p>
                                    Upload Mini Icon of your Company to display
                                    in website
                                  </p>
                                </div>
                                <div className="row align-items-center row-gap-3">
                                  <div className="col-sm-6">
                                    <div className="company-img-content dark-mini-icon">
                                      <ImageWithBasePath
                                        src="assets/admin/img/dark-mini-logo.svg"
                                        alt="image"
                                        className="img-fluid"
                                      />
                                      <Link to="#">
                                        <span>
                                          <i className="ti ti-trash" />
                                        </span>
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="d-flex align-items-end justify-content-end flex-column flex-wrap">
                                      <div className="profile-uploader d-flex align-items-center mb-2">
                                        <div className="drag-upload-btn btn-sm btn mb-0">
                                          Change Photo
                                          <input
                                            type="file"
                                            className="form-control image-sign"
                                            multiple
                                          />
                                        </div>
                                      </div>
                                      <p className="fs-10">
                                        Recommended size is <br /> 30px * 30px
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-sm-12">
                            <div className="card mb-3">
                              <div className="card-body">
                                <div className="company-img-title">
                                  <h6>Favicon</h6>
                                  <p>
                                    Upload Favicon of your Company to display in
                                    website
                                  </p>
                                </div>
                                <div className="row align-items-center row-gap-3">
                                  <div className="col-sm-6">
                                    <div className="company-img-content favicon-logo">
                                      <ImageWithBasePath
                                        src="assets/admin/img/logo-small.svg"
                                        alt="image"
                                        className="img-fluid"
                                      />
                                      <Link to="#">
                                        <span>
                                          <i className="ti ti-trash" />
                                        </span>
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="d-flex align-items-end justify-content-end flex-column flex-wrap">
                                      <div className="profile-uploader d-flex align-items-center mb-2">
                                        <div className="drag-upload-btn btn-sm btn mb-0">
                                          Change Photo
                                          <input
                                            type="file"
                                            className="form-control image-sign"
                                            multiple
                                          />
                                        </div>
                                      </div>
                                      <p className="fs-10">
                                        Recommended size is <br /> 128px * 128px
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-sm-12">
                            <div className="card mb-3">
                              <div className="card-body">
                                <div className="company-img-title">
                                  <h6>Apple Icon</h6>
                                  <p>
                                    Upload App Icon of your Company to display
                                    in website
                                  </p>
                                </div>
                                <div className="row align-items-center row-gap-3">
                                  <div className="col-sm-6">
                                    <div className="company-img-content favicon-logo">
                                      <ImageWithBasePath
                                        src="assets/admin/img/logo-small.svg"
                                        alt="image"
                                        className="img-fluid"
                                      />
                                      <Link to="#">
                                        <span>
                                          <i className="ti ti-trash" />
                                        </span>
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="d-flex align-items-end justify-content-end flex-column flex-wrap">
                                      <div className="profile-uploader d-flex align-items-center mb-2">
                                        <div className="drag-upload-btn btn-sm btn mb-0">
                                          Change Photo
                                          <input
                                            type="file"
                                            className="form-control image-sign"
                                            multiple
                                          />
                                        </div>
                                      </div>
                                      <p className="fs-10">
                                        Recommended size is <br /> 180px * 180px
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="address-info">
                        <div className="company-title mb-3">
                          <h6>Address Information</h6>
                        </div>
                        <div className="row">
                          <div className="col-md-12 col-sm-12">
                            <div className="mb-3">
                              <label className="form-label">Address</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="mb-3">
                              <label className="form-label">City</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="mb-3 dropdown">
                              <label className="form-label">State</label>
                              <CustomSelect
                                options={StateOptions}
                                className="select d-flex"
                                placeholder="Select"
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="mb-3 dropdown">
                              <label className="form-label">Country</label>
                              <CustomSelect
                                options={CountryOptions}
                                className="select d-flex"
                                placeholder="Select"
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="mb-3">
                              <label className="form-label">Postal Code</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
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
                {/* /Company Settings */}
              </div>
            </div>
          </div>
          {/* /App Settings */}
        </div>
      </div>
    </>
  );
};

export default CompanySettings;
