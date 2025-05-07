import ImageWithBasePath from "../imageWithBasePath";
import { Link } from "react-router-dom";
import { all_routes } from "../../../feature-module/router/all_routes";
import Scrollbars from "react-custom-scrollbars-2";
import { useEffect, useState } from "react";
import { getAllFriends } from "../../services/contactService";
import { UserData } from "../../services/contactService";
import { getAvatarUrl } from "@/core/utils/helper";

const TimeTableTab = () => {
  const routes = all_routes;
  const [friends, setFriends] = useState<UserData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFriends = async () => {
      setLoading(true);
      const friendsData = await getAllFriends();
      setFriends(friendsData);
      setLoading(false);
    };

    fetchFriends();
  }, []);

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
              <h5>Timetable Friends</h5>
            </div>
            {/* /Left Chat Title */}
            <div className="chat-users-wrap">
              <div className="mb-4">
                {loading ? (
                  <div className="text-center p-3">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : friends.length > 0 ? (
                  <div className="chat-list">
                    {friends.map((friend) => (
                      <Link 
                        key={friend.user_id}
                        to={`${routes.timetable}?userId=${friend.user_id}`} 
                        className="chat-user-list"
                      >
                        <div className="avatar avatar-lg me-2">
                          {friend.avatar_url ? (
                            <img
                              src={getAvatarUrl(friend.avatar_url)}
                              className="rounded-circle"
                              alt={`${friend.first_name} ${friend.last_name}`}
                            />
                          ) : (
                            <div className="avatar-text rounded-circle bg-primary text-white">
                              <span>{friend.first_name.charAt(0)}{friend.last_name.charAt(0)}</span>
                            </div>
                          )}
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>{friend.first_name} {friend.last_name}</h6>
                            <p>{friend.email}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center p-3">
                    <p className="text-muted">No friends found</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Scrollbars>
    </div>
  );
};

export default TimeTableTab;
