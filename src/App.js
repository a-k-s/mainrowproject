import "./styles.css";
function getRow(person) {
  return (
    <div className="row">
      <p>{person.first}</p>
      <p>{person.last}</p>
      <p>{person.school}</p>
      <p>{person.color}</p>
    </div>
  );
}
export default function App() {
  let classRoster = [
    { first: "FIRST", last: "LAST", school: "SCHOOL", color: "FAV COLOR" },
    { first: "Anton", last: "Schuster", school: "Latin", color: "Orange" },
    { first: "Diego", last: "Cruz", school: "Macalester", color: "Red" },
    { first: "Athziri", last: "Garcia", school: "Cristo Rey ", color: "Blue" },
    {
      first: "Yasir",
      last: "Hirsi",
      school: "Mather High School",
      color: "Red"
    }
  ];
  return <div className="App">{classRoster.map(getRow)}</div>;
}
