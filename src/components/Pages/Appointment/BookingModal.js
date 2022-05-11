import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, setTreatment, date }) => {
    const { name, slots } = treatment;

    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot);
        setTreatment(null);
    };

    return (
        <div>
            <input
                type="checkbox"
                id="booking-modal"
                className="modal-toggle"
            />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className="text-center font-bold text-2xl mb-4 text-secondary">
                        {name}
                    </h3>
                    <form
                        onSubmit={handleBooking}
                        className="grid grid-cols-1 justify-items-center gap-3"
                    >
                        <input
                            type="text"
                            value={format(date, "PP")}
                            disabled
                            className="input input-bordered w-full max-w-xs"
                        />
                        <select
                            name="slot"
                            className="select select-bordered w-full max-w-xs"
                        >
                            {slots.map((slot) => (
                                <option key={slot} value={slot}>
                                    {slot}
                                </option>
                            ))}
                        </select>
                        <input
                            type="text"
                            placeholder="Name"
                            className="input input-bordered w-full max-w-xs"
                        />
                        <input
                            type="text"
                            placeholder="Phone"
                            className="input input-bordered w-full max-w-xs"
                        />
                        <input
                            type="text"
                            placeholder="Email"
                            className="input input-bordered w-full max-w-xs"
                        />
                        <input
                            type="submit"
                            value="Submit"
                            className="btn btn-secondary text-white w-full max-w-xs"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
