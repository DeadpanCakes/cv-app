import React, { Component } from "react";
import WorkExperienceForm from "./WorkExperienceForm";
import WorkExperienceInfo from './WorkExperienceInfo';

class WorkExperience extends Component {
  constructor(props) {
    super();
    this.state = {
      workHistory: [
        {
          key: 0,
          companyName: "hru",
          position: 'uerhl,',
          timeWorked: 'uhera',
          desc: 'uhra',
        },
        {
          key: 1,
          companyName: '39128h',
          position: 'uerhuel,',
          timeWorked: 'uheaura',
          desc: 'uhauera',
        }
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

  async handleSubmit(newJob) {
      const updatedHistory = this.state.workHistory.concat(newJob)
      await this.setState({workHistory: updatedHistory})
      this.props.updateWork(this.state.workHistory)
  }

  displayHistory(arr) {
    return arr.map((job) => {
      const { key } = job;
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
        <WorkExperienceInfo key={key} workHistory={job} edit={this.startEdit} remove={this.removeFromHistory}/>
      );
    });
  }
  
  toggleForm() {
    const form = document.getElementById("workForm")
    form.style.display !== 'none' ? form.style.display='none' : form.style.display='flex';
  }

  render() {
    return (
      <div>
        <h2>Work Experience</h2>
        <ul>
        {this.displayHistory(this.state.workHistory)}
        </ul>
        <WorkExperienceForm id="workForm" nextKey={this.state.workHistory.length} data={{}} handleSubmit={this.handleSubmit} style={{display:'none'}} />
        <button onClick={this.toggleForm} >Add/Hide</button>
      </div>
    );
  }
}

export default WorkExperience;
