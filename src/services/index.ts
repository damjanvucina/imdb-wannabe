import dayjs from 'dayjs';
import {Movie, MovieApiObject} from '../const';

export const getMoviePosterUri = (movie: Movie): string =>
  `https://image.tmdb.org/t/p/w500${movie.posterUrl}`;

export const transformMovies = (moviesApi: MovieApiObject[]): Movie[] => {
  return moviesApi.map(movieElement => ({
    id: movieElement.id,
    name: movieElement.title,
    posterUrl: movieElement.backdrop_path,
    releaseDate: movieElement.release_date,
    genreIds: movieElement.genre_ids,
  }));
};

export const getYearFromDate = (timestamp: string): number => {
  return dayjs(timestamp).year();
};
