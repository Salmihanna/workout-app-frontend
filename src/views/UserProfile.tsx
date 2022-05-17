import axios from "axios";
import { useEffect } from "react";

const UserProfile = () => {
  // useEffect(() => {
  //   axios.get("http://localhost:8080/api/v1/sign-in");
  // }, []);

  return (
    <div>
      <h1>Profile</h1>
      <h2>Name: </h2>
      <h2>Username: </h2>
      <h2>email: </h2>
    </div>
  );
};

export default UserProfile;
