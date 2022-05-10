import React from "react";
import heroImage from "../../../assets/images/chair.png";

const Banner = () => {
    return (
        <div className="hero min-h-screen px-4 lg:px-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={heroImage}
                    className="md:max-w-xl max-w-sm rounded-lg shadow-2xl"
                    alt=""
                />
                <div>
                    <h1 className="md:text-5xl text-2xl font-bold">
                        Your New Smile Starts Here!
                    </h1>
                    <p className="py-6">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the
                    </p>
                    <button className="btn btn-secondary text-white uppercase font-bold bg-gradient-to-r from-secondary to-primary">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
