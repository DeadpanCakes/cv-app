const WorkExperienceInfo = (props) => {
  const { key, companyName, position, startDate, endDate, desc } = props.job;
  const options = { year: "numeric", month: "long", day: "numeric" };
  return (
    <div>
      <li key={key} className="prevJob">
        <h3>{companyName}</h3>
        <div className="infoContainer">
          <p>{position}</p>
          <p>{new Date(startDate).toLocaleString('en-US', options)} To {new Date(endDate).toLocaleString('en-US', options)}</p>
          <p>{desc}</p>
        </div>
        <button onClick={() => props.edit(key)}>Edit</button>
        <button onClick={() => props.remove(key)}>Delete</button>
      </li>
    </div>
  );
};
export default WorkExperienceInfo;
