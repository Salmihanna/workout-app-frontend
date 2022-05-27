import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { parseJwt } from "../util/parse-jwt";

const UserProfile = () => {
  const token = localStorage.getItem("jwt") ?? "";
  const jwt = token !== "" ? parseJwt(token) : null;
  const API_URL_WITH_JWT = `http://localhost:8080/api/v1/profile?id=${
    token !== "" && jwt.id
  }`;
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    try {
      axios
        .get(API_URL_WITH_JWT, {
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
    } catch {
      window.localStorage.setItem("jwt", "");
      navigate("/sign-in");
    }
  }, []);

  return (
    <div>
      <h1>Welcome {firstName}</h1>
      <h2>Username: {username}</h2>
      <h2>Email: {email}</h2>
    </div>
  );
};

export default UserProfile;
