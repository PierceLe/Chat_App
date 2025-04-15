import uvicorn
from fastapi import FastAPI, HTTPException, Depends, Request
from controller.auth_controller import auth_router
from controller.user_controller import user_router
from controller.room_controller import room_router
from controller.friend_controller import friend_router
from controller.chat_controller import chat_router
from exception.app_exception import AppException
from exception.global_exception_handler import app_exception_handler, http_exception_handler
from middleware.token_middleware import TokenMiddleware
from utils.token import verify_token
from fastapi.middleware.cors import CORSMiddleware



app = FastAPI()

# Add Exception Handler
app.add_exception_handler(AppException, app_exception_handler)
app.add_exception_handler(HTTPException, http_exception_handler)

# Add Middleware
app.add_middleware(TokenMiddleware,)


# Add cors
origins = [
    "http://localhost",
    "http://localhost:3000"
]
app.add_middleware(CORSMiddleware, 
    allow_origins=origins,  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"])

# Add Router
app.include_router(auth_router, tags=["Auth"])
app.include_router(user_router, prefix="/user", tags=["User"])
app.include_router(room_router, prefix="/room", tags=["Room"])
app.include_router(friend_router, prefix="/friend", tags=["Friend"])
app.include_router(chat_router, prefix="/chat", tags=["Chat WebSocket"])

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=9990, reload=True)
