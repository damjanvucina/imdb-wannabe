import axios from 'axios';
import Config from 'react-native-config';

const {TMDB_API_URL, TMDB_API_KEY} = Config;

enum routes {
  GetPopularMovies = '/movie/popular',
}

const api = axios.create({baseURL: TMDB_API_URL});

export const getPopularMovies = () =>
  api.get(`${routes.GetPopularMovies}?api_key=${TMDB_API_KEY}`);
