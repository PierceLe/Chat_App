import React, { useState } from "react";
import ImageWithBasePath from "../imageWithBasePath";
import { Link } from "react-router-dom";
import { all_routes } from "../../../feature-module/router/all_routes";
import Scrollbars from "react-custom-scrollbars-2";
import { Swiper, SwiperSlide } from "swiper/react";

const TaskTab = () => {
  const routes = all_routes;
  return (
    <div className="sidebar-content active slimscroll">
      <Scrollbars
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        autoHeight
        autoHeightMin={0}
        autoHeightMax="100vh"
        thumbMinSize={30}
        universal={false}
        hideTracksWhenNotNeeded={true}
      >
        <div className="slimscroll">
          <div className="sidebar-body chat-body">
            {/* Left Chat Title */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5>All tasks</h5>
            </div>
            {/* /Left Chat Title */}
            <div className="chat-users-wrap">
              <div className="mb-4">
                <div className="chat-list">
                  <Link to={routes.tasks} className="chat-user-list">
                    <div className="avatar avatar-lg online me-2">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-01.jpg"
                        className="rounded-circle"
                        alt="image"
                      />
                    </div>
                    <div className="chat-user-info">
                      <div className="chat-user-msg">
                        <h6>Aaryian Jose</h6>
                        <p>last seen 5 days ago</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Scrollbars>
    </div>
  );
};

export default TaskTab;
