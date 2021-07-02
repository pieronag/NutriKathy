import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Home.js'
import AgregarFruta from './AgregarFruta.js'

const Stack = createStackNavigator()

export default function Navigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='home'
                component={Home}
            />
            <Stack.Screen
                name='agregarFruta'
                component={AgregarFruta}
            />
        </Stack.Navigator>
    )
}