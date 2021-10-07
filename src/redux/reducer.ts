import {configureStore, createSlice} from '@reduxjs/toolkit';
import {Movie} from '../const';

interface InitialState {
  allMovies: Movie[];
  popularMoviesIds: number[];
  topRatedMoviesIds: number[];
  upcomingMoviesIds: number[];
  favoriteMoviesIds: number[];
}

const initialState: InitialState = {
  allMovies: [],
  popularMoviesIds: [],
  topRatedMoviesIds: [],
  upcomingMoviesIds: [],
  favoriteMoviesIds: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (draft, action) => {
      draft.allMovies = action.payload;
    },
    setPopularMoviesIds: (draft, action) => {
      draft.popularMoviesIds = action.payload;
    },
    setTopRatedMoviesIds: (draft, action) => {
      draft.topRatedMoviesIds = action.payload;
    },
    setUpcomingMoviesIds: (draft, action) => {
      draft.upcomingMoviesIds = action.payload;
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
} = moviesSlice.actions;

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof moviesSlice.reducer>;
