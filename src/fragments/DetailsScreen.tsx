import React from 'react';
import styled from 'styled-components';
import {View, Image} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {ScreenWrapper} from '../components/ScreenWrapper';
import {Movie} from '../const';
import {getMoviePosterUri} from '../services';
import {MovieDetailsOverlay} from '../components';
import {MovieDetailsOverview} from './MovieDetailsOverview';

type Props = {
  movie: Movie;
};

const StyledImage = styled(Image)`
  height: 303px;
`;

const StyledContainer = styled(View)`
  padding-left: 18px;
  padding-right: 18px;
`;
const StyledOverlay = styled(StyledContainer)`
  position: absolute;
  z-index: 1;
  top: 100px;
`;

export const DetailsScreen: NavigationFunctionComponent<Props> = React.memo(
  ({componentId: navigationStackId, movie}) => {
    return (
      <ScreenWrapper navigationStackId={navigationStackId}>
        <StyledImage source={{uri: getMoviePosterUri(movie)}} />
        <StyledOverlay>
          {movie && <MovieDetailsOverlay movie={movie} />}
        </StyledOverlay>
        <MovieDetailsOverview movieId={movie?.id} />
      </ScreenWrapper>
    );
  },
);
