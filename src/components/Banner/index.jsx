import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import bannerImage from "../../assets/images/hazara3.png";

function Banner() {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position={"relative"}
      p="20px"
    >
      <Typography color={"#FF2625"} fontWeight={600} fontSize={"26px"}>
        Fitness Clue
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "35px", xs: "30px" } }}
        mb="23px"
        mt="30px"
        color="#fff"
      >
        Transform Your Body
        <br /> Elevate Your Mind!
      </Typography>
      <Typography fontSize={"22px"} color="#fff" lineHeight={"35px"} mb={4}>
        Check out the most effective exercises
      </Typography>

      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{
          backgroundColor: "#ff2625",
          padding: "14px",
        }}
      >
        Explore Exercises
      </Button>

      <Typography
        fontWeight={600}
        mt="50px"
        color="#fff"
        sx={{
          opacity: "0.9",
          display: { lg: "block", xs: "none" },
        }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      <img src={bannerImage} className="hero-banner-img" alt="banner_image" />
    </Box>
  );
}

export default Banner;
