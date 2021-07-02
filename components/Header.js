import React from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  Image,
} from 'react-native';

const Header = () => {
  
  return (
      <View style={styles.header}>
        <Text style={styles.titulo}>Nutricionista Katherine</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  header: {
    height: 130,
    backgroundColor: '#f1afbb',
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 85,
    color: 'white',
    fontFamily: 'KGT'
  },
  imagen: {
    alignSelf:'flex-start',
    resizeMode: 'stretch',
    width: 50,
    height: 50,
    marginTop: -50,
    marginLeft: 20,
  },
})

export default Header