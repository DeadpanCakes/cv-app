import React, { Component } from "react";
import GenInfoForm from "./GenInfoForm";
import InfoPreview from "./InfoPreview";

class GeneralInfo extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      isDisplaying: "form" 
    };
    this.toggleDisplay = this.toggleDisplay.bind(this)
    this.delegateDisplay = this.delegateDisplay.bind(this)
  }

  toggleDisplay() {
    this.state.isDisplaying === 'form' ? this.setState({isDisplaying: 'info'}) : this.setState({isDisplaying:'form'})
  }

  delegateDisplay() {
    if (this.state.isDisplaying === 'form') {
      return <GenInfoForm />
    }
    return <InfoPreview />
  }

  render() {
    return (
      this.delegateDisplay()
    );
  }
}

export default GeneralInfo;
