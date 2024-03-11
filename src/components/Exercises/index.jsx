import React from "react";
import { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Typography, Stack } from "@mui/material";
import { exercisesOption, fetchData } from "../../utilities/fetchData";
import ExerciseCard from "../ExerciseCard";

//This all props are coming from home page.
function Exercises({ exercises, setExercises, bodyPart }) {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: "1800", behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        //this if condition will be true at first
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
          exercisesOption
        );
      } else {
        //this else execute only when user click on any particular category.
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exercisesOption
        );
      }
      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);
  return (
    <Box
      id="exercises"
      sx={{ mt: { lg: "110px" } }}
      mt="50px"
      color={"#fff"}
      p="20px"
    >
      <Typography variant="h3" mb="46px">
        Showing Result
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => {
          <ExerciseCard key={index} exercise={exercise} />;
        })}
      </Stack>

      {/* this stack contain pagination  */}
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultpage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate} //martial ui will itself send the value like (e) => paginate(e,value)
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
}

export default Exercises;
