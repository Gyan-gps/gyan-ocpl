import React from "react";
import "../styles/Auth.css";
import { useEffect, useState } from "react";
import { motion, useAnimation, transform } from "framer-motion";
import { useNavigate } from "react-router-dom";
const maxLength = 10;
const mapRemainingToColor = transform([2, 6], ["#ff008c", "#ccc"]);
const mapRemainingToSpringVelocity = transform([0, 5], [50, 0]);

const Auth = ({ handleSubmit, signin, handleChange, userDetails }) => {
  const charactersRemaining = maxLength - userDetails.mobile?.length;
  const controls = useAnimation();

  const navigate = useNavigate();

  useEffect(() => {
    if (charactersRemaining > 6) return;

    controls.start({
      scale: 1,
      transition: {
        type: "spring",
        velocity: mapRemainingToSpringVelocity(charactersRemaining),
        stiffness: 700,
        damping: 80,
      },
    });
  }, [userDetails.mobile?.length]);

  return (
    <div className="form">
      <div>
        <h1>{!signin ? "User Login" : "User Registration"}</h1>
      </div>

      <form onSubmit={handleSubmit}>
        {!signin && (
          <div>
            <label className="label">Name</label>
            <input
              onChange={handleChange}
              className="input"
              name="name"
              value={userDetails.name}
              type="text"
              placeholder="Enter Your Name"
              required
            />
          </div>
        )}

        <div>
          <label className="label">Email</label>
          <input
            onChange={handleChange}
            className="input"
            name="email"
            value={userDetails.email}
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label className="label">Password</label>
          <input
            onChange={handleChange}
            className="input"
            name="password"
            value={userDetails.password}
            type="text"
            placeholder="Enter your Password"
            required
          />
        </div>

        {!signin && (
          <div>
            <label className="label">Whatsup Number</label>
            <div className="wtup">
              <input
                type="number"
                name="mobile"
                value={userDetails.mobile}
                onChange={(e) => {
                  (userDetails.mobile.length > e.target.value.length ||
                    userDetails.mobile.length < 10) &&
                    handleChange(e);
                }}
                placeholder="Enter your whatsup number"
                required
              />
              <div>
                <motion.span
                  animate={controls}
                  style={{ color: mapRemainingToColor(charactersRemaining) }}
                >
                  {charactersRemaining}
                </motion.span>
              </div>
            </div>
          </div>
        )}

        <button onClick={handleSubmit} className="btn" type="submit">
          {signin ? "Login" : "Register"}
        </button>

        {!signin ? (
          <button onClick={() => navigate("/signin")}>
            I have already register?
          </button>
        ) : (
          <button onClick={() => navigate("/signup")}>I am not a user? </button>
        )}
      </form>
    </div>
  );
};

export default Auth;
