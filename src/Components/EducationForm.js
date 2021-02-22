import React, { Component } from "react";

class EducationForm extends Component {
  constructor(props) {
    super();
    if (!(props.info.key > -1)) {
      this.state = {
          key: props.info.educationHistory.length,
          institution: "",
          duration: "",
        }
      } else { 
        console.log(props)
        this.state = {
          key: props.info.key,
          institution: props.info.institution,
          duration: props.info.duration,
        };
      }
    this.handleInput = this.handleInput.bind(this);
    this.initState = this.initState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(this.state);
  }

  initState() {
    //increments key and clears state fields for next submission
    this.setState((prevState) => {
      return {
        key: prevState.key + 1,
        institution: "",
        duration: "",
      };
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const handler = this.props.handleSubmit
    //this.props.addTerm(this.state);
    const newTerm = {
      ...this.state,
      isBeingEdited: false
    }
    handler(newTerm)
    this.initState();
    console.log(newTerm)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} onClick={()=> console.log(this.state)}>
        <input
          name="institution"
          value={this.state.institution}
          placeholder="Place Of Study"
          onChange={this.handleInput}
        ></input>
        <input
          name="duration"
          value={this.state.duration}
          placeholder="Duration of Term"
          onChange={this.handleInput}
        ></input>
        <button>Submit</button>
      </form>
    );
  }
}

export default EducationForm;
