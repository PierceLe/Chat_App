import React from "react";
import UserModal from "../../common/modals/userModal";
import ImageWithBasePath from "../../../../core/common/imageWithBasePath";
import { Link } from "react-router-dom";
import { inviteuserData } from "../../core/data/json/userListData";
import Table from "../../common/dataTable/index";
import PredefinedDateRanges from "../../common/range-picker/datePicker";
import CustomSelect from "../../common/select/commonSelect";
import { UserOptions } from "../../core/data/json/selectOption";
import { CountryOptions } from "../../core/data/json/selectOption";
import { all_routes } from "../../../router/all_routes";
const Inviteuser = () => {
  const data = inviteuserData;

  const columns = [
    {
      title: "Name",
      dataIndex: "Name",
      render: (text: string, record: any) => (
        <div className="d-flex align-items-center">
          <Link to="#" className="avatar avatar-md">
            <ImageWithBasePath
              src={`assets/admin/img/users/${record.Image}`}
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
      sorter: (a: any, b: any) => a.Name.length - b.Name.length,
    },
    {
      title: "Email Address",
      dataIndex: "EmailAddress",
      sorter: (a: any, b: any) => a.EmailAddress.length - b.EmailAddress.length,
    },
    {
      title: "Phone Number",
      dataIndex: "PhoneNumber",
      sorter: (a: any, b: any) => a.PhoneNumber.length - b.PhoneNumber.length,
    },
    {
      title: "Invite  Date",
      dataIndex: "InviteDate",
      sorter: (a: any, b: any) => a.RegDate.length - b.RegDate.length,
    },
    {
      title: "Country",
      dataIndex: "Country",
      sorter: (a: any, b: any) => a.Country.length - b.Country.length,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <>
          <div className="d-flex align-items-center">
            <div className="dropdown">
              <Link
                to="#"
                className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="ti ti-dots-vertical fs-14" />
              </Link>
              <ul className="dropdown-menu dropdown-menu-right p-3">
                <li>
                  <Link
                    className="dropdown-item rounded-1"
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#delete-modal"
                  >
                    <i className="ti ti-trash me-2" />
                    Delete
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="d-md-flex d-block align-items-center justify-content-between mb-4">
            <div className="my-auto mb-2 mb-md-0">
              <h4 className="page-title mb-1">Invited User</h4>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={all_routes.dashboard}>
                      <i className="ti ti-home text-primary" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="#">Users</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Invited User
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
                Invited User List<span>200</span>{" "}
              </h6>
              <div className="d-flex align-items-center flex-wrap">
                <div className="input-icon-start mb-3 me-2 position-relative">
                  <PredefinedDateRanges />
                </div>
                <div className="dropdown mb-3 me-2">
                  <div>
                    <CustomSelect
                      options={CountryOptions}
                      className="select d-flex"
                      placeholder="Select Country"
                    />
                  </div>
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
            {/* User List */}
            <div className="card-body p-0">
              <Table columns={columns} dataSource={data} Selection={true} />

              {/* /Cities List */}
            </div>
          </div>
          {/* /User List */}
        </div>
      </div>
      {/* /Page Wrapper */}
      <UserModal />
    </>
  );
};

export default Inviteuser;
