import React, { Component } from "react";
import CVForm from "./Components/CVForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      personalData: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
      },
      workData: [],
      educationData: [],
      isCompleted: false,
    };
    this.toggleCompletion = this.toggleCompletion.bind(this);
    this.updatePersonal = this.updatePersonal.bind(this);
    this.updateWork = this.updateWork.bind(this);
    this.updateEducation = this.updateEducation.bind(this);
    this.formatCv = this.formatCv.bind(this);
  }

  toggleCompletion() {
    this.setState((prevState) => ({
      isCompleted: !prevState.isCompleted,
    }));
  }

  updatePersonal(newData) {
    this.setState({
      personalData: newData,
    });
  }

  updateWork(newData) {
    this.setState({
      workData: newData,
    });
  }

  updateEducation(newData) {
    this.setState({
      educationData: newData,
    });
  }

  formatCv() {
    const { firstName, lastName, phoneNumber, email } = this.state.personalData;
    const { workData, educationData } = this.state;
    return (
      <main>
        <h1>
          {firstName} {lastName}
        </h1>
        <h3>{phoneNumber}</h3>
        <h3>{email}</h3>
        <h1>Work Experience</h1>
        <ul>
          {workData.map((job) => {
            return (
              <li key={job.key}>
                <h3>{job.companyName}</h3>
                <p>{job.position}</p>
                <p>{job.timeWorked}</p>
              </li>
            );
          })}
        </ul>
        <h1>Education History</h1>
        <ul>
          {educationData.map((term) => {
            return (
              <li key={term.key}>
                <h3>{term.institution}</h3>
                <p>{term.duration}</p>
              </li>
            );
          })}
        </ul>
      </main>
    );
  }

  render() {
    return (
      <div className="App" onClick={() => console.log(this.state)}>
        {this.state.isCompleted ? (
          this.formatCv()
        ) : (
          <CVForm
            updatePersonal={this.updatePersonal}
            updateWork={this.updateWork}
            updateEducation={this.updateEducation}
          />
        )}
        <button onClick={this.toggleCompletion}>Submit</button>
      </div>
    );
  }
}

export default App;
