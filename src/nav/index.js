import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "../pages/landing";
import Signin from "../pages/signin";
import Signup from "../pages/signup";

const Nav = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
};

export default Nav;
