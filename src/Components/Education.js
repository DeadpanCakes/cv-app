import React, { Component } from "react";
import EducationForm from "./EducationForm";
import EducationInfo from "./EducationInfo";

class Education extends Component {
  constructor() {
    super();
    this.state = {
      educationHistory: [],
    };
    this.addTerm = this.addTerm.bind(this);
    this.displayHistory = this.displayHistory.bind(this);
    this.removeTerm = this.removeTerm.bind(this);
    this.editTerm = this.editTerm.bind(this);
    this.submitTermEdit = this.submitTermEdit.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  addTerm(newTerm) {
    const updatedHistory = this.state.educationHistory.concat(newTerm);
    this.setState({ educationHistory: updatedHistory });
  }

  removeTerm(key) {
    const updatedHistory = this.state.educationHistory.filter(
      (term) => term.key !== key
    );
    this.setState({ educationHistory: updatedHistory });
  }

  editTerm(key) {
    const targetTerm = this.state.educationHistory.find(
      (item) => item.key === key
    );
    const updatedHistory = this.state.educationHistory.map((term) => {
      if (term === targetTerm) {
        return {
          ...targetTerm,
          isBeingEdited: true,
        };
      }
      return term;
    });
    this.setState({
      educationHistory: updatedHistory,
    });
  }

  submitTermEdit(editedTerm) {
    const targetKey = editedTerm.key;
    const updatedHistory = this.state.educationHistory.map((term) => {
      if (term.key === targetKey) {
        return editedTerm;
      } else {
        return term;
      }
    });
    this.setState({
      educationHistory: updatedHistory,
    });
  }

  displayHistory() {
    return this.state.educationHistory.map((term) => {
      return term.isBeingEdited ? (
        <EducationForm
          key={term.key}
          info={term}
          handleSubmit={this.submitTermEdit}
        />
      ) : (
        <EducationInfo
          key={term.key}
          term={term}
          edit={this.editTerm}
          remove={this.removeTerm}
        />
      );
    });
  }

  toggleForm() {
    const form = document.getElementById("educationForm");
    form.style.display !== "none"
      ? (form.style.display = "none")
      : (form.style.display = "flex");
  }

  render() {
    return (
      <div>
        <h2>Education</h2>
        <ul>{this.displayHistory()}</ul>
        <EducationForm
          info={this.state}
          handleSubmit={this.addTerm}
          id="educationForm"
          style={{ display: "none" }}
        />
        <button onClick={this.toggleForm}>Add/Hide</button>
      </div>
    );
  }
}

export default Education;
