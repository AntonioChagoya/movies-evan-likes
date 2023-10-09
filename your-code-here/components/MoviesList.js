const { useState, useEffect } = React;

import useMoviesList from "../hooks/useMoviesList.js"
import useMoviesReviews from "../hooks/useMoviesReviews.js";

import { SearchBar } from '../views/SearchBar.js'
import { ListElement } from "../views/ListElement.js";
import { DecadeFilter } from "../views/DecadeFilter.js";

const { css } = emotion;

const list = css`
  width: 100%;
  max-height: 60vh;
  overflow-y: scroll;
  border-bottom: 1px solid #ccc;
`;

const filtersContainer = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const groupYearsByDecade = (years) => {
  const decadeGroups = [];
  
  Array.from(years).forEach(year => {
    const decade = Math.floor(year / 10) * 10;

    if (!decadeGroups[decade]) {
      decadeGroups[decade] = [];
    }

    decadeGroups[decade].push(year);
  });

  return decadeGroups;
}

export const MoviesList = () => {
  const [moviesInfo] = useMoviesList();
  const [reviews] = useMoviesReviews(); 

  const [filteredMovies, setFilteredMovies] = useState(moviesInfo || []);
  
  const [filters, setFilters] = useState({
    title: '',
    year: '',
  });

  const years = moviesInfo.map(movie => movie.year);
  const notRepeatedYears = new Set(years);
  const decades = groupYearsByDecade(notRepeatedYears);

  const filterMovies = (movie, filters) => {
    let isYearValid = false;
    let isTitleValid = false;
  
    Object.entries(filters)
    .forEach(([key, value]) => {
      if (key === 'year' && value && decades[value] && decades[value].includes(movie.year)) {
        isYearValid = true;
      } 
  
      if (key === 'title' && movie.title.toLowerCase().includes(value.toLowerCase())) {
        isTitleValid = true;
      }
    });
  
    if (filters.title && filters.year) {
      return isYearValid && isTitleValid;
    } else if (filters.title && !filters.year) {
      return isTitleValid;
    } else if (filters.year) {
      return isYearValid;
    }
  };

  useEffect(() => {
    if (filters.title.length >= 2) {
      const filteredMovies = moviesInfo.filter(movie => {
        return filterMovies(movie, filters)
      });

      setFilteredMovies(filteredMovies);
    }

    if (filters.title <= 2 && filters.year) {
      const filteredMovies = moviesInfo.filter(movie => {
        return filterMovies(movie, filters)
      });

      setFilteredMovies(filteredMovies);
    }

    if (!filters.title && !filters.year) {
      setFilteredMovies(moviesInfo);
    }

  }, [filters]);

  return html`
    <div className=${filtersContainer}>
      <${SearchBar} searchTerm=${filters.title} setSearchTerm=${setFilters}/>
      <${DecadeFilter} existingDecades=${decades} selectedDecade=${filters.year} setDecade=${setFilters}/>
    </div>
    
    <div className=${list}>
      <ul id="MoviesList">
        ${filteredMovies
          .map(movie => html`
            <${ListElement}
              key=${movie.id} 
              movie=${movie} 
              review=${reviews.find(review => review['movie-id'] === movie.id)} 
            />
          `)
        }
      </ul>
    </div>
  `
}
