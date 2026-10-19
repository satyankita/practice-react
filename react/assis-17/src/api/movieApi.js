import axios from "axios";

const API = "http://localhost:3000/movies";

export const getMovies = async () => {
  const response = await axios.get(API);
  return response.data;
};