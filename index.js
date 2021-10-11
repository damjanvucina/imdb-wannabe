import {Navigation} from 'react-native-navigation';
import {HomeScreen, DetailsScreen, FavoritesScreen} from './src/fragments';
import {Header} from './src/components';
import {NavigationScreenNames} from './src/const';
import {
  HomeTabActive,
  HomeTabInactive,
  FavoritesTabInactive,
  FavoritesTabActive,
} from './src/assets';
import {colors} from './src/theme';

Navigation.registerComponent(
  NavigationScreenNames.HomeScreen,
  () => HomeScreen,
);
Navigation.registerComponent(
  NavigationScreenNames.DetailsScreen,
  () => DetailsScreen,
);
Navigation.registerComponent(
  NavigationScreenNames.FavoritesScreen,
  () => FavoritesScreen,
);
Navigation.registerComponent('Header', () => Header);

Navigation.setDefaultOptions({
  topBar: {
    background: {
      color: colors.primary,
    },
  },
});

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
      component: {
        name: 'Header',
      },
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
      component: {
        name: 'Header',
      },
    },
  },
  bottomTab: {
    text: 'Favorites',
  },
};
