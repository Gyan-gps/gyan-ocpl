import React, { useState } from "react";
import Auth from "../../components/Auth";

const Signin = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
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
    } else {
      console.log(userDetails);
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
