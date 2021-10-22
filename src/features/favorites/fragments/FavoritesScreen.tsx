import React from 'react';
import {ScreenWrapper} from '../../home/fragments/ScreenWrapper';
import {FavoriteCategoryPreview} from './FavoriteCategoryPreview';

import {NavigationFunctionComponent} from 'react-native-navigation';

export const FavoritesScreen: NavigationFunctionComponent = React.memo(
  ({componentId: navigationStackId}) => {
    return (
      <ScreenWrapper navigationStackId={navigationStackId}>
        <FavoriteCategoryPreview />
      </ScreenWrapper>
    );
  },
);
