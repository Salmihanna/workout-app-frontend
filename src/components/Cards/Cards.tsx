import Card from "./components/Card";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Make Yourself Stronger</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Card
              src="images/yoga-nr1.jpg"
              text="Yoga for beginners"
              label="Yoga"
              path="/yoga"
            />
            <Card
              src="images/run-nr1.jpg"
              text="Start running"
              label="Run"
              path="/run"
            />
            <Card
              src="images/workout-nr1.jpg"
              text="Quick core workout"
              label="Workout"
              path="/workout"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
