import styled from 'styled-components/native';
import {TextInput} from 'react-native';
import {colors} from '../../theme';

export const StyledTextInput = styled(TextInput)`
  background-color: ${colors.inputBackground};
  border-radius: 10px;
  height: 43px;
  color: ${colors.primary};
  margin: 12px;
  padding: 10px;
`;
