import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
} from 'react-native';

import Navigator from './components/Navigator.js';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  
  const [dataLoaded] = useFonts({
    'Quicksand': require('./assets/fonts/Quicksand-Medium.ttf'),
    'Yomogi': require('./assets/fonts/Yomogi-Regular.ttf'),
    'KGT': require('./assets/fonts/KGTwoisBetterThanOne.ttf'),
  })

  if (!dataLoaded) return <AppLoading />

  return (
    <Navigator />
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
