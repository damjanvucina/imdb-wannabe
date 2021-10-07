import React from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {getMovieUri} from '../../services';
import {Movie} from '../../const';
import styled from 'styled-components';

const StyledImage = styled(Image)`
  width: 122px;
  height: 179px;
  border-radius: 10px;
`;

type Props = {
  movie: Movie;
};

export const MovieCard: React.FC<Props> = React.memo(({movie}) => {
  return (
    <TouchableOpacity>
      <StyledImage
        source={{
          uri: getMovieUri(movie),
        }}
      />
    </TouchableOpacity>
  );
});
