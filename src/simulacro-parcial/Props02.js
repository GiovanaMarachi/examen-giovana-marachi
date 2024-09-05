import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Props02 = ({ route }) => {
  const { inputValue } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Detalles:</Text>
        <Text style={styles.infoText}>Nombre: <Text style={styles.value}>{inputValue}</Text></Text>
        <Text style={styles.infoText}>Estado: <Text style={styles.value}>false</Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5', // Fondo gris claro para un aspecto moderno
  },
  card: {
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#ccc', // Color de borde más suave
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333', // Color oscuro para el texto de la etiqueta
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#333', // Color oscuro para el texto de la información
    marginBottom: 8,
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007BFF', // Color azul para resaltar los valores
  },
});

export default Props02;
