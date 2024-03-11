import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import CategoryCard from "../CategoryCard";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import RightArrowIcon from "../../assets/icons/right-arrow.png";
import LeftArrowIcon from "../../assets/icons/left-arrow.png";
import SearchExercises from "../SearchExercises";
import ExerciseCard from "../ExerciseCard";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

// data, bodypart and setBodypart are coming here from SearchExercises component
const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    <Box>
      <CategoryCard />
    </Box>

    {/* this map loop is not working bcz i am not fetching the data from api */}
    {/* {data.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        <CategoryCard />
        {bodyParts ? (
          <CategoryCard
            item={item}
            setBodyPart={setBodyPart}
            bodyPart={bodyPart}
          />
        ) : (
          <ExerciseCard exercise={item} />
        )}
      </Box>
    ))} */}
  </ScrollMenu>
);

export default HorizontalScrollbar;
