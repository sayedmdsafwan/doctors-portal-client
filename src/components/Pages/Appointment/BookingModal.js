import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";

const BookingModal = ({ treatment, setTreatment, date }) => {
    const { _id, name, slots } = treatment;
    const [user] = useAuthState(auth);
    const formattedDate = format(date, "PP");

    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value,
        };

        fetch("http://localhost:4000/booking", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(booking),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    toast(`Appointment is set, ${formattedDate} at ${slot}`);
                } else {
                    toast.error(
                        `Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`
                    );
                }
                setTreatment(null);
            });
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
                            {slots.map((slot, index) => (
                                <option key={index} value={slot}>
                                    {slot}
                                </option>
                            ))}
                        </select>
                        <input
                            type="text"
                            value={user?.displayName || ""}
                            disabled
                            placeholder="Name"
                            className="input input-bordered w-full max-w-xs"
                        />
                        <input
                            type="text"
                            disabled
                            value={user?.email || ""}
                            placeholder="Email"
                            className="input input-bordered w-full max-w-xs"
                        />
                        <input
                            type="text"
                            placeholder="Phone"
                            name="phone"
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
