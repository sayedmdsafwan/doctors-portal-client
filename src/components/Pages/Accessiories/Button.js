import React from "react";

const Button = ({ btnName }) => {
    return (
        <button className="btn btn-secondary text-white uppercase font-bold bg-gradient-to-r from-secondary to-primary">
            {btnName}
        </button>
    );
};

export default Button;
