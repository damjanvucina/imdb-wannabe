import axios from 'axios';
import Config from 'react-native-config';
import {
  MovieApiObject,
  MovieCrewMemberApiObject,
  MovieDetailsApiObject,
  MovieGenres,
  Response,
} from '../const';

const {TMDB_API_URL, TMDB_API_KEY} = Config;

enum routes {
  FetchPopularMovies = '/movie/popular',
  FetchTopRatedMovies = '/movie/top_rated',
  FetchUpcomingMovies = '/movie/upcoming',
  FetchMovieGenres = '/genre/movie/list',
}

const api = axios.create({baseURL: TMDB_API_URL});

export const fetchPopularMovies = (): Promise<
  Response<{[results: string]: Array<MovieApiObject>}>
> => api.get(`${routes.FetchPopularMovies}?api_key=${TMDB_API_KEY}`);

export const fetchTopRatedMovies = (): Promise<
  Response<{[results: string]: Array<MovieApiObject>}>
> => api.get(`${routes.FetchTopRatedMovies}?api_key=${TMDB_API_KEY}`);

export const fetchUpcomingMovies = (): Promise<
  Response<{[results: string]: Array<MovieApiObject>}>
> => api.get(`${routes.FetchUpcomingMovies}?api_key=${TMDB_API_KEY}`);

export const fetchMovieGenres = (): Promise<
  Response<{genres: Array<MovieGenres>}>
> => api.get(`${routes.FetchMovieGenres}?api_key=${TMDB_API_KEY}`);

export const fetchMovieDetails = (
  movieId: number,
): Promise<Response<MovieDetailsApiObject>> =>
  api.get(`/movie/${movieId}?api_key=${TMDB_API_KEY}`);

export const fetchMovieCredits = (
  movieId: number,
): Promise<Response<{id: number; crew: Array<MovieCrewMemberApiObject>}>> =>
  api.get(`/movie/${movieId}/credits?api_key=${TMDB_API_KEY}`);
