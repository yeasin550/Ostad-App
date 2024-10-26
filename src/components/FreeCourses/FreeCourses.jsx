import quickstart from "../../assets/quickstart.jpg"
import wordpress from "../../assets/wordpress.jpg"
import printon from "../../assets/printon.jpg"
import free from "../../assets/course-free-icon.png"
import { FaAngleRight } from "react-icons/fa";


const FreeCourses = () => {
    return (
        <div className="py-12 md:w-10/12 w-11/12 mx-auto">
            {/* Title Bar */}
            <div className="md:flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                <h2 className="text-4xl font-bold">Free Courses</h2>
                    <img src={free} className="w-8" alt="" />
                </div>
                <div className="flex-1 mx-4 border-t border-gray-300"></div>
                <button className="bg-black py-2 px-6 text-sm rounded-md text-white font-semibold">SEE ALL</button>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="border border-transparent bg-white hover:border-black rounded-lg transition duration-200 cursor-pointer">
                    <img
                        src={quickstart}
                        alt="Course 2"
                        className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <div className="p-4">

                        <h3 className="text-xl font-semibold mb-2">Quick Start Your SEO Journey</h3> <br />
                        <button className="flex items-center justify-center gap-3 bg-gray-200 hover:bg-black w-full text-sm py-2 rounded-md font-semibold mt-auto">SEE DETAILS <FaAngleRight />
                        </button>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="border border-transparent bg-white hover:border-black rounded-lg transition duration-200 cursor-pointer">
                    <img
                        src={wordpress}
                        alt="Course 2"
                        className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <div className="p-4">

                    <h3 className="text-xl font-semibold mb-2">Wordpress Website Design: Basic To Professional Development</h3>
                        <button className="flex items-center justify-center gap-3 bg-gray-200 hover:bg-gray-300 w-full text-sm py-2 rounded-md font-semibold mt-auto">SEE DETAILS <FaAngleRight />
                        </button>
                        
                    </div>
                </div>

                {/* Card 3 */}
                <div className="border border-transparent bg-white hover:border-black rounded-lg transition duration-200 cursor-pointer">
                    <img
                        src={printon}
                        alt="Course 3"
                        className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <div className="p-4 ">
                        <h3 className="text-xl font-semibold mb-2">Print On Demand - প্রিন্ট অন ডিমান্ড</h3>
                        <button className="flex items-center justify-center gap-3 bg-gray-200 hover:bg-gray-300 w-full text-sm py-2 rounded-md font-semibold mt-auto">SEE DETAILS <FaAngleRight />
                        </button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default FreeCourses;
