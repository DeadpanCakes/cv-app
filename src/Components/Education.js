import React, { Component } from "react";
import EducationForm from "./EducationForm";

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
        {
            key:2,
            institution: "Place",
            duration: "1930-1933"
        }
      ],
    };
    this.addTerm = this.addTerm.bind(this)
    this.displayHistory = this.displayHistory.bind(this)
    this.removeTerm = this.removeTerm.bind(this)
  }

  addTerm(newTerm) {
    const updatedHistory = this.state.educationHistory.concat(newTerm)
    this.setState({educationHistory: updatedHistory})
  }

  removeTerm(key) {
    const updatedHistory = this.state.educationHistory.filter(term => term.key !== key)
    console.log(updatedHistory)
    this.setState({educationHistory:updatedHistory})
  }

  displayHistory() {
    return this.state.educationHistory.map((term) => {
      return (
        <li key={term.key}>
          <h3>{term.institution}</h3>
          <p>{term.duration}</p>
          <button onClick={() => this.removeTerm(term.key)}>Delete</button>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Education</h2>
        {this.displayHistory()}
        <EducationForm info={this.state} addTerm={this.addTerm} />
        <button onClick={this.addTerm}>add</button>
      </div>
    );
  }
}

export default Education