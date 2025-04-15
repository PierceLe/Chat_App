import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";

const ThemeSettings = () => {
  const [layoutStyling, setLayout] = useState(
    localStorage.getItem("layoutView") || "default",
  );

  const [layoutColor, setLayoutColor] = useState(
    localStorage.getItem("layoutTheme") || "light",
  );
  const [layoutBar, setTopbar] = useState(
    localStorage.getItem("topBar") || "sticky",
  );

  const SmallView = () => {
    localStorage.setItem("layoutView", "small");
    setLayout("small");
    document.documentElement.setAttribute("data-layout-style", "small");
  };

  const DefaultStyle = () => {
    localStorage.setItem("layoutView", "default");
    setLayout("default");
    document.documentElement.setAttribute("data-layout-style", "default");
  };
  const ColorGrey = () => {
    localStorage.setItem("layoutTheme", "gray");
    setLayoutColor("gray");
    document.documentElement.setAttribute("data-layout-mode", "gray");
  };

  const ColorLight = () => {
    localStorage.setItem("layoutTheme", "light");
    setLayoutColor("light");
    document.documentElement.setAttribute("data-layout-mode", "light");
  };

  const ColorBlue = () => {
    localStorage.setItem("layoutTheme", "blue");
    setLayoutColor("blue");
    document.documentElement.setAttribute("data-layout-mode", "blue");
  };

  const ColorDark = () => {
    localStorage.setItem("layoutTheme", "dark");
    setLayoutColor("dark");
    document.documentElement.setAttribute("data-layout-mode", "dark");
  };
  const TopSticky = () => {
    localStorage.setItem("topBar", "sticky");
    setTopbar("sticky");
    document.documentElement.setAttribute("data-topbar", "sticky");
  };
  const TopStatic = () => {
    localStorage.setItem("topBar", "static");
    setTopbar("static");
    document.documentElement.setAttribute("data-topbar", "static");
  };
  const TopHidden = () => {
    localStorage.setItem("topBar", "hidden");
    setTopbar("hidden");
    document.documentElement.setAttribute("data-topbar", "hidden");
  };

  const resetFunc = () => {
    document.documentElement.setAttribute("data-layout-style", "default");
    document.documentElement.setAttribute("data-layout-mode", "light");
    document.documentElement.setAttribute("data-topbar", "sticky");
    setLayout("default");
    setLayoutColor("light");
    setTopbar("sticky");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-layout-style", layoutStyling);
    document.documentElement.setAttribute("data-layout-mode", layoutColor);
    document.documentElement.setAttribute("data-topbar", layoutBar);
  }, [layoutStyling, layoutColor, layoutBar]);

  return (
    <>
      {/* Theme-Settings */}
      <div className="settings-icon">
        <span
          data-bs-toggle="offcanvas"
          data-bs-target="#theme-settings-offcanvas"
          aria-controls="theme-settings-offcanvas"
        >
          <i className="ti ti-settings" /> Customize
        </span>
      </div>
      <div
        className="offcanvas offcanvas-end border-0 "
        tabIndex={-1}
        id="theme-settings-offcanvas"
      >
        <div className="sidebar-headerset">
          <div className="sidebar-headersets">
            <h2>Theme Customizer</h2>
            <h3>Customize your overview page layout</h3>
          </div>
          <div className="sidebar-headerclose">
            <Link to="#" data-bs-dismiss="offcanvas" aria-label="Close">
              <i className="bx bx-x" />
            </Link>
          </div>
        </div>
        <div className="offcanvas-body p-0">
          <div data-simplebar="" className="h-100">
            <div className="settings-mains">
              <div className="layout-head">
                <h5>Sidebar Size</h5>
              </div>
              <div className="screen-slide-bar">
                <div className="row">
                  <div className="col-6">
                    <div className="form-check card-radio p-0">
                      <input
                        id="customizer-layout01"
                        name="data-layout-style"
                        type="radio"
                        defaultValue="default"
                        className="form-check-input"
                        onChange={DefaultStyle}
                        checked={layoutStyling === "default" ? true : false}
                      />
                      <label
                        className="form-check-label avatar-md w-100"
                        htmlFor="customizer-layout01"
                      >
                        <ImageWithBasePath
                          src="assets/admin/img/default.png"
                          alt="Layout Image"
                        />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2 head-layout">
                      Default
                    </h5>
                  </div>
                  <div className="col-6">
                    <div className="form-check card-radio p-0">
                      <input
                        id="customizer-layout02"
                        name="data-layout-style"
                        type="radio"
                        defaultValue="small"
                        className="form-check-input"
                        onChange={SmallView}
                        checked={layoutStyling === "small" ? true : false}
                      />
                      <label
                        className="form-check-label  avatar-md w-100"
                        htmlFor="customizer-layout02"
                      >
                        <ImageWithBasePath
                          src="assets/admin/img/small-view.png"
                          alt="Layout Image"
                        />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2 head-layout">
                      Small Hover View
                    </h5>
                  </div>
                </div>
              </div>
              <div className="layout-head pt-3">
                <h5>Sidebar Color</h5>
              </div>
              <div className="colorscheme-cardradio screen-slide-bar">
                <div className="row">
                  <div className="col-6">
                    <div className="form-check card-radio  p-0">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-layout-mode"
                        id="layout-mode-light"
                        defaultValue="light"
                        onChange={ColorLight}
                        checked={layoutColor === "light" ? true : false}
                      />
                      <label
                        className="form-check-label  avatar-md w-100 "
                        htmlFor="layout-mode-light"
                      >
                        <ImageWithBasePath
                          src="assets/admin/img/side-light.png"
                          alt="Layout Image"
                        />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2 head-layout">
                      Default
                    </h5>
                  </div>
                  <div className="col-6">
                    <div className="form-check card-radio p-0">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-layout-mode"
                        id="layout-mode-gray"
                        defaultValue="gray"
                        onChange={ColorGrey}
                        checked={layoutColor === "gray" ? true : false}
                      />
                      <label
                        className="form-check-label  avatar-md w-100"
                        htmlFor="layout-mode-gray"
                      >
                        <ImageWithBasePath
                          src="assets/admin/img/side-gray.png"
                          alt="Layout Image"
                        />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2 head-layout">Gray</h5>
                  </div>
                  <div className="col-6">
                    <div className="form-check card-radio blue  p-0 ">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-layout-mode"
                        id="layout-mode-blue"
                        defaultValue="blue"
                        onChange={ColorBlue}
                        checked={layoutColor === "blue" ? true : false}
                      />
                      <label
                        className="form-check-label avatar-md w-100 "
                        htmlFor="layout-mode-blue"
                      >
                        <ImageWithBasePath
                          src="assets/admin/img/side-color.png"
                          alt="Layout Image"
                        />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2 head-layout">
                      Color
                    </h5>
                  </div>
                  <div className="col-6">
                    <div className="form-check card-radio dark  p-0 ">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-layout-mode"
                        id="layout-mode-dark"
                        defaultValue="dark"
                        onChange={ColorDark}
                        checked={layoutColor === "dark" ? true : false}
                      />
                      <label
                        className="form-check-label  avatar-md w-100"
                        htmlFor="layout-mode-dark"
                      >
                        <ImageWithBasePath
                          src="assets/admin/img/side-black.png"
                          alt="Layout Image"
                        />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2 head-layout">Dark</h5>
                  </div>
                </div>
              </div>
              <div className="layout-head pt-3">
                <h5>Navbar Type</h5>
              </div>
              <div className="form-navbar">
                <div className="d-flex align-items-center">
                  <label className="custom-radio form-check me-3">
                    Sticky
                    <input
                      type="radio"
                      className="form-check-input"
                      name="data-topbar"
                      id="layout-mode-sticky"
                      defaultValue="sticky"
                      onChange={TopSticky}
                      checked={layoutBar === "sticky" ? true : false}
                    />
                    <span className="checkmark" />
                  </label>
                  <label className="custom-radio me-3">
                    Static
                    <input
                      type="radio"
                      name="data-topbar"
                      id="layout-mode-static"
                      defaultValue="static"
                      onChange={TopStatic}
                      checked={layoutBar === "static" ? true : false}
                    />
                    <span className="checkmark" />
                  </label>
                  <label className="custom-radio">
                    Hidden
                    <input
                      type="radio"
                      name="data-topbar"
                      id="layout-mode-hidden"
                      defaultValue="hidden"
                      onChange={TopHidden}
                      checked={layoutBar === "hidden" ? true : false}
                    />
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="offcanvas-footer text-center">
          <div className="row">
            <div className="col-6">
              <Link to="#" className="btn btn-primary w-100 bor-rad-50">
                <i className="bx bx-play-circle me-1" />
                Preview
              </Link>
            </div>
            <div className="col-6">
              <button
                type="button"
                className="btn btn-light w-100 bor-rad-50"
                id="reset-layout"
                onClick={resetFunc}
              >
                <i className="bx bx-reset me-1" />
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* /Theme-Settings */}
    </>
  );
};

export default ThemeSettings;
