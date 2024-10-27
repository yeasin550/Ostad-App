
import industry from "../../assets/industry.png"
import interactive from "../../assets/interactive.png"
import module from "../../assets/module.png"
import realtime from "../../assets/realtime.png"
import learn from "../../assets/learn.png"
import support from "../../assets/support.png"
import codeMama from "../../assets/codemama-img.webp"
import skillable from "../../assets/skillable-img.webp"
import { FaArrowRight } from "react-icons/fa"


const LiveCourseContents = () => {
    const cardData = [
        {
            image: industry,
            title: 'Industry Focused Live Courses',
            description: 'Join our guideline based & industry frocused live courses, start your career journey.',
        },
        {
            image: interactive,
            title: 'Interactive Live Class',
            description: 'Skill development will now perfect with industry experts through consistent live class, conceptual class, and support classes.',
        },
        {
            image: module,
            title: 'Module Based Study Plan',
            description: 'No chance of falling behind with a module-wise structured study plan packed with quizzes, assignments and live tests.',
        },
        {
            image: realtime,
            title: 'Realtime Progress Tracking',
            description: 'Track real time progress, see position on leader board and get ahead of everyone else in the competition',
        },
        {
            image: learn,
            title: 'Learn from Industry Experts',
            description: 'Develop skills live with the best industry experts, ask questions, learn and get the best guidance in the country.',
        },
        {
            image: support,
            title: 'Intensive Job Placement Support',
            description: 'After Course completion, get intensive job placement support including CV, profile build and job application.',
        },
    ];
    return (
        <div className="py-12 md:w-10/12 mx-auto">
            <div className="py-12">
                <div className="text-center space-y-3">
                    <h1 className="text-4xl font-bold">Live Course Contents</h1>
                    <p>See what you are getting after joining our live courses</p></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3">
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white flex flex-col items-center justify-center space-y-2 text-center h-56 border-b border-r border-gray-300"
                    >
                        <div className="w-14 mx-auto">
                            <img src={card.image} alt="" className="" />
                        </div>
                        <h1 className="font-bold text-xl">{card.title}</h1>
                        <p className="hidden md:block">{card.description}</p>
                    </div>
                ))}
            </div>

            <div className="md:flex items-center gap-5 my-12">
                <div className="md:w-1/2 space-y-5 p-2 bg-white shadow-lg rounded-lg">
                    <h1 className="text-2xl font-bold">Explore your coding knowledge with CodeMama</h1>
                    <button className="bg-black flex items-center gap-2 py-2 px-5 rounded-md text-white">Check Codemama <FaArrowRight className="text-sm" /></button>
                    <img src={codeMama} className="rounded-md w-full h-64 border" alt="" />
                </div>
                <div className="md:w-1/2 space-y-5 p-2 bg-white shadow-lg rounded-lg">
                    <h1 className="text-2xl font-bold">Assess skills with Skillable Skillable & get free certificate</h1>
                    <button className="bg-black flex items-center gap-2 py-2 px-5 rounded-md text-white">Check Codemama <FaArrowRight className="text-sm" /></button>
                    <img src={skillable} className="rounded-md w-full h-64 border" alt="" />
                </div>
            </div>
        </div>
    );
};

export default LiveCourseContents;