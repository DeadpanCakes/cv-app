import React, { useState } from "react";
import EducationForm from "./EducationForm";
import EducationInfo from "./EducationInfo";

const Education = (props) => {
  const { education, updateEducation } = props;
  const [newFormShowing, setNewFormShowing] = useState(false);

  const addTerm = async (newTerm) => {
    const updatedHistory = education.concat(newTerm);
    await updateEducation(updatedHistory);
  };

  const removeTerm = async (key) => {
    const updatedHistory = education.filter((term) => term.key !== key);
    await updateEducation(updatedHistory);
  };

  const editTerm = async (key) => {
    const targetTerm = education.find((item) => item.key === key);
    const updatedHistory = education.map((term) => {
      if (term === targetTerm) {
        return {
          ...targetTerm,
          isBeingEdited: true,
        };
      }
      return term;
    });
    await updateEducation(updatedHistory);
  };

  const submitTermEdit = async (editedTerm) => {
    const targetKey = editedTerm.key;
    const updatedHistory = education.map((term) => {
      return term.key === targetKey
        ? { ...editedTerm, isBeingEdited: false }
        : term;
    });
    await updateEducation(updatedHistory);
  };

  const displayHistory = () => {
    return education.map((term) => {
      return term.isBeingEdited ? (
        <EducationForm
          key={term.key}
          data={term}
          handleSubmit={submitTermEdit}
        />
      ) : (
        <EducationInfo
          key={term.key}
          term={term}
          edit={editTerm}
          remove={removeTerm}
        />
      );
    });
  };

  const toggleForm = () => {
    newFormShowing ? setNewFormShowing(false) : setNewFormShowing(true);
  };

  return (
    <div className="educationHistory">
      <div className="sectionHeader">
        <h2>Education</h2>
        <button className="addBtn" onClick={toggleForm}>
          {newFormShowing ? "Hide Form" : "Add Section"}
        </button>
      </div>
      <ul className="educationList">{displayHistory()}</ul>
      <EducationForm
        data={{
          key: education.length,
          institution: '',
          startDate: '',
          endDate: '',
        }}
        handleSubmit={addTerm}
        id="educationForm"
        style={newFormShowing ? { display: "flex" } : { display: "none" }}
      />
    </div>
  );
};

export default Education;
