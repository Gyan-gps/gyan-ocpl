import { useNavigate } from "react-router-dom";
import case1 from "../../assest/case1.png";
import case2 from "../../assest/case2.png";
import case3 from "../../assest/case3.png";
import case4 from "../../assest/case4.png";
import case5 from "../../assest/case5.png";
import case6 from "../../assest/case6.png";
import "../../styles/Cases.css";

import { Box } from "@mui/material";

const cardData = [
  {
    title: "Lorem Ipsum is",
    text: "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen.",
    img: case1,
  },
  {
    title: "Lorem Ipsum is",
    text: "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen.",
    img: case2,
  },
  {
    title: "Lorem Ipsum is",
    text: "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen.",
    img: case3,
  },
  {
    title: "Lorem Ipsum is",
    text: "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen.",
    img: case4,
  },
  {
    title: "Lorem Ipsum is",
    text: "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen.",
    img: case5,
  },
  {
    title: "Lorem Ipsum is",
    text: "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen.",
    img: case6,
  },
];

const Cases = () => {
  let user = JSON.parse(localStorage.getItem("userDetails"));
  const navigate = useNavigate();
  return (
    <section className="cases-container">
      <h2>Our Cases</h2>
      <div className="card-container">
        {cardData.map((data) => {
          return (
            <Box
              className="card"
              sx={{
                width: { xs: "100%", md: "clamp(270px,25%,340px)" },
              }}
            >
              <div className="card-img">
                <img
                  src={data.img}
                  alt={data.img}
                  width="100%"
                  loading="lazy"
                />
              </div>
              <div className="card-title">{data.title}</div>
              <p className="card-text">{data.text}</p>
              <div>
                <button
                  onClick={() => !user && navigate("/signin")}
                  className="card-btn"
                >
                  Know More
                </button>
              </div>
            </Box>
          );
        })}
      </div>
    </section>
  );
};

export default Cases;
