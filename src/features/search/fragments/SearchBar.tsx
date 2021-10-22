import React, {useEffect, memo, FC} from 'react';
import {TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';
import {Search} from '../../home/assets';
import {colors} from '../../../core/theme';
import {fetchMoviesThunk, fetchMovieGenresThunk} from '../../home/redux';

export const SearchBar: FC = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesThunk());
    dispatch(fetchMovieGenresThunk());
  }, [dispatch]);

  return (
    <StyledViewContainer>
      <StyledTextInputPrimary onChangeText={() => {}} placeholder="Search" />
      <StyledViewImageContainer>
        <Search />
      </StyledViewImageContainer>
      <StyledCancelButtonContainer>
        <StyledCancelButtonPrimary
          title="Cancel"
          onPress={() => console.log('aa')}
        />
      </StyledCancelButtonContainer>
    </StyledViewContainer>
  );
});

const StyledTextInputPrimary = styled(TextInput)`
  background-color: ${colors.inputBackground};
  border-radius: 10px;
  height: 43px;
  color: ${colors.primary};
  margin: 12px;
  padding: 10px 10px 10px 40px;
  flex: 1;
`;

const StyledViewImageContainer = styled.View`
  width: 21px;
  position: absolute;
  margin-top: 20px;
  margin-left: 20px;
`;

const StyledViewContainer = styled.View`
  flex-direction: row;
`;

const StyledCancelButtonPrimary = styled.Button`
  color: ${colors.primary};
  background-color: darkblue;
`;
const StyledCancelButtonContainer = styled.View`
  margin-top: 12px;
  padding-right: 10px;
`;
