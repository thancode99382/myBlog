"use client";

import { useState } from "react";
import Login from "./login";
import Signup from "./Signup";

export default function Page() {
  const [translate, setTranslate] = useState(false);

  const handleChange = () => {
    setTranslate(!translate);
  };

  return (
    <div className="relative flex justify-center items-center w-full  h-screen">
      <div className="w-full  z-0 overflow-hidden ">
        <Login translate={translate} />
      </div>

      <div className="w-full  z-0 overflow-hidden ">
        <Signup translate={translate} />
      </div>

      <div
        className={` text-white  flex justify-center  overflow-hidden items-center  absolute bg-[#533BAD]  h-screen w-1/2 left-0  transition-all duration-700 ease-in-out ${
          translate
            ? "translate-x-full  rounded-l-[200px]"
            : "translate-x-0  rounded-r-[200px]"
        }   `}
      >
        <div className=" absolute  inset-0 z-50 flex justify-center   items-center">
        
          <div className={ `flex gap-6 flex-col justify-center  ${translate?"translate-x-[1000px]":""}   absolute transition-all duration-700 ease-in-out  items-center`}>
            <div className="font-bold md:text-6xl text-2xl px-4"> Chào mừng trở lại! </div>
            <div className="font-light px-4">
              
              Nhập thông tin chi tiết để sử dụng các tính năng{" "}
            </div>
            <button
              onClick={handleChange}
              className="border px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-all ease-in-out duration-200 "
            >
              {" "}
              Đăng nhập nào{" "}
            </button>
          </div>{" "}
                {/* đăng kí */}
          <div className={ `flex gap-6 flex-col justify-center ${translate?"":"-translate-x-[1000px]"}    absolute transition-all duration-700 ease-in-out  items-center`}>
            <div className="font-bold md:text-6xl text-2xl px-4"> Xin chào! </div>
            <div className="md:font-light px-4">
              
              Nhập thông tin chi tiết để sử dụng các tính năng{" "}
            </div>
            <button
              onClick={handleChange}
              className="border px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-all ease-in-out duration-200 "
            >
              {" "}
              Đăng kí nào{" "}
            </button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
