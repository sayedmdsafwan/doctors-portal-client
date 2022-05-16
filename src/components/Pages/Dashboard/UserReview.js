import React from "react";

const UserReview = ({ user, index }) => {
    const { email } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:4000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    };

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>
                <button className="btn btn-xs" onClick={makeAdmin}>
                    Make Admin
                </button>
            </td>
            <td>
                <button className="btn btn-xs">Remove User</button>
            </td>
        </tr>
    );
};

export default UserReview;
