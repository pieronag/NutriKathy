import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Home.js'
import AgregarFruta from './AgregarFruta.js'

import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator()

const Navigator = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AgregarFruta" component={AgregarFruta} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default Navigator;