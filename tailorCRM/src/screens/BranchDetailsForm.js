import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { NavigationButtons } from "./NavigationButtons.js";

export function BranchDetailsForm({ onNext,  onBack }) {
  const [formData, setFormData] = useState({
    branchName: "",
    branchType: "",
  });

  const branchTypes = ["Gents", "Ladies", "Kids"];

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <View style={styles.formContainer}>
      {/* Step indicator */}
      <Text style={styles.skipText}>
        We don’t have any branches, <Text style={styles.skipLink}>SKIP</Text> ➜
      </Text>

      {/* Branch Name Input */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Branch name</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Enter"
            value={formData.branchName}
            onChangeText={(value) => handleChange("branchName", value)}
            accessibilityLabel="Branch name input"
          />
        </View>
      </View>

      {/* Branch Type */}
      <View style={styles.branchTypeSection}>
        <Text style={styles.label}>Branch type</Text>
        <View style={styles.typeOptions}>
          {branchTypes.map((type) => (
            <TouchableOpacity
              key={type}
              style={[
                styles.typeOption,
                formData.branchType === type && styles.selectedTypeOption,
              ]}
              onPress={() => handleChange("branchType", type)}
              accessibilityRole="checkbox"
              accessibilityState={{ checked: formData.branchType === type }}
            >
              <View
                style={[
                  styles.radioButton,
                  formData.branchType === type && styles.checkedRadioButton,
                ]}
              />
              <Text
                style={[
                  styles.typeText,
                  formData.branchType === type && styles.selectedTypeText,
                ]}
              >
                {type}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Add Branch Photo */}
      <TouchableOpacity style={styles.uploadSection}>
        <Text style={styles.uploadText}>Add branch photo</Text>
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/42e355afe82235ed28593386e7a8f451517d6398b05cec2ea620c230fbac3baf?placeholderIfAbsent=true&apiKey=cbd64dfbc2ec4564a98280d07c8459b2",
          }}
          style={styles.uploadIcon}
        />
      </TouchableOpacity>

      {/* Branch Location */}
      <TouchableOpacity style={styles.locationSection}>
        <Text style={styles.uploadText}>Branch location</Text>
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/77530a856b7c1a0175509a5d87fa107ccd5ef04f7622fe2db4cafe763cba023e?placeholderIfAbsent=true&apiKey=cbd64dfbc2ec4564a98280d07c8459b2",
          }}
          style={styles.locationIcon}
        />
      </TouchableOpacity>

      {/* Add More Branches */}
      <TouchableOpacity style={styles.addMoreButton}>
        <Text style={styles.addMoreText}>Add more branches</Text>
      </TouchableOpacity>

      <NavigationButtons
        style={styles.navigationButton}
        onNext={onNext}
        onBack={onBack}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 35,
    width: "100%",
    padding: 16,
  },
  stepHeader: {
    fontSize: 18,
    fontWeight: "600",
    color: "#313B49",
    textAlign: "center",
    marginBottom: 12,
  },
  stepIndicator: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 12,
  },
  step: {
    fontSize: 12,
    color: "#ADBCCC",
  },
  activeStep: {
    color: "#FF4081",
  },
  skipText: {
    textAlign: "center",
    fontSize: 14,
    color: "#627D98",
    marginBottom: 10,
    marginTop: 10
  },
  skipLink: {
    color: "#FF5A5F",
    fontWeight: "700",
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    color: "#627D98",
    fontSize: 14,
    marginBottom: 8,
  },
  inputWrapper: {
    borderRadius: 8,
    borderColor: "#ADBCCC",
    borderWidth: 1,
    minHeight: 40,
    paddingHorizontal: 8,
  },
  input: {
    fontSize: 14,
    color: "#3F5165",
  },
  branchTypeSection: {
    marginBottom: 24,
  },
  typeOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  typeOption: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ADBCCC",
    marginRight: 8,
  },
  checkedRadioButton: {
    borderColor: "#FF5A5F",
    backgroundColor: "#FF5A5F",
  },
  typeText: {
    fontSize: 14,
    color: "#627D98",
  },
  selectedTypeText: {
    color: "#FF4081",
    fontWeight: "600",
  },
  uploadSection: {
    borderRadius: 12,
    borderColor: "#ADBCCC",
    borderStyle: "dashed",
    borderWidth: 1,
    padding: 16,
    alignItems: "center",
    marginBottom: 24,
  },
  uploadText: {
    fontSize: 16,
    color: "#627D98",
    fontWeight: "600",
  },
  uploadIcon: {
    width: 32,
    height: 32,
    marginTop: 10,
  },
  locationSection: {
    borderRadius: 12,
    borderColor: "#ADBCCC",
    borderStyle: "dashed",
    borderWidth: 1,
    padding: 16,
    alignItems: "center",
    marginBottom: 24,
  },
  locationIcon: {
    width: 32,
    height: 32,
    marginTop: 10,
  },
  addMoreButton: {
    alignSelf: "center",
    marginBottom: 24,
  },
  addMoreText: {
    fontSize: 14,
    color: "#0E60D2",
    fontWeight: "700",
  },
  navigationButton:{
    alignItems: 'center',
    marginBottom:16
  }
});
