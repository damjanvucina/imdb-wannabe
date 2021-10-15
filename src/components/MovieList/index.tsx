import React from 'react';
import styled from 'styled-components';
import {FlatList, View, StyleSheet, ViewStyle} from 'react-native';
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

const StyledMovieCardContainer = styled(View)`
  margin-right: 10px;
`;

type Props = {
  title: string;
  moviesIds: number[];
  isHorizontal?: boolean;
  numColumns?: number;
  key?: number;
  flatListContainerStyle?: ViewStyle;
};

export const MovieList: React.FC<Props> = React.memo(
  ({
    title,
    moviesIds,
    isHorizontal,
    numColumns,
    key,
    flatListContainerStyle,
  }) => {
    return (
      <CategoryContainer>
        <StyledTitle>{title}</StyledTitle>
        <FlatList
          data={moviesIds}
          renderItem={({item: movieId}) => {
            if (!numColumns) {
              return <MovieCard movieId={movieId} key={movieId} />;
            }
            return (
              <StyledMovieCardContainer key={movieId}>
                <MovieCard movieId={movieId} width={112} />
              </StyledMovieCardContainer>
            );
          }}
          ItemSeparatorComponent={MovieCardSeparator}
          horizontal={isHorizontal}
          contentContainerStyle={[
            styles.flatListContentContainer,
            flatListContainerStyle,
          ]}
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
