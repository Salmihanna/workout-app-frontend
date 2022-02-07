import React, { useState } from "react";
import { Button } from "../Button/Button";
import "../../App.css";
import "./SignInForm.css";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="sign-in-form-container">
      <div className="form-item-img-wrap">
        <img
          src="/images/workout-nr4.jpg"
          alt="Inspo"
          className="form-item-img"
        />
        <h1>Log back into your account</h1>
      </div>
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <input
          className="form-items"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
        ></input>
        <input
          className="form-items"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassWord(e.target.value)}
          placeholder="Password"
        ></input>
        <div className="sign-in-form-btn">
          <Button
            className="btns"
            buttenStyle="btn--primary--black"
            buttenSize="btn--large"
            type="submit"
            disabled={!validateForm()}
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
