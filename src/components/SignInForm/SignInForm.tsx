import React, { useState } from "react";
import { Button } from "../Button/Button";
import "../../App.css";
import "./SignInForm.css";
import axios from "axios";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleSubmit = () => {
    axios.post("/api/v1/login").then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="sign-in-form-container">
      <div className="form-item-img-wrap">
        <img
          src="/images/workout-nr4.jpg"
          alt="Inspo"
          className="form-item-img"
        />
      </div>
      <div>
        {/* <form
        method="POST"
        action="http://localhost:8080/api/v1/login"
        className="sign-in-form"
        onSubmit={handleSubmit}
      > */}
        <h1 className="sign-in-form-title">Log back into your account</h1>
        <div className="sign-in-form-input">
          <input
            className="form-items"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
          ></input>
        </div>
        <div className="sign-in-form-input">
          <input
            className="form-items"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassWord(e.target.value)}
            placeholder="Password"
          ></input>
        </div>
        <div className="sign-in-form-btn">
          <Button
            className="btns"
            buttenStyle="btn--primary--black"
            buttenSize="btn--large"
            type="submit"
            disabled={!validateForm()}
            onClick={handleSubmit}
          >
            Login
          </Button>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
};

export default SignInForm;
