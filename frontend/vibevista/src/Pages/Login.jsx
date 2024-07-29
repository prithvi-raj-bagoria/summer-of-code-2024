import React from "react";

import VibeVista from "../assets/images/VibeVista.png";
import TwoGirls from "../assets/images/TwoGirls.png";
import google from "../assets/images/google.png";
import facebook from "../assets/images/facebook.png";
import github from "../assets/images/github.png";

import Button from "../Components/Button";
import Input from "../Components/Input";

const Login = () => {
  return (
    <div
      className="m-0 p-0 container-fluid d-flex justify-content-around align-items-center"
      style={{
        background: " linear-gradient(to top,#E1DADA ,  #BDCAD9)",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div className=" container-fluid   position-relative ">
        <img
          src={TwoGirls}
          style={{ width: "500px" }}
        />
      </div>
      <div
        className="m-0 p-0 container-sm d-flex flex-column justify-content-between gap-3  rounded-5 text-dark position-absolute"
        style={{
          background: "rgba(0,0,0, 0.05)",
          height: "calc(60vh + 10rem)",
          width: "calc(10vw + 20rem)",
          border: "1px solid rgba(0,0,0,0.1)",
          boxShadow: "0 16px 32px rgb(0,0,0,0.1)",
        }}
      >
        <a
          href="#"
          className="m-2 text-dark text-decoration-none"
        >
          <h4>
            <img
              src={VibeVista}
              style={{ width: "40px" }}
              alt="VibeVista Logo"
            />
            VibeVista
          </h4>
        </a>
        <form className="container-sm d-flex flex-column gap-2 ">
          <h1>Login</h1>
          <label
            htmlFor="username"
            className="form-label"
          >
            <h6>Email/Username</h6>
            <Input
              type="text"
              placeholder="username/youremail@gmail.com"
            />
          </label>
          <label
            htmlFor="password"
            className="form-label"
          >
            <h6>Password</h6>
            <Input
              type="password"
              placeholder="password"
            />
            <a
              href=""
              className="mt-1 link-dark link-underline-none "
              style={{ textDecoration: "none" }}
            >
              <p>Forgot Password ?</p>
            </a>
          </label>
          <label
            htmlFor="submit"
            className="form-label"
          >
            <Button
              text="Submit"
              style="btn btn-danger "
              width="100%"
            />
          </label>
        </form>
        <p className="text-center">or continue with</p>
        <div className="d-flex justify-content-around align-center">
          <Button
            img={google}
            imgwidth="35%"
            style="btn btn-light rounded-3"
            width="25%"
          />
          <Button
            img={facebook}
            imgwidth="35%"
            style="btn btn-light rounded-3"
            width="25%"
          />
          <Button
            img={github}
            imgwidth="35%"
            style="btn btn-light rounded-3"
            width="25%"
          />
        </div>
        <p className="text-center ">
          Don't have an account yet ?
          <a
            href=""
            style={{ textDecoration: "none" }}
            className="mx-1 text-dark fw-bold"
          >
            Register for free
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
