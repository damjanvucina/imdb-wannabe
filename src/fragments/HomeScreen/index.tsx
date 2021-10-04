import React from 'react';
import {View, Text} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';
// import FavoritesIcon from '../../assets/images/favorites-tab-active.svg';

export const HomeScreen: NavigationFunctionComponent = React.memo(() => {
  return (
    <View>
      <Text>home screen</Text>
      {/*<FavoritesIcon />*/}
    </View>
  );
});
