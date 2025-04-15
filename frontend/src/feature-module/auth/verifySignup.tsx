import React, { useEffect, useState } from "react";
import { Button, Spin, Result } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import httpRequest from "@/core/api/baseAxios";
import { all_routes } from "@/feature-module/router/all_routes";

const VerifySignup = () => {
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Lấy token từ query string
  const query = new URLSearchParams(location.search);
  const token = query.get("token");

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        setLoading(false);
        setError(true);
        return;
      }

      try {
        const res = await httpRequest.get(`/verify-email-signup?token=${token}`);
        if (res.code === 0) {
          setSuccess(true);
        }
        else {
          setError(true);
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    verifyEmail();
  }, [token]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spin size="large" tip="Verifying your email..." />
      </div>
    );
  }

  if (success) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Result
          status="success"
          title="Email Verified Successfully!"
          subTitle="Your account has been activated. You can now sign in."
          extra={
            <Button type="primary" onClick={() => navigate(all_routes.signin)}>
              Go to Sign In
            </Button>
          }
        />
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Result
        status="error"
        title="Email Verification Failed"
        subTitle="The verification link is invalid or has expired."
        extra={
          <Button type="primary" onClick={() => navigate(all_routes.signin)}>
            Back to Sign In
          </Button>
        }
      />
    </div>
  );
};

export default VerifySignup;
