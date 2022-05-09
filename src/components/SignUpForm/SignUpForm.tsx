import { useState } from "react";
import { Button } from "../Button/Button";
import "../../App.css";
import "../SignInForm/SignInForm.css";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
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
          src="/images/stretch-nr2.jpg"
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
        <h1 className="sign-in-form-title">Sign up</h1>
        <div className="sign-in-form-input">
          <input
            className="form-items"
            name="firstName"
            type="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name"
          ></input>
        </div>
        <div className="sign-in-form-input">
          <input
            className="form-items"
            name="lastName"
            type="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last name"
          ></input>
        </div>
        <div className="sign-in-form-input">
          <input
            className="form-items"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          ></input>
        </div>
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
          >
            Sign up
          </Button>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
};

export default SignUpForm;
