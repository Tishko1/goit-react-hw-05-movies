import Container from 'components/Container/Container';
import Goback from 'components/GoBack/GoBack';
import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { requestMovieDetails } from 'services/movieAPI';
import {
  MovieDetailsBox,
  MovieDetailsRightBox,
  MovieDetailsList,
  MovieDetailsMainTitle,
  MovieDetailsValue,
  MovieDetailsOverview,
  MovieDetailsMore,
  MovieDetailsLink,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const [searchedDetails, setSearchedDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieDetails(movieId) {
      try {
        setIsLoading(true);

        const data = await requestMovieDetails(movieId);

        setSearchedDetails(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovieDetails(movieId);
  }, [movieId]);

  return (
    <Container>
      <Goback />
      {isLoading && <Loader />}
      {error !== null && <p>Oops, some error occured... Message: {error}</p>}
      {Boolean(searchedDetails) && (
        <MovieDetailsBox>
          <div>
            <img
              width="240px"
              src={`https://image.tmdb.org/t/p/w500/${searchedDetails.poster_path}`}
              alt={searchedDetails.tagline}
            />
          </div>
          <MovieDetailsRightBox>
            <MovieDetailsMainTitle>
              {searchedDetails.original_title}
            </MovieDetailsMainTitle>
            <MovieDetailsList>
              {searchedDetails.vote_average === 0 ? (
                ''
              ) : (
                <li>
                  {' '}
                  Rating:
                  <MovieDetailsValue>
                    {' '}
                    {searchedDetails.vote_average}
                  </MovieDetailsValue>
                </li>
              )}
              <li>
                Release date:{' '}
                <MovieDetailsValue>
                  {' '}
                  {searchedDetails.release_date}{' '}
                </MovieDetailsValue>
              </li>
              <li>
                Duration:
                <MovieDetailsValue>
                  {' '}
                  {Math.floor(searchedDetails.runtime / 60)} h {`  `}
                  {Math.floor(searchedDetails.runtime % 60)} m{' '}
                </MovieDetailsValue>
              </li>
              {searchedDetails.budget > 0 ? (
                <li>
                  Budget:
                  <MovieDetailsValue>
                    {' '}
                    {new Intl.NumberFormat().format(searchedDetails.budget)} $
                  </MovieDetailsValue>{' '}
                </li>
              ) : (
                ''
              )}
            </MovieDetailsList>
            <MovieDetailsOverview>
              {searchedDetails.overview}
            </MovieDetailsOverview>

            <MovieDetailsMore>
              <MovieDetailsLink
                to={`cast`}
                state={{ from: location.state?.from }}
              >
                Cast
              </MovieDetailsLink>
              <MovieDetailsLink
                to={`reviews`}
                state={{ from: location.state?.from }}
              >
                Reviews
              </MovieDetailsLink>
            </MovieDetailsMore>
          </MovieDetailsRightBox>
        </MovieDetailsBox>
      )}
      <Outlet />
    </Container>
  );
}
