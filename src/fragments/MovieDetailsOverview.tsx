import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import {movieCrewSelector, movieOverviewSelector} from '../redux';
import {MovieDetailsItem} from '../components';

type Props = {
  movieId: number;
};

export const MovieDetailsOverview: React.FC<Props> = React.memo(({movieId}) => {
  const movieCrew = useSelector(state => movieCrewSelector(state, movieId));
  const movieOverview = useSelector(state =>
    movieOverviewSelector(state, movieId),
  );

  return (
    <StyledContainer>
      <StyledTitle>Overview</StyledTitle>
      <Text>{movieOverview}</Text>
      <StyledCrewContainer>
        {movieCrew &&
          movieCrew.map((movieMember, index) => {
            return (
              <StyledDetailsContainer>
                <MovieDetailsItem
                  title={movieMember.name}
                  description={movieMember.department}
                  key={index}
                />
              </StyledDetailsContainer>
            );
          })}
      </StyledCrewContainer>
    </StyledContainer>
  );
});

const StyledContainer = styled(View)`
  margin: 16px 16px;
`;

const StyledCrewContainer = styled(View)`
  flex-flow: row wrap;
  justify-content: space-between;
  margin-top: 16px;
`;

const StyledDetailsContainer = styled(View)`
  flex: 0 0 33%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const StyledTitle = styled(Text)`
  font-weight: 900;
  font-size: 20px;
  line-height: 28px;
`;
