import { useEffect, useState } from "react";

type ListExercisesProps = {
  id: number;
  description: string;
  exerciseName: string;
};

const ListExercises = () => {
  const API_GET_ALL_EXERCISES = "http://localhost:8080/api/v1/exercises";

  const [allExercises, setAllExercises] = useState<ListExercisesProps[]>([]);

  const getAllExercises = async () => {
    const res = await fetch(API_GET_ALL_EXERCISES);
    const data = await res.json();

    return data;
  };

  const addAllExercises = async (exercises: ListExercisesProps[]) => {
    if (exercises !== null && exercises !== undefined) {
      setAllExercises(exercises);
    }
  };

  const fetchexercises = async () => {
    const data = await getAllExercises();
    addAllExercises(data);
  };

  useEffect(() => {
    fetchexercises();
  }, []);
  return (
    <>
      <h1>
        {allExercises.map((i) => i?.id + i?.description + i?.exerciseName)}{" "}
      </h1>
    </>
  );
};

export default ListExercises;
