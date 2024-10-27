
import Webiner from "../../assets/AllCourses/Webinar.svg"
import VideosBLUE from "../../assets/AllCourses/VideosBLUE.svg"
import codecanyon from "../../assets/AllCourses/codecanyon.jpg"
import fluter from "../../assets/AllCourses/app-development.jpg"
import sqa from "../../assets/AllCourses/sqa.jpg"
import uiux from "../../assets/AllCourses/uiux.jpg"

import Webflow from "../../assets/AllCourses/Webflow.jpg"
import wordpress from "../../assets/AllCourses/wordpress.jpg"
import javascript from "../../assets/AllCourses/javascript.jpg"
import PythonThumbnail from "../../assets/AllCourses/Python-Thumbnail.jpg"
import lightbulb from "../../assets/AllCourses/lightbulb.svg"
import setting from "../../assets/AllCourses/setting.svg"
import megaphone from "../../assets/AllCourses/megaphone.svg"
import { FaAngleRight, FaArrowRight } from "react-icons/fa";


const WatchFreeWebinar = () => {
    const UpcomingWebinar = [
        {
            image: codecanyon,
            title: 'Codecanyon মার্কেটপ্লেস গাইডলাইন',
            description: 'Full Stack Development with ASP.Net',
            date: 'Sunday, 27 October, 09:00 PM'
        },
        {
            image: sqa,
            title: 'কীভাবে শুরু করবেন SQA ইঞ্জিনিয়ার হবার প্রস্তুতি?',
            description: 'SQA: Manual & Automated Testing',
            date: 'Monday, 28 October , 09:00 PM'
        },
        {
            image: fluter,
            title: 'অ্যাপ ডেভেলপার হবার জন্য যে স্কিল জানা প্রয়োজন?',
            description: 'App Development with fluter',
            date: 'Monday, 28 October , 09:00 PM'
        },
        {
            image: uiux,
            title: 'UI/UX ডিজাইনার হতে চাইলে কি ধরনের প্রজেক্টে কাজ করা উচিত',
            description: 'UI UX Design Career Track Program',
            date: 'Tuesday, 29 October , 09:00 PM'
        }
    ];
    const PreviousWebinar = [
        {
            image: Webflow,
            title: 'Webflow-এ কাস্টম ডোমেই সংযুক্ত করা',
            description: 'Mastering Webflow',
            date: 'Sunday, 27 October, 09:00 PM'
        },
        {
            image: wordpress,
            title: 'থিম ডেভেলপমেন্টে Child Theme কীভাবে কাজ করে?',
            description: 'Wordpress therm development',
            date: 'Monday, 28 October , 09:00 PM'
        },
        {
            image: javascript,
            title: 'কোড মনে রাখার সকল টেকনিক',
            description: 'Full Stack Web Development with JavaScript (MERN)',
            date: 'Monday, 28 October , 09:00 PM'
        },
        {
            image: PythonThumbnail,
            title: 'Global opportunities for python developers',
            description: 'Full Stack Web Development with Python, Django & React',
            date: 'Tuesday, 29 October , 09:00 PM'
        }
    ];
    return (
        <div className="py-12 my-10 px-5 md:w-10/12 mx-auto bg-[#101828] rounded-2xl">
            <div className="flex justify-around py-5">
                <img src={lightbulb} className="opacity-30" alt="" />
                <div className="text-center space-y-3 mb-4">
                    <h1 className="text-4xl font-bold text-[#12B76A]">Watch the free webinar</h1>
                    <p className="text-gray-300">See what you get if you join the live course of the master</p>
                </div>
                <img src={setting} className="opacity-30" alt="" />
            </div>

            {/* Title Bar 1*/}
            <div className="md:flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <img src={Webiner} className="w-8" alt="" />
                    <h2 className="text-2xl font-bold text-white">Upcoming Live Webinar</h2>
                </div>
                <div className="flex-1 mx-4 border-t border-gray-400"></div>

            </div>

            {/* content 1*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {UpcomingWebinar.map((webinar, index) => (
                    <div
                        key={index}
                        className="border border-transparent bg-white hover:border-orange-400 rounded-lg transition duration-200 cursor-pointer p-3"
                    >
                        <div className="mb-4 h-40">
                            <img
                                src={webinar.image}
                                alt={webinar.title}
                                className="w-full object-cover rounded-md"
                            />
                            <p className="text-sm my-4">{webinar.description}</p>
                        </div>
                        <h3 className="text-lg font-semibold my-5">{webinar.title}</h3>
                        <div className="space-y-4 flex flex-col mt-auto">
                            <p className="text-[#FF8E4B]">{webinar.date}</p>
                            <button className="flex items-center justify-center gap-3 bg-gray-200 hover:bg-[#FFE699] w-full border border-orange-400 text-sm py-2 rounded-md font-semibold mt-auto">
                                SEE DETAILS <FaAngleRight />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Title Bar 2*/}
            <div className="md:flex items-center justify-between my-10">
                <div className="flex items-center gap-3">
                    <img src={VideosBLUE} className="w-8" alt="" />
                    <h2 className="text-2xl font-bold text-white">Upcoming Live Webinar</h2>
                </div>
                <div className="flex-1 mx-4 border-t border-gray-400"></div>

            </div>

            {/* content 2*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {PreviousWebinar.map((webinar, index) => (
                    <div
                        key={index}
                        className="border border-transparent bg-white hover:border-orange-400 rounded-lg transition duration-200 cursor-pointer p-3"
                    >
                        <div className="mb-4 h-40">
                            <img
                                src={webinar.image}
                                alt={webinar.title}
                                className="w-full object-cover rounded-md"
                            />
                            <p className="text-sm my-4">{webinar.description}</p>
                        </div>
                        <h3 className="text-lg font-semibold my-5">{webinar.title}</h3>
                        <div className="space-y-4 flex flex-col mt-auto">
                            <p className="text-[#FF8E4B]">{webinar.date}</p>
                            <button className="flex items-center justify-center gap-3 bg-gray-200 hover:bg-[#FFE699] w-full border border-orange-400 text-sm py-2 rounded-md font-semibold mt-auto">
                                SEE DETAILS <FaAngleRight />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center gap-16 mt-12">
                <img src={megaphone} className="opacity-30" alt="" />
                <button className="flex items-center justify-center gap-2 px-6 font-bold hover:bg-[#bfc5ce] rounded-md bg-[#D0D5DD]">
                    SEE ALL WEBINARS <FaArrowRight className="text-base" />
                </button>

            </div>
        </div>
    );
};

export default WatchFreeWebinar;