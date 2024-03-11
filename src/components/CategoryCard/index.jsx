import React from "react";
import { Stack, Typography } from "@mui/material";
import categoryIcon from "../../assets/icons/gym.png";

//this props are coming from HorizontalScrollbar component
function CategoryCard({ item, setBodyPart, bodyPart }) {
  return (
    <Stack
      type="button"
      alignItem="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #FF2625" : " ",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        // width: "270px",
        height: "80px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: "1800", left: "100", behavior: "smooth" }); //when u click on category card, it smoothly go town to the exercises.
      }}
    >
      <img
        src={categoryIcon}
        alt="Category_Icon_Image"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography
        fontSize="24px"
        fontFamily="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
}

export default CategoryCard;
