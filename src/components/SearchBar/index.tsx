import React from 'react';
import {TextInput} from 'react-native';
import styled from 'styled-components/native';
import {Search} from '../../assets';
import {colors} from '../../theme';

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

export const SearchBar: React.FC = React.memo(() => {
  return (
    <StyledViewContainer>
      <StyledTextInputPrimary onChangeText={() => {}} placeholder="Search" />
      <StyledImageContainerPrepended>
        <Search />
      </StyledImageContainerPrepended>
    </StyledViewContainer>
  );
});
