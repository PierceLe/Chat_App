from fastapi import APIRouter, HTTPException, status, Depends
from dto.response.user_response import UserResponse
from dto.request.auth.user_create_request import UserCreateRequest
from service.user_service import UserService
from exception.app_exception import AppException
from exception.error_code import ErrorCode
from dto.response.success_response import SuccessResponse
from utils.utils import get_current_user

user_router = APIRouter()

@user_router.get("/{user_id}")
async def get_user(user_id: str, user_service: UserService = Depends(UserService)):
    
    user = user_service.get_user(user_id)

    return SuccessResponse(result=user)

@user_router.post("/me")
async def get_me(current_user=Depends(get_current_user), user_service: UserService = Depends(UserService)):
    current_user = user_service.get_user_by_email(current_user.email, get_use_2fa_login=True)
    return SuccessResponse(result=current_user)


