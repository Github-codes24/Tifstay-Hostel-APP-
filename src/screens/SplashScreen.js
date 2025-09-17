import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('OnboardingScreen'); // 👈 go to Onboarding first
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* App Logo */}
      <Image
        source={require('./Assets/Images/tifstay_splash.jpg')}  // put your logo
        style={styles.logo}
        resizeMode="contain"
      />

      {/* App Name */}
      <Text style={styles.title}>Tifstay</Text>
      <Text style={styles.tagline}>Eat. Stay. Simplified.</Text>

      {/* Slider dots (optional for splash) */}
      <View style={styles.dotsContainer}>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: width * 0.70,
    height: height * 0.60,
    marginBottom: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0052CC',
    textAlign: 'center',
  },
  tagline: {
    fontSize: 16,
    color: '#333',
    marginTop: 6,
    marginBottom: 30,
    textAlign: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 40,
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

export default SplashScreen;
