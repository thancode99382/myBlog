"use client";
import { useRef, FormEvent, useState } from "react";

import { Dispatch, SetStateAction } from "react";

type IProp = {
  translate: Boolean;
  loader:Boolean;
  setTranslate: Dispatch<SetStateAction<boolean>>;
  setLoader: Dispatch<SetStateAction<boolean>>;
};

export default function Signup(prop: IProp) {
  
  // Create refs for the input fields
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
   
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    prop.setLoader(true)
    const response = await fetch(`api/auth/register`, {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });
    
    if (response.ok) {
      // Reset the form fields manually
      if (nameRef.current) nameRef.current.value = "";
      if (emailRef.current) emailRef.current.value = "";
      if (passwordRef.current) passwordRef.current.value = "";
      prop.setTranslate(!prop.translate);
      prop.setLoader(false)
    } else {
      // Handle errors here, if needed
      console.error("Failed to register:", await response.text());
    }

    console.log({ response });
  };

  return (
<> 

    {prop.loader?(
<div className="flex justify-center  h-screen items-center">
      <div className="three-body">
      <div className="three-body__dot"></div>
      <div className="three-body__dot"></div>
      <div className="three-body__dot"></div>
      </div>
      </div>
    
    ):(<form
        onSubmit={handleSubmit}
        className={`w-full flex flex-col justify-center items-center gap-6 ${
          prop.translate ? "-translate-x-full" : "-translate-x-0"
        }  transition-all duration-700 ease-in-out`}
      >
        <div className="font-bold md:text-6xl text-2xl">Tạo tài khoản</div>
        <div>
          <input
            ref={nameRef}
            name="name"
            className="bg-slate-100 focus:outline-none focus:ring-0 py-4 px-4 rounded-lg w-52 md:w-96"
            placeholder="Nhập tên"
            type="text"
          />
        </div>
        <div>
          <input
            ref={emailRef}
            name="email"
            className="bg-slate-100 focus:outline-none focus:ring-0 py-4 px-4 rounded-lg w-52 md:w-96"
            placeholder="Nhập email"
            type="text"
          />
        </div>
        <div>
          <input
            ref={passwordRef}
            name="password"
            className="bg-slate-100 focus:outline-none focus:ring-0 py-4 px-4 rounded-lg w-52 md:w-96"
            placeholder="Nhập mật khẩu"
            type="password"
          />
        </div>
        <button
          type="submit"
          className="border px-8 py-2 rounded-lg text-white transition-all ease-in-out duration-200 bg-[#533BAD]"
        >
          Đăng kí
        </button>
      </form>) }
      </>
  );
}
