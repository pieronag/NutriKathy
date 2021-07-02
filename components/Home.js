import React from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  Image,
  Button,
} from 'react-native';
import AgregarFruta from './AgregarFruta';

const Home = () => {
    return (
        <View>
            <Image style={styles.imagen} source={require('../assets/img/logo.png')} />
            <Text>Agregar Fruta o Verdura</Text>
            <Button     
                onPress={AgregarFruta}
                title="CONFIRMAR"
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
        width: 150,
        alignSelf:'center',
    }
  })

export default Home