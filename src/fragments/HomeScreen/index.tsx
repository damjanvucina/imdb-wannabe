import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {SearchBar} from '../../components/SearchBar';

export const HomeScreen: NavigationFunctionComponent = React.memo(() => {
  return (
    <SafeAreaView>
      <SearchBar />
    </SafeAreaView>
  );
});
