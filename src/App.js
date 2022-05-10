import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Pages/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Login from "./components/Pages/Login/Login";
import Footer from "./components/Pages/Shared/Footer";

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/about" element={<About />}></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
