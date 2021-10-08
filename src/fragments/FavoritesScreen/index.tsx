import React from 'react';
import {ScreenWrapper, FavoriteMovieCategory} from '../../components';
import {NavigationFunctionComponent} from 'react-native-navigation';

export const FavoritesScreen: NavigationFunctionComponent = React.memo(() => {
  return (
    <ScreenWrapper>
      <FavoriteMovieCategory />
    </ScreenWrapper>
  );
});
