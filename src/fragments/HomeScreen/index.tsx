import React from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {ScrollView} from 'react-native';
import {ScreenWrapper, CategoriesPreview, SearchBar} from '../../components';

export const HomeScreen: NavigationFunctionComponent = React.memo(
  ({componentId: navigationStackId}) => {
    return (
      <ScreenWrapper navigationStackId={navigationStackId}>
        <ScrollView>
          <SearchBar />
          <CategoriesPreview />
        </ScrollView>
      </ScreenWrapper>
    );
  },
);
