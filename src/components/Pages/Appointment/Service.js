import React from "react";

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-md bg-base-100 shadow-lg hover:shadow-xl">
            <div className="card-body p-16 text-center">
                <h2 className="card-title mb-4 text-2xl text-secondary text-center block">
                    {name}
                </h2>
                <span>
                    {slots.length > 0 ? (
                        <span>{slots[0]}</span>
                    ) : (
                        <span className="text-red-500">Try another date</span>
                    )}
                </span>
                <span className="text-center">
                    {slots.length} {slots.length > 0 ? "spaces" : "space"}{" "}
                    available
                </span>
                <div className="card-actions mt-4 justify-center">
                    <label
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        htmlFor="booking-modal"
                        className="btn btn-secondary text-white modal-button"
                    >
                        Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Service;
