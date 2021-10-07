import {createAsyncThunk} from '@reduxjs/toolkit';
import uniqBy from 'lodash.uniqby';
import {ActionTypes} from '../const';
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
} from '../api';
import {
  setPopularMoviesIds,
  setTopRatedMoviesIds,
  setUpcomingMoviesIds,
  setMovies,
} from './reducer';

export const fetchMoviesThunk = createAsyncThunk(
  ActionTypes.FetchPopularMoviesThunk,
  async (_, thunkAPI) => {
    const {dispatch} = thunkAPI;

    const [
      popularMoviesResponse,
      topRatedMoviesResponse,
      upcomingMoviesResponse,
    ] = await Promise.all([
      fetchPopularMovies(),
      fetchTopRatedMovies(),
      fetchUpcomingMovies(),
    ]);

    const popularMovies = popularMoviesResponse.data.results;
    const topRatedMovies = topRatedMoviesResponse.data.results;
    const upcomingMovies = upcomingMoviesResponse.data.results;
    const allMovies = [...popularMovies, ...topRatedMovies, ...upcomingMovies];
    const allUniqueMovies = uniqBy(allMovies, movie => movie.id);

    const popularMoviesIds = popularMovies.map(movie => movie.id);
    const topRatedMoviesIds = topRatedMovies.map(movie => movie.id);
    const upcomingMoviesIds = upcomingMovies.map(movie => movie.id);

    dispatch(setPopularMoviesIds(popularMoviesIds));
    dispatch(setTopRatedMoviesIds(topRatedMoviesIds));
    dispatch(setUpcomingMoviesIds(upcomingMoviesIds));
    dispatch(setMovies(allUniqueMovies));
  },
);
