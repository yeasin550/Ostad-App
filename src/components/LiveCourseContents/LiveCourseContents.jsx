
import industry from "../../assets/industry.png"
import interactive from "../../assets/interactive.png"
import module from "../../assets/module.png"
import realtime from "../../assets/realtime.png"
import learn from "../../assets/learn.png"
import support from "../../assets/support.png"


const LiveCourseContents = () => {
    return (
        <div className="py-12 w-10/12 mx-auto">
            <div className="py-12">
                <div className="text-center space-y-3">
                    <h1 className="text-4xl font-bold">Live Course Contents</h1>
                    <p>See what you are getting after joining our live courses</p></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3">
                <div className="bg-white flex flex-col items-center justify-center space-y-2 text-center h-56 border-b border-r border-gray-300">
                    <div className="w-14 mx-auto">
                        <img src={industry} alt="" className="" />
                    </div>
                    <h1 className="font-bold text-xl">Industry Focused Live Courses</h1>
                    <p className="">Join our guideline based & industry frocused live courses, start your career journey.</p>
                </div>
                <div className="bg-white flex flex-col items-center justify-center space-y-2 text-center h-56 border-b border-r border-gray-300">
                    <div className="w-14 mx-auto">
                        <img src={interactive} alt="" className="" />
                    </div>
                    <h1 className="font-bold">Interactive Live Class</h1>
                    <p className="">Skill development will now perfect with industry experts through consistent live class, conceptual class, and support classes.</p>
                </div>
                <div className="bg-white flex flex-col items-center justify-center space-y-2 text-center h-56 border-b border-gray-300">
                    <div className="w-14 mx-auto">
                        <img src={module} alt="" className="" />
                    </div>
                    <h1 className="font-bold">Module Based Study Plan</h1>
                    <p className="">No chance of falling behind with a module-wise structured study plan packed with quizzes, assignments and live tests.</p>
                </div>
                <div className="bg-white flex flex-col items-center justify-center space-y-2 text-center h-56 border-r border-gray-300">
                    <div className="w-14 mx-auto">
                        <img src={realtime} alt="" className="" />
                    </div>
                    <h1 className="font-bold">Realtime Progress Tracking.</h1>
                    <p className="">Track real time progress, see position on leader board and get ahead of everyone else in the competition</p>
                </div>
                <div className="bg-white flex flex-col items-center justify-center space-y-2 text-center h-56 border-r border-gray-300">
                    <div className="w-14 mx-auto">
                        <img src={learn} alt="" className="" />
                    </div>
                    <h1 className="font-bold">Learn from Industry Experts</h1>
                    <p className="">Develop skills live with the best industry experts, ask questions, learn and get the best guidance in the country.</p>
                </div>
                <div className="bg-white flex flex-col items-center justify-center space-y-2 text-center h-56 border-l border-gray-300">
                    <div className="w-14 mx-auto">
                        <img src={support} alt="" className="" />
                    </div>
                    <h1 className="font-bold">Intensive Job Placement Support</h1>
                    <p>After Course completion, get intensive job placement support including CV, profile build and job application.</p>
                </div>
            </div>
        </div>
    );
};

export default LiveCourseContents;