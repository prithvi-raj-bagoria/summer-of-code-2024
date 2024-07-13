import React from "react";

import Navbar from "../Components/Navbar";
import Button from "../Components/Button";
import Card from "../Components/Card";

import VibeVista from "../assets/images/VibeVista.png";
import google from "../assets/images/google.png";

const Cashier = () => {
    return (
        <>
            <Navbar
                logo={VibeVista}
                logowidth="50px"
                bgColor="orange"
                navColor="light"
            />
            <Button
                style=" m-5 btn btn-outline-light rounded-4"
                width={"15vw"}
                imgwidth="20px"
                img={google}
            />
            <Card
                img={google}
                imgwidth="20vw"
                width="25vw"
                title="Cheese Burger"
                text="99.99/-"
            />
        </>
    );
};

export default Cashier;
