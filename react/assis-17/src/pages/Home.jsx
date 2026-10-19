import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../api/movieApi";

import Navbar from "../components/Navbar";
import MovieGrid from "../components/MovieGrid";

function Home() {
  const {
    data: movies,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Error loading movies.</h1>;

  return (
    <>
      <Navbar />

      <MovieGrid movies={movies} />
    </>
  );
}

export default Home;