import React from 'react';
import {useSelector} from 'react-redux';
import {MovieCategory} from '../MovieCategory';
import {popularMoviesSelector} from '../../redux';

export const CategoriesPreview: React.FC = React.memo(() => {
  const popularMovies = useSelector(popularMoviesSelector);

  return <MovieCategory title="What's popular" movies={popularMovies} />;
});
