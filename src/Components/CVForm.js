import Education from "./Education";
import Personal from "./Personal";
import WorkExperience from "./WorkExperience";
import React from "react";

const CVForm = (props) => {
  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    work,
    education,
    updatePersonal,
    updateWork,
    updateEducation,
  } = props;
  return (
    <div className="formContainer">
      <Personal
        firstName={firstName}
        lastName={lastName}
        phoneNumber={phoneNumber}
        email={email}
        updatePersonal={updatePersonal}
      />
      <WorkExperience work={work} updateWork={updateWork} />
      <Education
        education={education}
        updateEducation={updateEducation}
      />
    </div>
  );
};

export default CVForm;
