import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import axios from 'axios';

const ImageUploader = () => {
  const [imageUri, setImageUri] = useState(null);

  // Function to pick an image from the gallery
  const pickImageFromGallery = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert('Permission required', 'We need access to your photo library.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  // Function to take a photo using the camera
  const takePhoto = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert('Permission required', 'We need access to your camera.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  // Function to upload the image
  const uploadImage = async () => {
    if (!imageUri) {
      Alert.alert('No image selected', 'Please select or capture an image to upload.');
      return;
    }

    try {
      const fileInfo = await FileSystem.getInfoAsync(imageUri);
      const formData = new FormData();
      formData.append('file', {
        uri: fileInfo.uri,
        type: 'image/jpeg', // Update based on your image type
        name: 'upload.jpg',
      });

      const response = await axios.post('YOUR_API_ENDPOINT_HERE', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      Alert.alert('Success', 'Image uploaded successfully!');
      console.log(response.data);
    } catch (error) {
      console.error('Upload error:', error);
      Alert.alert('Error', 'Failed to upload image.');
    }
  };

  return (
    <View style={styles.container}>
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      <Button title="Pick from Gallery" onPress={pickImageFromGallery} />
      <Button title="Take Photo" onPress={takePhoto} />
      <Button title="Upload Image" onPress={uploadImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default ImageUploader;
