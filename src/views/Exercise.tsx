import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Exercise = () => {
  const { exercise } = useParams();
  const [title, setTitle] = useState("");
  const [exercises, setExercises] = useState([
    { name: "Sit ups", setsReps: "10 x 3" },
    { name: "Toe taps", setsReps: "15 x 3" },
    { name: "Sit ups", setsReps: "10 x 3" },
    { name: "Plank", setsReps: "30 s" },
  ]);
  useEffect(() => {
    if (exercise === "quick-core-workout") {
      setTitle("Quick core workout");
    }
    if (exercise === "legday") {
      setTitle("Legday");
      setExercises([
        { name: "Squats", setsReps: "10 x 3" },
        { name: "Step ups", setsReps: "15 x 3" },
        { name: "Forward Lunge", setsReps: "16 x 3" },
        { name: "Hip Thrust", setsReps: "20 x 3" },
        { name: "Squats", setsReps: "10 x 3" },
        { name: "Step ups", setsReps: "15 x 3" },
        { name: "Forward Lunge", setsReps: "16 x 3" },
        { name: "Hip Thrust", setsReps: "20 x 3" },
      ]);
    }
    if (exercise === "upperbody-workout") {
      setTitle("Upperbody Workout");
      setExercises([
        { name: "Overhead press", setsReps: "10 x 3" },
        { name: "Push ups", setsReps: "15 x 3" },
        { name: "Bicep Crul", setsReps: "10 x 3" },
        { name: "Overhead press", setsReps: "10 x 3" },
        { name: "Push ups", setsReps: "15 x 3" },
        { name: "Bicep Crul", setsReps: "10 x 3" },
      ]);
    }
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      {exercises.map((ex) => (
        <div>
          <span>Exercise: {ex.name}, </span>
          <span>Sets: {ex.setsReps}</span>
        </div>
      ))}
    </div>
  );
};

export default Exercise;
