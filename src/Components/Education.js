import React, { Component } from "react";
import EducationForm from "./EducationForm";
import EducationInfo from "./EducationInfo";

class Education extends Component {
  constructor(props) {
    super();
    this.state = {
      educationHistory: props.educationData,
      newFormShowing: false,
    };
    this.addTerm = this.addTerm.bind(this);
    this.displayHistory = this.displayHistory.bind(this);
    this.removeTerm = this.removeTerm.bind(this);
    this.editTerm = this.editTerm.bind(this);
    this.submitTermEdit = this.submitTermEdit.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  async addTerm(newTerm) {
    const updatedHistory = this.state.educationHistory.concat(newTerm);
    await this.setState({ educationHistory: updatedHistory });
    this.props.updateEducation(this.state.educationHistory);
  }

  async removeTerm(key) {
    const updatedHistory = this.state.educationHistory.filter(
      (term) => term.key !== key
    );
    await this.setState({ educationHistory: updatedHistory });
    this.props.updateEducation(this.state.educationHistory);
  }

  async editTerm(key) {
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
    await this.setState({
      educationHistory: updatedHistory,
    });
    this.props.updateEducation(this.state.educationHistory);
  }

  async submitTermEdit(editedTerm) {
    const targetKey = editedTerm.key;
    const updatedHistory = this.state.educationHistory.map((term) => {
      if (term.key === targetKey) {
        return editedTerm;
      } else {
        return term;
      }
    });
    await this.setState({
      educationHistory: updatedHistory,
    });
    this.props.updateEducation(this.state.educationHistory);
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
    this.state.newFormShowing
      ? this.setState({ newFormShowing: false })
      : this.setState({ newFormShowing: true });
  }

  render() {
    return (
      <div className="educationHistory">
        <div className="sectionHeader">
          <h2>Education</h2>
          <button className="addBtn" onClick={this.toggleForm}>
            {this.state.newFormShowing ? "X" : "+"}
          </button>
        </div>
        <ul className="educationList">{this.displayHistory()}</ul>
        <EducationForm
          info={this.state}
          handleSubmit={this.addTerm}
          id="educationForm"
          style={
            this.state.newFormShowing
              ? { display: "flex" }
              : { display: "none" }
          }
        />
      </div>
    );
  }
}

export default Education;
