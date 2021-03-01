import React, { useState } from "react";
import JobFactory from "../JobFactory";

const WorkExperienceForm = (props) => {
  const [job, setJob] = useState({ ...props.data });
  const { key, companyName, position, startDate, endDate, desc } = job;

  const initJob = () => {
    setJob({
      key: key + 1,
      companyName: "",
      position: "",
      startDate: "",
      endDate: "",
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
    props.handleSubmit(
      JobFactory(key, companyName, position, startDate, endDate, desc)
    );
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
      <label>
        Time Worked
        <input
          name="startDate"
          type="date"
          value={startDate}
          onChange={handleInput}
        ></input>
        <input
          name="endDate"
          type="date"
          value={endDate}
          onChange={handleInput}
        ></input>
      </label>
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
