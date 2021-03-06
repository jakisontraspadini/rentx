import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { MyCars } from '../screens/MyCars';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { Confirmation } from '../screens/Confirmation';
import { SchedulingDetails } from '../screens/SchedulingDetails';

const { Navigator, Screen } = createStackNavigator();

export function AppStackRoutes() {
    return (
        <Navigator headerMode="none" initialRouteName="Home">  

            <Screen
                name="Home"
                component={Home}
            />

            <Screen
                name="CarDetails"
                component={CarDetails}
            />

            <Screen
                name="Scheduling"
                component={Scheduling}
            />

            <Screen
                name="SchedulingDetails"
                component={SchedulingDetails}
            />

            <Screen
                name="MyCars"
                component={MyCars}
            />

            <Screen
                name="Confirmation"
                component={Confirmation}
            />
        </Navigator>
    );
}