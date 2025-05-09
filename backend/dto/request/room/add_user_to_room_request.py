from pydantic import BaseModel


class AddUserToRoomRequest(BaseModel):
    room_id: str
    list_user_id: list[str] = []

    class Config:
        from_attributes = True