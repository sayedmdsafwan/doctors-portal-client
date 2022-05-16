import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointment = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, "PP");
    const {
        data: services,
        isLoading,
        refetch,
    } = useQuery(["available", formattedDate], () =>
        fetch(
            `https://calm-thicket-69077.herokuapp.com/available?date=${formattedDate}`
        ).then((res) => res.json())
    );

    if (isLoading) {
        return <Loading />;
    }

    // useEffect(() => {
    //     fetch(`https://calm-thicket-69077.herokuapp.com/available?date=${formattedDate}`)
    //         .then((res) => res.json())
    //         .then((data) => setServices(data));
    // }, [formattedDate]);

    return (
        <div className="mb-20">
            <h2 className=" mb-6 text-center text-xl uppercase text-secondary font-semibold">
                Available Appointment On {format(date, "PP")}
            </h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {services?.map((service) => (
                    <Service
                        setTreatment={setTreatment}
                        key={service._id}
                        service={service}
                    />
                ))}
            </div>
            {treatment && (
                <BookingModal
                    refetch={refetch}
                    setTreatment={setTreatment}
                    date={date}
                    treatment={treatment}
                />
            )}
        </div>
    );
};

export default AvailableAppointment;
