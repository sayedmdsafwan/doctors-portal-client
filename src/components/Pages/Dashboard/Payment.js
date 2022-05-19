import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
    "pk_test_51L18MUFNM2tGe9KIjRq1eUDrvwtfqR1kxE6au5wZy3G6Oc5YOfPvjdoiNgJTLJKkYXaHQlQURnKhyziXwyHO27VF00f7QwLnAM"
);

const Payment = () => {
    const { appointmentId } = useParams();
    const url = `https://calm-thicket-69077.herokuapp.com/booking/${appointmentId}`;

    const { data: appointment, isLoading } = useQuery(
        ["booking", appointmentId],
        () =>
            fetch(url, {
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            }).then((res) => res.json())
    );

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            <div className="card w-2/3 max-w-lg bg-base-100 shadow-xl m-10">
                <div className="card-body">
                    <h2 className="card-title">{appointment.treatment}</h2>
                    <p className="text-xl text-success">
                        Hello {appointment.patientName}!
                    </p>
                    <p>
                        Your Appointment:{" "}
                        <span className="text-purple-600">
                            {appointment.date}
                        </span>{" "}
                        at {appointment.slot}
                    </p>
                    <p>
                        Please Pay{" "}
                        <span className="text-purple-600">
                            ${appointment.price}
                        </span>
                    </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card flex-shrink-0  max-w-md shadow-2xl bg-base-100 m-10">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;
