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
    this.handleEdit = this.handleEdit.bind(this);
    this.startEdit = this.startEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
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
    //Finds corresponding job and updates information
    const newState = this.state.workHistory.map((job) => {
      if (job.key === jobInfo.key) {
        return {
          key: jobInfo.key,
          companyName: jobInfo.companyName,
          position: jobInfo.position,
          timeWorked: jobInfo.timeWorked,
          desc: jobInfo.desc,
          isBeingEdited: false,
        };
      }
      return job;
    });
    return newState;
  }

  startEdit(key) {
    //Sets designated job in workhistory to have isBeingEdited=true, signaling that a form should be displayed instead
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
  }

  handleEdit(newJob) {
    const newHistory = this.editJob(newJob);
    this.setState({
      workHistory: newHistory,
    });
  }

  handleSubmit(newJob) {
      const updatedHistory = this.state.workHistory.concat(newJob)
      this.setState({workHistory: updatedHistory})
      console.log(this.state)
  }

  displayHistory(arr) {
    return arr.map((job) => {
      const { key, companyName, position, timeWorked, desc } = job;
      if (job.isBeingEdited) {
        return (
          <WorkExperienceForm
            key={key}
            data={job}
            handleSubmit={this.handleEdit}
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
  
  toggleForm() {
    const form = document.getElementById("workForm")
    console.log(form)
    form.style.display !== 'none' ? form.style.display='none' : form.style.display='flex';
  }

  render() {
    return (
      <div>
        <h2>Work Experience</h2>
        {this.displayHistory(this.state.workHistory)}
        <WorkExperienceForm nextKey={this.state.workHistory.length} data={{}} handleSubmit={this.handleSubmit} />
        <button onClick={this.toggleForm} >Add/Hide</button>
      </div>
    );
  }
}

export default WorkExperience;
