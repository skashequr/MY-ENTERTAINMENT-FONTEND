import { Outlet } from "react-router-dom";
import { Nav } from "../Navbar/Navbar";
import { ToastContainer } from "react-toastify";

const Main = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Nav></Nav>
            <Outlet></Outlet>
            <ToastContainer />
        </div>
    );
};

export default Main;