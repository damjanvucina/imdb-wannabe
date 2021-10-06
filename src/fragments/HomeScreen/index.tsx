import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {Provider} from 'react-redux';
import {store} from '../../redux/reducer';
import {SearchBar} from '../../components/SearchBar';
// import {getPopularMovies} from '../../api';

export const HomeScreen: NavigationFunctionComponent = React.memo(() => {
  // useEffect(() => {
  //   const getMovs = async () => {
  //     // @ts-ignore
  //     const res = await getPopularMovies();
  //     console.log(res);
  //   };
  //
  //   getMovs();
  // }, []);

  return (
    <Provider store={store}>
      <SafeAreaView>
        <SearchBar />
      </SafeAreaView>
    </Provider>
  );
});
