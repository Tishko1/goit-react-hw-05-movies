import axios from 'axios';

const API_KEY = '56e8a9f881b2c7281d6a93cec630170a';
const BASE_URL = 'https://api.themoviedb.org/3';

export const requestTrandingMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
  );
  return data.results;
};

export const requestMovieDetails = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
  return data;
};

export const requestMovieCast = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return data;
};

export const requestMovieReviews = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return data;
};

export const requestMovieByQuery = async query => {
  const { data } = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&${query}`
  );
  return data;
};
