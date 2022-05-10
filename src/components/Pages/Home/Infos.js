import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

const Infos = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-4 lg:mx-12">
            <InfoCard
                bgClassCard="bg-gradient-to-r from-secondary to-primary"
                cardTitle="Opening Hours"
                cardText="Lorem Ipsum is simply dummy text of the pri"
                img={clock}
            />
            <InfoCard
                bgClassCard="bg-accent"
                cardTitle="Our Location"
                cardText="Brooklyn, NY 10036, United States"
                img={marker}
            />
            <InfoCard
                bgClassCard="bg-gradient-to-r from-secondary to-primary"
                cardTitle="Contact Us"
                cardText="++880-1876111111"
                img={phone}
            />
        </div>
    );
};

export default Infos;
