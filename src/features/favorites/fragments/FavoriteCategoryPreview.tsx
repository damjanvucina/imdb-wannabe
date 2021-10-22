import React from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet} from 'react-native';
import {favoriteMoviesIdsSelector} from '../../movies/redux';
import {MovieList} from '../../movies/components/MovieList';

export const FavoriteCategoryPreview: React.FC = React.memo(() => {
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
