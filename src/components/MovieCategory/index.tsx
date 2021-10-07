import React from 'react';
import styled from 'styled-components';
import {FlatList, View} from 'react-native';
import {Movie} from '../../const';
import {Title} from '../../theme';
import {MovieCard} from '../MovieCard';

const StyledTitle = styled(Title)`
  padding-bottom: 8px;
`;

const MovieCardSeparator = styled(View)`
  width: 8px;
`;

type Props = {
  title: string;
  movies: Movie[];
};

export const MovieCategory: React.FC<Props> = React.memo(({title, movies}) => {
  return (
    <View>
      <StyledTitle>{title}</StyledTitle>
      <FlatList
        data={movies}
        renderItem={({item: movie}) => <MovieCard movie={movie} />}
        ItemSeparatorComponent={MovieCardSeparator}
        keyExtractor={movie => `${movie.id}`}
        horizontal
      />
    </View>
  );
});
