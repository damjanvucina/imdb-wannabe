import React from 'react';
import styled from 'styled-components';
import {FlatList, View, StyleSheet} from 'react-native';
import {Movie} from '../../const';
import {Title} from '../../theme';
import {MovieCard} from '../MovieCard';

const StyledTitle = styled(Title)`
  padding-bottom: 8px;
  padding-right: 18px;
  padding-left: 18px;
`;

const CategoryContainer = styled(View)`
  margin-top: 18px;
  margin-bottom: 18px;
`;

const MovieCardSeparator = styled(View)`
  width: 8px;
  height: 8px;
`;

type Props = {
  title: string;
  movies: Movie[];
  isHorizontal?: boolean;
  numColumns?: number;
  key?: number;
};

export const MovieCategory: React.FC<Props> = React.memo(
  ({title, movies, isHorizontal, numColumns, key}) => {
    return (
      <CategoryContainer>
        <StyledTitle>{title}</StyledTitle>
        <FlatList
          data={movies}
          renderItem={({item: movie}) => <MovieCard movie={movie} />}
          ItemSeparatorComponent={MovieCardSeparator}
          keyExtractor={movie => `${movie.id}`}
          horizontal={isHorizontal}
          contentContainerStyle={styles.flatListContentContainer}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          numColumns={numColumns}
          key={key}
        />
      </CategoryContainer>
    );
  },
);

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingLeft: 18,
    paddingRight: 18,
  },
});
