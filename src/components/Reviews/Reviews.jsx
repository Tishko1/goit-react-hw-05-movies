import Container from 'components/Container/Container';
import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestMovieReviews } from 'services/movieAPI';
import {
  ReviewsList,
  ReviewsItem,
  ReviewsDate,
  ReviewsNoReview,
} from './Reviews.styled';

export default function Reviews() {
  const [searchedReviews, setSearchedReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieReviews(movieId) {
      try {
        setIsLoading(true);

        const data = await requestMovieReviews(movieId);

        setSearchedReviews(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovieReviews(movieId);
  }, [movieId]);

  return (
    <Container>
      {isLoading && <Loader />}
      {error !== null && <p>Oops, some error occured... Message: {error}</p>}
      <ReviewsList>
        {searchedReviews.length > 0 ? (
          searchedReviews.map(review => (
            <ReviewsItem key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
              <ReviewsDate>Created: {review.created_at}</ReviewsDate>
            </ReviewsItem>
          ))
        ) : (
          <ReviewsNoReview> No reviews for this movie </ReviewsNoReview>
        )}
      </ReviewsList>
    </Container>
  );
}
