import React from "react";

const DoctorRow = ({ doctor, index, setDeletingDoctor }) => {
    const { name, img, speciality } = doctor;

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
                <label
                    onClick={() => setDeletingDoctor(doctor)}
                    for="delete-confirm-modal"
                    className="btn btn-xs btn-error text-white"
                >
                    Delete
                </label>
            </td>
        </tr>
    );
};

export default DoctorRow;
