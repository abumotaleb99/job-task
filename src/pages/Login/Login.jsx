import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Button } from "@material-tailwind/react";

const Login = () => {
  return (
    <>
      <div className="border-b-2">
        <Link
          to=""
          className="w-full md:max-w-7xl mx-auto  flex px-5 xl:px-0 py-5"
        >
          <img src={logo} alt="" />
          <h1 className="text-2xl text-[#6078EA] font-semibold pl-2">
            Job Task
          </h1>
        </Link>
      </div>
      <div className="w-full md:max-w-3xl m-auto px-5 xl:px-0">
        <h2 className="text-3xl text-[#333333] font-semibold text-center pt-16 pb-14">
          Welcome To Task Job
        </h2>
        <form>
          <div>
            <label className="text-2xl text-[#333333] font-medium">
              Email Address*
            </label>
            <input
              type="text"
              name="name"
              className="w-full border border-[#333333] rounded-md focus:outline-none text-lg  px-3 py-4 mt-2"
              placeholder="Enter Email Address"
              required
            />
          </div>
          <div className="mt-6">
            <label className="text-2xl text-[#333333] font-medium">
              Email Password*
            </label>
            <input
              type="password"
              name="password"
              className="w-full border border-[#333333] rounded-md focus:outline-none text-lg  px-3 py-4 mt-2"
              placeholder="Enter Password"
              required
            />
          </div>
          <Button
            className="text-2xl text-[#FFFFFF] font-semibold capitalize py-4 my-12"
            fullWidth
          >
            Log In
          </Button>
          <p className="text-2xl text-[#000000] font-medium text-center">
            Don't Have An Account?
            <Link to="/register" className="text-[#6078EA] underline pl-1">
              Register Now
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
