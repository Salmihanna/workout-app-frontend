import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Cards/components/Card";
import { parseJwt } from "../util/parse-jwt";
import { typeWorkout } from "./AllWorkoutsView";

type userType = {};

type userAndWorkout = {
  id: number;
  workout: typeWorkout;
  workoutPerformed: Date;
};

const UserProfile = () => {
  const token = localStorage.getItem("jwt") ?? "";
  const jwt = token !== "" ? parseJwt(token) : null;
  const API_URL = `http://localhost:8080/api/v1`;
  const _GET_USER_WITH_JWT = `/profile?id=${token !== "" && jwt.id}`;
  const _GET_WORKOUTS_WITH_JWT = `/workout-from-user?id=${
    token !== "" && jwt.id
  }`;
  const AND_TIME = `/user-and-workspace-from-user?id=${token !== "" && jwt.id}`;
  const navigate = useNavigate();
  const [userAndWorkout, setUserAndWorkout] = useState<userAndWorkout[]>([]);
  const [firstName, setFirstName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    try {
      axios
        .get(API_URL + _GET_USER_WITH_JWT, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setFirstName(res?.data?.firstName);
          setUsername(res?.data?.username);
          setEmail(res?.data?.email);
        })
        .catch(() => {
          window.localStorage.setItem("jwt", "");
          navigate("/sign-in");
        });
      axios
        .get(API_URL + AND_TIME, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setUserAndWorkout(res.data);
          console.log(userAndWorkout);
        });
    } catch {
      window.localStorage.setItem("jwt", "");
      navigate("/sign-in");
    }
  }, []);

  return (
    <div>
      <div>
        <h1>Welcome {firstName}</h1>
        <h2>Username: {username}</h2>
        <h2>Email: {email}</h2>
      </div>
      <div>
        <h3>Previous workouts</h3>
      </div>
      <div>
        {userAndWorkout?.map((workout) => (
          <div className="cards__container">
            <Card
              src={workout.workout.image}
              text={workout?.workout.workoutName}
              label={workout.workoutPerformed
                .toString()
                .replace("T", " ")
                .slice(0, -3)}
              path={`/workout/${workout?.workout?.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
