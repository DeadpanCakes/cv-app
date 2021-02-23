import Education from "./Education";
import Personal from "./Personal";
import WorkExperience from "./WorkExperience";
import React, { Component } from "react";

class CVForm extends Component {
  constructor(props) {
    super();
    this.state = {};
}

  render() {
    const { personalData, workData, educationData } = this.props.data
    const { updatePersonal, updateWork, updateEducation } = this.props
    return (
      <div className="formContainer">
        <Personal personalData={personalData} updatePersonal={updatePersonal} />
        <WorkExperience workData={workData} updateWork={updateWork} />
        <Education educationData={educationData} updateEducation={updateEducation} />
      </div>
    );
  }
}

export default CVForm;