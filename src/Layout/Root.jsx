import React from "react";
import NavBar from "../Sheared/NvaBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Sheared/Footer/Footer";

const Root = () => {
    return (
        <>
            <NavBar />
            <div className="md:min-h-[calc(100vh-246px)]">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Root;
