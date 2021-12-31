import "./Job.css";
const Job = (props) => {
  return (
    <div className={props.color}>
      <h2>{props.title}</h2>
      <div className="description">
        <span>{props.contractType}</span> <span>{props.country}</span>
        <span>{props.city}</span>
      </div>
    </div>
  );
};

export default Job;
