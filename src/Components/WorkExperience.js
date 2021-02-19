import React, { Component } from "react";

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
        },
        {
          key: 1,
          companyName: "McDonald's",
          position: "Sanitary Worker",
          timeWorked: "2018-2019",
          desc: "Cleaned things",
        },
      ],
    };
    this.displayHistory = this.displayHistory.bind(this);
    this.removeFromHistory = this.removeFromHistory.bind(this);
  }

  removeFromHistory(key) {
    //Making a new arr by filtering out designated anonymous object, effectively deleting it from the array
    const updatedHistory = this.state.workHistory.filter((obj) => !(obj.key === key))
    this.setState({
      workHistory: updatedHistory,
    });
  }

  displayHistory(arr) {
    return arr.map((job) => {
      const { key, companyName, position, timeWorked, desc } = job;
      return (
        <div>
          <h1>{companyName}</h1>
          <h2>{position}</h2>
          <h2>{timeWorked}</h2>
          <h2>{desc}</h2>
          <button>Edit</button>
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
      </div>
    );
  }
}

export default WorkExperience;
