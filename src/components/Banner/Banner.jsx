import { FaAngleRight } from "react-icons/fa";
import banner from "../../assets/banner-img.png"
import bannercompanies from "../../assets/bannercompanies.png"



const Banner = () => {
    return (
        <div className="py-10">
            <div className="bg-gradient-to-r from-[#EBF5F1] via-[#F8F9FA] to-[#E7ECFA] md:w-10/12 w-11/12 mx-auto py-5 px-5 rounded-2xl md:flex items-center justify-between gap-12 border border-black shadow-md">
                <div className="space-y-12">
                    <div className="space-y-5 md:text-left text-center">
                        <h1 className="text-4xl font-bold">  Bangladesh Learns <span className="text-[#F04438]">Live</span><span className="text-xl ml-3">🔴</span></h1>
                        <p className="font-bold">Upgrade your future through Skill Development</p>
                        <div className="flex items-center justify-center gap-3 md:w-56 bg-[#FFC000] hover:bg-[#f3b806] px-8 py-3 text-sm font-bold rounded-md cursor-pointer">
                            See Details <FaAngleRight />
                        </div>
                    </div>
                    <div className="hidden md:block">

                        <h1 className="font-bold">7000+ Graduates are working in various local and global companies:</h1>
                        <div className="">
                            <img src={bannercompanies} className="" alt="" />
                        </div>
                    </div>
                </div>
                <img src={banner} className="h-80 rounded-xl  md:mt-0 mt-5" alt="" />
            </div>
        </div>
    );
};

export default Banner;