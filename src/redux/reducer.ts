import {configureStore, createSlice} from '@reduxjs/toolkit';
import {Movie, MovieGenres} from '../const';
import {transformMovies} from '../services';

interface InitialState {
  allMovies: Movie[];
  popularMoviesIds: number[];
  topRatedMoviesIds: number[];
  upcomingMoviesIds: number[];
  favoriteMoviesIds: number[];
  movieGenres: MovieGenres;
}

const initialState: InitialState = {
  allMovies: [],
  popularMoviesIds: [],
  topRatedMoviesIds: [],
  upcomingMoviesIds: [],
  favoriteMoviesIds: [],
  movieGenres: {},
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (draft, action) => {
      console.log(action.payload[0]);
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
} = moviesSlice.actions;

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof moviesSlice.reducer>;
