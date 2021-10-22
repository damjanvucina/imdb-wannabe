import React from 'react';
import {useSelector} from 'react-redux';
import {MovieList} from '../../movies/components';
import {
  popularMoviesIdsSelector,
  topRatedMoviesIdsSelector,
  upcomingMoviesIdsSelector,
} from '../../movies/redux';

export const CategoriesPreview: React.FC = React.memo(() => {
  const popularMoviesIds = useSelector(popularMoviesIdsSelector);
  const topRatedMoviesIds = useSelector(topRatedMoviesIdsSelector);
  const upcomingMoviesIds = useSelector(upcomingMoviesIdsSelector);

  return (
    <>
      <MovieList
        title="What's popular"
        moviesIds={popularMoviesIds}
        isHorizontal
      />
      <MovieList title="Top Rated" moviesIds={topRatedMoviesIds} isHorizontal />
      <MovieList title="Upcoming" moviesIds={upcomingMoviesIds} isHorizontal />
    </>
  );
});
