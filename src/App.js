import Navbar from "./components/Pages/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Login from "./components/Pages/Login/Login";
import Appointment from "./components/Pages/Appointment/Appointment";
import SignUp from "./components/Pages/Login/SignUp";
import RequireAuth from "./components/Pages/Login/RequireAuth";

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
                <Route path="/about" element={<About />}></Route>
            </Routes>
        </div>
    );
}

export default App;
