import React, { useState } from "react";
import ImageWithBasePath from "../../../../core/common/imageWithBasePath";
import ReactApexChart from "react-apexcharts";
import { Link } from "react-router-dom";
import { all_routes } from "../../../router/all_routes";

export const AdminDashboard = () => {
  const routes = all_routes;
  const [sLineArea] = useState<any>({
    chart: {
      height: 200,
      type: "area",
      offsetX: -10, // Reduces the left space
      offsetY: -10,
      toolbar: {
        show: false,
      },
    },
    grid: {
      padding: {
        left: 0, // Remove left padding
        right: 0, // Remove right padding
        bottom: 0, // Remove bottom padding
        top: 0, // Remove top padding
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    series: [
      {
        color: "#6338F6",
        data: [20, 60, 40, 51, 42, 42, 30, 25, 20, 40, 30, 40],
      },
    ],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  });
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="d-md-flex d-block align-items-center justify-content-between mb-4">
            <div className="my-auto">
              <h4 className="page-title mb-1">Dashboard</h4>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={routes.dashboard}>
                      <i className="ti ti-home text-primary" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Dashboard
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          {/* Page Header */}
          <div className="row justify-content-center">
            <div className="col-md-6 col-xl-3 d-flex">
              <div className="card total-users flex-fill">
                <div className="card-body">
                  <div className="total-counts">
                    <div className="d-flex align-items-center">
                      <span className="total-count-icons">
                        <i className="ti ti-user-share" />
                      </span>
                      <div>
                        <p>Total Users </p>
                        <h5>200</h5>
                      </div>
                    </div>
                    <div className="percentage">
                      <span className="bg-success">+5.63%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3 d-flex">
              <div className="card total-users flex-fill">
                <div className="card-body">
                  <div className="total-counts">
                    <div className="d-flex align-items-center">
                      <span className="bg-dark total-count-icons">
                        <i className="ti ti-users-group" />
                      </span>
                      <div>
                        <p>Total Groups</p>
                        <h5>150</h5>
                      </div>
                    </div>
                    <div className="percentage">
                      <span className="bg-danger">-42.05%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3 d-flex">
              <div className="card total-users flex-fill">
                <div className="card-body">
                  <div className="total-counts">
                    <div className="d-flex align-items-center">
                      <span className="bg-purple total-count-icons">
                        <i className="ti ti-brand-hipchat" />
                      </span>
                      <div>
                        <p>Total Chats</p>
                        <h5>2,584</h5>
                      </div>
                    </div>
                    <div className="percentage">
                      <span className="bg-success">+5.63%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3 d-flex">
              <div className="card total-users flex-fill">
                <div className="card-body">
                  <div className="total-counts">
                    <div className="d-flex align-items-center">
                      <span className="bg-info total-count-icons">
                        <i className="ti ti-circle-dot" />
                      </span>
                      <div>
                        <p>Total Stories</p>
                        <h5>1,640</h5>
                      </div>
                    </div>
                    <div className="percentage">
                      <span className=" bg-success ">+5.63%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-6 d-flex">
              <div className="card user-details flex-fill">
                <div className="card-header">
                  <h5>Recent Joined Members</h5>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                      <thead className="thead-light">
                        <tr>
                          <th>Name</th>
                          <th>Reg Date</th>
                          <th>Login Time</th>
                          <th>Country</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link
                                to={routes.users}
                                className="avatar avatar-md"
                              >
                                <ImageWithBasePath
                                  src="assets/admin/img/users/user-01.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2 profile-name">
                                <p className="text-dark mb-0">
                                  <Link to={routes.users}>Aaryian Jose</Link>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>02 Sep 2024</td>
                          <td>10:00 AM</td>
                          <td>United States</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link
                                to={routes.users}
                                className="avatar avatar-md"
                              >
                                <ImageWithBasePath
                                  src="assets/admin/img/users/user-02.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2 profile-name">
                                <p className="text-dark mb-0">
                                  <Link to={routes.users}>Sarika Jain</Link>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>14 Sep 2024</td>
                          <td>11:30 AM</td>
                          <td>Canada</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link
                                to={routes.users}
                                className="avatar avatar-md"
                              >
                                <ImageWithBasePath
                                  src="assets/admin/img/users/user-03.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2 profile-name">
                                <p className="text-dark mb-0">
                                  <Link to={routes.users}>Clyde Smith</Link>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>28 Sep 2024</td>
                          <td>08:15 AM</td>
                          <td>United Kingdom</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link
                                to={routes.users}
                                className="avatar avatar-md"
                              >
                                <ImageWithBasePath
                                  src="assets/admin/img/users/user-04.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2 profile-name">
                                <p className="text-dark mb-0">
                                  <Link to={routes.users}>Carla Jenkins</Link>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>12 Oct 2024</td>
                          <td>06:40 PM</td>
                          <td>Germany</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 d-flex">
              <div className="card user-details flex-fill">
                <div className="card-header">
                  <h5>Recent Created Groups</h5>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                      <thead className="thead-light">
                        <tr>
                          <th>Name</th>
                          <th>Reg Date</th>
                          <th>Login Time</th>
                          <th>Members</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link
                                to={routes.group}
                                className="avatar avatar-md"
                              >
                                <ImageWithBasePath
                                  src="assets/admin/img/group-chat/group-01.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2 profile-name">
                                <p className="text-dark mb-0">
                                  <Link to={routes.group}>The Dream Team</Link>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>02 Sep 2024</td>
                          <td>10:00 AM</td>
                          <td>105</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link
                                to={routes.group}
                                className="avatar avatar-md"
                              >
                                <ImageWithBasePath
                                  src="assets/admin/img/group-chat/group-02.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2 profile-name">
                                <p className="text-dark mb-0">
                                  <Link to={routes.group}>The Meme Team</Link>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>14 Sep 2024</td>
                          <td>11:30 AM</td>
                          <td>120</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link
                                to={routes.group}
                                className="avatar avatar-md"
                              >
                                <ImageWithBasePath
                                  src="assets/admin/img/group-chat/group-03.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2 profile-name">
                                <p className="text-dark mb-0">
                                  <Link to={routes.group}>Tech Talk Tribe</Link>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>28 Sep 2024</td>
                          <td>08:15 AM</td>
                          <td>200</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link
                                to={routes.group}
                                className="avatar avatar-md"
                              >
                                <ImageWithBasePath
                                  src="assets/admin/img/group-chat/group-04.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2 profile-name">
                                <p className="text-dark mb-0">
                                  <Link to={routes.group}>
                                    The Academic Alliance
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>12 Oct 2024</td>
                          <td>06:40 PM</td>
                          <td>250</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-8 d-flex">
              <div className="card user-details flex-fill">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="card-title">Attendance</h5>
                  <div className="dropdown dashboard-chart">
                    <Link
                      to="#"
                      className="bg-white dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti ti-calendar-due me-1" />
                      This Year
                    </Link>
                    <ul className="dropdown-menu mt-2 p-3">
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          This Week
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Last Week
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Last Week
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body pb-0">
                  <div id="school-area">
                    <ReactApexChart
                      options={sLineArea}
                      series={sLineArea.series}
                      type="area"
                      height={200}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 d-flex">
              <div className="card user-details flex-fill">
                <div className="card-header">
                  <h5>Invited User</h5>
                </div>
                <div className="card-body pt-2">
                  <div className="user-list">
                    <div className="d-flex align-items-center">
                      <Link to={routes.inviteuser} className="avatar avatar-md">
                        <ImageWithBasePath
                          src="assets/admin/img/users/user-05.jpg"
                          className="img-fluid rounded-circle"
                          alt="img"
                        />
                      </Link>
                      <div className="ms-2 profile-name">
                        <p className="text-dark mb-0">
                          <Link to={routes.inviteuser}>Federico Wells</Link>
                        </p>
                      </div>
                    </div>
                    <div className="check-list">
                      <Link to="#">
                        <span>
                          <i className="ti ti-check" />
                        </span>
                      </Link>
                      <Link to="#" className="close-btn">
                        <span>
                          <i className="ti ti-x" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="user-list">
                    <div className="d-flex align-items-center">
                      <Link to={routes.inviteuser} className="avatar avatar-md">
                        <ImageWithBasePath
                          src="assets/admin/img/users/user-06.jpg"
                          className="img-fluid rounded-circle"
                          alt="img"
                        />
                      </Link>
                      <div className="ms-2 profile-name">
                        <p className="text-dark mb-0">
                          <Link to={routes.inviteuser}>Federico Wells</Link>
                        </p>
                      </div>
                    </div>
                    <div className="check-list">
                      <Link to="#">
                        <span>
                          <i className="ti ti-check" />
                        </span>
                      </Link>
                      <Link to="#" className="close-btn">
                        <span>
                          <i className="ti ti-x" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="user-list">
                    <div className="d-flex align-items-center">
                      <Link to={routes.inviteuser} className="avatar avatar-md">
                        <ImageWithBasePath
                          src="assets/admin/img/users/user-07.jpg"
                          className="img-fluid rounded-circle"
                          alt="img"
                        />
                      </Link>
                      <div className="ms-2 profile-name">
                        <p className="text-dark mb-0">
                          <Link to={routes.inviteuser}>Sharon Ford</Link>
                        </p>
                      </div>
                    </div>
                    <div className="check-list">
                      <Link to="#">
                        <span>
                          <i className="ti ti-check" />
                        </span>
                      </Link>
                      <Link to="#" className="close-btn">
                        <span>
                          <i className="ti ti-x" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="user-list">
                    <div className="d-flex align-items-center">
                      <Link to={routes.inviteuser} className="avatar avatar-md">
                        <ImageWithBasePath
                          src="assets/admin/img/users/user-08.jpg"
                          className="img-fluid rounded-circle"
                          alt="img"
                        />
                      </Link>
                      <div className="ms-2 profile-name">
                        <p className="text-dark mb-0">
                          <Link to={routes.inviteuser}>Thomas Rethman</Link>
                        </p>
                      </div>
                    </div>
                    <div className="check-list">
                      <Link to="#">
                        <span>
                          <i className="ti ti-check" />
                        </span>
                      </Link>
                      <Link to="#" className="close-btn">
                        <span>
                          <i className="ti ti-x" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="user-list pb-0">
                    <div className="d-flex align-items-center">
                      <Link to={routes.inviteuser} className="avatar avatar-md">
                        <ImageWithBasePath
                          src="assets/admin/img/users/user-09.jpg"
                          className="img-fluid rounded-circle"
                          alt="img"
                        />
                      </Link>
                      <div className="ms-2 profile-name">
                        <p className="text-dark mb-0">
                          <Link to={routes.inviteuser}>Wilbur Martinez</Link>
                        </p>
                      </div>
                    </div>
                    <div className="check-list">
                      <Link to="#">
                        <span>
                          <i className="ti ti-check" />
                        </span>
                      </Link>
                      <Link to="#" className="close-btn">
                        <span>
                          <i className="ti ti-x" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
    </>
  );
};
