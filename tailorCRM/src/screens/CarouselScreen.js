import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

export default function CarouselScreen({ navigation }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { id: '1', src: require('../../assets/sliderImg1.png'), title: 'Measuring...', subtitle: 'Information goes here...' },
    { id: '2', src: require('../../assets/sliderImg2.png'), title: 'Maintain notes @ ease', subtitle: 'Information goes here...' },
    { id: '3', src: require('../../assets/sliderImg3.png'), title: 'Think More on designs', subtitle: 'Information goes here...' },
    { id: '4', src: require('../../assets/sliderImg4.png'), title: 'Relax and work!', subtitle: 'Information goes here...' },
  ];

  const handleIndexChanged = (index) => {
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <Swiper
        showsButtons={false}
        loop={false}
        onIndexChanged={handleIndexChanged}
        showsPagination={false}
      >
        {images.map((item) => (
          <View key={item.id} style={styles.slide}>
            <Image source={item.src} style={styles.image} />
          </View>
        ))}
      </Swiper>

      <View style={styles.textDotsButtonContainer}>
        <Text style={styles.imageTitle}>{images[activeIndex].title}</Text>
        <Text style={styles.imageSubtitle}>{images[activeIndex].subtitle}</Text>

        <View style={styles.dotsContainer}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, activeIndex === index && styles.activeDot]}
            />
          ))}
        </View>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate('RegisterScreen')}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.7, // 70% of screen width
    height: height * 0.4, // 40% of screen height
    resizeMode: 'contain',
  },
  textDotsButtonContainer: {
    alignItems: 'center',
    marginBottom: height * 0.05, // 5% of screen height
  },
  imageTitle: {
    fontSize: width * 0.06, // Dynamic font size (6% of screen width)
    fontWeight: 'bold',
    marginTop: height * 0.01, // Small margin-top
    color: '#333',
  },
  imageSubtitle: {
    fontSize: width * 0.04, // Adjust font size based on screen width
    color: '#555',
    marginTop: height * 0.005, // Small margin
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: height * 0.01,
    marginBottom: height * 0.02,
  },
  dot: {
    backgroundColor: '#C4C4C4',
    width: width * 0.02, // Adjust size relative to screen width
    height: width * 0.02,
    borderRadius: width * 0.01,
    marginHorizontal: width * 0.01,
  },
  activeDot: {
    backgroundColor: '#FF5A5F',
    width: width * 0.025,
    height: width * 0.025,
    borderRadius: width * 0.0125,
  },
  continueButton: {
    backgroundColor: '#FF5A5F',
    paddingVertical: height * 0.015, // Vertical padding relative to height
    paddingHorizontal: width * 0.3, // Horizontal padding relative to width
    borderRadius: width * 0.1, // Rounded corners
    alignSelf: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: width * 0.045, // Dynamic font size for button text
    fontWeight: 'bold',
  },
});
