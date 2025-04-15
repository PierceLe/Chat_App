import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { base_path } from "./environment";
import { HelmetProvider } from "react-helmet-async";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "../src/index.scss";
import Store from "./core/data/redux/store";
import { Provider } from "react-redux";
import "../src/style/icon/boxicons/boxicons/css/boxicons.min.css";
import "../src/style/icon/weather/weathericons.css";
import "../src/style/icon/typicons/typicons.css";
import "../src/style/icon/fontawesome/css/fontawesome.min.css";
import "../src/style/icon/fontawesome/css/all.min.css";
import "../src/style/icon/ionic/ionicons.css";
import "../src/style/icon/tabler-icons/webfont/tabler-icons.css";
import "../src/style/icon/feather/css/iconfont.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Mainapp from "./feature-module/router/router";
import myStore from "./core/redux/store";
import AxiosInterceptor from "./core/api/AxiosInterceptor";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <HelmetProvider>
        <BrowserRouter basename={base_path}>
          <AxiosInterceptor /> {/* Catch 401 and redirect */}
          <Mainapp />
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>,
);
