import React from 'react';
import {useSelector} from 'react-redux';
import {ScrollView} from 'react-native';
import {MovieList} from '../MovieList';
import {
  popularMoviesSelector,
  topRatedMoviesSelector,
  upcomingMoviesSelector,
} from '../../redux';

export const CategoriesPreview: React.FC = React.memo(() => {
  const popularMovies = useSelector(popularMoviesSelector);
  const topRatedMovies = useSelector(topRatedMoviesSelector);
  const upcomingMovies = useSelector(upcomingMoviesSelector);

  return (
    <ScrollView>
      <MovieList title="What's popular" movies={popularMovies} isHorizontal />
      <MovieList title="Top Rated" movies={topRatedMovies} isHorizontal />
      <MovieList title="Upcoming" movies={upcomingMovies} isHorizontal />
    </ScrollView>
  );
});
