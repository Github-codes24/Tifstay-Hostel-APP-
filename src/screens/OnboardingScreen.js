import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Logo in white box */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../screens/Assets/Images/tifstay_logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* App Name */}
        <Text style={styles.title}>Tifstay</Text>
        <Text style={styles.subtitle}>Find home-style meals & hostels in one app.</Text>

        {/* Food Image */}
        <Image
          source={require('../screens/Assets/Images/Food.png')}
          style={styles.foodImage}
          resizeMode="cover"
        />

        {/* Get Started Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace('ChooseServiceScreen')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>

      {/* Dots */}
      <View style={styles.dotsContainer}>
        <View style={styles.dot} />
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between', // spreads content + dots
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    marginTop: 150, // 👈 pushes all content lower
  },
  logoContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    marginBottom: 15,
  },
  logo: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 8,
  },
  subtitle: {
    fontSize: 15,
    color: '#555',
    textAlign: 'center',
    marginVertical: 10,
    paddingHorizontal: 40,
  },
  foodImage: {
    width: width * 0.9,
    height: 200,
    borderRadius: 10,
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#0052CC',
    paddingVertical: 14,
    borderRadius: 10,
    width: width * 0.9,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dotsContainer: {
    flexDirection: 'row',
    marginBottom: 30, // keeps dots at bottom
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#FF6600',
  },
});

export default OnboardingScreen;
