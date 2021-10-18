import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import dayjs from 'dayjs';
import styled from 'styled-components';
import {DATE_FORMAT, Movie} from '../const';
import {colors} from '../theme';
import {getYearFromDate, minutesToTimeLabel} from '../services';
import {
  fetchMovieCreditsThunk,
  fetchMovieDetailsThunk,
  isMovieFavoriteSelector,
  movieGenresLabelSelector,
  movieRuntimeMinutesSelector,
  toggleIsMovieFavorite,
} from '../redux';
import {FavoriteIcon} from '../components';

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
const FavoriteIconContainer = styled(TouchableOpacity)`
  right: 10px;
`;

export const MovieDetailsOverlay: React.FC<Props> = React.memo(({movie}) => {
  const dispatch = useDispatch();
  const movieGenresLabel = useSelector(state =>
    movieGenresLabelSelector(state, movie.genreIds),
  );
  const movieRuntimeMinutes = useSelector(state =>
    movieRuntimeMinutesSelector(state, movie.id),
  );
  const isMovieFavorite = useSelector(state =>
    isMovieFavoriteSelector(state, movie.id),
  );

  useEffect(() => {
    dispatch(fetchMovieDetailsThunk(movie.id));
    dispatch(fetchMovieCreditsThunk(movie.id));
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
      <FavoriteIconContainer
        onPress={() => dispatch(toggleIsMovieFavorite(movie.id))}
      >
        <FavoriteIcon isFavorite={isMovieFavorite} />
      </FavoriteIconContainer>
    </View>
  );
});
