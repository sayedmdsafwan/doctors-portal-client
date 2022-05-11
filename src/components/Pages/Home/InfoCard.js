import React from "react";

const InfoCard = ({ img, cardTitle, cardText, bgClassCard }) => {
    return (
        <div
            className={`card text-white lg:card-side bg-accent shadow-lg hover:shadow-xl px-6 py-6 lg:py-0 ${bgClassCard}`}
        >
            <figure>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{cardText}</p>
            </div>
        </div>
    );
};

export default InfoCard;
