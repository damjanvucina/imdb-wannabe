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

export const popularMoviesSelector = createSelector(
  [allMoviesSelector, popularMoviesIdsSelector],
  (allMovies, popularMoviesIds) => {
    return allMovies.filter(movie => popularMoviesIds.includes(movie.id));
  },
);
