import React, { Component } from "react";
import CVForm from "./Components/CVForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      personalData: {
        firstName: "Anthony",
        lastName: "Mendoza",
        phoneNumber: "+1 (234) 567-8910",
        email: "abc123@gmail.com",
      },
      workData: [
        {
          key: 0,
          companyName: "Office",
          position: "Job Doer",
          timeWorked: "Too Long",
          desc: "Did Stuff",
        },
        {
          key: 1,
          companyName: "Restaurant",
          position: "Chef",
          timeWorked: "Too Long",
          desc: "Cooked Stuff",
        },
      ],
      educationData: [
        {
          key: 0,
          institution: "Place",
          duration: "Time",
        },
        {
          key: 1,
          institution: "School",
          duration: "Some Time",
        },
      ],
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
        <div className="personalInfo">
          <h1 className="sectionHeader">
            {firstName} {lastName}
          </h1>
          <h3>{phoneNumber}</h3>
          <h3>{email}</h3>
        </div>
        <div className="workExperience">
          <h1 className="sectionHeader">Work Experience</h1>
          <ul>
            {workData.map((job) => {
              return (
                <li className='prevJob' key={job.key}>
                  <h3>{job.companyName}</h3>
                  <p>{job.position}</p>
                  <p>{job.timeWorked}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="educationHistory">
          <h1 className="sectionHeader">Education History</h1>
          <ul>
            {educationData.map((term) => {
              return (
                <li className='educationTerm' key={term.key}>
                  <h3>{term.institution}</h3>
                  <p>{term.duration}</p>
                </li>
              );
            })}
          </ul>
        </div>
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
            data={this.state}
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
