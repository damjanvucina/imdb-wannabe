import React from 'react';
import styled from 'styled-components';
import {FlatList, View, StyleSheet, ViewStyle} from 'react-native';
import {Title} from '../../../core/theme';
import {MovieCard} from '../fragments/MovieCard';

type Props = {
  title: string;
  moviesIds: number[];
  isHorizontal?: boolean;
  numColumns?: number;
  key?: number;
  flatListContainerStyle?: ViewStyle;
};

export const MovieList: React.FC<Props> = React.memo(
  ({title, moviesIds, isHorizontal, numColumns, flatListContainerStyle}) => {
    return (
      <CategoryContainer>
        <StyledTitle>{title}</StyledTitle>
        <FlatList
          data={moviesIds}
          renderItem={({item: movieId}) => {
            if (isHorizontal) {
              return (
                <StyledMovieCard
                  movieId={movieId}
                  key={movieId}
                  isHorizontal={isHorizontal}
                />
              );
            }
            return <StyledMovieCard movieId={movieId} key={movieId} />;
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
        />
      </CategoryContainer>
    );
  },
);

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

const StyledMovieCard = styled(MovieCard)<{isHorizontal?: boolean}>`
  margin-right: 10px;
  width: ${props => (props.isHorizontal ? '122px' : '112px')};
  height: 190px;
`;

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingLeft: 18,
    paddingRight: 18,
  },
});
