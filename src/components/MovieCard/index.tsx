import React, {useContext} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {FavoriteIcon} from '../../fragments';
import {getMoviePosterUri} from '../../services';
import {
  Movie,
  NavigationScreenNames,
  NavigationStackIdContext,
} from '../../const';
import styled from 'styled-components';

const StyledImage = styled(Image)`
  width: ${props => (props.width ? `${props.width}px` : '122px')};
  height: 179px;
  border-radius: 10px;
`;

type Props = {
  movie: Movie;
  width?: number;
  isFavorite?: boolean;
};

export const MovieCard: React.FC<Props> = React.memo(
  ({movie, width, isFavorite}) => {
    const currentNavigationStackId = useContext(NavigationStackIdContext);

    const navigateToMovieDetails = () => {
      Navigation.push(currentNavigationStackId, {
        component: {
          name: NavigationScreenNames.DetailsScreen,
          passProps: {
            movie,
          },
        },
      });
    };

    return (
      <TouchableOpacity onPress={navigateToMovieDetails}>
        <FavoriteIcon isFavorite={isFavorite} />
        <StyledImage
          source={{
            uri: getMoviePosterUri(movie),
          }}
          width={width}
        />
      </TouchableOpacity>
    );
  },
);
