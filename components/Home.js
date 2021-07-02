import React from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  Image,
  Button,
} from 'react-native';
import AgregarFruta from './AgregarFruta';
import Header from './Header';

export default function home({navigator}){
    return (
        <View>
            <Header />
            <Image style={styles.imagen} source={require('../assets/img/logo.png')} />
            <Text>Agregar Fruta o Verdura</Text>
            <Button     
                onPress={() => navigator.navigate('AgregarFruta')}
                title="AGREGAR"
                color="#f1afbb"
                style={styles.boton}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imagen: {
      alignSelf:'center',
      resizeMode: 'stretch',
      width: 150,
      height: 150,
      marginTop: 20,
    },
    boton: {
        flex:1,
        width: 50,
        alignSelf:'center',
    }
  })
