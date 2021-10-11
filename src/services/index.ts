import {Movie, MovieApiObject} from '../const';

export const getMovieUri = (movie: Movie): string =>
  `https://image.tmdb.org/t/p/w500${movie.posterUrl}`;

export const transformMovies = (moviesApi: MovieApiObject[]): Movie[] => {
  return moviesApi.map(movieElement => ({
    id: movieElement.id,
    name: movieElement.title,
    posterUrl: movieElement.backdrop_path,
  }));
};
