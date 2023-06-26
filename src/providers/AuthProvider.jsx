import React, { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState({
    full_name: "",
    email: "",
    position: "",
    institution_name: "",
    education_level: "",
    work_time: "",
    password: "",
    confirm_password: "",
  });

  function submitData(e) {
    e.preventDefault();

    console.log(userData);

    setStep(3);
  }

  const authInfo = {
    currentStep,
    setStep,
    userData,
    setUserData,
    submitData,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
