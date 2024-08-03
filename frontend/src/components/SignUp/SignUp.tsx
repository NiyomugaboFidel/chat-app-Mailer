import React from "react";
import Input from "./Inputs/Input";
import { Link } from "react-router-dom";

const SignUp: React.FC = () => {
  return (
    <div>
      <div className="w-full h-full bg-white block lg:flex justify-between items-center">
        <div className="lg:w-1/2   bg-white ">
          <span className="items-center justify-center flex">
            <img
              src="./logo2.svg"
              className=" block w-[60px] h-[60px]"
              alt=""
            />
          </span>
  
          <form action="" className=" rounded-lg border mx-2 px-[60px] lg:px-[120px]">
            
          <div className="pb-[20px]">
            <h2 className="text-display4 lg:text-display3 text-black font-medium text-center">
              Create a new account
            </h2>
            <p className="text-center text-bodySmall">It’s quick and easy.</p>
          </div>
            <Input label="Full Name" type="text" placeholder="your full name" />
            <Input
              label="User Name"
              type="text"
              placeholder="craate user name"
            />
            <Input label="Email" type="email" placeholder="example@gmail.com" />
            <Input label="Password" type="password" placeholder="******" />
            <Input
              label="Confirm Password"
              type="password"
              placeholder="******"
            />
            <select
              name="select"
              id="select"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option
                className="hover:bg-white bg-black text-white rounded m-2"
                value="male"
              >
                Male
              </option>
              <option
                className="hover:bg-white bg-black text-white rounded m-2"
                value="female"
              >
                Female
              </option>
            </select>

            <button
              type="submit"
              className=" bg-black mt-[20px] cursor-pointer border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5"
            >
              Sign Up
            </button>
            <p className=" text-center py-3 text-primary underline ">
              <Link to={"/login"}>Already have an Account</Link>
            </p>
          </form>
        </div>
        <div style={{height:'150vh', backgroundImage:"url('/login.png')"}}  className=" bg-center bg-cover m-auto overflow-hidden bg-white lg:w-1/2 h-[120vh] bg-transparent">
          <div className="flex w-full flex-col h-full items-center justify-center">
          <span className="items-center justify-center flex">
            <img
              src="./logo2.svg"
              className=" block w-[150px] h-[150px]  "
              alt=""
            />
          </span>
          <div>
            <h2 className="text-display2 text-white font-medium text-center">
              Create a new account
            </h2>
            <p className=" text-white mb-[20px] text-center text-bodyLarge">It’s quick and easy.</p>
          </div>
        <span className=" flex justify-items-start items-center gap-[20px] py-2">
       <img className=" w-[40px] h-[40px]  cursor-pointer hover:scale-105 duration-300 transition-all ease-in-out " src="./google.svg" alt="" />
        <img className=" w-[40px] h-[40px]  cursor-pointer hover:scale-105 duration-300 transition-all ease-in-out" src="./github.svg" alt="" />
        <img className=" w-[40px] h-[40px]  cursor-pointer hover:scale-105 duration-300 transition-all ease-in-out" src="./twitter2.svg" alt="" />
       </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
