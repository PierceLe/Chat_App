import React from "react";
import GroupInfo from "./group-info";
import MessageInfo from "./message-info";
import GroupSettings from "./group-settings";
import InviteModal from "./invite-modal";
import MuteNotification from "./mute-notification";
import MessageDisapper from "./message-disapper";
import ApproveParticipants from "./approve-participants";
import ReportUser from "./report-user";
import MuteUser from "./mute-user";
import AddGroup from "./add-group";
import EditGroup from "./edit-group";
import EditAdmin from "./edit-admin";
import GroupLogout from "./group-logout";
import ReportGroup from "./report-group";

const CommonGroupModal = () => {
  return (
    <>
      <MuteUser />
      <MessageInfo />
      <GroupInfo />
      <GroupSettings />
      <InviteModal />
      <MuteNotification />
      <MessageDisapper />
      <ApproveParticipants />
      <ReportUser />
      <AddGroup />
      <EditGroup />
      <EditAdmin />
      <GroupLogout />
      <ReportGroup />
    </>
  );
};

export default CommonGroupModal;
