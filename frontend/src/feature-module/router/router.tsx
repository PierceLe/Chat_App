import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router";
import { publicRoutes, protectedRoutes } from "./router.link";
import ProtectedFeature from "../protectedFeature";
import PublicFeature from "../publicFeature";
import { Helmet } from "react-helmet-async";
import NotFound from "../pages/Notfound";
// import AdminFeature from "../adminFeature";
// import AdminAuthFeature from "../adminAuthFeature";
// import AdminLogin from "../admin/authentication/login";

const Mainapp: React.FC = () => {
  const location = useLocation();

  // Find the current route in either public or auth routes
  const currentRoute =
  protectedRoutes.find((route) => route.path === location.pathname) ||
  publicRoutes.find((route) => route.path === location.pathname);

  // Construct the full title
  const fullTitle = currentRoute?.title
    ? `${currentRoute.title} - DreamsChat`
    : "DreamsChat";

  useEffect(() => {
    document.title = fullTitle;
  }, [fullTitle]);

  const [styleLoaded, setStyleLoaded] = useState(false);

  useEffect(() => {
    setStyleLoaded(false); // Reset styleLoaded when pathname changes

    if (location.pathname.includes("/admin")) {
      import("../../style/admin/main.scss")
        .then(() => setStyleLoaded(true))
        .catch((err) => console.error("Admin style load error: ", err));
    } else {
      import("../../style/scss/main.scss")
        .then(() => setStyleLoaded(true))
        .catch((err) => console.error("Main style load error: ", err));
    }
  }, [location.pathname]);
  if (!styleLoaded) {
    return null; // You could show a loading spinner here if necessary
  }
  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
      </Helmet>
      <Routes>
        <Route element={<ProtectedFeature />}>
          {protectedRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>
        <Route element={<PublicFeature />}>
          {publicRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>

         {/* 💥 Otherwise */}
         <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Mainapp;
