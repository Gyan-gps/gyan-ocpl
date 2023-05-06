import React, { useState } from "react";
import Auth from "../../components/Auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.preventDefault();
    if (userDetails.email === "" || userDetails.password === "") {
      alert("Missing credentials");
    } else {
      console.log(userDetails);
      axios
        .post("http://91.203.132.6/login", userDetails)
        .then((res) => {
          console.log(res);
          localStorage.setItem("userDetails", JSON.stringify(userDetails));
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
    }
  };

  return (
    <div>
      <Auth
        handleSubmit={handleSubmit}
        signin="true"
        handleChange={handleChange}
        userDetails={userDetails}
      />
    </div>
  );
};

export default Signin;
