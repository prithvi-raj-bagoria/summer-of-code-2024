import React from "react";

const Input = ({ type, placeholder }) => {
    return (
        <input
            type={type}
            className="form-control"
            placeholder={placeholder}
            aria-label="Username"
            aria-describedby="input"
        />
    );
};

export default Input;
