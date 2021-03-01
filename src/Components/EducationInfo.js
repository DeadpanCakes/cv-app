const EducationInfo = (props) => {
  const { key, institution, startDate, endDate } = props.term;
  const options = { year: "numeric", month: "long", day: "numeric" };
  return (
    <li key={key} className="educationTerm">
      <h3>{institution}</h3>
      <div className="infoContainer">
        <p>
          {new Date(startDate).toLocaleString("en-US", options)} To {" "}
          {new Date(endDate).toLocaleString("en-US", options)}
        </p>
      </div>
      <button onClick={() => props.edit(key)}>Edit</button>
      <button onClick={() => props.remove(key)}>Delete</button>
    </li>
  );
};

export default EducationInfo;
