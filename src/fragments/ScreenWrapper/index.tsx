import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaView} from 'react-native';
import {store} from '../../redux/reducer';

type Props = {
  children: React.ReactNode | React.ReactNodeArray;
};

export const ScreenWrapper: React.FC<Props> = React.memo(({children}) => {
  return (
    <Provider store={store}>
      <SafeAreaView>{children}</SafeAreaView>
    </Provider>
  );
});
