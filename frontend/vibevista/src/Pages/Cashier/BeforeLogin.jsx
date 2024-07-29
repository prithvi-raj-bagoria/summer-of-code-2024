import { useState } from "react";
import { FaCircle } from "react-icons/fa";
import VibeVista from "../../assets/images/VibeVista.png";
import Navbar from "../../Components/Navbar";
import Button from "../../Components/Button";
import Input from "../../Components/Input";

const BeforeLogin = () => {
  const time = { time: new Date().toLocaleTimeString() };
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  return (
    <>
      <div className="m-0 p-0 container-fluid">
        <Navbar logo={VibeVista} logowidth="30px" bgColor="orange" />
        <div
          className="m-1 row d-flex flex-column flex-md-row "
          style={{ height: "90vh" }}
        >
          <div className="col-3 d-flex flex-column align-items-center justify-content-center ">
            <FaCircle size="150px" color="brown" />
            <p className="mb-4 fw-light fs-3">Your Profile</p>
            <h1 className="display-4">Name</h1>
            <h5 className="mb-5 display-6">Email ID</h5>
            <Button style="btn btn-lg btn-danger rounded-5" text="CASHIER" />
            <p className="mt-3">{time.time}</p>
          </div>
          <div className="m-1 mx-3 col-4 row d-flex flex-column align-items-center shadow-lg rounded-5 ">
            <h1 className="m-2  text-warning text-decoration-underline">
              Customer Details
            </h1>
            <form className="mt-5  d-flex flex-column  justify-content-center">
              <label htmlFor="name">
                <h2 className="fw-light">
                  Name : <span className="text-danger ">*</span>
                </h2>
                <input
                  className="form-control "
                  type="text"
                  id="name"
                  placeholder="Your name here"
                  aria-label="name"
                  aria-describedby="input"
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label htmlFor="mobileno">
                <h2 className="fw-light">
                  Mobile No. <span className="text-danger">*</span>
                </h2>
                <input
                  className="form-control"
                  type="tel"
                  id="mobileno"
                  placeholder="XXXXXXXXXX"
                  onChange={(e) => setMobile(e.target.value)}
                />
              </label>
              <label htmlFor="address">
                <h2 className="fw-light">Address</h2>
                <textarea
                  className="form-control"
                  id="address"
                  cols="10"
                  rows="3"
                  onChange={(e) => setAddress(e.target.value)}
                ></textarea>
              </label>
              <div className="d-flex justify-content-end">
                <Button
                  style=" mt-4 btn btn-lg btn-danger text-end rounded-3"
                  text="Go ! "
                />
              </div>
            </form>
            <p className="fw-light"> * marked fields are mandatory.</p>
          </div>
          <div className=" ms-5 col-4 row d-flex flex-column bg-danger rounded-4"></div>
        </div>
      </div>
    </>
  );
};

export default BeforeLogin;
