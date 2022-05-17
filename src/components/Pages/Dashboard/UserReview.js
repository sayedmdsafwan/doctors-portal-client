import React from "react";
import { toast } from "react-toastify";

const UserReview = ({ user, index, refetch }) => {
    const { email, role } = user;

    const removeUser = (email) => {
        fetch(`https://calm-thicket-69077.herokuapp.com/user/${email}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    toast.success("User deleted successfully");
                    refetch();
                }
            });
    };

    const makeAdmin = () => {
        fetch(`https://calm-thicket-69077.herokuapp.com/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => {
                if (res.status === 403) {
                    toast.error("Failed to make an admin");
                }
                return res.json();
            })
            .then((data) => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Succesfully made an admin`);
                }
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
                <button
                    className="btn btn-xs btn-error text-white"
                    onClick={() => removeUser(email)}
                >
                    Remove User
                </button>
            </td>
        </tr>
    );
};

export default UserReview;
