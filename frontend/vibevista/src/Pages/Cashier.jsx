import React from "react";

import VibeVista from "../assets/images/VibeVista.png";
import google from "../assets/images/google.png";
import facebook from "../assets/images/facebook.png";
import github from "../assets/images/github.png";

import Button from "../Components/Button";
import Input from "../Components/Input";
import Navbar from "../Components/Navbar";

const Cashier = () => {
    return (
        <div
            className="m-0 p-0 container-fluidr"
            style={{ background: "whitesmoke", height: "100vh" }}
        >
            <Navbar logo={VibeVista} logowidth="30px" bgColor="whitesmoke" navColor="light" />
        </div>
    );
};

export default Cashier;
