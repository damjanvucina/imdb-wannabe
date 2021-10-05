import React from 'react';
import {StyledTextInput} from './styled';

export const SearchBar: React.FC = React.memo(() => {
  return <StyledTextInput onChangeText={() => {}} placeholder="Search" />;
});
