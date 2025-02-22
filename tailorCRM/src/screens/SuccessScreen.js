import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const SuccessScreen = ({ navigation }) => {
  const handleContinue = () => {
    // Handle the next step after "Continue" is clicked
    navigation.navigate('OnboardingScreen'); // Replace with your next screen
  };

  return (
    <View style={styles.container}>
      {/* Image at the top */}
      <Image source={require('../../assets/success.png')} style={styles.image} />

      {/* Welcome message */}
      <Text style={styles.title}>Yeah, welcome!</Text>
      <Text style={styles.subtitle}>
        You have successfully registered, let's dive right in.
      </Text> 

      {/* Continue Button */}
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 20,
  },
  image: {
    width: 200,  // Set based on your image dimensions
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#e74c3c',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SuccessScreen;
