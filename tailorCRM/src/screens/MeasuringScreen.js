import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MeasuringScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Measuring...</Text>
      <Text style={styles.subtitle}>Information goes here...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24, 
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
  }
});
