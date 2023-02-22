import Container from 'components/Container/Container';

import Loader from 'components/Loader/Loader';
import { Notify } from 'notiflix';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { requestMovieByQuery } from 'services/movieAPI';
import {
  MovieBox,
  MovieSubmitBtn,
  MovieList,
  MovieLink,
  MovieInput,
} from './Movies.styled';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [foundMovies, setFoundMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();

  const query = searchParams.get('query');
  const searchRef = useRef();

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: searchRef.current.value });
    searchRef.current.value = '';
  };

  useEffect(() => {
    if (!query) return;
    async function fetchMovieByQuery(searchParams) {
      try {
        setIsLoading(true);

        const data = await requestMovieByQuery(searchParams);
        setFoundMovies([...data.results]);
        if (data.results.length === 0) {
          Notify.info('No movie found');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovieByQuery(searchParams);
  }, [query, searchParams]);

  return (
    <Container>
      <MovieBox>
        <form onSubmit={handleSubmit}>
          <MovieInput
            ref={searchRef}
            type="text"
            placeholder="Type movie name"
            required
          />
          <MovieSubmitBtn type="submit">Search</MovieSubmitBtn>
        </form>
      </MovieBox>
      {isLoading && <Loader />}
      {error !== null && <p>Oops, some error occured... Message: {error}</p>}
      <div>
        <MovieList>
          {foundMovies.map(movie => (
            <li key={movie.id}>
              <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </MovieLink>
            </li>
          ))}
        </MovieList>
      </div>
    </Container>
  );
}
