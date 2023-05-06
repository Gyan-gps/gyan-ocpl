import React from "react";
import Auth from "../../components/Auth";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    name: "",
    mobile: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userDetails.email === "" || userDetails.password === "") {
      alert("Missing credentials")
    } else {
      console.log(userDetails);
      axios
        .post("http://91.203.132.6/register", userDetails)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
    }
  };
  return (
    <Auth
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      userDetails={userDetails}
    />
  );
};

export default Signup;
