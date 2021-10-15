import {createSelector} from '@reduxjs/toolkit';
import {RootState} from './reducer';
import {Movie, MovieGenres} from '../const';

export const allMoviesSelector = (state: RootState): Movie[] =>
  state.movies.allMovies;

export const popularMoviesIdsSelector = (state: RootState): number[] =>
  state.movies.popularMoviesIds;

export const topRatedMoviesIdsSelector = (state: RootState): number[] =>
  state.movies.topRatedMoviesIds;

export const upcomingMoviesIdsSelector = (state: RootState): number[] =>
  state.movies.upcomingMoviesIds;

export const favoriteMoviesIdsSelector = (state: RootState): number[] =>
  state.movies.favoriteMoviesIds;

export const movieGenresSelector = (state: RootState): MovieGenres =>
  state.movies.movieGenres;

export const movieRuntimeMinutesSelector = (
  state: RootState,
  movieId: number,
) => state.movies.movieRuntimeMinutes[movieId];

export const isMovieFavoriteSelector = (state: RootState, movieId: number) =>
  state.movies.favoriteMoviesIds.includes(movieId);

export const popularMoviesSelector = createSelector(
  [allMoviesSelector, popularMoviesIdsSelector],
  (allMovies, popularMoviesIds) => {
    return allMovies.filter(movie => popularMoviesIds.includes(movie.id));
  },
);

export const topRatedMoviesSelector = createSelector(
  [allMoviesSelector, topRatedMoviesIdsSelector],
  (allMovies, topRatedMoviesIds) => {
    return allMovies.filter(movie => topRatedMoviesIds.includes(movie.id));
  },
);

export const upcomingMoviesSelector = createSelector(
  [allMoviesSelector, upcomingMoviesIdsSelector],
  (allMovies, upcomingMoviesIds) => {
    return allMovies.filter(movie => upcomingMoviesIds.includes(movie.id));
  },
);

export const favoriteMoviesSelector = createSelector(
  [allMoviesSelector, favoriteMoviesIdsSelector],
  (allMovies, favoriteMoviesIds) => {
    return allMovies.filter(movie => favoriteMoviesIds.includes(movie.id));
  },
);

export const movieGenresLabelSelector = (
  state: RootState,
  genreIds: number[],
) => {
  const movieGenres = movieGenresSelector(state);

  return genreIds.map(genreId => movieGenres[genreId]).join(', ');
};

export const movieCrewSelector = (state: RootState, movieId: number) =>
  state.movies.movieCrew[movieId];

export const movieOverviewSelector = (state: RootState, movieId: number) =>
  state.movies.allMovies.find(movie => movie.id === movieId)?.overview;
