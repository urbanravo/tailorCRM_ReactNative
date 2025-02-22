import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
// import LinearGradient from 'react-native-linear-gradient';

export default function LandingPage({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("CarouselScreen"); // Navigate to MeasuringScreen
    }, 2000); // 2000ms = 2 seconds

    // Cleanup the timer when component unmounts
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/landing-image.png")} // Replace with your image path
        style={styles.fullImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes the container take up the full screen
    justifyContent: "center", // Centers the content vertically
    alignItems: "center", // Centers the content horizontally
    backgroundColor: '#fff'
  },
  fullImage: {
    width: 500, // Set the width of the image
    height: 300, // Set the height of the image
    resizeMode: "contain", // Ensures the image fits within the width and height
  },
});
