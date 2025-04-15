from pydantic import BaseModel
from model.user import User

# Get Full Info of user (include use_2fa_login and two_factor_secret)
class UserFullResponse(BaseModel):
    user_id: str

    email: str
    # password: str 
    first_name: str
    last_name: str
    avatar_url: str
    is_verified: bool
    use_2fa_login: bool
    two_factor_secret: str | None

    @classmethod
    def fromUserModel(cls, user_model: User):
        return cls(user_id = user_model.user_id, 
                   email = user_model.email,
                   first_name = user_model.first_name,
                   last_name = user_model.last_name,
                   avatar_url = user_model.avatar_url,
                   use_2fa_login = user_model.use_2fa_login,
                   two_factor_secret = user_model.two_factor_secret
                   )

    class Config:
        from_attributes = True