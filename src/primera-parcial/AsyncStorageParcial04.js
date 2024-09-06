import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from '@rneui/themed';

const AsyncStorageParcial04 = () => {
  const [codigo, setCodigo] = useState('');
  const [carrera, setCarrera] = useState('');
  const [facultad, setFacultad] = useState('');
  const [datos, setDatos] = useState([]);
  const [editingCodigo, setEditingCodigo] = useState(null); 

  useEffect(() => {
    loadDatos();
  }, []);

  const saveOrUpdateDato = async () => {
    if (codigo && carrera && facultad) {
      if (editingCodigo !== null) {
        // Modo edición
        const updatedDatos = datos.map(dato =>
          dato.codigo === editingCodigo ? { codigo, carrera, facultad } : dato
        );
        await AsyncStorage.setItem('datos', JSON.stringify(updatedDatos));
        setDatos(updatedDatos);
        setEditingCodigo(null); 
      } else {
       
        const newDato = { codigo, carrera, facultad };
        const updatedDatos = [...datos, newDato];
        await AsyncStorage.setItem('datos', JSON.stringify(updatedDatos));
        setDatos(updatedDatos);
      }
      
      setCodigo('');
      setCarrera('');
      setFacultad('');
    }
  };

  const loadDatos = async () => {
    const storedDatos = await AsyncStorage.getItem('datos');
    if (storedDatos) {
      setDatos(JSON.parse(storedDatos));
    }
  };

  const deleteDato = async (codigoToDelete) => {
    const updatedDatos = datos.filter(dato => dato.codigo !== codigoToDelete);
    await AsyncStorage.setItem('datos', JSON.stringify(updatedDatos));
    setDatos(updatedDatos);
  };

  const editDato = (dato) => {
    setCodigo(dato.codigo);
    setCarrera(dato.carrera);
    setFacultad(dato.facultad);
    setEditingCodigo(dato.codigo); 
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Código"
        value={codigo}
        onChangeText={setCodigo}
      />
      <TextInput
        style={styles.input}
        placeholder="Carrera"
        value={carrera}
        onChangeText={setCarrera}
      />
      <TextInput
        style={styles.input}
        placeholder="Facultad"
        value={facultad}
        onChangeText={setFacultad}
      />
      <Button
        title={editingCodigo !== null ? "Actualizar Dato" : "Agregar Dato"}
        onPress={saveOrUpdateDato}
        buttonStyle={styles.submitButton}
        titleStyle={styles.buttonText}
      />

      <Text style={styles.title}>Lista de Datos:</Text>
      <FlatList
        data={datos}
        keyExtractor={(item) => item.codigo}
        renderItem={({ item }) => (
          <View style={styles.datoContainer}>
            <Text>{item.codigo} - {item.carrera} - {item.facultad}</Text>
            <View style={styles.buttonContainer}>
              <Button
                icon={{ name: 'edit', type: 'font-awesome', size: 15, color: 'white' }}
                buttonStyle={[styles.button, styles.editButton]}
                onPress={() => editDato(item)}
              />
              <Button
                icon={{ name: 'trash', type: 'font-awesome', size: 15, color: 'white' }}
                buttonStyle={[styles.button, styles.deleteButton]}
                onPress={() => deleteDato(item.codigo)}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    marginVertical: 10,
  },
  datoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: '#007BFF',
  },
  editButton: {
    backgroundColor: '#007BFF',
  },
  deleteButton: {
    backgroundColor: '#FF5733',
  },
});

export default AsyncStorageParcial04;
