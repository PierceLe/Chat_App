export const roomNameSelector = (state: any) => state.createRoom.room_name;
export const roomTypeSelector = (state: any) => state.createRoom.room_type;
export const roomAvatarUrlSelector = (state: any) =>
  state.createRoom.avatar_url;
export const roomDescriptionSelector = (state: any) =>
  state.createRoom.description;
export const roomMemberIdsSelector = (state: any) =>
  state.createRoom.member_ids;
export const getMeSelector = (state: any) => state.getMe.user;
