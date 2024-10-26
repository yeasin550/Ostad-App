import Ostad from "../../assets/ostad_logo.png"
import Payments from "../../assets/payments.webp"
import facebook from "../../assets/facebook.svg"
import instagram from "../../assets/instagram.svg"
import youtube from "../../assets/youtube.svg"
import tiktok from "../../assets/tiktok.svg"
import linkedin from "../../assets/linkedin.webp"
import playStore from "../../assets/play_store.svg"
import appStore from "../../assets/app-store.svg"
import winStore from "../../assets/win-store.svg"

const Footer = () => {
    return (
        <footer className="bg-[#FFFBEE] px-4 py-12 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Company Logo & Info Section */}
                <div className="space-y-6">
                    <div className="flex items-center space-x-2">
                        <img src={Ostad} className="w-28" alt="" />
                    </div>
                    <p className="text-sm">Online Live Skill Development Platform</p>

                    <div className="space-y-2">
                        <h3 className="font-semibold">Download Ostad App</h3>
                        <div className="flex gap-2">
                            <div className="bg-black px-8 py-3 rounded-md cursor-pointer">

                                <img src={playStore} alt="Play Store" className="w-6 object-contain" />
                            </div>
                            <div className="bg-black px-8 py-3 rounded-md cursor-pointer">

                                <img src={appStore} alt="App Store" className="w-6 object-contain" />
                            </div>
                            <div className="bg-black px-8 py-3 rounded-md cursor-pointer">

                                <img src={winStore} alt="Windows Store" className="w-6 object-contain" />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-semibold">Stay connected with the community</h3>
                        <div className="flex items-center space-x-2">
                            <a href="#" className="p-1 border hover:border-orange-500 rounded-md">
                                <img src={facebook} alt="" />
                            </a>
                            <a href="#" className="p-1 border hover:border-orange-500 rounded-md">
                                <img src={instagram} alt="" />
                            </a>
                            <a href="#" className="p-1 border hover:border-orange-500 rounded-md">
                                <img src={youtube} alt="" />
                            </a>
                            <a href="#" className="p-1 border hover:border-orange-500 rounded-md">
                                <img src={tiktok} alt="" />
                            </a>
                            <a href="#" className="p-1 border hover:border-orange-500 rounded-md">
                                <img src={linkedin} className="w-8" alt="" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Quick Links Section */}
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold">Quick Link</h2>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-[#FF8C4B] hover:border-b border-[#FF8C4B] pb-1">Upcoming Live Batch</a></li>
                        <li><a href="#" className="hover:text-[#FF8C4B] hover:border-b border-[#FF8C4B] pb-1">Free Courses</a></li>
                        <li><a href="#" className="hover:text-[#FF8C4B] hover:border-b border-[#FF8C4B] pb-1">Live Workshop</a></li>
                        <li><a href="#" className="hover:text-[#FF8C4B] hover:border-b border-[#FF8C4B] pb-1">Blog</a></li>
                    </ul>
                </div>

                {/* Contacts Section */}
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold">Contacts</h2>
                    <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <a href="mailto:support@ostad.app" className="hover:text-[#FF8C4B] hover:border-b border-[#FF8C4B] pb-1">support@ostad.app</a>
                        </li>
                        <li className="flex items-start space-x-2">
                            <svg className="w-10 h-10 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="hover:text-[#FF8C4B] hover:border-b border-[#FF8C4B] pb-1">Ka-6/a, Navana Sylvania, Baridhara Road, Nadda, Gulshan-2, Dhaka-1212</span>
                        </li>
                    </ul>
                </div>

                {/* Company Section */}
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold">Company</h2>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-[#FF8C4B] hover:border-b border-[#FF8C4B] pb-1">About Us</a></li>
                        <li><a href="#" className="hover:text-[#FF8C4B] hover:border-b border-[#FF8C4B] pb-1">Refund Policy</a></li>
                        <li><a href="#" className="hover:text-[#FF8C4B] hover:border-b border-[#FF8C4B] pb-1">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-[#FF8C4B] hover:border-b border-[#FF8C4B] pb-1">Terms And Conditions</a></li>
                    </ul>
                </div>
            </div>

            {/* Payment Methods Section */}
            <div className="mt-5">
                <div className="flex flex-wrap justify-center gap-4">
                    {/* Add payment method logos here */}
                    <img src={Payments} alt="" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;