import React from "react";
import ReactDOM from "react-dom/client";

import Login from "./src/Pages/Login.jsx";
import Signup from "./src/Pages/Signup.jsx";
import Admin from "./src/Pages/Admin.jsx";
import Cashier from "./src/Pages/Cashier/Cashier.jsx";
import BeforeLogin from "./src/Pages/Cashier/BeforeLogin.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AfterLogin from "./src/Pages/Cashier/AfterLogin.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AfterLogin />
  </React.StrictMode>
);
