import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaView} from 'react-native';
import {store} from '../redux/reducer';
import {NavigationStackIdContext} from '../const';

type Props = {
  children: React.ReactNode | React.ReactNodeArray;
  navigationStackId: string;
};

export const ScreenWrapper: React.FC<Props> = React.memo(
  ({children, navigationStackId}) => {
    return (
      <Provider store={store}>
        <NavigationStackIdContext.Provider value={navigationStackId}>
          <SafeAreaView>{children}</SafeAreaView>
        </NavigationStackIdContext.Provider>
      </Provider>
    );
  },
);
