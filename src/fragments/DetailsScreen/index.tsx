import React from 'react';
import styled from 'styled-components';
import {Image} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {ScreenWrapper} from '../../components/ScreenWrapper';
import {Movie} from '../../const';
import {getMovieUri} from '../../services';

type Props = {
  movie: Movie;
};

export const StyledImage = styled(Image)`
  height: 303px;
`;

export const DetailsScreen: NavigationFunctionComponent<Props> = React.memo(
  ({componentId: navigationStackId, movie}) => {
    console.log('name je ', movie);
    return (
      <ScreenWrapper navigationStackId={navigationStackId}>
        <StyledImage
          source={{
            uri: getMovieUri(movie),
          }}
        ></StyledImage>
      </ScreenWrapper>
    );
  },
);
