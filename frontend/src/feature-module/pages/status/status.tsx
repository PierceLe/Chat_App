import React from "react";
import UploadFile from "../../../core/modals/upload-file-image";
import NewStatus from "../../../core/modals/new-status";
import { Link } from "react-router-dom";

const Status = () => {
  return (
    <>
      <>
        {/* Chat */}
        <div className="welcome-content d-flex align-items-center justify-content-center">
          <div className="welcome-info text-center">
            <Link
              to="#"
              className="rounded-border bg-primary text-white d-flex align-items-center justify-content-center fs-22"
            >
              <i className="ti ti-circle-dot " />
            </Link>
            <p className="text-gray-9 status-content mb-0 mt-2">
              Click on a contact to view their status updates
            </p>
          </div>
        </div>
        {/* /Chat */}
      </>

      <UploadFile />
      <NewStatus />
    </>
  );
};

export default Status;
