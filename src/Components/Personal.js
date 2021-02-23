import React, { Component } from "react";
import PersonalForm from "./PersonalForm";
import PersonalInfo from "./PersonalInfo";

class Personal extends Component {
  constructor(props) {
    super();
    this.state = {
      firstName: props.personalData.firstName,
      lastName: props.personalData.lastName,
      phoneNumber: props.personalData.phoneNumber,
      email: props.personalData.email,
    };
    props.personalData.firstName !== ""
      ? (this.state.isDisplaying = "info")
      : (this.state.isDisplaying = "form");
    this.toggleDisplay = this.toggleDisplay.bind(this);
    this.delegateDisplay = this.delegateDisplay.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleDisplay() {
    this.state.isDisplaying === "form"
      ? this.setState({ isDisplaying: "info" })
      : this.setState({ isDisplaying: "form" });
  }

  delegateDisplay() {
    if (this.state.isDisplaying === "form") {
      return (
        <PersonalForm
          info={this.state}
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
        />
      );
    }
    return <PersonalInfo info={this.state} edit={this.toggleDisplay} />;
  }

  handleSubmit(updatedInfo) {
    this.setState(updatedInfo);
    this.props.updatePersonal(updatedInfo);
    this.toggleDisplay();
  }

  render() {
    return (
      <div className="personalInfo">
        <h2>Personal Information</h2>
        {this.delegateDisplay()}
      </div>
    );
  }
}

export default Personal;
