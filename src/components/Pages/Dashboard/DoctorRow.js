import React from "react";
import { toast } from "react-toastify";

const DoctorRow = ({ doctor, index, refetch }) => {
    const { name, img, speciality, email } = doctor;

    const handleDelete = (email) => {
        fetch(`http://localhost:4000/doctor/${email}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Doctor ${name} is deleted`);
                    refetch();
                }
            });
    };

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-12 rounded">
                        <img src={img} alt="Tailwind-CSS-Avatar-component" />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{speciality}</td>
            <td>
                <button
                    onClick={() => handleDelete(email)}
                    className="text-white btn btn-xs btn-error"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default DoctorRow;
