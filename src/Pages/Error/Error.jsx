import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
        <h1 className="text-9xl font-extrabold text-white tracking-widest">
          404
        </h1>
        <div className="bg-[#FF6A3D] text-white py-1 px-5 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <Link to="/">
          <button className="mt-5">
            <Link className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
              <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

              <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                <Link to="/">Go Home</Link>
              </span>
            </Link>
          </button>
        </Link>
      </main>
    </>
  );
};

export default Error;
