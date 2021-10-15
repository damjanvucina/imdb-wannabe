import React from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {ScreenWrapper, CategoriesPreview, SearchBar} from '../../components';

export const HomeScreen: NavigationFunctionComponent = React.memo(
  ({componentId: navigationStackId}) => {
    return (
      <ScreenWrapper navigationStackId={navigationStackId}>
        <SearchBar />
        <CategoriesPreview />
      </ScreenWrapper>
    );
  },
);
