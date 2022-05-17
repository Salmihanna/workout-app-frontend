import "../App.css";
import Card from "../components/Cards/components/Card";

const Workout = () => {
  return (
    <div className="cards">
      <h1>Pick a workout</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Card
              src="images/workout-nr1.jpg"
              text="Quick core workout"
              label="5 min"
              path="/workout/quick-core-workout"
            />
            <Card
              src="images/workout-nr3.jpg"
              text="Legday"
              label="20 min"
              path="/workout/legday"
            />
            <Card
              src="images/workout-nr4.jpg"
              text="UpperBody workout"
              label="15 min"
              path="/workout/upperbody-workout"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Workout;
