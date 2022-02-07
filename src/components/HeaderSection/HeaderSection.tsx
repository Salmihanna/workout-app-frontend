import { Button } from "../Button/Button";
import "../../App.css";
import "./HeaderSection.css";

const HeaderSection = () => {
  return (
    <div className="hero-container">
      <h1>YOUR FITNESS JOURNEY</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttenStyle="btn--outline"
          buttenSize="btn--large"
          to="sign-up"
        >
          Start training
        </Button>
        <Button
          className="btns"
          buttenStyle="btn--primary"
          buttenSize="btn--large"
          to="sign-in"
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default HeaderSection;
