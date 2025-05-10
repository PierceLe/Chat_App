import { Link } from 'react-router-dom';
import { all_routes } from '../../../feature-module/router/all_routes';
import Scrollbars from 'react-custom-scrollbars-2';
import { useEffect, useState } from 'react';
import { getAllFriends } from '../../services/contactService';
import { UserData } from '../../services/contactService';
import { getAvatarUrl } from '@/core/utils/helper';
import { useSelector } from 'react-redux';
import { getContactSelector } from '@/core/redux/selectors';
import { getMeSelector } from '../../redux/selectors';
import { Button, Modal } from 'antd';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { notify } from '@/core/utils/notification';
import { TimetableEvent, deleteEvent } from '../../services/timetableService';
import moment from 'moment';
import EventModal from '../../../feature-module/pages/timeTable/EventModal';

const TimeTableTab = () => {
  const routes = all_routes;
  const [loading, setLoading] = useState<boolean>(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<
      TimetableEvent | undefined
  >(undefined);
  const [isEditMode, setIsEditMode] = useState(false);
  const [deleteConfirmVisible, setDeleteConfirmVisible] = useState(false);
  const [viewModalVisible, setViewModalVisible] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const contact: any = useSelector(getContactSelector);
  const me: UserData = useSelector(getMeSelector);

  useEffect(() => {
    const fetchFriends = async () => {
      setLoading(true);
      await getAllFriends();
      setLoading(false);
    };

    fetchFriends();
  }, []);

  // Event management functions
  const handleAddEvent = () => {
    setSelectedEvent(undefined);
    setIsEditMode(false);
    setShowModal(true);
  };

  const handleEditEvent = (event: TimetableEvent) => {
    setSelectedEvent(event);
    setIsEditMode(true);
    setShowModal(true);
  };

  const handleDeleteEvent = async () => {
    if (!selectedEvent) return;

    try {
      const success = await deleteEvent(selectedEvent.event_id);
      if (success) {
        notify.success('Event deleted successfully');
      } else {
        notify.error('Failed to delete event', 'Please try again');
      }
    } catch (error) {
      console.error('Error deleting event:', error);
      notify.error('Failed to delete event', 'Please try again');
    } finally {
      setDeleteConfirmVisible(false);
    }
  };

  const showDeleteConfirm = (event: TimetableEvent) => {
    setSelectedEvent(event);
    setDeleteConfirmVisible(true);
  };

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
              {/* Timetable Users Section */}
              <div className="content-wrapper">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5>Timetable</h5>
                  <Button
                      type="primary"
                      icon={<PlusOutlined />}
                      onClick={handleAddEvent}
                      size="small"
                  >
                    Add Event
                  </Button>
                </div>
                <div className="chat-users-wrap">
                  {/* My Timetable Entry */}
                  <div className="chat-list">
                    <Link
                        to={routes.timetable}
                        className="chat-user-list active"
                        onClick={() => {
                          setSelectedUserId(null);
                          setViewModalVisible(false);
                        }}
                    >
                      <div className="avatar avatar-lg me-2">
                        {me?.avatar_url ? (
                            <img
                                src={getAvatarUrl(
                                    me.avatar_url
                                )}
                                className="rounded-circle"
                                alt={`${me.first_name} ${me.last_name}`}
                            />
                        ) : (
                            <div className="avatar-text rounded-circle bg-success text-white">
                                                    <span>
                                                        {me?.first_name?.charAt(
                                                            0
                                                        )}
                                                      {me?.last_name?.charAt(
                                                          0
                                                      )}
                                                    </span>
                            </div>
                        )}
                      </div>
                      <div className="chat-user-info">
                        <div className="chat-user-msg">
                          <h6>
                            {me?.first_name}{' '}
                            {me?.last_name}{' '}
                            <span className="badge bg-primary ms-2">
                                                        You
                                                    </span>
                          </h6>
                          <p>{me?.email}</p>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Friends Timetable Entries */}
                  <div className="mt-4">
                    <h6 className="ps-2 mb-3">Friends</h6>
                    <div>
                      {loading ? (
                          <div className="text-center p-3">
                            <div
                                className="spinner-border text-primary"
                                role="status"
                            >
                                                    <span className="visually-hidden">
                                                        Loading friends...
                                                    </span>
                            </div>
                          </div>
                      ) : contact.friend.length > 0 ? (
                          <div className="chat-list">
                            {contact.friend.map(
                                (friend) => (
                                    <Link
                                        key={friend.user_id}
                                        to={`${routes.timetable}?userId=${friend.user_id}`}
                                        className="chat-user-list"
                                        onClick={() => {
                                          setSelectedUserId(friend.user_id);
                                          setViewModalVisible(false);
                                        }}
                                        style={{
                                          border: selectedUserId === friend.user_id ? '2px solid #6338f6' : 'transparent',
                                        }}
                                    >
                                      <div className="avatar avatar-lg me-2">
                                        {friend.avatar_url ? (
                                            <img
                                                src={getAvatarUrl(
                                                    friend.avatar_url
                                                )}
                                                className="rounded-circle"
                                                alt={`${friend.first_name} ${friend.last_name}`}
                                            />
                                        ) : (
                                            <div className="avatar-text rounded-circle bg-primary text-white">
                                                                        <span>
                                                                            {friend.first_name.charAt(
                                                                                0
                                                                            )}
                                                                          {friend.last_name.charAt(
                                                                              0
                                                                          )}
                                                                        </span>
                                            </div>
                                        )}
                                      </div>
                                      <div className="chat-user-info">
                                        <div className="chat-user-msg">
                                          <h6>
                                            {
                                              friend.first_name
                                            }{' '}
                                            {
                                              friend.last_name
                                            }
                                          </h6>
                                          <p>
                                            {
                                              friend.email
                                            }
                                          </p>
                                        </div>
                                      </div>
                                    </Link>
                                )
                            )}
                          </div>
                      ) : (
                          <div className="text-center p-3">
                            <p className="text-muted">
                              No friends found
                            </p>
                          </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Scrollbars>

        {/* Event Modal */}
        <EventModal
            show={showModal}
            onHide={() => setShowModal(false)}
            onEventSaved={() => {}}
            event={selectedEvent}
            isEdit={isEditMode}
        />

        {/* Delete Confirmation Modal */}
        <Modal
            title="Delete Event"
            open={deleteConfirmVisible}
            onCancel={() => setDeleteConfirmVisible(false)}
            onOk={handleDeleteEvent}
            okText="Delete"
            okButtonProps={{ danger: true }}
        >
          <p>Are you sure you want to delete this event?</p>
          <p>
            <strong>{selectedEvent?.title}</strong>
          </p>
          {selectedEvent && (
              <p>
                {moment(selectedEvent.start_time).format(
                    'MMM D, YYYY h:mm A'
                )}{' '}
                - {moment(selectedEvent.end_time).format('h:mm A')}
              </p>
          )}
        </Modal>
      </div>
  );
};

export default TimeTableTab;
