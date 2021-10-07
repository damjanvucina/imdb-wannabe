import React from 'react';
import {FlatList, View} from 'react-native';
import {Movie} from '../../const';
import {Title} from '../../theme';
import {MovieCard} from '../MovieCard';

type Props = {
  title: string;
  movies: Movie[];
};

export const MovieCategory: React.FC<Props> = React.memo(({title, movies}) => {
  return (
    <View>
      <Title>{title}</Title>
      <FlatList
        data={movies}
        renderItem={({item: movie}) => <MovieCard movie={movie} />}
        keyExtractor={movie => `${movie.id}`}
        horizontal
      />
    </View>
  );
});
