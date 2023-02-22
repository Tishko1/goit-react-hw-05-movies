import Container from 'components/Container/Container';
import Loader from 'components/Loader/Loader';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { requestTrandingMovies } from 'services/movieAPI';
import { HomeList, LinkStyled } from './Home.styled';

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    async function fetchTrandingMovies() {
      try {
        setIsLoading(true);

        const data = await requestTrandingMovies();

        setTrendingMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTrandingMovies();
  }, []);

  return (
    <Container>
      <h2>Trending movies today</h2>

      {isLoading && <Loader />}
      {error !== null && <p>Oops, some error occured... Message: {error}</p>}
      <HomeList>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <LinkStyled to={`movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </LinkStyled>
          </li>
        ))}
      </HomeList>
    </Container>
  );
}
