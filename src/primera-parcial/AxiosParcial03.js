import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Card } from '@rneui/themed';
import Axios from 'axios';

const AxiosParcial03 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => {
        setData(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Card containerStyle={styles.card}>
            <Card.Title>{item.name}</Card.Title>
            <Card.Divider />
            <Text style={styles.text}>Email: {item.email}</Text>
            <Text style={styles.text}>Comentario: {item.body}</Text>
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  card: {
    borderRadius: 10,
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});

export default AxiosParcial03;
