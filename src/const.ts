import {createContext} from 'react';

export type Response<T> = {
  readonly status: number;
  readonly data: T;
};

export enum ActionTypes {
  FetchMoviesThunk = 'FETCH_MOVIES_THUNK',
  FetchMovieGenresThunk = 'FETCH_MOVIE_GENRES_THUNK',
  FetchMovieDetailsThunk = 'FETCH_MOVIE_DETAILS_THUNK',
  FetchMovieCreditsThunk = 'FETCH_MOVIE_CREDITS_THUNK',
  ToggleIsMovieFavorite = 'TOGGLE_IS_MOVIE_FAVORITE',
}

export type MovieCrewMember = {
  name: string;
  department: string;
};

export type MovieCrewMemberApiObject = {
  name: string;
  known_for_department: string;
};

export type Movie = {
  name: string;
  id: number;
  posterUrl: string;
  releaseDate: string;
  genreIds: number[];
  overview: string;
};

export type MovieApiObject = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
};

export type MovieDetailsApiObject = {
  adult: number;
  backdrop_path: string;
  id: number;
  overview: string;
  popularity: number;
  release_date: string;
  runtime: number;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
};

export type MovieCreditsApiObject = {
  id: number;
  crew: Array<MovieCrewMember>;
};

export enum NavigationScreenNames {
  HomeScreen = 'HomeScreen',
  DetailsScreen = 'DetailsScreen',
  FavoritesScreen = 'FavoritesScreen',
}

export const NavigationStackIdContext = createContext('');

export const DATE_FORMAT = 'DD/MM/YYYY';

export type MovieGenres = {[key: number]: string};
export type MovieRuntimeMinutes = {[key: number]: number};
