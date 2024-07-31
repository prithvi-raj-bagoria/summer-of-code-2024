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

  const emptyCase = () => (
    <p className="fs-5 text-center text-danger">
      Enter customer details to proceed to checkout
    </p>
  );

  const isAllEmpty = name === "" && mobile === "" && address === "";

  return (
    <>
      <div className="m-0 p-0 container-fluid ">
        <Navbar logo={VibeVista} logowidth="30px" bgColor="orange" />
        <div className="my-5 mx-2 row d-flex flex-column flex-md-row  justify-content-evenly align-items-center">
          <div className="col-md-3  d-flex flex-column align-items-center justify-content-center ">
            <FaCircle size="150px" color="brown" />
            <p className="mb-4 fw-light fs-3">Your Profile</p>
            <h1 className="display-4">Name</h1>
            <h5 className="mb-5 display-6">Email ID</h5>
            <Button style="btn btn-lg btn-danger rounded-5" text="CASHIER" />
            <p className="mt-3">{time.time}</p>
          </div>
          <div
            className=" col-md-4 row d-flex flex-column align-items-center   rounded-5 "
            style={{ boxShadow: "0px -32px 128px rgb(255,219,187)" }}
          >
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
          <div
            className=" row py-2 col-md-4  d-flex flex-column justify-content-evenly bg-warning rounded-4"
            style={{ minHeight: "500px" }}
          >
            {isAllEmpty ? (
              emptyCase()
            ) : (
              <>
                <h3 className="m-2  text-center text-danger text-decoration-underline">
                  Details Entered
                </h3>
                <span>
                  <h2 className="text-danger">Name</h2>
                  <p className="fs-4 p-2 text-light text-center bg-danger rounded-4 ">
                    {name}
                  </p>
                </span>
                <span>
                  <h2 className="text-danger">Mobile</h2>
                  <p className="fs-4 p-2 text-light text-center bg-danger rounded-4 ">
                    {mobile}
                  </p>
                </span>
                <span>
                  <h2 className="text-danger">Address</h2>
                  <p className="fs-4 p-2 text-light text-center bg-danger rounded-4 ">
                    {address}
                  </p>
                </span>
                <div className="d-flex justify-content-end align-items-center rounded-3">
                  <Button
                    style=" mt-4 btn  btn-danger text-end rounded-4"
                    text="Proceed to Checkout "
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BeforeLogin;
