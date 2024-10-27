import { FaAngleRight } from "react-icons/fa";
import business from "../../assets/bg-business.webp"
import brackbank from "../../assets/brackbank.png"
import labour from "../../assets/labour-organaization.png"
import indesore from "../../assets/indesor.png"
import karigori from "../../assets/karigori.png"


const OstadForBusiness = () => {
    return (
        <div className="pt-14 bg-white ">
            <div className="md:w-10/12 mx-auto py-10 px-5 bg-gray-50 rounded-2xl md:flex items-center justify-between gap-12">
                <div className="space-y-2 md:text-left text-center">
                    <h1 className="text-3xl font-bold">Ostad for business</h1>
                    <p>Join our Corporate Skills Training Program, get training from the countrys best industry experts and reinvent your team.</p>
                    <div className="flex items-center justify-center gap-3 md:w-56 bg-[#FFC000] hover:bg-[#f3b806] px-8 py-3 text-sm font-bold rounded-md cursor-pointer">
                        See Details <FaAngleRight />
                    </div>
                    <h1 className="text-2xl font-bold">Some of our clients</h1>
                    <div className="md:flex items-center gap-4">
                        <img src={brackbank} className="md:w-32" alt="" /><img src={labour} className="md:w-32" alt="" /><img src={indesore} className="md:w-32" alt="" /><img src={karigori} className="w-16" alt="" />
                    </div>
                </div>
                <img src={business} className="h-80" alt="" />
            </div>

            <div className="py-20 bg-[#F9F9FA] mt-12 ">
                <div className="md:w-10/12 w-11/12 mx-auto">

                    <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
                        {/* Card 1 */}
                        <div className="bg-[#D1FADF] p-8 rounded-lg shadow-lg">
                            <h2 className="text-3xl font-bold text-[#053D46]">7000+</h2>
                            <p className="text-gray-600 mt-2">Job Placement</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#DAE4FF] p-8 rounded-lg shadow-lg">
                            <h2 className="text-3xl font-bold text-[#053D46]">15,000+</h2>
                            <p className="text-gray-600 mt-2">Learner</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#FFE8DB] p-8 rounded-lg shadow-lg">
                            <h2 className="text-3xl font-bold text-[#053D46]">90%</h2>
                            <p className="text-gray-600 mt-2">Course Completion Rate</p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-[#FFF2CC] p-8 rounded-lg shadow-lg">
                            <h2 className="text-3xl font-bold text-[#053D46]">46</h2>
                            <p className="text-gray-600 mt-2">Live Course</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OstadForBusiness;