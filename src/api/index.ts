import axios from 'axios';
import Config from 'react-native-config';

const {TMDB_API_URL, TMDB_API_KEY} = Config;

enum routes {
  FetchPopularMovies = '/movie/popular',
  FetchTopRatedMovies = '/movie/top_rated',
  FetchUpcomingMovies = '/movie/upcoming',
}

const api = axios.create({baseURL: TMDB_API_URL});

// TODO: update types
export const fetchPopularMovies = (): any =>
  api.get(`${routes.FetchPopularMovies}?api_key=${TMDB_API_KEY}`);

export const fetchTopRatedMovies = (): any =>
  api.get(`${routes.FetchTopRatedMovies}?api_key=${TMDB_API_KEY}`);

export const fetchUpcomingMovies = (): any =>
  api.get(`${routes.FetchUpcomingMovies}?api_key=${TMDB_API_KEY}`);
