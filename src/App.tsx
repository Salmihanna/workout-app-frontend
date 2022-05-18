import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import UserProfile from "./views/UserProfile";
import Home from "./views/Home";
import Run from "./views/Run";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import Workout from "./views/Workout";
import Yoga from "./views/Yoga";
import Exercise from "./views/Exercise";
import ListExercises from "./components/ListExercises";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/workout" element={<Workout />} />
          {/* <Route path="/run" element={<Run />} /> */}
          <Route path="/yoga" element={<Yoga />} />
          {/* <Route path="/*" element={<Navigate to="/sign-in" />} /> */}
          <Route path="/workout/:exercise" element={<Exercise />} />
          <Route path="/list-all-exercise" element={<ListExercises />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
