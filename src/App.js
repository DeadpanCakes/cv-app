import React, { useState } from "react";
import CVForm from "./Components/CVForm";
import JobFactory from "./JobFactory";

const App = () => {
  const [firstName, setFirstName] = useState("Anthony");
  const [lastName, setLastName] = useState("Mendoza");
  const [phoneNumber, setPhoneNumber] = useState("+1 (234) 567-8910");
  const [email, setEmail] = useState("abc123@gmail.com");

  const [work, setWork] = useState([
    JobFactory(
      0,
      "Office",
      "Job Doer",
      "2015-03-03",
      "2016-01-01",
      "Did Stuff"
    ),
    JobFactory(
      1,
      "Restaurant",
      "Chef",
      "2017-05-01",
      "2019-03-03",
      "Cooked Stuff"
    ),
  ]);

  const [education, setEducation] = useState([
    {
      key: 0,
      institution: "Place",
      startDate: "2021-03-02",
      endDate: "2021-03-23",
    },
    {
      key: 1,
      institution: "School",
      startDate: "2017-03-09",
      endDate: "2019-03-09",
    },
  ]);

  const [completion, setCompletion] = useState(false);

  const toggleCompletion = () => {
    completion ? setCompletion(false) : setCompletion(true);
  };

  const updatePersonal = (e) => {
    switch (e.target.name) {
      case "firstName":
        setFirstName(e.target.value);
        break;
      case "lastName":
        setLastName(e.target.value);
        break;
      case "phoneNumber":
        setPhoneNumber(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      default:
        console.log("something went wrong");
    }
  };

  const updateWork = (updatedWork) => {
    setWork(updatedWork);
  };

  const updateEducation = (updateEducation) => {
    setEducation(updateEducation);
  };

  const formatCv = () => {
    return (
      <main>
        <div className="personalInfo">
          <h1 className="sectionHeader">
            {firstName} {lastName}
          </h1>
          <div className="infoContainer">
            <h3>{phoneNumber}</h3>
            <h3>{email}</h3>
          </div>
        </div>
        <div className="workExperience">
          <h2 className="sectionHeader">Work Experience</h2>
          <ul>
            {work.map((job) => {
              return (
                <li className="prevJob" key={job.key}>
                  <h3>{job.companyName}</h3>
                  <div className="infoContainer">
                    <p>{job.position}</p>
                    <p>{job.duration}</p>
                    <p>{job.desc}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="educationHistory">
          <h2 className="sectionHeader">Education History</h2>
          <ul>
            {education.map((term) => {
              return (
                <li className="educationTerm" key={term.key}>
                  <h3>{term.institution}</h3>
                  <div className="infoContainer">
                    <p>
                      {term.startDate} To {term.endDate}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    );
  };

  return (
    <div className="App" onClick={() => console.log(work)}>
      {completion ? (
        formatCv()
      ) : (
        <CVForm
          firstName={firstName}
          lastName={lastName}
          phoneNumber={phoneNumber}
          email={email}
          work={work}
          education={education}
          updatePersonal={updatePersonal}
          updateWork={updateWork}
          updateEducation={updateEducation}
        />
      )}
      <button onClick={toggleCompletion}>Submit</button>
    </div>
  );
};

export default App;
