import React from 'react';
import {View, Text} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';

export const FavoritesScreen: NavigationFunctionComponent = React.memo(() => {
  return (
    <View>
      <Text>favorites screen</Text>
    </View>
  );
});
