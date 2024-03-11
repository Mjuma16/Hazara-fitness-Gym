import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import {
  fetchData,
  exercisesOption,
  youtubeOptions,
} from "../utilities/fetchData";
import Details from "../components/Details";
import ExerciseVideos from "../components/ExerciseVideos";

function ExerciseDetail() {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [youtubeVideos, setYoutubeVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com"; //this api is for youtube videos.

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exercisesOption
      );
      setExerciseDetail(exerciseDetailData);

      //this will return only specific data that we are looking like clicked on particular exercise
      const exerciseVideoData = await fetchData(
        `${youtubeSearchUrl}/search?query${exerciseDetailData.name}`,
        youtubeOptions
      );
      setYoutubeVideos(youtubeVideos.contents);
    };
    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        youtubeVideos={youtubeVideos}
        name={exerciseDetail.name}
      />
    </Box>
  );
}

export default ExerciseDetail;
