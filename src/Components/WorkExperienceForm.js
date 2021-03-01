import React, { useEffect, useState } from "react";

const WorkExperienceForm = (props) => {
  const [job, setJob] = useState({ ...props.data });
  const { key, companyName, position, timeWorked, desc } = job;

  const initJob = () => {
    setJob({
      key: key + 1,
      companyName: "",
      position: "",
      timeWorked: "",
      desc: "",
      isBeingEdited: false,
    });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setJob({
      ...job,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(job);
    initJob();
  };

  return (
    <form id={props.id} onSubmit={handleSubmit} style={props.style}>
      <input
        name="companyName"
        value={companyName}
        onChange={handleInput}
        placeholder="Name Of Company"
      ></input>
      <input
        name="position"
        value={position}
        onChange={handleInput}
        placeholder="Position"
      ></input>
      <input
        name="timeWorked"
        value={timeWorked}
        onChange={handleInput}
        placeholder="Time Worked"
      ></input>
      <textarea
        className="jobDesc"
        name="desc"
        value={desc}
        onChange={handleInput}
        placeholder="Briefly Describe Your Responsibilites During Your Time Working This Job"
      ></textarea>
      <button>Submit</button>
    </form>
  );
};
export default WorkExperienceForm;
