import { Outlet } from "react-router-dom";
import Navbar from "./Common section/Navbar";
import Footer from "./Common section/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
    );
};

export default Root;