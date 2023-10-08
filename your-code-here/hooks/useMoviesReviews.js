import { useLocalStorage } from "./useLocalStorage.js";

const { useEffect, useCallback } = React;

const useMoviesReviews = () => {
  const [reviews, setReviews] = useLocalStorage("Reviews", null);

  const getMovies = useCallback(async () => {
    const movies = await fetch(`http://localhost:1234/api/reviews.json`);
    const moviesJson = await movies.json();

    setReviews(moviesJson);
  }, []); 

  useEffect(() => {
    if (!reviews) {
      getMovies()
    }
  }, []);

  return [reviews, setReviews];
};

export default useMoviesReviews;