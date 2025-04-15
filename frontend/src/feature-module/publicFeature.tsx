import React from "react";

import { Outlet } from "react-router";
const PublicFeature = () => {
  return (
    <>
      {/* Main Wrapper */}
      <div className="main-wrapper d-block" style={{ visibility: "visible" }}>
        <Outlet />
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default PublicFeature;
