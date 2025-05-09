import React from "react";
import { Navigate, Route } from "react-router";
import { all_routes } from "./all_routes";
import Signin from "../auth/signin";
import StartChat from "../pages/index/startChat";
import Signup from "../auth/signup";
import ForgotPassword from "../auth/forgotPassword";
import ResetPassword from "../auth/resetPassword";
import Otp from "../auth/otp";
import VerifySignup from "../auth/verifySignup";
import Success from "../auth/success";
import Chat from "../pages/chat/chat";
import GroupChat from "../pages/group-chat/groupChat";
import Status from "../pages/status/status";
import MyStatus from "../pages/status/myStatus";
import UserStatus from "../pages/status/userStatus";
import AllCalls from "../pages/calls/allCalls";
import GroupTask from "../pages/task/GroupTask";
import TimeTable from "../pages/timeTable/timeTable";

const route = all_routes;

export const protectedRoutes = [
  {
    path: "/",
    element: <Navigate to={route.chat} />,
    route: Route,
    title: "Signin",
  },
  {
    path: route.index,
    element: <StartChat />,
    route: Route,
    title: "Chat",
  },
  {
    path: `${route.chat}`,
    element: <Chat />,
    route: Route,
    title: "Chat",
  },
  {
    path: `${route.chat}/:room_id`,
    element: <Chat />,
    route: Route,
    title: "Chat",
  },
  {
    path: `${route.groupChat}`,
    element: <GroupChat />,
    route: Route,
    title: "Group",
  },
  {
    path: `${route.groupChat}/:room_id`,
    element: <GroupChat />,
    route: Route,
    title: "Group",
  },
  {
    path: `${route.contact}`,
    element: <StartChat />,
    route: Route,
    title: "Group",
  },
  {
    path: `${route.groupTasks}/:roomId`,
    element: <GroupTask />,
    route: Route,
    title: "Group",
  },
  {
    path: route.status,
    element: <Status />,
    route: Route,
    title: "Status",
  },
  {
    path: route.myStatus,
    element: <MyStatus />,
    route: Route,
    title: "Status",
  },
  {
    path: route.userStatus,
    element: <UserStatus />,
    route: Route,
    title: "Status",
  },
  {
    path: route.allCalls,
    element: <AllCalls />,
    route: Route,
    title: "Calls",
  },
  {
    path: route.timetable,
    element: <TimeTable />,
    route: Route,
    title: "Timetable",
  },
  {
    path: route.settings,
    element: <StartChat />,
    route: Route,
    title: "Timetable",
  },
];

export const publicRoutes = [
  {
    path: route.signin,
    element: <Signin />,
    route: Route,
    title: "Signin",
  },
  {
    path: route.signup,
    element: <Signup />,
    route: Route,
    title: "Signup",
  },
  {
    path: route.verifySignup,
    element: <VerifySignup />,
    route: Route,
    title: "Signup",
  },
  {
    path: route.forgotPassword,
    element: <ForgotPassword />,
    route: Route,
    title: "ForgotPassword",
  },
  {
    path: route.resetPassword,
    element: <ResetPassword />,
    route: Route,
    title: "ResetPassword",
  },
  {
    path: route.otp,
    element: <Otp />,
    route: Route,
    title: "OTP",
  },
  {
    path: route.success,
    element: <Success />,
    route: Route,
    title: "Success",
  },
];
