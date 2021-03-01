import React, { useState, useEffect } from "react";

const EducationForm = (props) => {
  const [term, setTerm] = useState(props.data)
  const {key, institution, startDate, endDate} = term

  const initTerm = () => {
    setTerm({
      key: key + 1,
      institution: '',
      startDate: '',
      endDate: '',
    })
  }

  const handleInput = (e) => {
    const { name, value } = e.target;
    setTerm({
      ...term,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(term)
    initTerm();
  }
    return (
      <form onSubmit={handleSubmit} id={props.id} style={props.style}>
        <input
          name="institution"
          value={institution}
          placeholder="Place Of Study"
          onChange={handleInput}
        ></input>
        <label>Duration of Term
        <input
          name="startDate"
          type='date'
          value={startDate}
          onChange={handleInput}
        ></input>
        <input
          name='endDate'
          type='date'
          value={endDate}
          onChange={handleInput}
          ></input>
          </label>
        <button>Submit</button>
      </form>
    );
  }


export default EducationForm;
