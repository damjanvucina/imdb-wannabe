import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import uniqBy from 'lodash.uniqby';
import {ActionTypes, MovieCrewMember} from '../const';
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
  fetchMovieGenres,
  fetchMovieDetails,
  fetchMovieCredits,
} from '../api';
import {
  setPopularMoviesIds,
  setTopRatedMoviesIds,
  setUpcomingMoviesIds,
  setMovies,
  setMovieGenres,
  setMovieRuntimeMinutes,
  setMovieCrew,
} from './reducer';

export const fetchMoviesThunk = createAsyncThunk(
  ActionTypes.FetchMoviesThunk,
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

export const fetchMovieGenresThunk = createAsyncThunk(
  ActionTypes.FetchMovieGenresThunk,
  async (_, thunkAPI) => {
    const {dispatch} = thunkAPI;

    const movieGenresResponse = await fetchMovieGenres();
    const movieGenres = movieGenresResponse.data.genres;
    const movieGenresReduced = movieGenres.reduce((acc: any, curr: any) => {
      acc[curr.id] = curr.name;
      return acc;
    }, {});

    dispatch(setMovieGenres(movieGenresReduced));
  },
);

export const fetchMovieDetailsThunk = createAsyncThunk(
  ActionTypes.FetchMovieDetailsThunk,
  async (movieId: number, thunkAPI) => {
    const {dispatch} = thunkAPI;

    const movieDetailsResponse = await fetchMovieDetails(movieId);
    const runtimeMinutes = movieDetailsResponse.data.runtime;
    dispatch(setMovieRuntimeMinutes({movieId: movieId, runtimeMinutes}));
  },
);

export const fetchMovieCreditsThunk = createAsyncThunk(
  ActionTypes.FetchMovieCreditsThunk,
  async (movieId: number, thunkApi) => {
    const {dispatch} = thunkApi;

    const movieCreditsResponse = await fetchMovieCredits(movieId);
    const crewMembers = movieCreditsResponse.data.crew.slice(0, 6);
    const movieCrew: MovieCrewMember[] = [];
    crewMembers.forEach(member =>
      movieCrew.unshift({
        name: member.name,
        department: member.known_for_department,
      }),
    );
    dispatch(setMovieCrew({movieId, movieCrew}));
  },
);

export const toggleIsMovieFavorite = createAction<number>(
  ActionTypes.ToggleIsMovieFavorite,
);
