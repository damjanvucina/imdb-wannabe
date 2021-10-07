import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {Provider} from 'react-redux';
import {store} from '../../redux/reducer';
import {SearchBar} from '../../components/SearchBar';

export const HomeScreen: NavigationFunctionComponent = React.memo(() => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <SearchBar />
      </SafeAreaView>
    </Provider>
  );
});
