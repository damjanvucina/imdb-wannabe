import React from 'react';
import {useSelector} from 'react-redux';
import {favoriteMoviesSelector} from '../../redux';
import {MovieList} from '../MovieList';

export const FavoriteMovieCategory: React.FC = React.memo(() => {
  const favoriteMovies = useSelector(favoriteMoviesSelector);

  return (
    <MovieList
      title="Favorites"
      movies={favoriteMovies}
      numColumns={3}
      key={3}
    />
  );
});
