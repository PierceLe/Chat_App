import { useEffect, useState } from "react";
import httpRequest, { ApiResponse } from "../api/baseAxios"; // import axios instance của bạn
import { useNavigate } from "react-router-dom";
import { all_routes } from "../../feature-module/router/all_routes";
import getMeSlice from "@/core/redux/reducers/getMeSlice";
import { useDispatch, useSelector } from "react-redux";
import { setMe } from "@/core/redux/reducers/getMeSlice";
import { UserData } from "../services/contactService";
import { getMeSelector } from "../redux/selectors";

export const useAuth = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // can not render before calling API
  const [isAuthenticated, setIsAuthenticated] = useState(false); // auth status
  const navigate = useNavigate();
  const userMe: UserData = useSelector(getMeSelector);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // if it dont have state userMe, it will call API /me to check token
        if (userMe.user_id === "") {
          const response: ApiResponse<UserData> = await httpRequest.post(`/user/me?ts=${Date.now()}`, {
            headers: {
              "Cache-Control": "no-cache",
              "Pragma": "no-cache",
              "Expires": "0"
            }
          });
          console.log("checkAuth: ", response)
          dispatch(setMe(response.result));
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(true);
        }
      } catch (error) {
        setIsAuthenticated(false);
        // If API return 401, redirect to login
        navigate(all_routes.signin);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [navigate]);

  return { loading, isAuthenticated };
};
