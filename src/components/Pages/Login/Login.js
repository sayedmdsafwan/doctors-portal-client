import React from "react";
import {
    useSignInWithEmailAndPassword,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../Shared/Loading";

const Login = () => {
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
        useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
        reset();
        navigate("/appointment");
    };

    if (user || userGoogle) {
        console.log(user || userGoogle);
    }

    let signInError;
    if (error || errorGoogle) {
        signInError = (
            <p className="mb-4 text-red-400">
                {error?.message || errorGoogle?.message}
            </p>
        );
    }

    if (loading || loadingGoogle) {
        return <Loading />;
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is Required",
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: "Provide a valid Email",
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === "required" && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.email.message}
                                    </span>
                                )}
                                {errors.email?.type === "pattern" && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.email.message}
                                    </span>
                                )}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is Required",
                                    },
                                    minLength: {
                                        value: 6,
                                        message:
                                            "Must be 6 characters or longer",
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === "required" && (
                                    <span className="label-text-alt text-red-400">
                                        {errors.password.message}
                                    </span>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <span className="label-text-alt text-red-400">
                                        {errors.password.message}
                                    </span>
                                )}
                            </label>
                        </div>
                        {signInError}
                        <input
                            className="btn w-full max-w-xs text-white"
                            type="submit"
                            value="Login"
                        />
                    </form>

                    <small>
                        New to doctors portal?{" "}
                        <Link to="/signup" className="text-secondary">
                            Create New Account
                        </Link>
                    </small>

                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >
                        Login With Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
