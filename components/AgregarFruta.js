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

import Header from './Header';

const AgregarFruta = () => {
  
  const [inputText, setInputText] = useState('');
  const [inputError, setInputError] = useState('');
  const [itemList, setItemList] = useState([]);

  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  const handleChangeText = (text) => {
    setInputText(text)
    setInputError('');
  };

  const handleAddItem = () => {
    if (inputText) {
      setItemList([
        ...itemList,
        {
          id: Math.random().toString(),
          value: inputText,
        },
      ]);
      setInputText('');
      setInputError('');
    } else {
      setInputError('Required');
    }
  }

  const handleConfirmDelete = () => {
    const id = itemSelected.id;
    setItemList(itemList.filter(item => item.id !== id));
    setModalVisible(false);
    setModalVisible2(true);
    setItemSelected({});
  }

  const handleConfirmDelete2 = () => {
    const id = itemSelected.id;
    setItemList(itemList.filter(item => item.id !== id));
    setModalVisible2(false);
    setItemSelected({});
  }

  const handleModal = id => {
    setItemSelected(itemList.find(item => item.id === id));
    setModalVisible(true);
  }

  return (
    <View style= {styles.screen}>
        <Header />
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Agregar Fruta o Verdura"
            style={styles.input}
            onChangeText={handleChangeText}
            value={inputText}
          />
          <Button
            title="Agregar"
            color="#f1afbb"
            onPress={handleAddItem}
          />
        </View>
        <Text style={styles.inputError}>{inputError}</Text>
        <FlatList style={styles.screen2}
          data={itemList}
          renderItem={data => {
            return (
              <View style={[styles.item, styles.shadow]}>
                <Text>{data.item.value}</Text>
                <Button
                  title="X"
                  color="#f1afbb"
                  onPress={() => handleModal(data.item.id)}
                />
              </View>
            );
          }}
          keyExtractor={item => item.id}
        />
        <Modal animationType="slide" visible={modalVisible} transparent>
          <View style={styles.modalContainer}>
            <View style={[styles.modalContent, styles.shadow]}>
              <Text style={styles.modalMessage}>¿Desea borrar el siguiente elemento?</Text>
              <Text style={styles.modalTitle}>{itemSelected.value}</Text>
              <View>
                <Button
                  onPress={handleConfirmDelete}
                  title="CONFIRMAR"
                  color="#f1afbb"
                />
              </View>
            </View>
          </View>
        </Modal>

        <Modal animationType="slide" visible={modalVisible2} transparent>
          <View style={styles.modalContainer}>
            <View style={[styles.modalContent, styles.shadow]}>
              <Text style={styles.modalMessage}>Elemento Eliminado</Text>
              <View>
                <Button
                  onPress={handleConfirmDelete2}
                  title="CONFIRMAR"
                  color="#f1afbb"
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
  );
}
  

const styles = StyleSheet.create({
    screen: {
      flex: 1,
    },
    screen2: {
      flex: 1,
      paddingLeft: 30,
      paddingRight: 30,
    },
    inputContainer: {
      padding: 30,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontFamily: 'Quicksand',
    },
    input: {
      borderBottomColor: '#f1afbb',
      borderBottomWidth: 1,
      width: 230,
      fontSize: 15,
      fontFamily: 'Quicksand',
    },
    inputError: {
      color: 'red',
    },
    items: {
      padding: 30,
      marginTop: 20,
      fontFamily: 'Quicksand',
    },
    item: {
      padding: 10,
      marginTop: 10,
      marginBottom: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderColor: '#f1afbb',
      borderWidth: 1,
      borderRadius: 5,
      backgroundColor: 'white',
      fontFamily: 'Quicksand',
    },
    modalContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: '#f1afbb',
    },
    modalContent: {
      padding: 30,
      backgroundColor: '#FFFFFF',
      
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalMessage: {
      fontSize: 18,
      width: 230,
      textAlign: 'center',
      marginBottom: 20,
      marginTop: 20,
      fontFamily: 'Quicksand',
    },
    modalTitle: {
      fontSize: 30,
      marginTop: 10,
      marginBottom: 20,
      fontFamily: 'Quicksand',
    },
    shadow: {
      shadowColor: "#f1afbb",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 2,
      shadowRadius: 5,
      elevation: 9,
    }
  });

  export default AgregarFruta;