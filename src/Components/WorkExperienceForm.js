import React, { Component } from "react";

class WorkExperienceForm extends Component {
  constructor(props) {
    super();
    if (props.data.key>=0) {
      const { key, companyName, position, timeWorked, desc } = props.data;
      this.state = {
        key: key,
        companyName: companyName,
        position: position,
        timeWorked: timeWorked,
        desc: desc,
        isBeingEdited: false,
      };
    } else {
      this.state = {
        key: props.nextKey,
        companyName: "",
        position: "",
        timeWorked: "",
        desc: "",
        isBeingEdited: false,
      };
    }
    this.incrementKey = this.incrementKey.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  incrementKey() {
      this.setState(prevState=>{
          return {
              key: prevState.key+1
          }
      })
  }

  handleInput(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const updatedInfo = this.state;
    this.props.handleSubmit(updatedInfo);
    this.setState({
        key: this.state.key,
        companyName: "",
        position: "",
        timeWorked: "",
        desc: "",
        isBeingEdited: false,
    })
    this.incrementKey()
  }

  render() {
    const { companyName, position, timeWorked, desc } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="companyName"
          value={companyName}
          onChange={this.handleInput}
          placeholder="Name Of Company"
        ></input>
        <input
          name="position"
          value={position}
          onChange={this.handleInput}
          placeholder="Position"
        ></input>
        <input
          name="timeWorked"
          value={timeWorked}
          onChange={this.handleInput}
          placeholder="Time Worked"
        ></input>
        <input
          name="desc"
          type="textarea"
          value={desc}
          onChange={this.handleInput}
          placeholder="Briefly Describe Your Responsibilites During Your Time Working This Job"
        ></input>
        <button>Submit</button>
      </form>
    );
  }
}

export default WorkExperienceForm;
