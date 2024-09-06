import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Componente01 = () => {
  const [inputValue, setInputValue] = useState('');
  const navigation = useNavigation();

  const items = [
    { key: 'Props02', component: 'Props02' },
    { key: 'Axios03', component: 'Axios03' },
    { key: 'AsyncStorage04', component: 'AsyncStorage04' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla Principal</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese un texto"
        value={inputValue}
        onChangeText={setInputValue}
      />
      
      <FlatList
        data={items}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(item.component, { inputValue })}
          >
            <Text style={styles.buttonText}>{item.key}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
    alignSelf:'center' 
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
    fontStyle:"italic"
  },
  button: {
    padding: 15,
    backgroundColor: 'black', // Verde para los botones
    marginBottom: 10,
    borderRadius: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Componente01;
