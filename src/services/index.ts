import dayjs from 'dayjs';
import {Movie} from '../const';

export const getMoviePosterUri = (movie: Movie): string => {
  if (!movie) {
    return '';
  }
  return `https://image.tmdb.org/t/p/w500${movie.posterUrl}`;
};

export const getYearFromDate = (timestamp: string): number => {
  return dayjs(timestamp).year();
};

// e.g 62 => "1h 2m"
export const minutesToTimeLabel = (minutes: number): string => {
  const durationHours = Math.floor(minutes / 60);
  const durationMinutes = minutes % 60;

  let durationString = '';
  if (durationHours) {
    durationString = durationString.concat(`${durationHours}h `);
  }
  if (durationMinutes) {
    durationString = durationString.concat(`${durationMinutes}m`);
  }

  return durationString.trim();
};
