import { useNavigate } from "react-router-dom";
import research from "../../assest/research.png";
import "../../styles/Research.css";
import { Box } from "@mui/material";

const Research = () => {
  let user = JSON.parse(localStorage.getItem("userDetails"));
  const navigate = useNavigate();
  return (
    <section>
      <div className="research-container">
        <div className="research-top">
          <h3>Our Research & Case Studies</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
        </div>
        <Box
          className="research-bottom"
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <div>
            <h3>Lorem Ipsum is simply</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took.
            </p>
            <button onClick={() => !user && navigate("/signin")}>
              Know More
            </button>
          </div>
          <div>
            <img src={research} alt="research" width="300" loading="lazy" />
          </div>
        </Box>
      </div>
    </section>
  );
};

export default Research;
