import React from 'react';
import {Text} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {ScreenWrapper} from '../../components/ScreenWrapper';
import {Movie} from '../../const';

type Props = {
  movie: Movie;
};

export const DetailsScreen: NavigationFunctionComponent<Props> = React.memo(
  ({componentId: navigationStackId, movie}) => {
    console.log('name je ', movie);
    return (
      <ScreenWrapper navigationStackId={navigationStackId}>
        <Text>{movie.name}</Text>
      </ScreenWrapper>
    );
  },
);
