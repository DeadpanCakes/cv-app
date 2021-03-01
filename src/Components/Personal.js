import React, { useState, useEffect } from "react";
import PersonalForm from "./PersonalForm";
import PersonalInfo from "./PersonalInfo";

const Personal = (props) => {
  const [isDisplaying, setIsDisplaying] = useState("info");
  const { firstName, lastName, phoneNumber, email, updatePersonal } = props;

  useEffect(() => {
    firstName !== "" ? setIsDisplaying("info") : setIsDisplaying("form");
  }, []);

  const toggleDisplay = () => {
    console.log(isDisplaying)
    isDisplaying === "form" ? setIsDisplaying("info") : setIsDisplaying("form");
    console.log(isDisplaying)
  };

  const checkDisplay = () => console.log(isDisplaying)

  const delegateDisplay = () => {
    if (isDisplaying === "form") {
      return (
        <PersonalForm
          firstName={firstName}
          lastName={lastName}
          phoneNumber={phoneNumber}
          email={email}
          updatePersonal={updatePersonal}
          handleSubmit={handleSubmit}
        />
      );
    }
    return (
      <PersonalInfo
        firstName={firstName}
        lastName={lastName}
        phoneNumber={phoneNumber}
        email={email}
        toggleDisplay={toggleDisplay}
      />
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    toggleDisplay();
  };

  return (
    <div className="personalInfo" onClick={() => console.log(firstName)}>
      <h2 onClick={checkDisplay}>Personal Information</h2>
      {delegateDisplay()}
    </div>
  );
};

export default Personal;
