import React from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {View} from 'react-native';
import {Logo} from '../assets/images';

export const Header: NavigationFunctionComponent = React.memo(() => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'red',
      }}
    >
      <Logo />
    </View>
  );
});
