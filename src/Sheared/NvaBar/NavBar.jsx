import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="container py-4 mx-auto navbar bg-base-100 border border-red-400 shadow-lg rounded-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-base lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-64 p-2 shadow"
                    >
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/listed-books">Listed Books</Link>
                        </li>
                        <li>
                            <Link to="/pages-to-read">Pages to Read</Link>
                        </li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">
                    Book Vibe
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-7">
                    <li>
                        <Link className="border border-[#23BE0A] text-[#23BE0A] font-bold py-2 px-4 rounded-md">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/listed-books">Listed Books</Link>
                    </li>
                    <li>
                        <Link to="/pages-to-read">Pages to Read</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <a className="btn btn-outline btn-success">Button</a>
                <a className="btn btn-outline btn-info">Button</a>
            </div>
        </div>
    );
};

export default NavBar;
