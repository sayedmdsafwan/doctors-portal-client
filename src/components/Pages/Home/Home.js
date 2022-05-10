import React from "react";
import Banner from "./Banner";
import Infos from "./Infos";
import Services from "./Services";

const Home = () => {
    return (
        <div className="px-4 lg:px-12">
            <Banner />
            <Infos />
            <Services />
        </div>
    );
};

export default Home;
