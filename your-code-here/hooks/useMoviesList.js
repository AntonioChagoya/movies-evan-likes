import { useLocalStorage } from "./useLocalStorage.js";

const { useEffect, useCallback } = React;

const useMoviesList = () => {
  const [moviesInfo, setMoviesInfo] = useLocalStorage("Movies", null);

  const sortMovies = (moviesarray) => {
    const sortedMovies = moviesarray.sort((firstCompareElement, secondCompareElement) => (
      firstCompareElement.title.localeCompare(secondCompareElement.title)
    ));

    return sortedMovies;
  };

  const getMovies = useCallback(async () => {
    const movies = await fetch(`http://localhost:1234/api/movies.json`);
    const moviesJson = await movies.json();

    setMoviesInfo(sortMovies(moviesJson));
  }, []); 

  useEffect(() => {
    if (!moviesInfo) {
      getMovies()
    }
  }, []);

  return [moviesInfo, setMoviesInfo];
};

export default useMoviesList;