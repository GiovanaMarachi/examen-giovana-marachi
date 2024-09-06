import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PropsParcial02 = ({ route }) => {
  // Desestructuración de los parámetros recibidos
  const { nombre, edad } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Mi nombre es: <Text style={styles.value}>{nombre}</Text>, actualmente tengo <Text style={styles.value}>{edad}</Text> años.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5', 
  },
  text: {
    fontSize: 18,
    color: '#333', 
    textAlign: 'center',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007BFF', 
  },
});

export default PropsParcial02;
