const Student = (props) => {

  const studentContainer = {
    backgroundColor: "yellow",
    padding: "2px",
    margin: "5px",
    display: "inline-block"
  }

  const studentCard = {
    fontSize: "2em",
    padding: "10px",
    margin: "2px",
    width: "300px",
    textAlign: "center",
    backgroundColor: "black"
  }

  const studentData = {
    padding: "10px",
    color: "lightgrey"
  }

  const { name, age, isStudent } = props;

  return (
    <div style={studentContainer}>
      <div style={studentCard}>
        <p style={{ ...studentData, fontWeight: "bold" }}>{name || "Guest"} </p>
        <p style={studentData}>Age : {Number(age) || 0}</p>
        <p style={studentData}>Student : {isStudent === true ? "Yes" : "No"}</p>
      </div>
    </div>
  );
};

export default Student;
