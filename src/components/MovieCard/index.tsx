import React, {useContext} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {FavoriteIcon} from '../../fragments';
import {getMoviePosterUri} from '../../services';
import {NavigationScreenNames, NavigationStackIdContext} from '../../const';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {getMovieByIdSelector, isMovieFavoriteSelector} from '../../redux';

const StyledImage = styled(Image)`
  width: ${props => (props.width ? `${props.width}px` : '122px')};
  height: 179px;
  border-radius: 10px;
`;

type Props = {
  movieId: number;
  width?: number;
};

export const MovieCard: React.FC<Props> = React.memo(({movieId, width}) => {
  const currentNavigationStackId = useContext(NavigationStackIdContext);
  const isFavorite = useSelector(state =>
    isMovieFavoriteSelector(state, movieId),
  );
  const movie = useSelector(state => getMovieByIdSelector(state, movieId));

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
});
