import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestMovieCast } from 'services/movieAPI';
import {
  CastList,
  CastItem,
  CastValue,
  CastNoCast,
  CastRightBox,
} from './Cast.styled';

export default function Cast() {
  const [searchedCast, setSearchedCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieCast(movieId) {
      try {
        setIsLoading(true);

        const data = await requestMovieCast(movieId);

        setSearchedCast(data.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovieCast(movieId);
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error !== null && <p>Oops, some error occured... Message: {error}</p>}
      {
        <CastList>
          {searchedCast.length > 0 ? (
            searchedCast.map(actor => (
              <CastItem key={actor.id}>
                <div>
                  <img
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                        : `https://zabavniki.club/wp-content/uploads/kino_2_11191428.jpg`
                    }
                    alt={actor.name}
                    height="150px"
                    width="100px"
                  />
                </div>
                <CastRightBox>
                  <h3>{actor.original_name}</h3>
                  <p>
                    Character: <CastValue>{actor.character}</CastValue>
                  </p>
                  <p>
                    Popularity: <CastValue>{actor.popularity}</CastValue>
                  </p>
                </CastRightBox>
              </CastItem>
            ))
          ) : (
            <CastNoCast> No cast for this movie </CastNoCast>
          )}
        </CastList>
      }
    </>
  );
}
