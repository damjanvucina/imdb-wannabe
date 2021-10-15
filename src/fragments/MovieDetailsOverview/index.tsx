import React from 'react';
import {useSelector} from 'react-redux';
import {View} from 'react-native';
import styled from 'styled-components';
import {movieCrewSelector} from '../../redux';
import {MovieDetailsItem} from '../../components/MovieDetailsItem';

type Props = {
  movieId: number;
};

const StyledContainer = styled(View)`
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 10px 16px;
`;

const StyledDetailsContainer = styled(View)`
  flex: 0 0 33%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const MovieDetailsOverview: React.FC<Props> = React.memo(({movieId}) => {
  const movieCrew = useSelector(state => movieCrewSelector(state, movieId));
  return (
    <>
      <StyledContainer>
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
      </StyledContainer>
    </>
  );
});
