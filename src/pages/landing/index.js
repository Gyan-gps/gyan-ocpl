import React from "react";
import Navbar from "../../components/Navbar";
import Overview from "../../components/sections/Overview";
import { Box } from "@mui/material";
import Partner from "../../components/sections/Partner";
import ReasontoChoose from "../../components/sections/ReasontoChoose";
import Brand from "../../components/sections/Brand";
import Research from "../../components/sections/Research";
import Cases from "../../components/sections/Cases";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Box
        sx={{
          maxWidth: "1600px",
          padding: { xs: "10px", md: "40px" },
          boxSizing: "border-box",
          margin: "0 auto",
          width: { xs: "100%", md: "90%" },
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Overview />
          <Partner />
          <ReasontoChoose />
          <Cases />
          <Brand />
          <Research />
        </Box>
      </Box>
    </div>
  );
};

export default Landing;
