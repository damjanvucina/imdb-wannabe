import React from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet} from 'react-native';
import {favoriteMoviesIdsSelector} from '../../redux';
import {MovieList} from '../MovieList';

export const FavoriteMovieCategory: React.FC = React.memo(() => {
  const favoriteMoviesIds = useSelector(favoriteMoviesIdsSelector);

  return (
    <MovieList
      title="Favorites"
      moviesIds={favoriteMoviesIds}
      numColumns={3}
      key={3}
      flatListContainerStyle={styles.flatListContainer}
    />
  );
});

const styles = StyleSheet.create({
  flatListContainer: {
    paddingBottom: 60,
  },
});
