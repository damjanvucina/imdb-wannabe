import React from 'react';
import {View} from 'react-native';
import {Movie} from '../../const';
import {Title} from '../../theme';

type Props = {
  title: string;
  movies: Movie[];
};

export const MovieCategory: React.FC<Props> = React.memo(({title, movies}) => {
  return (
    <View>
      <Title>{title}</Title>
    </View>
  );
});
