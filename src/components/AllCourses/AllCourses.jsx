/* eslint-disable react/prop-types */
import { useState, useRef } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import book from "../../assets/book.svg";
import PythonThumbnail from "../../assets/AllCourses/Python-Thumbnail.jpg";
import appDevelopment from "../../assets/AllCourses/app-development.jpg";
import php from "../../assets/AllCourses/php.jpg";
import uiux from "../../assets/AllCourses/uiux.jpg";
import DigitalProductManagement from "../../assets/AllCourses/Digital-Product-Management.jpg";
import DigitalMarketing from "../../assets/AllCourses/Digital-Marketing.jpg";
import DataAnalytics from "../../assets/AllCourses/Data-Analytics.jpg";
import Typography from "../../assets/AllCourses/Typography.jpg";
import Blockchain from "../../assets/AllCourses/Blockchain.jpg";

const AllCourses = () => {
    const [activeTab, setActiveTab] = useState(0);
    const scrollContainerRef = useRef(null);

    const tabs = [
        { title: 'Web & App Development', subtitle: '30 Course • 5 Workshop' },
        { title: 'Product Management & Design', subtitle: '12 Course • 3 Workshop' },
        { title: 'Business & Marketing', subtitle: '11 Course' },
        { title: 'Data Engineering', subtitle: '6 Course • 1 Workshop' },
        { title: 'Creatives', subtitle: '5 Course' },
        { title: 'Blockchain Development', subtitle: '4 Course • 1 Workshop' },
    ];

    const courses = [
        {
            title: 'Full Stack Web Development with Python, Django & React',
            image: PythonThumbnail,
            category: 'Web & App Development',
            batch: 3,
            seatsLeft: 6,
            daysLeft: 5,
        },
        {
            title: 'App Development with Flutter',
            image: appDevelopment,
            category: 'Web & App Development',
            batch: 9,
            seatsLeft: 68,
            daysLeft: 33,
        },
        {
            title: 'UI UX Design Career Track Program',
            image: uiux,
            category: 'Product Management & Design',
            batch: 41,
            seatsLeft: 36,
            daysLeft: 8,
        },
        {
            title: 'Digital Product Management',
            image: DigitalProductManagement,
            category: 'Product Management & Design',
            batch: "New batch will start",
            seatsLeft: 36,
            daysLeft: 8,
        },
        {
            title: 'Full Stack Digital Marketing',
            image: DigitalMarketing,
            category: 'Business & Marketing',
            batch: 7,
            seatsLeft: 258,
            daysLeft: 60,
        },
        {
            title: 'Data Analytics Job Ready Program',
            image: DataAnalytics,
            category: 'Data Engineering',
            batch: 1,
            seatsLeft: 89,
            daysLeft: 4,
        },
        {
            title: 'Typography',
            image: Typography,
            category: 'Creatives',
            batch: 1,
            seatsLeft: 12,
            daysLeft: 18,
        },
        {
            title: 'Blockchain: USES & IMPLICATION',
            image: Blockchain,
            category: 'Blockchain Development',
            batch: "New workshop will start",
            seatsLeft: 8,
            daysLeft: 6,
        },
        {
            title: 'Advanced Blockchain Development',
            image: php,
            category: 'Web & App Development',
            batch: 5,
            seatsLeft: 4,
            daysLeft: 12,
        },
    ];

    const filteredCourses = courses.filter(
        (course) => course.category === tabs[activeTab].title
    );

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 200;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    const CourseTab = ({ title, subtitle, isActive, onClick }) => (
        <button
            onClick={onClick}
            className={`flex items-center px-4 py-2 rounded-lg whitespace-nowrap transition-colors duration-200 ${isActive ? 'bg-[#1D2939] text-white' : 'bg-gray-100 hover:bg-gray-300 border text-gray-800'
                }`}
        >
            <div className="flex flex-col items-start">
                <span className="font-semibold">{title}</span>
                <span className="text-xs">{subtitle}</span>
            </div>
        </button>
    );

const CourseCard = ({ image, title, batch, seatsLeft, daysLeft }) => (
    <div className="bg-white rounded-md border border-black shadow-md">
        <div className="relative overflow-hidden">
            <img
                src={image}
                alt={title}
                className="w-full h-36 object-cover"
            />
        </div>
        <div className="flex flex-wrap gap-1 text-sm bg-gray-100 px-2 py-2">
            <span className="bg-gray-200 px-2 py-1 text-[12px] rounded-sm">Batch {batch}</span>
            <span className="bg-gray-200 px-2 py-1 text-[12px] rounded-sm">{seatsLeft} Seats Left</span>
            <span className="bg-gray-200 px-2 py-1 text-[12px] rounded-sm">{daysLeft} Days Left</span>
        </div>

        <div className="flex flex-col h-full space-y-2 p-4">
            <h3 className="font-medium text-lg">{title}</h3>
            <button className="w-full py-2 px-4 mt-auto bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition">
                SEE DETAILS
            </button>
        </div>
    </div>
);


    return (
        <div className="w-full max-w-6xl mx-auto p-6 bg-white rounded-xl">
            <div className="mb-8 text-center">
                <div className="flex items-center justify-center gap-3">
                    <h1 className="text-4xl font-bold">All Courses</h1>
                    <img src={book} className="w-8 h-8" alt="Book icon" />
                </div>
                <div className="relative mt-6">
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2"
                    >
                        <FaAngleLeft className="w-6 h-6 text-gray-700" />
                    </button>

                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto gap-2 px-10 scrollbar-hide"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {tabs.map((tab, index) => (
                            <CourseTab
                                key={index}
                                title={tab.title}
                                subtitle={tab.subtitle}
                                isActive={activeTab === index}
                                onClick={() => setActiveTab(index)}
                            />
                        ))}
                    </div>

                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2"
                    >
                        <FaAngleRight className="w-6 h-6 text-gray-700" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredCourses.length > 0 ? (
                    filteredCourses.map((course, index) => (
                        <CourseCard key={index} {...course} />
                    ))
                ) : (
                    <p className="text-gray-500 col-span-full text-center">
                        No courses available in this category.
                    </p>
                )}
            </div>
        </div>
    );
};

export default AllCourses;
