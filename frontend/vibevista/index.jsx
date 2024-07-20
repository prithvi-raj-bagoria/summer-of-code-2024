import React from "react";
import ReactDOM from "react-dom/client";

import Login from "./src/Pages/Login.jsx";
import Signup from "./src/Pages/Signup.jsx";
import Admin from "./src/Pages/Admin.jsx";
import Cashier from "./src/Pages/Cashier.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Cashier />
  </React.StrictMode>
);
