import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image,Text,Platform,PermissionsAndroid } from 'react-native';
import { FormField } from './FormField';
import { NavigationButtons } from './NavigationButtons.js';
// import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';
import CameraUpload from '../components/CameraUpload'
export function CompanyForm({ onNext, onBack }) {
  const [formData, setFormData] = React.useState({
    companyName: '',
    logo: null,
    location: ''
  });
  const [selectedImage, setSelectedImage] = useState(null);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleImageSelect = async () => {
    try {
      // Check and request permissions (for Android)
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
        );

        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          Alert.alert('Permission Denied', 'Storage permission is required to upload images.');
          return;
        }
      }

      // Open the image library
      launchImageLibrary(
        {
          mediaType: 'photo',
          maxWidth: 1024,
          maxHeight: 1024,
          quality: 0.8,
        },
        (response) => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.errorCode) {
            console.error('Image Picker Error: ', response.errorMessage);
          } else {
            // Update the form data with the selected image URI
            const imageUri = response.assets[0].uri;
            handleChange('logo', imageUri);
          }
        }
      );
    } catch (error) {
      console.error('Error opening image library: ', error);
    }
  };

  const handleLocationSelect = () => {
    // You can use a text input or integrate a library like react-native-maps for location picking.
    // Here, we use a simple placeholder logic for demonstration.
    const fakeLocation = '123 Main St, City, Country'; // Replace with a real picker logic
    setFormData(prev => ({ ...prev, location: fakeLocation }));
    alert(`Selected location: ${fakeLocation}`);
  };


  return (
    <View style={styles.container}>
      <FormField
        label="Company/shop name"
        value={formData.companyName}
        onChangeText={(value) => handleChange('companyName', value)}
      />
      
      <TouchableOpacity
        style={styles.uploadBox}
        onPress={handleImageSelect}
        accessibilityLabel="Upload company logo"
      >
        {formData.logo ? (
          <Image source={{ uri: formData.logo }} style={styles.previewImage} />
        ) : (
          <>
          <CameraUpload/>
            {/* <Image
              source={require('../../assets/upload-icon.png')}
              style={styles.uploadIcon}
            /> */}
            <Text style={styles.uploadText}>Add company logo</Text>
          </>
        )}
      </TouchableOpacity>

      {/* Location Picker */}
      <TouchableOpacity
        style={styles.locationBox}
        onPress={handleLocationSelect}
        accessibilityLabel="Select company location"
      >
        <Image
          source={require('../../assets/location-icon.png')}
          style={styles.locationIcon}
        />
        <Text style={styles.locationText}>
          {formData.location ? formData.location : 'Select company location'}
        </Text>
      </TouchableOpacity>


      <NavigationButtons style={styles.navigationButton} onNext={onNext} onBack={onBack} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
  },
  uploadBox: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#ADBCCC',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  uploadIcon: {
    width: 32,
    height: 32,
  },
  uploadText: {
    color: '#627D98',
    fontSize: 16,
    fontWeight: '600',
  },
  locationBox: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#ADBCCC',
    borderRadius: 12,
    padding: 22,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  locationIcon: {
    width: 32,
    height: 32,
  },
  locationText: {
    color: '#627D98',
    fontSize: 16,
    fontWeight: '600',
  },
  navigationButton:{
      alignItems: 'center',
      marginBottom:16
  }
});