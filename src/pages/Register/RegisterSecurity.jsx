import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Button } from "@material-tailwind/react";

const RegisterSecurity = () => {
  const { submitData, userData, setUserData } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <h2 className="text-3xl text-[#333333] font-semibold text-center pt-10 pb-4">
        Security
      </h2>
      <form>
        <div>
          <label className="text-xl md:text-2xl text-[#333333] font-medium">
            New Password
          </label>
          <input
            type="password"
            name="password"
            className="w-full border border-[#333333] rounded-md focus:outline-none text-base md:text-lg  px-3 py-4 mt-2"
            placeholder="Enter New Password"
            value={userData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-6">
          <label className="text-xl md:text-2xl text-[#333333] font-medium">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirm_password"
            className="w-full border border-[#333333] rounded-md focus:outline-none text-base md:text-lg  px-3 py-4 mt-2"
            placeholder="Enter Confirm Password"
            value={userData.confirm_password}
            onChange={handleChange}
            required
          />
        </div>
        <Button
          onClick={submitData}
          className="text-xl md:text-2xl text-[#FFFFFF] font-semibold capitalize py-4 my-8 md:my-12"
          fullWidth
        >
          Next
        </Button>
      </form>
    </>
  );
};

export default RegisterSecurity;
