import React from 'react';
import styled from 'styled-components';
import {FlatList, View, StyleSheet} from 'react-native';
import {Title} from '../../theme';
import {MovieCard} from '../MovieCard';
import {useSelector} from 'react-redux';
import {favoriteMoviesIdsSelector, getMoviesByIdsSelector} from '../../redux';

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

const StyledMovieCardContainer = styled(View)`
  margin-right: 10px;
`;

type Props = {
  title: string;
  moviesIds: number[];
  isHorizontal?: boolean;
  numColumns?: number;
  key?: number;
};

export const MovieList: React.FC<Props> = React.memo(
  ({title, moviesIds, isHorizontal, numColumns, key}) => {
    const favoriteMoviesIds = useSelector(favoriteMoviesIdsSelector);
    const movies = useSelector(state =>
      getMoviesByIdsSelector(state, moviesIds),
    );

    return (
      <CategoryContainer>
        <StyledTitle>{title}</StyledTitle>
        <FlatList
          data={movies}
          renderItem={({item: movie}) => {
            const isFavorite = favoriteMoviesIds.includes(movie.id);
            if (!numColumns) {
              return <MovieCard movie={movie} isFavorite={isFavorite} />;
            }
            return (
              <StyledMovieCardContainer>
                <MovieCard movie={movie} width={112} isFavorite={isFavorite} />
              </StyledMovieCardContainer>
            );
          }}
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
