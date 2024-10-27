import { FaAngleDown, FaArrowRight } from "react-icons/fa";
import Ostad from "../../assets/ostad_logo.png"
import JustOstad from "../../assets/ostad.png"
import Offer from "../../assets/offer_logo.png"
import { Link } from "react-router-dom";
import { useState } from "react";
import { MdMenu, MdOutlineFileDownload } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => setIsOpen(!isOpen);

    // Close drawer when clicking outside
    const handleOutsideClick = (e) => {
        if (e.target.id === 'drawerOverlay') {
            setIsOpen(false);
        }
    };

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    return (
        <nav className="bg-white shadow-sm py-3 md:px-4 text-[13px] font-bold text-gray-700 sticky top-0 z-50">
            <div className="flex items-center justify-between">

                {/* Left Side: Logo and Search */}
                <div className="flex items-center space-x-4">
                    <Link to="/">
                        <img src={Ostad} className="hidden sm:block w-24" alt="Ostad Logo" />
                    </Link>
                    <Link to="/">
                        <img src={JustOstad} className="block sm:hidden w-32" alt="Just Ostad Logo" />
                    </Link>

                    <input
                        type="text"
                        placeholder="Search courses"
                        className="p-2 border hidden md:block border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {/* Middle: Nav Links or route */}
                    <div className="hidden md:flex items-center space-x-2">
                        <a href="#special-offer" className="flex items-center gap-2 border border-red-500 rounded-md py-2 px-2 ">
                            <img src={Offer} className="w-6" alt="" /> SPECIAL OFFER</a>
                        <a href="https://codemama.io/" target="_blank" className=" rounded-md py-2 px-2 hover:bg-gray-200 ">CODEMAMA</a>
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
                <div className="md:ml-24 flex items-center space-x-4">
                    <button className="flex items-center gap-2 rounded-md py-[10px] px-6 bg-gray-200">
                        <span className="hidden sm:block">ALL COURSES</span>
                        <span className="block sm:hidden">COURSE</span>
                        <FaAngleDown className="text-sm" />
                    </button>

                    <button className="flex items-center gap-2 py-[10px] px-6 hover:bg-[#FFC000] rounded-md bg-[#ffce3b]">
                        <span className="hidden sm:block">LOGIN/SIGNUP</span>
                        <span className="block sm:hidden">LOGIN</span>
                        <FaArrowRight className="text-sm" />
                    </button>
                </div>

                <div>
                    <MdMenu onClick={toggleDrawer} className="block sm:hidden text-4xl ml-2 cursor-pointer" />

                    {/* Drawer overlay */}
                    {isOpen && (
                        <div
                            id="drawerOverlay"
                            className="fixed inset-0 bg-black bg-opacity-50 z-40"
                            onClick={handleOutsideClick}
                        >
                            {/* Drawer */}
                            <div
                                className={`fixed top-0 right-0 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 w-64 sm:w-full h-full bg-white p-4 z-50 shadow-lg`}
                            >
                                <button onClick={toggleDrawer} className="text-xl mb-4"><RxCross2 /></button>
                                <p>MY drawer content is here</p>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
