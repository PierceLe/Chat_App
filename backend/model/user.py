import uuid
from sqlalchemy import Column, String, DateTime, Enum as SqlEnum, Boolean, Text
from database import Base
from enums.enum_login_method import E_Login_Method

class User(Base):
    __tablename__ = "user"
    
    user_id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()), index=True)
    
    email = Column(String(255), unique=True, index=True)
    password = Column(String(500))  
    first_name = Column(String(100), unique=False)
    last_name = Column(String(100), unique=False)
    avatar_url = Column(String(500))
    is_verified = Column(Boolean, default=False)  # Use Boolean column type
    use_2fa_login = Column(Boolean, default=False) 
    two_factor_secret = Column(String(255), nullable=True)
    
    method = Column(SqlEnum(E_Login_Method), nullable=False)

    salt = Column(String(500))
    
    pin = Column(Text())
    public_key = Column(Text())
    encrypted_private_key = Column(Text())
    biography = Column(String(500))
