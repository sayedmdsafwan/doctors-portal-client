import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

const Infos = () => {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
