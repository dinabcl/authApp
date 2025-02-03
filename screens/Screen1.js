import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))

const Screen1 = () => (
  <View style={styles.container}>
    <Text>Welcome to Screen 1!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Screen1;
