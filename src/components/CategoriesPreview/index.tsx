import React from 'react';
import {useSelector} from 'react-redux';
import {ScrollView} from 'react-native';
import {MovieCategory} from '../MovieCategory';
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
      <MovieCategory title="What's popular" movies={popularMovies} />
      <MovieCategory title="Top Rated" movies={topRatedMovies} />
      <MovieCategory title="Upcoming" movies={upcomingMovies} />
    </ScrollView>
  );
});
