const PersonalInfo = (props) => {
  const { firstName, lastName, phoneNumber, email, toggleDisplay } = props;
  return (
    <div>
      <h1>
        {firstName} {lastName}
      </h1>
      <div className='infoContainer'>
        <h3>{phoneNumber}</h3>
        <h3>{email}</h3>
      </div>
      <button onClick={toggleDisplay}>Edit</button>
    </div>
  );
};

export default PersonalInfo;
