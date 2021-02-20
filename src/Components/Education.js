import React, { Component } from "react";

class Education extends Component {
  constructor() {
    super();
    this.state = {
      educationHistory: [
        {
          key: 0,
          institution: "College",
          duration: "2010-2014",
        },
        {
          key: 1,
          institution: "School",
          duration: "2017-2019",
        },
      ],
    };
    this.displayHistory = this.displayHistory.bind(this)
  }

  displayHistory() {
    return this.state.educationHistory.map((term) => {
      return (
        <li key={term.key}>
          <h3>{term.institution}</h3>
          <p>{term.duration}</p>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Education</h2>
        {this.displayHistory()}
      </div>
    );
  }
}

export default Education