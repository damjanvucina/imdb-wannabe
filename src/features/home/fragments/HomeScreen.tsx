import React from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {ScrollView} from 'react-native';
import {SearchBar} from '../../search/fragments';
import {ScreenWrapper} from '../../movies/fragments/ScreenWrapper';
import {CategoriesPreview} from '../../movies/fragments/CategoriesPreview';

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
