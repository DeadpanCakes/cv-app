import React, { Component } from "react";
import WorkExperienceForm from "./WorkExperienceForm";

class WorkExperience extends Component {
  constructor() {
    super();
    this.state = {
      workHistory: [
        {
          key: 0,
          companyName: "Champs",
          position: "Sales",
          timeWorked: "2019-2020",
          desc: "Sold things",
          isBeingEdited: false,
        },
        {
          key: 1,
          companyName: "McDonald's",
          position: "Sanitary Worker",
          timeWorked: "2018-2019",
          desc: "Cleaned things",
          isBeingEdited: false,
        },
      ],
    };
    this.displayHistory = this.displayHistory.bind(this);
    this.removeFromHistory = this.removeFromHistory.bind(this);
    this.editJob = this.editJob.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.startEdit = this.startEdit.bind(this);
  }

  removeFromHistory(key) {
    //Making a new arr by filtering out designated anonymous object, effectively deleting it from the array
    const updatedHistory = this.state.workHistory.filter(
      (obj) => !(obj.key === key)
    );
    this.setState({
      workHistory: updatedHistory,
    });
  }

  editJob(jobInfo) {
    const newState = this.state.workHistory.map((job) => {
      if (job.key === jobInfo.key) {
        return {
          key: jobInfo.key,
          position: jobInfo.position,
          timeWorked: jobInfo.timeWorked,
          desc: jobInfo.timeWorked,
          isBeingEdited: false,
        };
      }
      return job;
    });
    return newState;
  }

  startEdit(key) {
    const editTarget = this.state.workHistory.find((job) => job.key === key);
    const updatedHistory = this.state.workHistory.map((job) => {
      if (job.key === key) {
        return {
          ...editTarget,
          isBeingEdited: true,
        };
      }
      return job;
    });
    this.setState({workHistory: updatedHistory});
    console.log(updatedHistory, this.state)
  }

  handleSubmit(newJob) {
    const newHistory = this.editJob(newJob);
    this.setState({
      workHistory: newHistory,
    });
  }

  displayHistory(arr) {
    return arr.map((job) => {
      const { key, companyName, position, timeWorked, desc } = job;
      if (job.isBeingEdited) {
        return (
          <WorkExperienceForm
            key={key}
            data={job}
            handleSubmit={this.handleSubmit}
          />
        );
      }
      return (
        <div key={key}>
          <h1>{companyName}</h1>
          <h2>{position}</h2>
          <h2>{timeWorked}</h2>
          <h2>{desc}</h2>
          <button onClick={() => this.startEdit(key)}>Edit</button>
          <button onClick={() => this.removeFromHistory(key)}>Delete</button>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Work Experience</h2>
        {this.displayHistory(this.state.workHistory)}
        <WorkExperienceForm data={{}} handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default WorkExperience;
