const InfoPreview = (props) => {
  const { firstName, lastName, phoneNumber, email } = props.info;
  return (
    <div>
      <h1>
        {firstName} {lastName}
      </h1>
      <div className='infoContainer'>
        <h3>{phoneNumber}</h3>
        <h3>{email}</h3>
      </div>
      <button onClick={props.edit}>Edit</button>
    </div>
  );
};

export default InfoPreview;
