import { Button } from "../Button/Button";
import "../../App.css";
import "./HeaderSection.css";
import { Link } from "react-router-dom";

const HeaderSection = () => {
  return (
    <div className="header-container">
      <h1>YOUR FITNESS JOURNEY</h1>
      <p>What are you waiting for?</p>
      <div className="header-btns">
        <Link to={"/sign-up"}>
          <Button
            className="btns"
            buttenStyle="btn--outline"
            buttenSize="btn--large"
          >
            Start training
          </Button>
        </Link>
        <Link to={"/sign-in"}>
          <Button
            className="btns"
            buttenStyle="btn--primary"
            buttenSize="btn--large"
          >
            Sign in
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeaderSection;
