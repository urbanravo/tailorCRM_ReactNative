import * as React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export function FormField({ 
  label, 
  value, 
  onChangeText, 
  keyboardType = 'default',
  placeholder = 'Enter'
}) {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          placeholder={placeholder}
          placeholderTextColor="#8198AF"
          accessibilityLabel={label}
          accessibilityHint={`Enter ${label.toLowerCase()}`}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fieldContainer: {
    width: '100%',
  },
  label: {
    fontSize: 14,
    color: '#627D98',
    
    fontWeight: '600',
    marginBottom: 4,
    paddingHorizontal: 8,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#ADBCCC',
    borderRadius: 8,
    minHeight: 40,
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
  input: {
    fontSize: 16,
    color: '#3F5165',
    
    paddingVertical: 8,
  },
});