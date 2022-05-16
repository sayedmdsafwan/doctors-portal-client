import Navbar from "./components/Pages/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Login from "./components/Pages/Login/Login";
import Appointment from "./components/Pages/Appointment/Appointment";
import SignUp from "./components/Pages/Login/SignUp";
import RequireAuth from "./components/Pages/Login/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import MyAppointment from "./components/Pages/Dashboard/MyAppointment";
import MyReview from "./components/Pages/Dashboard/MyReview";
import MyHistory from "./components/Pages/Dashboard/MyHistory";
import Users from "./components/Pages/Dashboard/Users";

function App() {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route
                    path="/appointment"
                    element={
                        <RequireAuth>
                            <Appointment />
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="dashboard"
                    element={
                        <RequireAuth>
                            <Dashboard />
                        </RequireAuth>
                    }
                >
                    <Route index element={<MyAppointment />}></Route>
                    <Route path="review" element={<MyReview />}></Route>
                    <Route path="history" element={<MyHistory />}></Route>
                    <Route path="users" element={<Users />}></Route>
                </Route>
                <Route path="/about" element={<About />}></Route>
            </Routes>
            <ToastContainer />
        </div>
    );
}

export default App;
