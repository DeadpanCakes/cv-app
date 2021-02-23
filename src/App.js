import React, { Component } from "react";
import CVForm from "./Components/CVForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      personalData: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: '',
      },
      workData: [],
      educationData: [],
      isCompleted: false
    };
    this.toggleCompletion = this.toggleCompletion.bind(this)
    this.updatePersonal = this.updatePersonal.bind(this)
    this.updateWork = this.updateWork.bind(this)
    this.updateEducation = this.updateEducation.bind(this)
  }

  toggleCompletion() {
    this.setState(prevState=> ({
      isCompleted: !prevState.isCompleted
    }))
  }

  updatePersonal(newData) {
    this.setState({
      personalData: newData
    })
  }

  updateWork(newData) {
    this.setState({
      workData: newData
    })
  }  
  
  updateEducation(newData) {
    this.setState({
      educationData: newData
    })
  }
  formatCv() {

  }

  render() {
    return (
      <div className="App">
        <CVForm
          updatePersonal={this.updatePersonal}
          updateWork={this.updateWork}
          updateEducation={this.updateEducation}
        />
        <button onClick={()=> console.log(this.state)}>Submit</button>
      </div>
    );
  }
}

export default App;
