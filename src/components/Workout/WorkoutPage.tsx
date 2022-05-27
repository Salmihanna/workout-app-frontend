import { typeWorkout } from "../../views/AllWorkoutsView";
import { typeExercise } from "../../views/WorkoutView";
import "./WorkoutPage.css";

type WorkoutPageProps = {
  workout: typeWorkout | undefined;
  exercises: typeExercise[];
};

const WorkoutPage = ({ workout, exercises }: WorkoutPageProps) => {
  return (
    <div>
      <div className="workout__item__img__wrap">
        <img
          src={`../../../${workout?.image}`}
          alt=""
          className="workout__item__img"
        />
      </div>
      <h1>{workout?.workoutName}</h1>
      <h3>{workout?.description}</h3>
      <div className="workout__exercise__wrap">
        {exercises.map((ex) => (
          <span>{ex.exerciseName} </span>
        ))}
      </div>
    </div>
  );
};

export default WorkoutPage;
