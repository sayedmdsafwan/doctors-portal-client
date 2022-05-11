import React from "react";

const Testimonial = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 hover:shadow-xl shadow-lg">
            <div className="card-body">
                <p>{review.review}</p>
                <div className="flex items-center mt-4">
                    <div className="avatar">
                        <div className="w-16 mr-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={review.img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl">{review.name}</h3>
                        <p>{review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
