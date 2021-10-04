import {Navigation} from 'react-native-navigation';
import {HomeScreen} from './src/fragments/HomeScreen';
import {DetailsScreen} from './src/fragments/DetailsScreen';
import {FavoritesScreen} from './src/fragments/FavoritesScreen';
import {
  HomeTabActive,
  HomeTabInactive,
  FavoritesTabInactive,
  FavoritesTabActive,
} from './src/assets';
import {colors} from './src/theme';

Navigation.registerComponent('HomeScreen', () => HomeScreen);
Navigation.registerComponent('DetailsScreen', () => DetailsScreen);
Navigation.registerComponent('FavoritesScreen', () => FavoritesScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'HomeScreen',
                  },
                },
              ],
              options: {
                // react-native-navigation does not support svgs as tab bar icons (https://github.com/wix/react-native-navigation/issues/5402)
                bottomTab: {
                  icon: HomeTabInactive,
                  selectedIcon: HomeTabActive,
                  textColor: colors.notSelected,
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'FavoritesScreen',
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: FavoritesTabInactive,
                  selectedIcon: FavoritesTabActive,
                  textColor: colors.notSelected,
                },
              },
            },
          },
        ],
      },
    },
  });
});

HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
    },
  },
  bottomTab: {
    text: 'Home',
  },
};

FavoritesScreen.options = {
  topBar: {
    title: {
      text: 'Favorites',
    },
  },
  bottomTab: {
    text: 'Favorites',
  },
};
