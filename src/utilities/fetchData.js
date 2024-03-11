export const exercisesOption = {
  method: "GET",
  params: { limit: "10" },
  headers: {
    "X-RapidAPI-Key": process.env.RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.RAPID_API_KEY,
  },
};

export const fetchData = async (url, options) => {
  const respone = await fetch(url, options);
  const data = await respone.json();

  return data;
};
