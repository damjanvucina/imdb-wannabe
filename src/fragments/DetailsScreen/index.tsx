import React from 'react';
import {View, Text} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';

export const DetailsScreen: NavigationFunctionComponent = React.memo(() => {
  return (
    <View>
      <Text>details screen</Text>
    </View>
  );
});
