import {createSelector} from '@reduxjs/toolkit';
import {RootState} from './reducer';
import pick from 'lodash.pick';
import {Movie, MovieCrewMember, MovieGenres} from '../const';

export const allMoviesSelector = (state: RootState): {[key: number]: Movie} =>
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
): number => state.movies.movieRuntimeMinutes[movieId];

export const isMovieFavoriteSelector = (
  state: RootState,
  movieId: number,
): boolean => state.movies.favoriteMoviesIds.includes(movieId);

export const popularMoviesSelector = createSelector(
  [allMoviesSelector, popularMoviesIdsSelector],
  (allMovies, popularMoviesIds): Movie[] => {
    return Object.values(pick(allMovies, popularMoviesIds));
  },
);

export const topRatedMoviesSelector = createSelector(
  [allMoviesSelector, topRatedMoviesIdsSelector],
  (allMovies, topRatedMoviesIds): Movie[] => {
    return Object.values(pick(allMovies, topRatedMoviesIds));
  },
);

export const upcomingMoviesSelector = createSelector(
  [allMoviesSelector, upcomingMoviesIdsSelector],
  (allMovies, upcomingMoviesIds): Movie[] => {
    return Object.values(pick(allMovies, upcomingMoviesIds));
  },
);

export const favoriteMoviesSelector = createSelector(
  [allMoviesSelector, favoriteMoviesIdsSelector],
  (allMovies, favoriteMoviesIds): Movie[] => {
    return Object.values(pick(allMovies, favoriteMoviesIds));
  },
);

export const movieGenresLabelSelector = (
  state: RootState,
  genreIds: number[],
): string => {
  const movieGenres = movieGenresSelector(state);

  return genreIds.map(genreId => movieGenres[genreId]).join(', ');
};

export const movieCrewSelector = (
  state: RootState,
  movieId: number,
): MovieCrewMember[] => state.movies.movieCrew[movieId];

export const movieOverviewSelector = (
  state: RootState,
  movieId: number,
): string | undefined => state.movies.allMovies[movieId]?.overview;
