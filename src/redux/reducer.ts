import {configureStore, createSlice} from '@reduxjs/toolkit';
import {
  MovieCrewMember,
  Movie,
  MovieGenres,
  MovieRuntimeMinutes,
} from '../const';
import {transformMovies} from '../services';

interface InitialState {
  allMovies: Movie[];
  popularMoviesIds: number[];
  topRatedMoviesIds: number[];
  upcomingMoviesIds: number[];
  favoriteMoviesIds: number[];
  movieGenres: MovieGenres;
  movieRuntimeMinutes: MovieRuntimeMinutes;
  movieCrew: {[key: number]: MovieCrewMember[]};
}

const initialState: InitialState = {
  allMovies: [],
  popularMoviesIds: [],
  topRatedMoviesIds: [],
  upcomingMoviesIds: [],
  favoriteMoviesIds: [],
  movieGenres: {},
  movieRuntimeMinutes: {},
  movieCrew: {},
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (draft, action) => {
      draft.allMovies = transformMovies(action.payload);
    },
    setPopularMoviesIds: (draft, action) => {
      draft.popularMoviesIds = action.payload;
      draft.favoriteMoviesIds = action.payload;
    },
    setTopRatedMoviesIds: (draft, action) => {
      draft.topRatedMoviesIds = action.payload;
    },
    setUpcomingMoviesIds: (draft, action) => {
      draft.upcomingMoviesIds = action.payload;
    },
    setMovieGenres: (draft, action) => {
      draft.movieGenres = action.payload;
    },
    setMovieRuntimeMinutes: (draft, action) => {
      const {movieId, runtimeMinutes} = action.payload;
      draft.movieRuntimeMinutes[movieId] = runtimeMinutes;
    },
    setMovieCrew: (draft, action) => {
      const {movieId, movieCrew} = action.payload;
      draft.movieCrew[movieId] = movieCrew;
    },
  },
});

export const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
  },
  devTools: true,
});

export const {
  setMovies,
  setPopularMoviesIds,
  setTopRatedMoviesIds,
  setUpcomingMoviesIds,
  setMovieGenres,
  setMovieRuntimeMinutes,
  setMovieCrew,
} = moviesSlice.actions;

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof moviesSlice.reducer>;
