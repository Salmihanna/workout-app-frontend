import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { typeWorkout } from "./Workout";

type typeExercise = {
  exerciseName: string;
};

const Exercise = () => {
  const { id } = useParams();
  const token = localStorage.getItem("jwt");
  const API_URL = `http://localhost:8080/api/v1`;
  const WITH_WORKOUT_ID = `/workout?id=${id}`;
  const GET_EXERCISES = `/get-exercises?id=${id}`;
  const [workout, setWorkout] = useState<typeWorkout>();
  const [exercises, setExercises] = useState<typeExercise[]>([]);

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

  return (
    <div>
      <img src={`${workout?.image}`} alt=""></img>
      <h1>{workout?.workoutName}</h1>
      <p>{workout?.description}</p>

      {exercises.map((ex) => (
        <div>
          <span>{ex.exerciseName} </span>
        </div>
      ))}
    </div>
  );
};

export default Exercise;
