import {createSelector} from '@reduxjs/toolkit';
import {RootState} from './reducer';
import {Movie} from '../const';

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
