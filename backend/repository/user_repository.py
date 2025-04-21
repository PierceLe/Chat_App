from sqlalchemy.orm import Session
from database import get_db
from model.user import User
from dto.request.auth.user_update_request import UserUpdateRequest


class UserRepository():
    def __init__(self):
        self.db = next(get_db())  # Call get_db() to get the session

    def create_user(
            self,
            email: str,
            password: str,
            first_name: str,
            last_name: str,
            avatar_url: str,
            is_verified: bool = False,
            use_2fa_login: bool = False,
            two_factor_secret: str = "") -> User:
        db_user = User(
            email=email,
            password=password,
            first_name=first_name,
            last_name=last_name,
            avatar_url=avatar_url,
            is_verified=is_verified,
            use_2fa_login=use_2fa_login,
            two_factor_secret=two_factor_secret)
        self.db.add(db_user)
        self.db.commit()
        self.db.refresh(db_user)
        return db_user

    def get_user_by_id(self, user_id: str) -> User:
        db_user = self.db.query(User).filter(User.user_id == user_id).first()

        return db_user

    def get_user_by_email(self, email: str, only_verified=True) -> User:
        query = self.db.query(User).filter(User.email == email)

        if only_verified:
            query = query.filter(User.is_verified == True)

        db_user = query.first()

        if db_user:
            self.db.refresh(db_user)

        return db_user


    def check_user_exist_by_email(
            self,
            email: str,
            only_verified=True) -> bool:
        if only_verified:
            db_user = self.db.query(User).filter(
                User.email == email,
                User.is_verified
            ).first()
        else:
            db_user = self.db.query(User).filter(User.email == email).first()

        return db_user is not None

    def update_user_verified_by_email(
            self, email: str, is_verified: bool) -> bool:
        db_user = self.db.query(User).filter(User.email == email).first()

        if db_user:
            db_user.is_verified = is_verified
            self.db.flush()
            self.db.commit()
            self.db.refresh(db_user)
            return True
        return False

    def update_password(self, user_id: str, new_password: str) -> bool:
        db_user = self.db.query(User).filter(User.user_id == user_id).first()

        if db_user:
            db_user.password = new_password
            self.db.flush()
            self.db.commit()
            self.db.refresh(db_user)
            return True
        return False
    
    def update_two_factor_secret(self, user_id: str, two_factor_secret: str) -> bool:
        db_user = self.db.query(User).filter(User.user_id == user_id).first()

        if db_user:
            db_user.use_2fa_login = True
            db_user.two_factor_secret = two_factor_secret
            self.db.flush()
            self.db.commit()
            self.db.refresh(db_user)
            return True
        return False
    
    def update_user_info(self, user_id: str, user_update: UserUpdateRequest) -> bool:
        db_user = self.db.query(User).filter(User.user_id == user_id).first()

        if db_user:
            update_data = user_update.dict(exclude_unset=True) 

            for key, value in update_data.items():
                setattr(db_user, key, value)

            self.db.flush()
            self.db.commit()
            self.db.refresh(db_user)
            return True
        return False

    def delete_user(self, user_id: str) -> bool:
        db_user = self.db.query(User).filter(User.user_id == user_id).first()
        if db_user:
            self.db.delete(db_user)
            self.db.commit()
            return True
        return False

    def delete_user_by_email(self, email: str) -> bool:
        db_user = self.db.query(User).filter(User.email == email).first()
        if db_user:
            self.db.delete(db_user)
            self.db.commit()
            return True
        return False
    
    def disable_2fa(self, user_id: str) -> bool:
        db_user = self.db.query(User).filter(User.user_id == user_id).first()
        if db_user:
            db_user.use_2fa_login = False
            db_user.two_factor_secret = ""
            self.db.flush()
            self.db.commit()
            self.db.refresh(db_user)
            return True
        return False

    def close(self):
        # Close the session after the repository has completed its tasks
        self.db.close()
