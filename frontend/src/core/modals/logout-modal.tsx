import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { all_routes } from "../../feature-module/router/all_routes";
import { logout } from "../services/authService";
import { wsClient } from "../services/websocket";
type props = {
  showModal?: boolean;
  setShowModal: CallableFunction;
};
const LogoutModal: React.FC<props> = ({ showModal, setShowModal }) => {
  const handleClose = () => {
    setShowModal(false);
  };
  const routes = all_routes;

  const handleLogout = () => {
    wsClient.disconnect();
    logout();
    console.log("LOGOUT");
  };

  return (
    <>
      {/* Logout */}
      <Modal centered show={showModal}>
        <div className="modal-header">
          <h4 className="modal-title">Logout</h4>
          <button
            type="button"
            className="btn-close"
            onClick={handleClose}
            aria-label="Close"
          >
            <i className="ti ti-x" />
          </button>
        </div>
        <div className="modal-body">
          <form>
            <div className="block-wrap text-center mb-3">
              <span className="user-icon mb-3 mx-auto bg-transparent-danger">
                <i className="ti ti-logout text-danger" />
              </span>
              <p className="text-grya-9">Are you sure you want to logout? </p>
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
                <Link
                  to={routes.signin}
                  className="btn btn-primary w-100"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </div>
            </div>
          </form>
        </div>
      </Modal>
      {/* /Logout */}
    </>
  );
};

export default LogoutModal;
