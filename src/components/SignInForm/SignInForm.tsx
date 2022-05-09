import React, { useState } from "react";
import { Button } from "../Button/Button";
import "../../App.css";
import "./SignInForm.css";
import axios from "axios";

const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassWord] = useState("");

  const validateForm = () => {
    return username.length > 0 && password.length > 0;
  };

  const handleSubmit = async () => {
    try {
      await fetch("http://localhost:8080/api/v1/sign-in", {
        method: "POST",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          ContentType: "application/json",
          AccessControlAllowOrigin: "*",
          // "Access-Control-Allow-Methods": "POST",
          // "Access-Control-Allow-Headers": "*",
        },
        body: JSON.stringify({ username: username, password: password }),
      });
      // await axios.post("http://localhost:8080/api/v1/sign-in", {
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Access-Control-Allow-Origin": "*",
      //   },
      //   data: { username: username, password: password },
      //   withCredentials: true,
      // });
    } catch (e) {
      console.log(e);
    }
    console.log(username, " ", password);
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
        <h1 className="sign-in-form-title">Log back into your account</h1>
        <div className="sign-in-form-input">
          <input
            className="form-items"
            name="username"
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
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
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
