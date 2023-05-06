import brond from "../../assest/brond.png";
import "../../styles/Brand.css";
import { Box } from "@mui/material";

const Brond = () => {
  return (
    <section>
      <Box
        className="brand-container"
        sx={{
          display: { xs: "block", md: "flex" },
          "&>div": {
            width: "100%",
          },
        }}
      >
        <Box>
          <img src={brond} alt="brond" width="100%" loading="lazy" />
        </Box>
        <Box>
          <h3>Bronding</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type
          </p>
          <button>Know More</button>
        </Box>
      </Box>
    </section>
  );
};

export default Brond;
