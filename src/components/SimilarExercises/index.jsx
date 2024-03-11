import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Loader from "../Loader";
import HorizontalScrollbar from "../HorizontalScrollbar";

// this props are coming from ExerciseDetail page
function SimilarExercises({ targetMuscleExercises, equipmentExercises }) {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3">Same Related Exercises</Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
}

export default SimilarExercises;
