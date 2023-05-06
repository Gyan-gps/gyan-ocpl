import Slider from "react-slick";
import "../../styles/Partner.css";
import p1 from "../../assest/p1.png";
import p2 from "../../assest/p2.png";
import p3 from "../../assest/p3.png";
import p4 from "../../assest/p4.png";
import { Box } from "@mui/material";

const Partner = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section>
      <div className="partner-container">
        <h2>Our Partner</h2>
        <Box
          className="container"
          sx={{
            "& button": {
              color: "black !important",
            },
          }}
        >
          <Slider {...settings}>
            {[p1, p2, p3, p4, p1, p2].map((data) => {
              return (
                <div>
                  <Box
                    className="partner-img"
                    sx={{ width: { xs: "100%", md: "240px" } }}
                  >
                    <img src={data} alt={data} loading="lazy" />
                  </Box>
                </div>
              );
            })}
          </Slider>
        </Box>
      </div>
    </section>
  );
};

export default Partner;
