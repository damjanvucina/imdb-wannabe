import React from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {ScreenWrapper} from '../ScreenWrapper';
import {CategoriesPreview, SearchBar} from '../../components';

export const HomeScreen: NavigationFunctionComponent = React.memo(() => {
  return (
    <ScreenWrapper>
      <SearchBar />
      <CategoriesPreview />
    </ScreenWrapper>
  );
});
