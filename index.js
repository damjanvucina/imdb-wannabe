import {Navigation} from 'react-native-navigation';
import {DetailsScreen} from './src/features/movies/fragments';
import {FavoritesScreen} from './src/features/favorites/fragments';
import {HomeScreen} from './src/features/movies/fragments';
import {Header} from './src/features/movies/components';
import {NavigationScreenNames} from './src/features/movies/const';
import {
  HomeTabActive,
  HomeTabInactive,
  FavoritesTabInactive,
  FavoritesTabActive,
} from './src/core/ui/assets';
import {colors} from './src/core/theme';

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

DetailsScreen.options = {
  topBar: {
    title: {
      text: 'Details',
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
