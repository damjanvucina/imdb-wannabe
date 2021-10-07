import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {MovieCategory} from '../MovieCategory';
import {popularMoviesSelector} from '../../redux';

export const CategoriesPreview: React.FC = React.memo(() => {
  const popularMovies = useSelector(popularMoviesSelector);

  return (
    <View>
      <MovieCategory title="What's popular" movies={popularMovies} />
    </View>
  );
});
