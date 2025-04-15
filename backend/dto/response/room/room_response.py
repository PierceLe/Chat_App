from pydantic import BaseModel
from datetime import datetime
from enums.enum_room_type import E_Room_Type
from typing import Optional


class RoomResponse(BaseModel):
    room_id: str
    room_name: str
    creator_id: str
    last_mess: Optional[str]
    room_type: E_Room_Type
    avatar_url: Optional[str]
    description: Optional[str]
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True
