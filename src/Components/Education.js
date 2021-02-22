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
          isBeingEdited: false,
        },
        {
          key: 1,
          institution: "School",
          duration: "2017-2019",
          isBeingEdited: false,
        },
        {
          key: 2,
          institution: "Place",
          duration: "1930-1933",
          isBeingEdited: false,
        },
      ],
    };
    this.addTerm = this.addTerm.bind(this);
    this.displayHistory = this.displayHistory.bind(this);
    this.removeTerm = this.removeTerm.bind(this);
    this.editTerm = this.editTerm.bind(this);
    this.submitTermEdit = this.submitTermEdit.bind(this);
  }

  addTerm(newTerm) {
    const updatedHistory = this.state.educationHistory.concat(newTerm);
    this.setState({ educationHistory: updatedHistory });
  }

  removeTerm(key) {
    const updatedHistory = this.state.educationHistory.filter(
      (term) => term.key !== key
    );
    console.log(updatedHistory);
    this.setState({ educationHistory: updatedHistory });
  }

  editTerm(key) {
    const targetTerm = this.state.educationHistory.find(item => item.key === key)
    const updatedHistory = this.state.educationHistory.map(term=> {
        if (term===targetTerm) {
          return {
            ...targetTerm,
            isBeingEdited: true,
          }
        }
        return term
      })
    this.setState({
      educationHistory: updatedHistory
    })
    console.log(this.state)
  }

  submitTermEdit(editedTerm) {
    //given a key, find associated object, access object's info, input info as value for form,
    //upon submission of form, create new object, setState, with new object taking place of old one it arr
    const targetKey = editedTerm.key
    const updatedHistory = this.state.educationHistory.map(term => {
      if (term.key === targetKey) {
        return editedTerm
      } else {
        return term
      }
    })
    this.setState({
      educationHistory: updatedHistory
    })
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
        <li key={term.key}>
          <h3>{term.institution}</h3>
          <p>{term.duration}</p>
          <button onClick={() => this.editTerm(term.key)}>Edit</button>
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
        <EducationForm info={this.state} handleSubmit={this.addTerm} />
        <button onClick={this.addTerm}>add</button>
      </div>
    );
  }
}

export default Education;
