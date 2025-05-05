import uuid
from sqlalchemy import Column, String, Boolean
from database import Base

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
    
    method = Column(String(255))

    salt = Column(String(500))
    
    pin = Column(String(500))
    public_key = Column(String(500))
    encrypted_private_key = Column(String(500))
    biography = Column(String(500))
