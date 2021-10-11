import React, {useContext} from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {getMoviePosterUri} from '../../services';
import {NotFavorite, Favorite} from '../../assets';
import {
  Movie,
  NavigationScreenNames,
  NavigationStackIdContext,
} from '../../const';
import styled from 'styled-components';
import {colors} from '../../theme';

const StyledImage = styled(Image)`
  width: ${props => (props.width ? `${props.width}px` : '122px')};
  height: 179px;
  border-radius: 10px;
`;

const FavoritedContainer = styled(View)`
  position: absolute;
  z-index: 1;
  top: 8px;
  left: 10px;
  background-color: ${colors.primary};
  padding: 10px;
  border-radius: 50px;
  opacity: 0.6;
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
        <FavoritedContainer>
          {!isFavorite ? <NotFavorite /> : <Favorite />}
        </FavoritedContainer>
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
