import {Navigation} from 'react-native-navigation';
import {HomeScreen} from './src/fragments/HomeScreen';
import {DetailsScreen} from './src/fragments/DetailsScreen';
import {FavoritesScreen} from './src/fragments/FavoritesScreen';

Navigation.registerComponent('HomeScreen', () => HomeScreen);
Navigation.registerComponent('DetailsScreen', () => DetailsScreen);
Navigation.registerComponent('FavoritesScreen', () => FavoritesScreen);

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
