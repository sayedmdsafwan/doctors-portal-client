import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import Contact from "./Contact";
import Infos from "./Infos";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div>
            <div className="px-4 lg:px-12">
                <Banner />
                <Infos />
                <Services />
            </div>
            <MakeAppointment />
            <div className="px-4 lg:px-12">
                <Testimonials />
            </div>
            <Contact />
            <div className="px-4 lg:px-12">
                <Footer />
            </div>
        </div>
    );
};

export default Home;
