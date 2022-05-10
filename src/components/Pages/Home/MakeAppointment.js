import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppointment = () => {
    return (
        <section
            style={{
                width: "100vw",
                position: "relative",
                marginLeft: "-50vw",
                left: "50%",
                background: `url(${appointment})`,
            }}
            className=" mt-4 md:mt-20 mb-8"
        >
            <div className="max-w-7xl mx-auto flex justify-center items-center">
                <div className="flex-1 hidden lg:block">
                    <img className="mt-[-200px]" src={doctor} alt="" />
                </div>
                <div className="flex-1 p-8 lg:p-0">
                    <h3 className="text-xl text-primary font-bold">
                        Appointment
                    </h3>
                    <h2 className="text-3xl text-white">
                        Make an Appointment Today
                    </h2>
                    <p className="text-white my-6">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sapiente earum ab cupiditate autem accusantium
                        expedita sequi, temporibus, aut illo doloribus quaerat
                        explicabo, assumenda consectetur est vel ad sed maiores
                        doloremque consequatur. Amet consequuntur quibusdam
                        autem, quod maxime qui itaque quaerat.
                    </p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;
