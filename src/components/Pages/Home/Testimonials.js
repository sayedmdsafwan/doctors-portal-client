import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Testimonial from "./Testimonial";

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Harry",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: "California",
            img: people1,
        },
        {
            _id: 2,
            name: "Merry",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: "New York",
            img: people2,
        },
        {
            _id: 3,
            name: "Mithila",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: "Washington",
            img: people3,
        },
    ];

    return (
        <section className="my-20">
            <div className="flex justify-between">
                <div>
                    <div>
                        <h3 className=" mb-3 text-xl uppercase text-primary font-semibold">
                            Testimonial
                        </h3>
                        <h2 className="text-3xl mb-6 text-accent">
                            What Our Patients Says
                        </h2>
                    </div>
                </div>
                <div>
                    <img className="w-24 lg:w-40" src={quote} alt="" />
                </div>
            </div>
            <div className="grid mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {reviews.map((review) => (
                    <Testimonial key={review._id} review={review} />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
