import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography, Button, TextField } from "@mui/material";
import { fetchData, exercisesOption } from "../../utilities/fetchData";
import HorizontalScrollbar from "../HorizontalScrollbar";

//setExercises,bodyPart and setBodyPart this all are coming from Home page.
function SearchExercises({ setExercises, bodyPart, setBodyPart }) {
  const [search, setSearch] = useState(" "); //this useState is for Search bar data.
  const [bodyParts, setBodyParts] = useState([]); //this useState is for category data.

  useEffect(() => {
    const fetchExercisesData = async () => {
      const categoryData = await fetchData(
        "https://api.api-ninjas.com/v1/exercises",
        exercisesOption
      );
      // console.log(fetchExercisesData);
      setBodyPart(["all", ...categoryData]);
    };
    console.log(fetchExercisesData);
  }, []);

  //this function will handle the search button inside search bar
  const handleSearch = async () => {
    if (search) {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exercisesOption
      );
      const searchedExercise = bodyPartsData.filter(
        (exercise) =>
          exercise.name.toLowerCase().include(search) ||
          exercise.target.toLowerCase().include(search) ||
          exercise.equipment.toLowerCase().include(search) ||
          exercise.bodyPart.toLowerCase().include(search)
      );
      setSearch("");
      setExercises(searchedExercise);
    }
  };
  return (
    <Stack alignItems={"center"} mt="37px" justifyContent={"center"} p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        color={"#fff"}
        mb="50px"
        textAlign={"center"}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box position={"relative"} mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "5px",
            },
            width: { lg: "850px", xs: "350px" },
            backgroundColor: "#fff",
          }}
          type="text"
          height="76px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercises"
        />
        <Button
          className="search-btn"
          sx={{
            backgroundColor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            position: "absolute",
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          setBodyPart={setBodyPart}
          bodyPart={bodyPart} //so this one is the selected one on which we will clicked on category card.
        />
        {/* bodyPart is the select one from category */}
      </Box>
    </Stack>
  );
}

export default SearchExercises;
