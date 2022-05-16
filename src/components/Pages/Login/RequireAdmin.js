import { signOut } from "firebase/auth";
import React from "react";
import {
    useAuthState,
    useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../../Hooks/useAdmin";
import Loading from "../Shared/Loading";

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    // const [sendEmailVerification, sending, error] =
    //     useSendEmailVerification(auth);

    const location = useLocation();

    if (loading || adminLoading) {
        return <Loading />;
    }

    if (!user || !admin) {
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;
