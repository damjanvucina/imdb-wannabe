import React from 'react';
import {TextInput} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../../theme';

export const StyledTextInputPrimary = styled(TextInput)`
  background-color: ${colors.inputBackground};
  border-radius: 10px;
  height: 43px;
  color: ${colors.primary};
  margin: 12px;
  padding: 10px;
`;

export const SearchBar: React.FC = React.memo(() => {
  return (
    <StyledTextInputPrimary onChangeText={() => {}} placeholder="Search" />
  );
});
