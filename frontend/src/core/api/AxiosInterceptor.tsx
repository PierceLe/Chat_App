// core/api/AxiosInterceptor.tsx
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import httpRequest from "./baseAxios";
import { all_routes } from "../../feature-module/router/all_routes";
import { notify } from "@/core/utils/notification"

const AxiosInterceptor = () => {
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    const interceptor = httpRequest.interceptors.response.use(
      (response) => {
        const { status, data } = response
        return data
      },
      (error) => {
        if (error.response?.status === 401 &&
          location.pathname !== all_routes.signin) {
          //notify.error("Login Error", "Login Session Ended");
          navigate(all_routes.signin);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      httpRequest.interceptors.response.eject(interceptor);
    };
  }, [navigate]);

  return null;
};

export default AxiosInterceptor;
