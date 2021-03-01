import React from "react";

const PersonalForm = (props) => {
  const {firstName, lastName, phoneNumber, email, updatePersonal, handleSubmit} = props;

  return (
    <form onSubmit={handleSubmit} onClick={props.checkDisplay}>
      <input
        name="firstName"
        placeholder="First Name"
        value={firstName}
        onChange={updatePersonal}
      ></input>
      <input
        name="lastName"
        placeholder="Last Name"
        value={lastName}
        onChange={updatePersonal}
      ></input>
      <input
        name="phoneNumber"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={updatePersonal}
      ></input>
      <input
        name="email"
        placeholder="Email"
        value={email}
        onChange={updatePersonal}
      ></input>
      <button>Submit</button>
    </form>
  );
};

export default PersonalForm;
