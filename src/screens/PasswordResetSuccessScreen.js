import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PasswordResetSuccessScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login'); // navigates to Login screen
    }, 5000); // 3 seconds delay

    return () => clearTimeout(timer); // cleanup
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../screens/Assets/Images/tifstay_logo.png')}
        />
      </View>

      {/* Success Message */}
      <Text style={styles.title}>Congrats!</Text>
      <Text style={styles.subtitle}>Password reset successful.</Text>
    </View>
  );
};

export default PasswordResetSuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logoContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 19,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    marginBottom: 15,
  },
  logo: {
    width: 66,
    height: 46,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666060',
  },
});
