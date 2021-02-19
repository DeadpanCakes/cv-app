import React, { Component } from "react";
import GenInfoForm from "./GenInfoForm";

class GeneralInfo extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
    };
  }
  render() {
    return (
      <div>
        <h1>General Information</h1>
        <GenInfoForm />
      </div>
    );
  }
}

export default GeneralInfo;
