import React from "react";
import { toast } from "react-toastify";

const UserReview = ({ user, index, refetch }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:4000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                refetch();
                toast.success(`Succesfully made an admin`);
            });
    };

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>
                {role !== "admin" && (
                    <button className="btn btn-xs" onClick={makeAdmin}>
                        Make Admin
                    </button>
                )}
            </td>
            <td>
                <button className="btn btn-xs">Remove User</button>
            </td>
        </tr>
    );
};

export default UserReview;
