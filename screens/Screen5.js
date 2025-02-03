import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Screen5 = () => (
  <View style={styles.container}>
    <Text>Welcome to Screen 5!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Screen5;
