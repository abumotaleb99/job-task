import React, { useContext } from "react";
import { Button } from "@material-tailwind/react";
import { AuthContext } from "../../providers/AuthProvider";

const RegisterPersonalInfo = () => {
  const { setStep, userData, setUserData } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const collegeOptions = [
    {
      id: 1,
      value: "Dhaka National Medical College",
    },
    {
      id: 2,
      value: "Ibrahim Medical College",
    },
    {
      id: 3,
      value: "Bangladesh Medical College",
    },
    {
      id: 4,
      value: "Holy Family Red Crescent Medical College",
    },
  ];

  const educationLevelOptions = [
    {
      id: 1,
      value: "Higher Secondary Certificate(SSC)",
    },
    {
      id: 2,
      value: "Higher Secondary School(HSC)",
    },
    {
      id: 3,
      value: "Diploma",
    },
    {
      id: 4,
      value: "Bachelor of Science(BSC)",
    },
    {
      id: 5,
      value: "Master of Arts(MA)",
    },
    {
      id: 6,
      value: "Bachelor of Arts(BA",
    },
  ];
  return (
    <>
      <h2 className="text-3xl text-[#333333] font-semibold text-center pt-10 pb-4">
        Personal Information
      </h2>
      <form>
        <div>
          <label className="text-2xl text-[#333333] font-medium">
            Full Name
          </label>
          <input
            type="text"
            name="full_name"
            className="w-full border border-[#333333] rounded-md focus:outline-none text-lg  px-3 py-4 mt-2"
            placeholder="Enter Full Name"
            value={userData.full_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-6">
          <label className="text-2xl text-[#333333] font-medium">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            className="w-full border border-[#333333] rounded-md focus:outline-none text-lg  px-3 py-4 mt-2"
            placeholder="Enter Email Address"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-6">
          <label className="text-2xl text-[#333333] font-medium">
            Position
          </label>
          <div>
            <select
              name="position"
              className="w-full border border-[#333333] rounded-md focus:outline-none text-lg px-3 py-4 mt-2"
              value={userData.position}
              onChange={handleChange}
            >
              <option defaultValue>Select Position</option>
              <option value="Teacher">Teacher</option>
              <option value="Student">Student</option>
            </select>
          </div>
        </div>
        {userData.position === "Teacher" && (
          <>
            <div className="mt-6">
              <label className="text-2xl text-[#333333] font-medium">
                Institute Name
                <select
                  name="institution_name"
                  className="w-full border border-[#333333] rounded-md focus:outline-none text-lg px-3 py-4 mt-2"
                  value={userData.institution_name}
                  onChange={handleChange}
                >
                  <option defaultValue>Select Institute Name</option>
                  {collegeOptions.map((option) => (
                    <option key={option.id} value={option.value}>
                      {option.value}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="mt-6">
              <label className="text-2xl text-[#333333] font-medium">
                Work Time
              </label>
              <div>
                <select
                  name="work_time"
                  className="w-full border border-[#333333] rounded-md focus:outline-none text-lg px-3 py-4 mt-2"
                  value={userData.work_time}
                  onChange={handleChange}
                >
                  <option defaultValue>Select Work Time</option>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                </select>
              </div>
            </div>
          </>
        )}
        {userData.position === "Student" && (
          <>
            <div className="mt-6">
              <label className="text-2xl text-[#333333] font-medium">
                Institute Name
                <select
                  name="institution_name"
                  className="w-full border border-[#333333] rounded-md focus:outline-none text-lg px-3 py-4 mt-2"
                  value={userData.institution_name}
                  onChange={handleChange}
                >
                  <option defaultValue>Select Institute Name</option>
                  {collegeOptions.map((option) => (
                    <option key={option.id} value={option.value}>
                      {option.value}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="mt-6">
              <label className="text-2xl text-[#333333] font-medium">
                Education Level
                <select
                  name="education_level"
                  className="w-full border border-[#333333] rounded-md focus:outline-none text-lg px-3 py-4 mt-2"
                  value={userData.education_level}
                  onChange={handleChange}
                >
                  <option defaultValue>Select Education Level</option>
                  {educationLevelOptions.map((option) => (
                    <option key={option.id} value={option.value}>
                      {option.value}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </>
        )}
        <Button
          onClick={() => setStep(2)}
          className="text-2xl text-[#FFFFFF] font-semibold capitalize py-4 my-12"
          fullWidth
        >
          Next
        </Button>
      </form>
    </>
  );
};

export default RegisterPersonalInfo;
