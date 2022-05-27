import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../components/Button/Button";
import WorkoutPage from "../components/Workout/WorkoutPage";
import { typeWorkout } from "./AllWorkoutsView";
import "../components/SignInForm/SignInForm.css";

export type typeExercise = {
  exerciseName: string;
};

const WorkoutView = () => {
  const { id } = useParams();
  const token = localStorage.getItem("jwt");
  const API_URL = `http://localhost:8080/api/v1`;
  const WITH_WORKOUT_ID = `/workout?id=${id}`;
  const GET_EXERCISES = `/get-exercises?id=${id}`;
  const [workout, setWorkout] = useState<typeWorkout>();
  const [exercises, setExercises] = useState<typeExercise[]>([]);
  const [timer, setTimer] = useState(0);
  setInterval(() => setTimer((n) => (n += 1)), 1000);

  useEffect(() => {
    axios
      .get(API_URL + WITH_WORKOUT_ID, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setWorkout(res?.data);
      });
    axios
      .get(API_URL + GET_EXERCISES, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((r) => {
        setExercises(r?.data);
      });
  }, []);

  const onClick = () => {};

  return (
    <>
      <WorkoutPage workout={workout} exercises={exercises} />
      <div className="sign-in-form-btn">
        <Button
          className="btns"
          buttenStyle="btn--primary--black"
          buttenSize="btn--large"
          type="submit"
          onClick={onClick}
        >
          Add workout
        </Button>
      </div>
    </>
  );
};

export default WorkoutView;
