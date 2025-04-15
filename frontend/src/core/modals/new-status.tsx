import React from "react";
import { Link } from "react-router-dom";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";
const { Dragger } = Upload;

const props: UploadProps = {
  name: "file",
  multiple: true,
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};
const NewStatus = () => {
  return (
    <>
      {/* Add Status */}
      <div className="modal fade" id="new-status">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add New Status</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <div className="modal-body">
              <div className="file-drop mb-4">
                <Dragger
                  {...props}
                  className="dropzone dz-clickable drag-and-drop-block flex-column  d-flex align-items-center justify-content-center mb-3"
                >
                  <div className="text-center">
                    <img
                      src="assets/img/icons/drag-file.svg"
                      className="mb-2"
                      alt="upload"
                    />
                    <p className="text-gray-9 mb-2 fw-semibold">
                      Drag &amp; drop your files here or choose file
                    </p>
                    <span className="text-gray-9 d-block">
                      Maximum size: 50MB
                    </span>
                  </div>
                </Dragger>
              </div>
              <div className="row g-3">
                <div className="col-6">
                  <Link
                    to="#"
                    className="btn btn-outline-primary w-100"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Cancel
                  </Link>
                </div>
                <div className="col-6">
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#upload-file-image"
                    className="btn btn-primary w-100"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Status */}
    </>
  );
};

export default NewStatus;
