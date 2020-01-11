import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../auth/LoginScreen';

const MainNavigator = createStackNavigator(
    {
        login: {
            screen: LoginScreen,
            navigationOptions: () => ({}),
        },
    },
    {
        initialRouteName: 'login',
    },
);
const RootNavigation = createAppContainer(MainNavigator);
export default RootNavigation;

