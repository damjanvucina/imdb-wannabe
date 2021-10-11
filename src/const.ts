import {createContext} from 'react';

export enum ActionTypes {
  FetchMoviesThunk = 'FETCH_MOVIES_THUNK',
  FetchMovieGenresThunk = 'FETCH_MOVIE_GENRES_THUNK',
  FetchMovieDetailsThunk = 'FETCH_MOVIE_DETAILS_THUNK',
}

export type Movie = {
  name: string;
  id: number;
  posterUrl: string;
  releaseDate: string;
  genreIds: number[];
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

export enum NavigationScreenNames {
  HomeScreen = 'HomeScreen',
  DetailsScreen = 'DetailsScreen',
  FavoritesScreen = 'FavoritesScreen',
}

export const NavigationStackIdContext = createContext('');

export const DATE_FORMAT = 'DD/MM/YYYY';

export type MovieGenres = {[key: number]: string};
