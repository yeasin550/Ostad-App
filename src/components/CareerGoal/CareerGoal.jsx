import web from "../../assets/web.png"
import product from "../../assets/product.png"
import marketing from "../../assets/marketing.png"
import data from "../../assets/data.png"
import creatives from "../../assets/creatives.png"
import blockChain from "../../assets/blockChain.png"


const CareerGoal = () => {
    return (
        <div className="py-12 md:w-10/12 mx-auto">
            <div className="text-center space-y-3 mb-4">
                <h1 className="text-4xl font-bold">Set Career Goal</h1>
                <p>Select your Career Goal from The Options and start learning</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-100 hover:bg-gray-50 flex flex-col items-center justify-center space-y-2 text-center md:h-32 py-2 px-2 hover:border rounded-md border-black">
                    <div className="bg-white rounded-full p-2 w-10 mx-auto">
                        <img src={web} alt="" className="" />
                    </div>
                    <h1 className="font-bold">Wep & App Development</h1>
                    <p className="text-sm">• 30 Courses • 5 Workshop</p>
                </div>
                <div className="bg-gray-100 hover:bg-gray-50 flex flex-col items-center justify-center space-y-2 text-center md:h-32 py-2 px-2 hover:border rounded-md border-black">
                    <div className="bg-white rounded-full p-2 w-10 mx-auto">
                        <img src={product} alt="" className="" />
                    </div>
                    <h1 className="font-bold">Product Management & Design</h1>
                    <p className="text-sm">• 12 Courses • 3 Workshop</p>
                </div>
                <div className="bg-gray-100 hover:bg-gray-50 flex flex-col items-center justify-center space-y-2 text-center md:h-32 py-2 px-2 hover:border rounded-md border-black">
                    <div className="bg-white rounded-full p-2 w-10 mx-auto">
                        <img src={marketing} alt="" className="" />
                    </div>
                    <h1 className="font-bold">Business & Marketing</h1>
                    <p className="text-sm">• 11 Courses</p>
                </div>
                <div className="bg-gray-100 hover:bg-gray-50 flex flex-col items-center justify-center space-y-2 text-center md:h-32 py-2 px-2 hover:border rounded-md border-black">
                    <div className="bg-white rounded-full p-2 w-10 mx-auto">
                        <img src={data} alt="" className="" />
                    </div>
                    <h1 className="font-bold">Data Engineering</h1>
                    <p className="text-sm">• 6 Courses • 1 Workshop</p>
                </div>
                <div className="bg-gray-100 hover:bg-gray-50 flex flex-col items-center justify-center space-y-2 text-center md:h-32 py-2 px-2 hover:border rounded-md border-black">
                    <div className="bg-white rounded-full p-2 w-10 mx-auto">
                        <img src={creatives} alt="" className="" />
                    </div>
                    <h1 className="font-bold">Creatives</h1>
                    <p className="text-sm">• 5 Courses • 2 Workshop</p>
                </div>
                <div className="bg-gray-100 hover:bg-gray-50 flex flex-col items-center justify-center space-y-2 text-center md:h-32 py-2 px-2 hover:border rounded-md border-black">
                    <div className="bg-white rounded-full p-2 w-10 mx-auto">
                        <img src={blockChain} alt="" className="" />
                    </div>
                    <h1 className="font-bold">Blockchain Development</h1>
                    <p>• 1 Courses • 1 Workshop</p>
                </div>
            </div>
        </div>
    );
};

export default CareerGoal;