import React from "react";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import { Link } from "react-router-dom";
import Table from "../common/dataTable/index";
import PredefinedDateRanges from "../common/range-picker/datePicker";
import CustomSelect from "../common/select/commonSelect";
import { UserOptions } from "../core/data/json/selectOption";
import UserModal from "../common/modals/userModal";
import { abusemessage } from "../core/data/json/abuse-message";
import { all_routes } from "../../router/all_routes";

const AbuseMessage = () => {
  const data = abusemessage;

  const columns = [
    {
      title: "Reported By",
      dataIndex: "Reported_By",
      render: (text: string, record: any) => (
        <div className="d-flex align-items-center">
          <Link to="#" className="avatar avatar-md">
            <ImageWithBasePath
              src={`assets/admin/img/profiles/${record.Image}`}
              className="img-fluid rounded-circle"
              alt="img"
            />
          </Link>
          <div className="ms-2 profile-name">
            <p className="text-dark mb-0">
              <Link to="#">{text}</Link>
            </p>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) => a.Reported_By.length - b.Reported_By.length,
    },
    {
      title: "Reported User",
      dataIndex: "Reported_User",
      render: (text: string, record: any) => (
        <div className="d-flex align-items-center">
          <Link to="#" className="avatar avatar-md">
            <ImageWithBasePath
              src={`assets/admin/img/users/${record.User_Img}`}
              className="img-fluid rounded-circle"
              alt="img"
            />
          </Link>
          <div className="ms-2 profile-name">
            <p className="text-dark mb-0">
              <Link to="#">{text}</Link>
            </p>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) =>
        a.Reported_User.length - b.Reported_User.length,
    },
    {
      title: "Total Message Count",
      dataIndex: "Total_Message_Count",
      sorter: (a: any, b: any) =>
        a.Total_Message_Count.length - b.Total_Message_Count.length,
    },
    {
      title: "Date",
      dataIndex: "Date",
      sorter: (a: any, b: any) => a.Date.length - b.Date.length,
    },
    {
      title: "Action",
      dataIndex: "reason",
      render: () => (
        <>
          <Link to="#" data-bs-toggle="modal" data-bs-target="#delete-modal">
            <span className="file-icon">
              <i className="ti ti-trash" />
            </span>
          </Link>
        </>
      ),
      sorter: (a: any, b: any) => a.reason.length - b.reason.length,
    },
  ];
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="d-md-flex d-block align-items-center justify-content-between mb-4">
            <div className="my-auto">
              <h4 className="page-title mb-1">Abuse Messages</h4>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={all_routes.dashboard}>
                      <i className="ti ti-home text-primary" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Abuse Messages
                  </li>
                </ol>
              </nav>
            </div>
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
              <div className="dropdown me-2 mb-2">
                <Link
                  to="#"
                  className="dropdown-toggle btn fw-medium d-inline-flex align-items-center"
                  data-bs-toggle="dropdown"
                >
                  <i className="ti ti-file-export me-2" />
                  Export
                </Link>
                <ul className="dropdown-menu  dropdown-menu-end p-3">
                  <li>
                    <Link to="#" className="dropdown-item rounded-1">
                      <i className="ti ti-file-type-pdf me-1" />
                      Export as PDF
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item rounded-1">
                      <i className="ti ti-file-type-xls me-1" />
                      Export as Excel{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Page Header */}
          {/* User List */}
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap pb-0">
              <h6 className="mb-3">
                Abuse Messages List<span>200</span>{" "}
              </h6>
              <div className="d-flex align-items-center flex-wrap">
                <div className="input-icon-start mb-3 me-2 position-relative">
                  <PredefinedDateRanges />
                </div>
                <div className="dropdown mb-3 me-2">
                  <div>
                    <CustomSelect
                      options={UserOptions}
                      className="select d-flex"
                      placeholder="Select User"
                    />
                  </div>
                </div>
                <div className="dropdown mb-3">
                  <Link
                    to="#"
                    className="btn btn-white border  dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <i className="ti ti-sort-ascending-2 me-2" />
                    Sort By : Last 7 Days
                  </Link>
                  <ul className="dropdown-menu p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1 active">
                        Ascending
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Descending
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Recently Viewed
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Recently Added
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Group List */}
            <div className="card-body p-0">
              <div className="custom-datatable-filter table-responsive">
                <Table columns={columns} dataSource={data} Selection={true} />
              </div>
              {/* /Cities List */}
            </div>
          </div>
          {/* /Group List */}
        </div>
      </div>
      {/* /Page Wrapper */}
      <UserModal />
    </>
  );
};

export default AbuseMessage;
