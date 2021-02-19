import React, { Component } from "react";
import PersonalInfoForm from "./PersonalInfoForm";
import InfoPreview from "./InfoPreview";

class PersonalInfo extends Component {
  constructor(props) {
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
      return <PersonalInfoForm info={this.state} handleSubmit={this.handleSubmit} />
    }
    return <InfoPreview info={this.state} edit={this.toggleDisplay} />
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

export default PersonalInfo;
