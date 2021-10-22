import React from 'react';
import styled from 'styled-components';
import {View} from 'react-native';
import {NotFavorite, Favorite} from '../../../core/ui/assets';
import {colors} from '../../../core/theme';

type Props = {
  isFavorite?: boolean;
};

export const FavoriteIcon: React.FC<Props> = React.memo(({isFavorite}) => {
  return (
    <FavoritedContainer>
      {!isFavorite ? <NotFavorite /> : <Favorite />}
    </FavoritedContainer>
  );
});

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
