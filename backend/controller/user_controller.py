from fastapi import APIRouter, HTTPException, status, Depends
from dto.request.auth.user_create_request import UserCreateRequest
from service.user_service import UserService
from exception.app_exception import AppException
from exception.error_code import ErrorCode
from dto.response.success_response import SuccessResponse
from utils.utils import get_current_user
from dto.request.auth.user_update_request import UserUpdateRequest
from dto.request.auth.user_bio_update_request import UserBioUpdateRequest

user_router = APIRouter()

@user_router.get("/{user_id}")
async def get_user(user_id: str, user_service: UserService = Depends(UserService)):
    
    user = user_service.get_user(user_id)

    return SuccessResponse(result=user)

@user_router.post("/me")
async def get_me(current_user=Depends(get_current_user), user_service: UserService = Depends(UserService)):
    current_user = user_service.get_user_by_email(current_user.email, get_use_2fa_login=True)
    return SuccessResponse(result=current_user)

@user_router.put("/update-me")
async def update_me(user_update: UserUpdateRequest,
                current_user=Depends(get_current_user),
                user_service: UserService = Depends(UserService)):

    current_user = user_service.get_user_by_email(current_user.email, get_use_2fa_login=True)
    updated = user_service.update_user_info(user_id=current_user.user_id, user_update=user_update)

    return SuccessResponse(result=updated)

@user_router.put("/update-me-bio")
async def update_me_bio(user_update: UserBioUpdateRequest,
                current_user=Depends(get_current_user),
                user_service: UserService = Depends(UserService)):

    current_user = user_service.get_user_by_email(current_user.email, get_use_2fa_login=True)
    updated = user_service.update_user_bio(user_id=current_user.user_id, user_update=user_update)

    return SuccessResponse(result=updated)


