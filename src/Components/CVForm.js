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
    return (
      <div>
        <Personal updatePersonal={this.props.updatePersonal} />
        <WorkExperience updateWork={this.props.updateWork} />
        <Education updateEducation={this.props.updateEducation} />
      </div>
    );
  }
}

export default CVForm;