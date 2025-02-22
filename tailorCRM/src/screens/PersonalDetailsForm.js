import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Platform        } from 'react-native';
import DateTimePicker from "@react-native-community/datetimepicker";

export function PersonalDetailsForm({ onNext }) {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: null,
    gender: '',
  });
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false); 
    if (selectedDate) {
      setFormData({ ...formData, dateOfBirth: selectedDate });
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Full name</Text>
        <TextInput
          style={styles.input}
          value={formData.fullName}
          onChangeText={(text) => setFormData({ ...formData, fullName: text })}
          placeholder="Enter Fullname"
          placeholderTextColor="#8198AF"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Date of Birth</Text>
        <TouchableOpacity
          style={styles.input}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={{ color: formData.dateOfBirth ? "#313B49" : "#8198AF" }}>
            {formData.dateOfBirth
              ? formData.dateOfBirth.toLocaleDateString("en-GB") // Format date
              : "DD / MM / YYYY"}
          </Text>
        </TouchableOpacity>
        {showDatePicker && (
         <DateTimePicker
         value={formData.dateOfBirth || new Date()}
         mode="date"
         display={Platform.OS === "ios" ? "spinner" : "default"}
         onChange={handleDateChange}
         maximumDate={new Date()} // Prevent future dates
         textColor={Platform.OS === "ios" ? "black" : undefined} // For iOS text color
       />
        )}
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Gender</Text>
        <View style={styles.radioGroup}>
          {['Male', 'Female', 'Other'].map((option) => (
            <TouchableOpacity
              key={option}
              style={styles.radioOption}
              onPress={() => setFormData({ ...formData, gender: option })}
            >
              <View
                style={[
                  styles.radioButton,
                  formData.gender === option && styles.radioButtonSelected,
                ]}
              />
              <Text
                style={[
                  styles.radioText,
                  formData.gender === option && styles.radioTextSelected,
                ]}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.nextButton} onPress={onNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    color: '#627D98',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ADBCCC',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#313B49',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ADBCCC',
    borderRadius: 8,
    padding: 8,
  },
  dateInput: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    color: '#313B49',
  },
  dateSeparator: {
    fontSize: 16,
    color: '#313B49',
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#EEF1F5',
    marginRight: 8,
  },
  radioButtonSelected: {
    borderColor: '#FF5A5F',
    backgroundColor: '#FF5A5F',
  },
  radioText: {
    fontSize: 16,
    color: '#627D98',
  },
  radioTextSelected: {
    color: '#313B49',
    fontWeight: '700',
  },
  nextButton: {
    backgroundColor: '#FF5A5F',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16, 
    fontWeight: '700',
  },
});
