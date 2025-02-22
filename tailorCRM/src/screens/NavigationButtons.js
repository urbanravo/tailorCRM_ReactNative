import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export function NavigationButtons({ onNext, onBack, showBack = true, nextButtonText = 'Next' }) {
  return (
    <View style={styles.buttonContainer}>
      {showBack && (
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity 
        style={[styles.nextButton, !showBack && styles.fullWidth]} 
        onPress={onNext}
      >
        <Text style={styles.nextButtonText}>{nextButtonText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 'auto',
    paddingTop: 10,
    paddingBottom: 20
  },
  backButton: {
    flex: 1,
    borderRadius: 12,
    borderColor: '#ADBCCC',
    borderWidth: 1,
    padding: 16,
  },
  nextButton: {
    flex: 1,
    borderRadius: 12,
    backgroundColor: '#FF5A5F',
    padding: 16,
  },
  fullWidth: {
    flex: 2,
  },
  backButtonText: {
    color: '#3F5165',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  }
});