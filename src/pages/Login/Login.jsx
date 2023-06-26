import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
  };

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
        <h2 className="text-3xl text-[#333333] font-semibold text-center pt-10 pb-8 md:pt-16 md:pb-14">
          Welcome To Task Job
        </h2>
        <form onSubmit={handleLogin}>
          <div>
            <label className="text-xl md:text-2xl text-[#333333] font-medium">
              Email Address*
            </label>
            <input
              type="email"
              name="email"
              className="w-full border border-[#333333] rounded-md focus:outline-none text-base md:text-lg  px-3 py-4 mt-2"
              placeholder="Enter Email Address"
              required
            />
          </div>
          <div className="mt-6">
            <label className="text-xl md:text-2xl text-[#333333] font-medium">
              Email Password*
            </label>
            <input
              type="password"
              name="password"
              className="w-full border border-[#333333] rounded-md focus:outline-none text-base md:text-lg  px-3 py-4 mt-2"
              placeholder="Enter Password"
              required
            />
          </div>
          <input
            type="submit"
            value="Log In"
            className="w-full text-xl md:text-2xl text-[#FFFFFF] bg-[#6078EA] font-semibold capitalize rounded-md py-4 my-12"
          />
          <p className="text-xl md:text-2xl text-[#000000] font-medium text-center">
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
