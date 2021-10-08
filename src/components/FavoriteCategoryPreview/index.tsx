import React from 'react';
import {useSelector} from 'react-redux';
import {favoriteMoviesSelector} from '../../redux';
import {MovieCategory} from '../MovieCategory';

export const FavoriteMovieCategory: React.FC = React.memo(() => {
  const favoriteMovies = useSelector(favoriteMoviesSelector);

  return (
    <MovieCategory
      title="Favorites"
      movies={favoriteMovies}
      numColumns={3}
      key={3}
    />
  );
});
