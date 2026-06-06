function StudentCard(props) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h2>Student Info</h2>
      <p>Name: {props.name}</p>
      <p>Course: {props.course}</p>
    </div>
  );
}

export default StudentCard;
