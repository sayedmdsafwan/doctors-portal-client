import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserReview from "./UserReview";

const Users = () => {
    /* const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://calm-thicket-69077.herokuapp.com/user")
        .then((res) => res.json())
        .then((data) => setUsers(data));
    }, []);*/

    const {
        data: users,
        isLoading,
        refetch,
    } = useQuery("users", () =>
        fetch("https://calm-thicket-69077.herokuapp.com/user", {
            method: "GET",
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
            <h2 className="text-2xl">All Users {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <UserReview
                                refetch={refetch}
                                user={user}
                                index={index}
                                key={user._id}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
