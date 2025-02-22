import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function OnboardingSteps({ steps }) {
  return (
    <View style={styles.stepsContainer}>
      {steps.map((step, index) => (
        <View key={step.id} style={styles.stepWrapper}>
          <View style={[
            styles.stepIndicator,
            step.isComplete && styles.completedIndicator,
            step.isCurrent && styles.currentIndicator
          ]}>
            {step.isComplete && (
              <View style={styles.checkmark} />
            )}
          </View>
          <Text style={[
            styles.stepText,
            step.isComplete && styles.completedText,
            step.isCurrent && styles.currentText
          ]}>
            {step.title}
          </Text>
          {index < steps.length - 1 && (
            <View style={[
              styles.connector,
              step.isComplete && styles.completedConnector
            ]} />
          )}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  stepsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
    paddingHorizontal: 16,
  },
  stepWrapper: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  stepIndicator: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#F0F4F8',
    borderWidth: 1,
    borderColor: '#627D98',
    justifyContent: 'center',
    alignItems: 'center',
  },
  completedIndicator: {
    backgroundColor: '#059666',
    borderColor: '#059666',
  },
  currentIndicator: {
    backgroundColor: '#FFFFFF',
    borderColor: '#FF5A5F',
    borderWidth: 4,
    width: 22,
    height: 22,
    borderRadius: 11,
  },
  checkmark: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  stepText: {
    marginTop: 8,
    fontSize: 16,
    
    color: '#627D98',
    fontWeight: '600',
    textAlign: 'center',
  },
  completedText: {
    color: '#3F5165',
  },
  currentText: {
    color: '#FF5A5F',
  },
  connector: {
    position: 'absolute',
    top: 9,
    right: -50,
    width: 100,
    height: 1,
    backgroundColor: '#627D98',
    zIndex: -1,
  },
  completedConnector: {
    backgroundColor: '#059666',
  },
});