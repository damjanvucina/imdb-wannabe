import {configureStore, createSlice, combineReducers} from '@reduxjs/toolkit';
import {
  MovieCrewMember,
  Movie,
  MovieGenres,
  MovieRuntimeMinutes,
  ActionTypes,
} from '../const';

interface InitialState {
  allMovies: {[key: number]: Movie};
  popularMoviesIds: number[];
  topRatedMoviesIds: number[];
  upcomingMoviesIds: number[];
  favoriteMoviesIds: number[];
  movieGenres: MovieGenres;
  movieRuntimeMinutes: MovieRuntimeMinutes;
  movieCrew: {[key: number]: MovieCrewMember[]};
}

const initialState: InitialState = {
  allMovies: {},
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
  extraReducers: builder => {
    builder.addCase(ActionTypes.ToggleIsMovieFavorite, (draft, action) => {
      const movieId = action.payload;
      const isMovieCurrentlyFavorite =
        draft.favoriteMoviesIds.includes(movieId);
      if (!isMovieCurrentlyFavorite) {
        draft.favoriteMoviesIds.unshift(movieId);
      } else {
        draft.favoriteMoviesIds = draft.favoriteMoviesIds.filter(
          currentMovieId => currentMovieId !== movieId,
        );
      }
    });
  },
});

const rootReducer = combineReducers({
  movies: moviesSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
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

export type RootState = ReturnType<typeof rootReducer>;
