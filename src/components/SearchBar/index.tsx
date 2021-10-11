import React, {useEffect} from 'react';
import {TextInput} from 'react-native';
import styled from 'styled-components/native';
import {Search} from '../../assets';
import {colors} from '../../theme';
import {useDispatch} from 'react-redux';
import {fetchMoviesThunk, fetchMovieGenresThunk} from '../../redux';

const StyledTextInputPrimary = styled(TextInput)`
  background-color: ${colors.inputBackground};
  border-radius: 10px;
  height: 43px;
  color: ${colors.primary};
  margin: 12px;
  padding: 10px 10px 10px 40px;
  flex: 1;
`;

const StyledImageContainerPrepended = styled.View`
  width: 21px;
  position: absolute;
  margin-top: 20px;
  margin-left: 20px; ;
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

export const SearchBar: React.FC = React.memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesThunk());
    dispatch(fetchMovieGenresThunk());
  }, [dispatch]);

  return (
    <StyledViewContainer>
      <StyledTextInputPrimary onChangeText={() => {}} placeholder="Search" />
      <StyledImageContainerPrepended>
        <Search />
      </StyledImageContainerPrepended>
      <StyledCancelButtonContainer>
        <StyledCancelButtonPrimary
          title="Cancel"
          onPress={() => console.log('aa')}
        />
      </StyledCancelButtonContainer>
    </StyledViewContainer>
  );
});
