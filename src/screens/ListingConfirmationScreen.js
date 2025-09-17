import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';

const ListingConfirmationScreen = ({ navigation }) => {
  const handleGoHome = () => {
    // Replace with your navigation logic
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Hostel Icon */}
        <View style={styles.iconWrapper}>
          <Image
            source={require('../screens/Assets/Images/tifstay_logo.png')} // Replace with your icon
            style={styles.icon}
          />
        </View>

        {/* Confirmation Text */}
        <Text style={styles.title}>Listing Created!</Text>
        <Text style={styles.subtitle}>
          Your hostel service listing has been submitted for review.
        </Text>

        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={handleGoHome}>
          <Text style={styles.buttonText}>Go to Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  iconWrapper: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    elevation: 4,
    marginBottom: 24,
  },
  icon: {
    width: 87,
    height: 87,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#004AAD',
    paddingVertical: 14,
    paddingHorizontal: 110,
    borderRadius: 8,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ListingConfirmationScreen;