import { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { BiSolidFoodMenu } from "react-icons/bi";
import { PiHamburgerBold } from "react-icons/pi";
import VibeVista from "../../assets/images/VibeVista.png";

import Navbar from "../../Components/Navbar";
import Card from "../../Components/Card";
import Button from "../../Components/Button";
import Input from "../../Components/Input";

const AfterLogin = () => {
  const items = [
    "Burger",
    "Pizza",
    "Pasta",
    "Sandwich",
    "Beverages",
    "Desserts",
    "Salads",
  ];
  return (
    <>
      <div className="m-0 p-0  container-fluid">
        <Navbar logo={VibeVista} logowidth="30px" bgColor="orange" />
        <div className="container-fluid row" style={{ minHeight: "91vh" }}>
          {/* Main start */}
          <div className="p-4 col-12 col-lg-3 border-end border-secondary-subtle">
            <div className="d-flex flex-row">
              <PiHamburgerBold
                size="30px"
                className="me-2"
                color="darkorange"
              />
              <h4>CATEGORY</h4>
            </div>
            <div className="mt-2 d-flex flex-column">
              {items.map((item) => (
                <div className="px-1 border-top border-warning">
                  <p className="fs-5 ">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className=" col-12 col-lg-6  shadow shadow-md">
            <div className="mt-3 d-flex flex-wrap  flex-row ">
              {items.map((item) => (
                <Card title={item} text="Rs. 200" width="15%" />
              ))}
            </div>
          </div>

          <div className="col-12 col-md-3 ">
            <div className="mx-2  mt-2 d-flex flex-row">
              <BiSolidFoodMenu color="darkorange" size="calc(5% + 1vw)" />
              <h1 className="mx-1 fs-4">CUSTOMER NAME</h1>
            </div>
            <p className="mx-2 fs-6 text-secondary">Order Menu</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AfterLogin;
