import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';

type Props = {
  title: string;
  description: string;
};

const StyledTitle = styled(Text)`
  font-weight: 800;
  margin-bottom: 5px;
`;
export const MovieDetailsItem: React.FC<Props> = React.memo(
  ({title, description}) => {
    return (
      <View>
        <StyledTitle>{title}</StyledTitle>
        <Text>{description}</Text>
      </View>
    );
  },
);
