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
    this.toggleDisplay = this.toggleDisplay.bind(this);
    this.delegateDisplay = this.delegateDisplay.bind(this);
  }

  handleInput(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.toggleDisplay();
  }

  toggleDisplay() {
      this.state.isShowing === "form" ? this.setState({isShowing:'display'}) : this.setState({isShowing:'form'})
  }

  delegateDisplay() {
    const { firstName, lastName, phoneNumber, email } = this.state;
    if (this.state.isShowing === "form") {
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
    return (
      <div onClick={this.toggleDisplay}>
        <h1>{firstName}</h1>
        <h1>{lastName}</h1>
        <h1>{phoneNumber}</h1>
        <h1>{email}</h1>
      </div>
    );
  }

  render() {
    return this.delegateDisplay();
  }
}

export default GenInfoForm;