import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Overlay } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const ComponenteParcial01 = () => {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const navigation = useNavigation();

  const items = [
    { key: 'PropsParcial02', component: 'PropsParcial02', params: { nombre: 'Mi nombre', edad: '30' } },
    { key: 'AxiosParcial03', component: 'AxiosParcial03' },
    { key: 'AsyncStorageParcial04', component: 'AsyncStorageParcial04' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Examen Primera Parcial</Text>

      <TouchableOpacity
        style={styles.overlayButton}
        onPress={() => setOverlayVisible(true)}
      >
        <Text style={styles.overlayButtonText}>Mostrar Bienvenida</Text>
      </TouchableOpacity>

      <Overlay isVisible={overlayVisible} onBackdropPress={() => setOverlayVisible(false)}>
        <Text style={styles.overlayText}>Bienvenido al examen</Text>
      </Overlay>

      <FlatList
        data={items}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(item.component, item.params)}
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
    textAlign: 'center',
  },
  overlayButton: {
    padding: 15,
    backgroundColor: '#007bff',
    marginBottom: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  overlayButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  overlayText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    padding: 15,
    backgroundColor: '#007bff',
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

export default ComponenteParcial01;
