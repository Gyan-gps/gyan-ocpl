import { Box } from "@mui/material";
import banner from "../../assest/banner.png";
import "../../styles/Overview.css";
import { useNavigate } from "react-router-dom";
const Overview = () => {
  let user = JSON.parse(localStorage.getItem("userDetails"));
  const navigate = useNavigate();
  return (
    <section>
      <Box
        className="overview"
        sx={{
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <div>
          <h3>
            Get Bussiness
            <br />
            Solutions with TheFirm.
          </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </p>
          <button
            onClick={() => !user && navigate("/signin")}
            className="overview-btn"
          >
            Get In Touch
          </button>
        </div>
        <div className="overview-img">
          <img src={banner} alt="banner" loading="lazy" />
        </div>
      </Box>
    </section>
  );
};
export default Overview;
