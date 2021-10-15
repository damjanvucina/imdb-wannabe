import React from 'react';
import {useSelector} from 'react-redux';
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
    />
  );
});
