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
  }

  displayHistory(arr) {
    return arr.map((job) => {
      const { companyName, position, timeWorked, desc } = job;
      return (
        <div>
          <h1>{companyName}</h1>
          <h2>{position}</h2>
          <h2>{timeWorked}</h2>
          <h2>{desc}</h2>
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
