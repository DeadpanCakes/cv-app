import React, { Component } from "react";
import PersonalForm from "./PersonalForm";
import PersonalInfo from "./PersonalInfo";

class Personal extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      isDisplaying: "form" 
    };
    this.toggleDisplay = this.toggleDisplay.bind(this)
    this.delegateDisplay = this.delegateDisplay.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  toggleDisplay() {
    this.state.isDisplaying === 'form' ? this.setState({isDisplaying: 'info'}) : this.setState({isDisplaying:'form'})
  }

  delegateDisplay() {
    if (this.state.isDisplaying === 'form') {
      return <PersonalForm info={this.state} handleSubmit={this.handleSubmit} />
    }
    return <PersonalInfo info={this.state} edit={this.toggleDisplay} />
  }

  handleSubmit(e) {
    this.setState(e)
    this.toggleDisplay()
  }

  render() {
    return (
      <div>
        <h2>Personal Information</h2>
        {this.delegateDisplay()}
      </div>
    );
  }
}

export default Personal;
