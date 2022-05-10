import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import treatment from "../../../assets/images/treatment.png";
import Service from "./Service";
import PrimaryButton from "../Shared/PrimaryButton";

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride",
            description:
                "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: fluoride,
        },
        {
            _id: 2,
            name: "Cavity",
            description:
                "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: cavity,
        },
        {
            _id: 3,
            name: "Whitening",
            description:
                "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: whitening,
        },
    ];

    return (
        <div className="my-24">
            <div className="text-center">
                <h3 className=" mb-3 text-xl uppercase text-primary font-semibold">
                    Our Services
                </h3>
                <h2 className="text-3xl mb-6 text-accent">
                    Services We Provide
                </h2>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {services.map((service) => (
                    <Service key={service._id} service={service} />
                ))}
            </div>
            <div className="hero min-h-screen mt-8">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={treatment}
                        className="max-w-sm rounded-lg shadow-2xl"
                        alt="treatment img"
                    />
                    <div className="pl-6">
                        <h1 className="text-3xl lg:text-5xl font-bold">
                            Exceptional Dental Care, on Your Terms!
                        </h1>
                        <p className="py-6">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsumis that it has a more-or-less normal
                            distribution of letters,as opposed to using 'Content
                            here, content here', making it look like readable
                            English. Many desktop publishing packages and web
                            page
                        </p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
