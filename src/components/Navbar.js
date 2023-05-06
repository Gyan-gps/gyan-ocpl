import { Box, Typography } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  let user = JSON.parse(localStorage.getItem("userDetails"));
  const navigate = useNavigate();
  return (
    <Box position="sticky" top={0} sx={{ zIndex: "10", background: "black" }}>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px 40px",
          color: "#aaa6c3",
          background: "black",
        }}
      >
        <Typography>
          <img
            src="https://ocpl.tech/assets/ocpllogo-0d9039c9.webp"
            style={{ maxWidth: "4rem" }}
          />
        </Typography>
        {user ? (
          <Typography>{user.email}</Typography>
        ) : (
          <Typography
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/signin")}
          >
            Signin
          </Typography>
        )}
      </Box>
    </Box>
  );
}
export default Navbar;
