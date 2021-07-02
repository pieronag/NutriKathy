import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Inicio from './Home.js'
import AgregarFruta from './AgregarFruta.js'

const Stack = createStackNavigator()

const Navigator = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Inicio} />
            <Stack.Screen name="AgregarFruta" component={AgregarFruta} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default Navigator;