const EducationInfo = (props) => {
  const { key, institution, duration } = props.term;
  return (
    <li key={key} className="educationTerm">
      <h3>{institution}</h3>
      <div className="infoContainer">
        <p>{duration}</p>
      </div>
      <button onClick={() => props.edit(key)}>Edit</button>
      <button onClick={() => props.remove(key)}>Delete</button>
    </li>
  );
};

export default EducationInfo;
