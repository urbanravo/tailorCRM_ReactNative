import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Alert, Modal, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';

export default function CameraUpload() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [showOptions, setShowOptions] = useState(false); // Controls the options modal
  const [cameraVisible, setCameraVisible] = useState(false); // Controls the camera view

  useEffect(() => {
    (async () => {
      // Request camera permissions
      const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus === 'granted');

      // Request gallery permissions
      const { status: galleryStatus } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (hasCameraPermission) {
      setCameraVisible(true); // Show the camera view
    } else {
      Alert.alert('Permission Required', 'Camera permission is required to take pictures.');
    }
  };

  const handleCameraCapture = async (camera) => {
    const photo = await camera.takePictureAsync();
    setImage(photo.uri);
    setCameraVisible(false); // Close the camera view
  };

  const pickImageFromGallery = async () => {
    if (hasGalleryPermission) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri); // Use `result.assets[0].uri` for Expo ImagePicker v2+
      }
    } else {
      Alert.alert('Permission Required', 'Gallery permission is required to pick images.');
    }
  };

  const handleOptionSelect = (option) => {
    setShowOptions(false); // Close the options modal
    if (option === 'camera') {
      takePicture();
    } else if (option === 'gallery') {
      pickImageFromGallery();
    }
  };

  return (
    <View style={styles.container}>
      {/* Display the selected/captured image */}
      {image && <Image source={{ uri: image }} style={styles.image} />}

      {/* Camera Icon */}
      <TouchableOpacity style={styles.cameraIcon} onPress={() => setShowOptions(true)}>
        <Ionicons name="camera" size={32} color="black" />
      </TouchableOpacity>

      {/* Options Modal */}
      <Modal visible={showOptions} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.optionButton} onPress={() => handleOptionSelect('camera')}>
              <Text style={styles.optionText}>Take Picture</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={() => handleOptionSelect('gallery')}>
              <Text style={styles.optionText}>Upload from Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.backButton} onPress={() => setShowOptions(false)}>
              <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Camera View */}
      {cameraVisible && (
        <Modal visible={cameraVisible} transparent={false} animationType="slide">
          <View style={styles.cameraContainer}>
            <Camera style={styles.camera} type={Camera.Constants.Type.back}>
              {({ camera }) => (
                <View style={styles.cameraButtons}>
                  <TouchableOpacity style={styles.captureButton} onPress={() => handleCameraCapture(camera)}>
                    <Ionicons name="camera" size={32} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.backButton} onPress={() => setCameraVisible(false)}>
                    <Text style={styles.backButtonText}>Back</Text>
                  </TouchableOpacity>
                </View>
              )}
            </Camera>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  cameraIcon: {
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  optionButton: {
    padding: 15,
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 16,
  },
  backButton: {
    padding: 15,
    width: '100%',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 16,
    color: 'red',
  },
  cameraContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    width: '100%',
    height: '100%',
  },
  cameraButtons: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  captureButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 15,
    borderRadius: 50,
  },
});