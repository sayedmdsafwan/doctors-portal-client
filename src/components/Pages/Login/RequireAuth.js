import React from "react";
import {
    useAuthState,
    useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../Shared/Loading";

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] =
        useSendEmailVerification(auth);

    const location = useLocation();

    if (loading) {
        <Loading />;
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (
        user.providerData[0]?.providerId === "password" &&
        !user.emailVerified
    ) {
        return (
            <div className="text-center mt-20">
                <h3 className="text-red-500">Your Email is not verified!!</h3>
                <h5 className="text-accent my-4">
                    {" "}
                    Please Verify your email address
                </h5>
                <button
                    className="btn btn-primary mb-4 text-white"
                    onClick={async () => {
                        await sendEmailVerification();
                        alert("Sent email");
                    }}
                >
                    Send Verification Email Again
                </button>
                <p>If verified, just refresh the page to see the content</p>
            </div>
        );
    }

    return children;
};

export default RequireAuth;
