const WorkExperienceInfo = (props) => {
  const { key, companyName, position, timeWorked, desc } = props.workHistory;
  return (
    <div>
      <li key={key}>
        <h3>{companyName}</h3>
        <p>{position}</p>
        <p>{timeWorked}</p>
        <p>{desc}</p>
        <button onClick={() => props.edit(key)}>Edit</button>
        <button onClick={() => props.remove(key)}>Delete</button>
      </li>
    </div>
  );
};
export default WorkExperienceInfo;
