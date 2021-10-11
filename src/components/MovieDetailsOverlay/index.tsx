import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import dayjs from 'dayjs';
import styled from 'styled-components';
import {DATE_FORMAT, Movie} from '../../const';
import {colors} from '../../theme';
import {getYearFromDate, minutesToTimeLabel} from '../../services';
import {
  fetchMovieDetailsThunk,
  movieGenresLabelSelector,
  movieRuntimeMinutesSelector,
} from '../../redux';

type Props = {
  movie: Movie;
};

const StyledMovieTitle = styled(Text)`
  color: ${colors.textOverlay};
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 5px;
`;
const StyledLabel = styled(Text)`
  color: ${colors.textOverlay};
`;
const StyledRuntimeLabel = styled(Text)`
  font-weight: bold;
`;

export const MovieDetailsOverlay: React.FC<Props> = React.memo(({movie}) => {
  const dispatch = useDispatch();
  const movieGenresLabel = useSelector(state =>
    movieGenresLabelSelector(state, movie.genreIds),
  );
  const movieRuntimeMinutes = useSelector(state =>
    movieRuntimeMinutesSelector(state, movie.id),
  );
  const formattedLabel = minutesToTimeLabel(movieRuntimeMinutes);
  console.log(formattedLabel);

  useEffect(() => {
    dispatch(fetchMovieDetailsThunk(movie.id));
  }, [dispatch, movie]);

  return (
    <View>
      <StyledMovieTitle>{`${movie.name}(${getYearFromDate(
        movie.releaseDate,
      )})`}</StyledMovieTitle>
      <StyledLabel>{dayjs(movie.releaseDate).format(DATE_FORMAT)}</StyledLabel>
      <StyledLabel>
        {movieGenresLabel}
        <StyledRuntimeLabel>
          {` ${minutesToTimeLabel(movieRuntimeMinutes)}`}
        </StyledRuntimeLabel>
      </StyledLabel>
    </View>
  );
});
