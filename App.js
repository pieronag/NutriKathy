import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Image,
  View,
} from 'react-native';

import Navigator from './components/Navigator.js';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  
  const [dataLoaded] = useFonts({
    'Quicksand': require('./assets/fonts/Quicksand-Medium.ttf'),
    'Yomogi': require('./assets/fonts/Yomogi-Regular.ttf'),
    'KGT': require('./assets/fonts/KGTwoisBetterThanOne.ttf'),
  })


  if (!dataLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
