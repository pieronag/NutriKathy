import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  Button,
  Text,
  View,
  FlatList,
  Modal,
} from 'react-native';

import Header from './components/Header';
import AgregarFruta from './components/AgregarFruta.js';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

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
    <View style={styles.screen}>
      <Header />
      <AgregarFruta />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
