import {Movie} from '../const';

export const getMovieUri = (movie: Movie): string =>
  `https://image.tmdb.org/t/p/w500${movie['backdrop_path']}`;
