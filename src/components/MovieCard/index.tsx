import React from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {getMovieUri} from '../../services';
import {Movie} from '../../const';
import styled from 'styled-components';

const StyledImage = styled(Image)`
  width: 122px;
  width: ${props => (props.width ? `${props.width}px` : '122px')};
  height: 179px;
  border-radius: 10px;
`;

type Props = {
  movie: Movie;
  width?: number;
};

export const MovieCard: React.FC<Props> = React.memo(({movie, width}) => {
  return (
    <TouchableOpacity>
      <StyledImage
        source={{
          uri: getMovieUri(movie),
        }}
        width={width}
      />
    </TouchableOpacity>
  );
});
