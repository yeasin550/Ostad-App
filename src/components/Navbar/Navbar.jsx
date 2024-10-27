import { FaAngleDown, FaArrowRight } from "react-icons/fa";
import Ostad from "../../assets/ostad_logo.png"
import Offer from "../../assets/offer_logo.png"
import { Link } from "react-router-dom";
import { useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    return (
        <nav className="bg-white shadow-md py-3 px-4 text-[13px] font-bold text-gray-700">
            <div className="flex items-center justify-between">

                {/* Left Side: Logo and Search */}
                <div className="flex items-center space-x-4">
                    <Link to="/"><img src={Ostad} className="w-28" alt="" /></Link>
                    <input
                        type="text"
                        placeholder="Search courses"
                        className="p-2 border hidden md:block border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {/* Middle: Nav Links or route */}
                    <div className="hidden md:flex items-center space-x-2">
                        <a href="#special-offer" className="flex items-center gap-2 border border-red-500 rounded-md py-2 px-2 ">
                            <img src={Offer} className="w-6" alt="" /> SPECIAL OFFER</a>
                        <a href="#codemama" className=" rounded-md py-2 px-2 hover:bg-gray-200 ">CODEMAMA</a>
                        <a href="#free-courses" className=" rounded-md py-2 px-2 hover:bg-gray-200 ">FREE COURSES</a>
                        <a href="#blog" className=" rounded-md py-2 px-2 hover:bg-gray-200 ">BLOG</a>
                        {/* DOWNLOAD with Dropdown */}
                        <div className="relative">
                            <a
                                href="#download"
                                className="flex items-center gap-1 rounded-md py-2 px-2 hover:bg-gray-200"
                                onClick={(e) => {
                                    e.preventDefault();
                                    toggleDropdown();
                                }}
                            >
                                DOWNLOAD <FaAngleDown className="text-lg" />
                            </a>
                            {isDropdownOpen && (
                                <div className="absolute p-2 top-14 left-0 bg-gray-100 border border-gray-200 rounded-md shadow-lg w-44 space-y-2">
                                    <a
                                        href="#android"
                                        className="flex items-center justify-between block px-4 py-2 text-gray-700 hover:bg-gray-300 bg-white rounded-md"
                                    >
                                        Android <MdOutlineFileDownload className="text-xl"/>
                                    </a>
                                    <a
                                        href="#ios-mac"
                                        className="flex items-center justify-between block px-4 py-2 text-gray-700 hover:bg-gray-300 bg-white rounded-md"
                                    >
                                        iOS/Mac <MdOutlineFileDownload className="text-xl" />
                                    </a>
                                    <a
                                        href="#windows"
                                        className="flex items-center justify-between block px-4 py-2 text-gray-700 hover:bg-gray-300 bg-white rounded-md"
                                    >
                                        Windows <MdOutlineFileDownload className="text-xl" />
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>


                {/* Right Side: Buttons */}
                <div className="flex items-center space-x-4">
                    <button className="flex items-center gap-2 rounded-md py-[10px] px-6 bg-gray-200  ">ALL COURSES <FaAngleDown className="text-sm" /></button>
                    <button className="flex items-center gap-2 py-[10px] px-6 hover:bg-[#FFC000] rounded-md bg-[#ffce3b]">LOGIN/SIGNUP <FaArrowRight className="text-sm" />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
