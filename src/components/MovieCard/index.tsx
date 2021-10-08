import React from 'react';
import {Image, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {getMovieUri} from '../../services';
import {NotFavorite, Favorite} from '../../assets';
import {Movie} from '../../const';
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
    return (
      <TouchableOpacity>
        <FavoritedContainer>
          {!isFavorite ? <NotFavorite /> : <Favorite />}
        </FavoritedContainer>
        <StyledImage
          source={{
            uri: getMovieUri(movie),
          }}
          width={width}
        />
      </TouchableOpacity>
    );
  },
);
