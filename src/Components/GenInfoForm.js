import React, { Component } from "react";

class GenInfoForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      isShowing: "form",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    //validate
    this.props.handleSubmit(this.state)
  }

  render() {
    const { firstName, lastName, phoneNumber, email } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={this.handleInput}
        ></input>
        <input
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={this.handleInput}
        ></input>
        <input
          name="phoneNumber"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={this.handleInput}
        ></input>
        <input
          name="email"
          placeholder="Email"
          value={email}
          onChange={this.handleInput}
        ></input>
        <button>Submit</button>
      </form>
    );
  }
}

export default GenInfoForm;
