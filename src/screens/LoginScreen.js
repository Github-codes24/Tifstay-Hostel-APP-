import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureEntry, setSecureEntry] = useState(true);

  const handleContinue = () => {
    // Authentication logic here
  };

  const onGooglePress = () => {
    // Google sign-in logic
  };

  const onApplePress = () => {
    // Apple sign-in logic
  };

  return (
    <View style={styles.container}>
      {/* Main Content aligned to bottom */}
      <View style={styles.innerContainer}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../screens/Assets/Images/tifstay_logo.png')}
          />
        </View>
        <Text style={styles.title}>Get started with Tifstay</Text>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Image
            source={require('../screens/Assets/Images/mail.png')}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="example@gmail.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#999"
          />
        </View>

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

        {/* Forgot Password */}
        <TouchableOpacity style={styles.forgotBtn}>
          <Text style={styles.forgotText}>Forget Password?</Text>
        </TouchableOpacity>

        {/* Continue Button */}
        <TouchableOpacity style={styles.continueButton}
          onPress={() => navigation.navigate('HostelDashboard')}
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>

        {/* Divider with OR */}
        <View style={styles.divider}>
          <View style={styles.line} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.line} />
        </View>

        {/* Google Login */}
        <TouchableOpacity style={styles.socialButton} onPress={onGooglePress}>
          <Image
            source={require('../screens/Assets/Images/google.png')}
            style={styles.socialIcon}
          />
          <Text style={styles.socialText}>Continue with Google</Text>
        </TouchableOpacity>

        {/* Apple Login */}
        <TouchableOpacity style={styles.socialButton} onPress={onApplePress}>
          <Image
            source={require('../screens/Assets/Images/apple.png')}
            style={styles.socialIcon}
          />
          <Text style={styles.socialText}>Continue with Apple</Text>
        </TouchableOpacity>

        {/* Register */}
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Don’t have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.registerLink}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Push content to bottom
    alignItems: 'center',
    marginBottom: 70,
    padding: 24,
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
    width: 66,
    height: 46,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 24,
    fontWeight: '600',
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
  forgotBtn: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  forgotText: {
    color: '#666060',
    fontSize: 13,
  },
  continueButton: {
    backgroundColor: '#0056D2',
    width: '100%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  continueText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 12,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  orText: {
    marginHorizontal: 8,
    color: '#888',
    fontSize: 14,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center icon + text
    backgroundColor: '#F6F6F6',
    width: '100%',
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 12,
    resizeMode: 'contain',
  },
  socialText: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  registerContainer: {
    flexDirection: 'row',
    marginTop: 24,
  },
  registerText: {
    color: '#888',
    fontSize: 14,
  },
  registerLink: {
    color: '#0056D2',
    fontWeight: '600',
    fontSize: 14,
  },
});
