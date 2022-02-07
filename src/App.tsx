import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home";
import Run from "./views/Run";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import Workout from "./views/Workout";
import Yoga from "./views/Yoga";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/run" element={<Run />} />
          <Route path="/yoga" element={<Yoga />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
