import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Card from "../components/Cards/components/Card";

export type typeWorkout = {
  id: number;
  workoutName: string;
  description: string;
  duration: number;
  image: string;
};

const AllWorkoutsView = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("jwt");
  const API_URL = `http://localhost:8080/api/v1/all-workouts`;
  const [workouts, setWorkouts] = useState<typeWorkout[]>([]);

  useEffect(() => {
    axios
      .get(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setWorkouts(res?.data);
      });
    // .catch(() => {
    //   window.localStorage.setItem("jwt", "");
    //   navigate("/sign-in");
    // });
  }, []);

  return (
    <div className="cards">
      <h1>Pick a workout</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {workouts?.map((workout) => (
              <Card
                src={workout?.image}
                text={workout?.workoutName}
                label={`${workout?.duration} min`}
                path={`/workout/${workout?.id}`}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AllWorkoutsView;
