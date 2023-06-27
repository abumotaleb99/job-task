import React from "react";
import { Button } from "@material-tailwind/react";
import img from "../../assets/Vector.png";
import "./RegisterThankYou.css";
import { Link } from "react-router-dom";

const RegisterThankYou = () => {
  return (
    <div className="flex flex-col items-center">
      <button className="round-btn">
        <img src={img} alt="" />
      </button>
      <h2 className="text-2xl md:text-3xl text-[#333333] font-semibold">
        Thank You!
      </h2>
      <p className="text-base md:text-xl text[#9F9F9F] font-normal pt-4 pb-12">
        Account Has Been Created. Enjoy Job Task.
      </p>
      <Link to="/dashboard">
        <Button
          className="text-base md:text-xl text-[#6078EA] font-semibold capitalize border-2 border-[#6078EA] px-7 md:px-10"
          variant="outlined"
        >
          Go To Home
        </Button>
      </Link>
    </div>
  );
};

export default RegisterThankYou;
