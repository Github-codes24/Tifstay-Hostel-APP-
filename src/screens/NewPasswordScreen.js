import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const NewPasswordScreen = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [secureEntry, setSecureEntry] = useState(true);
  const handleReset = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Reset password logic
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../screens/Assets/Images/tifstay_logo.png')}
        />
      </View>
      {/* Title */}
      <Text style={styles.title}>New Password</Text>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Image
          source={require('../screens/Assets/Images/lock.png')}
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={secureEntry}
          autoCapitalize="none"
          placeholderTextColor="#999"
        />
        <TouchableOpacity onPress={() => setSecureEntry(!secureEntry)}>
          <Image
            source={
              secureEntry
                ? require('../screens/Assets/Images/eye.png')
                : require('../screens/Assets/Images/eye.png')
            }
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Confirm Password Input */}
      <View style={styles.inputContainer}>
  <Image
    source={require('../screens/Assets/Images/lock.png')}
    style={styles.inputIcon}
  />
  <TextInput
    style={styles.input}
    placeholder="Password"
    value={password}
    onChangeText={setPassword}
    secureTextEntry={secureEntry}
    autoCapitalize="none"
    placeholderTextColor="#999"
  />
  <TouchableOpacity onPress={() => setSecureEntry(!secureEntry)}>
    <Image
      source={
        secureEntry
          ? require('../screens/Assets/Images/eye.png')
          : require('../screens/Assets/Images/eye.png')
      }
      style={styles.eyeIcon}
    />
  </TouchableOpacity>
</View>


      {/* Reset Button */}
      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('PasswordResetSuccessScreen')}
      >
        <Text style={styles.buttonText}>Save Password</Text>
      </TouchableOpacity>

      {/* Back to Login */}
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>Remember it.</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginLink}> Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 340
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
    height: 30,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 24,
    fontWeight: '700',
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    width: '100%',
    height: 50,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#000',
  },
  button: {
    backgroundColor: '#0056D2',
    width: '100%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  bottomTextContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  bottomText: {
    color: '#666',
    fontSize: 14,
  },
  loginLink: {
    color: '#0056D2',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
