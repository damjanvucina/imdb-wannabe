import {createContext} from 'react';

export enum ActionTypes {
  FetchPopularMoviesThunk = 'FETCH_POPULAR_MOVIES_THUNK',
}

export type Movie = {
  name: string;
  id: number;
  posterUrl: string;
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
