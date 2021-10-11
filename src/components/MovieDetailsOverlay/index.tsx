import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import dayjs from 'dayjs';
import styled from 'styled-components';
import {DATE_FORMAT, Movie} from '../../const';
import {colors} from '../../theme';
import {getYearFromDate} from '../../services';
import {movieGenresLabelSelector} from '../../redux';

type Props = {
  movie: Movie;
};

const StyledMovieTitle = styled(Text)`
  color: ${colors.textOverlay};
  font-weight: 500;
  font-size: 24px;
`;
const StyledLabel = styled(Text)`
  color: ${colors.textOverlay};
`;

export const MovieDetailsOverlay: React.FC<Props> = React.memo(({movie}) => {
  const movieGenresLabel = useSelector(state =>
    movieGenresLabelSelector(state, movie.genreIds),
  );

  return (
    <View>
      <StyledMovieTitle>{`${movie.name}(${getYearFromDate(
        movie.releaseDate,
      )})`}</StyledMovieTitle>
      <StyledLabel>{dayjs(movie.releaseDate).format(DATE_FORMAT)}</StyledLabel>
      <StyledLabel>{movieGenresLabel}</StyledLabel>
    </View>
  );
});
