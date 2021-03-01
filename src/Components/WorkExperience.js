import React, { useState } from "react";
import WorkExperienceForm from "./WorkExperienceForm";
import WorkExperienceInfo from "./WorkExperienceInfo";

const WorkExperience = (props) => {
  const { work, updateWork } = props;
  const [newFormShowing, setNewFormShowing] = useState(false);

  const toggleEdit = (targetKey) => {
    //Sets designated job in workhistory to have isBeingEdited=true, signaling that a form should be displayed instead
    const editTarget = work.find((job) => job.key === targetKey);
    const updatedHistory = work.map((job) => {
      if (job.key === targetKey) {
        return {
          ...editTarget,
          isBeingEdited: true,
        };
      }
      return job;
    });
    updateWork(updatedHistory);
  };

  const handleEdit = (targetKey, updatedJob) => {
    console.log(updatedJob)
    const updatedHistory = work.map((job) =>
      job.key === targetKey ? updatedJob : job
    );
    updateWork(updatedHistory);
  };

  const addWork = (newJob) => {
    const newHistory = props.work.concat(newJob);
    props.updateWork(newHistory);
  };

  const removeWork = (key) => {
    props.updateWork(work.filter((job) => job.key !== key));
  };

  const displayHistory = (arr) => {
    return arr.map((job) => {
      const { key } = job;
      return job.isBeingEdited ? (
        <WorkExperienceForm
          key={key}
          data={job}
          handleSubmit={(jobValue) => handleEdit(key, jobValue)}
        />
      ) : (
        <WorkExperienceInfo
          key={key}
          job={job}
          edit={toggleEdit}
          remove={removeWork}
        />
      );
    });
  };

  const toggleForm = () => {
    newFormShowing ? setNewFormShowing(false) : setNewFormShowing(true);
  };

  return (
    <div className="workExperience">
      <div className="sectionHeader">
        <h2>Work Experience</h2>
        <button className="addBtn" onClick={toggleForm}>
          {newFormShowing ? "Hide Form" : "Add Section"}
        </button>
      </div>
      <ul className="jobList">{displayHistory(work)}</ul>
      <WorkExperienceForm
        nextKey={work.length}
        data={{}}
        handleSubmit={addWork}
        style={newFormShowing ? { display: "flex" } : { display: "none" }}
      />
    </div>
  );
};

export default WorkExperience;
