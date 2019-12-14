/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeStack from './Componets/Pages/Home/index';
import CategoryStack from './Componets/Pages/Category/index';
import CheckoutStack from './Componets/Pages/Checkout/index';
import {createStackNavigator} from 'react-navigation-stack';

const HomeStackRoute = createStackNavigator(
  {
    Home: {
      screen: HomeStack,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#111d5e',
      },
      headerTitleStyle: {
        color: '#FFF',
        fontWeight: 'bold',
      },
    },
  },
);

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStackRoute,
    },
    Category: {
      screen: CategoryStack,
    },
    Checkout: {
      screen: CheckoutStack,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({tintColor, focused, horizontal}) => {
        const {routeName} = navigation.state;
        let iconName;
        console.log(routeName);
        if (routeName === 'Home') {
          iconName = 'ios-home';
        } else if (routeName === 'Category') {
          iconName = 'ios-apps';
        } else if (routeName === 'Checkout') {
          iconName = 'ios-archive';
        }
        return <Icon name={iconName} color={tintColor} size={25} />;
      },
      tabBarOptions: {
        activeTintColor: '#FFF',
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: '#111d5e',
        },
      },
      headerStyle: {
        backgroundColor: '#111d5e',
      },
      headerTitleStyle: {
        color: '#FFF',
        fontWeight: 'bold',
      },
    }),
  },
);

export default createAppContainer(AppNavigator);

// export default App;
