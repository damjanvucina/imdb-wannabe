import React from 'react';
import {View, Text} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';

export const HomeScreen: NavigationFunctionComponent = React.memo(() => {
  return (
    <View>
      <Text>home screen</Text>
    </View>
  );
});
