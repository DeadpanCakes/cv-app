const WorkExperienceInfo = (props) => {
  const { key, companyName, position, timeWorked, desc } = props.job;
  return (
    <div>
      <li key={key} className="prevJob">
        <h3>{companyName}</h3>
        <div className="infoContainer">
          <p>{position}</p>
          <p>{timeWorked}</p>
          <p>{desc}</p>
        </div>
        <button onClick={() => props.edit(key)}>Edit</button>
        <button onClick={() => props.remove(key)}>Delete</button>
      </li>
    </div>
  );
};
export default WorkExperienceInfo;
