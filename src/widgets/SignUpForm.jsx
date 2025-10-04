import React, { useState } from "react";
import { SIGN_UP_INIT_STATE } from "../shared/constants";

export default function SignUpForm() {
  const [data, setData] = useState(SIGN_UP_INIT_STATE);
  const [isVisible, setIsVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log();
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-[13px] 
      w-full sm:w-[400px] 
      text-[#000000]"
    >
      <div>
        <label className="text-[16px]" htmlFor="username">
          Name
        </label>
        <input
          id="username"
          type="text"
          name="username"
          value={data.username}
          onChange={handleChange}
          placeholder="John Doe"
          className="bg-[#FAFAFA] 
          border border-gray-300 mt-[13px] focus:border-[#00B140] rounded-[5px] focus:outline-none focus:ring-1 focus:ring-[#00B140]/30 transition-all duration-200
          h-[42px] 
          w-[100%] 
          px-[15px] 
          text-[15px] "
        />
      </div>

      <div>
        <label className="text-[16px]" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="text"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="example@gmail.com"
          className="bg-[#FAFAFA] 
          border border-gray-300 mt-[13px] focus:border-[#00B140] rounded-[5px] focus:outline-none focus:ring-1 focus:ring-[#00B140]/30 transition-all duration-200
          h-[42px] 
          w-[100%] 
          px-[15px] 
          text-[15px] "
        />
      </div>

      <div className="relative">
        <label className="text-[16px]">Password</label>
        <input
          id="password"
          type={isVisible ? "text" : "password"}
          name="password"
          value={data.password}
          onChange={handleChange}
          placeholder="********"
          className="bg-[#FAFAFA] 
          border border-gray-300 mt-[13px] focus:border-[#00B140] rounded-[5px] focus:outline-none focus:ring-1 focus:ring-[#00B140]/30 transition-all duration-200
          h-[42px] 
          w-[100%] 
          pl-[15px] 
          pr-[42px] 
          text-[15px]"
        />
        <img
          onClick={() => setIsVisible(!isVisible)}
          className="absolute w-[25px] right-[10px] top-[46px] hover:cursor-pointer"
          src={isVisible ? "/open-eye.svg" : "/close-eye.svg"}
          alt="eye"
        />
      </div>

      <div className="relative">
        <label className="text-[16px]">Confirm password</label>
        <input
          id="confirmPassword"
          type={isVisible ? "text" : "password"}
          name="confirmPassword"
          value={data.confirmPassword}
          onChange={handleChange}
          placeholder="********"
          className="bg-[#FAFAFA] 
          border border-gray-300 focus:border-[#00B140] rounded-[5px]focus:outline-none focus:ring-1 focus:ring-[#00B140]/30 transition-all duration-200
          mt-[13px]  
          h-[42px] 
          w-[100%] 
          pl-[15px] 
          pr-[42px] 
          text-[15px] "
        />
        <img
          onClick={() => setIsVisible(!isVisible)}
          className="absolute w-[25px] right-[10px] top-[46px] hover:cursor-pointer"
          src={isVisible ? "/open-eye.svg" : "/close-eye.svg"}
          alt="eye"
        />
      </div>

      <div>
        <label className="flex items-center">
          <input
            className="accent-[#00B140] border-2 border-[#00B140] rounded hover:cursor-pointer"
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <span className="px-2">
            I understood the{" "}
            <span className="text-[#00B140] hover:underline hover:cursor-pointer">
              policy
            </span>
            .
          </span>
        </label>

        <button
          type="submit"
          className="bg-[#00B140] 
          text-[#FFFFFF] 
          text-[15px] 
          mt-[13px] 
          mb-[26px] 
          h-[42px] 
          w-[100%] 
          text-center 
          rounded-[5px] 
          active:scale-95 duration-300
          hover:cursor-pointer"
        >
          SIGN IN
        </button>
      </div>
    </form>
  );
}
