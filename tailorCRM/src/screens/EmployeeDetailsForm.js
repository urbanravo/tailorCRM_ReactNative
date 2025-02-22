import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { FormField } from './FormField';
import { NavigationButtons } from './NavigationButtons.js';

export function EmployeeDetailsForm({ onBack, onComplete }) {
  const [formData, setFormData] = React.useState({
    employeeCount: '',
    departmentCount: '',
    mainContact: '',
    contactRole: ''
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <View style={styles.container}>
      <FormField
        label="Number of Employees"
        value={formData.employeeCount}
        onChangeText={(value) => handleChange('employeeCount', value)}
        keyboardType="numeric"
      />
      <FormField
        label="Number of Departments"
        value={formData.departmentCount}
        onChangeText={(value) => handleChange('departmentCount', value)}
        keyboardType="numeric"
      />
      <FormField
        label="Main Contact Person"
        value={formData.mainContact}
        onChangeText={(value) => handleChange('mainContact', value)}
      />
      <FormField
        label="Contact Person Role"
        value={formData.contactRole}
        onChangeText={(value) => handleChange('contactRole', value)}
      />
      <NavigationButtons 
        onBack={onBack} 
        onNext={onComplete}
        nextButtonText="Complete"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
  }
});