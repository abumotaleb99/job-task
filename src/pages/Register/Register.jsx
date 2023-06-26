import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Button, Step, Stepper, Typography } from "@material-tailwind/react";
import RegisterPersonalInfo from "./RegisterPersonalInfo";
import RegisterSecurity from "./RegisterSecurity";
import RegisterThankYou from "./RegisterThankYou";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { currentStep } = useContext(AuthContext);

  if (currentStep === 3) {
    var shouldHide = true;
  }

  const showForm = (step) => {
    switch (step) {
      case 1:
        return <RegisterPersonalInfo></RegisterPersonalInfo>;
      case 2:
        return <RegisterSecurity></RegisterSecurity>;
      case 3:
        return <RegisterThankYou></RegisterThankYou>;
    }
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
      <div className="w-full md:max-w-5xl mx-auto px-5 xl:px-0 pt-16">
        <Stepper className="md:max-w-5xl" activeStep={currentStep - 1}>
          <Step>1</Step>
          <Step>2</Step>
          <Step>3</Step>
        </Stepper>
      </div>
      <div className="w-full md:max-w-3xl m-auto px-5 xl:px-0">
        {showForm(currentStep)}

        {shouldHide !== true && (
          <p className="text-2xl text-[#000000] font-medium text-center">
            Already Have An Account?
            <Link to="/" className="text-[#6078EA] underline pl-1">
              Log In
            </Link>
          </p>
        )}
      </div>
    </>
  );
};

export default Register;
