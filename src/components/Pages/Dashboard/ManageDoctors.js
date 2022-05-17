import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const {
        data: doctors,
        isLoading,
        refetch,
    } = useQuery("doctors", () =>
        fetch("https://calm-thicket-69077.herokuapp.com/doctor", {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            <h2 className="text-2xl">Manage Doctors {doctors.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Speciality</th>
                        </tr>
                    </thead>

                    <tbody>
                        {doctors.map((doctor, index) => (
                            <DoctorRow
                                key={doctor._id}
                                index={index}
                                doctor={doctor}
                                refetch={refetch}
                                setDeletingDoctor={setDeletingDoctor}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
            {deletingDoctor && (
                <DeleteConfirmModal
                    refetch={refetch}
                    deletingDoctor={deletingDoctor}
                    setDeletingDoctor={setDeletingDoctor}
                />
            )}
        </div>
    );
};

export default ManageDoctors;
