import {Navigation} from 'react-native-navigation';
import {HomeScreen} from './src/fragments/HomeScreen';
Navigation.registerComponent('HomeScreen', () => HomeScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'HomeScreen',
            },
          },
        ],
      },
    },
  });
});
