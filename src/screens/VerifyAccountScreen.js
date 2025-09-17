import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const VerifyAccountScreen = ({ navigation }) => {
  const [code, setCode] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(59);

  // Countdown timer
  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (text, index) => {
    if (text.length <= 1) {
      const newCode = [...code];
      newCode[index] = text;
      setCode(newCode);
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>

      
      <Image
        source={require("../screens/Assets/Images/tifstay_logo.png")}
        style={styles.logo}
      />
</View>
      {/* Title */}
      <Text style={styles.title}>Verify Account</Text>
      <Text style={styles.subtitle}>Enter 4 Digit Code</Text>

      {/* OTP Input Boxes */}
      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.input}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            keyboardType="numeric"
            maxLength={1}
            textAlign="center"
          />
        ))}
      </View>

      {/* Resend Section */}
      <Text style={styles.resendText}>
        Didn’t Receive Code?{" "}
        <Text style={styles.resendLink}>
          Resend code in {timer < 10 ? `0${timer}` : timer}
        </Text>
      </Text>

      {/* Verify Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("NewPasswordScreen")}
      >
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerifyAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  logoContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 3, height: 0},
    shadowRadius: 4,
    marginBottom: 10,
  },
  logo: {
    width: 66,
    height: 40,
    marginBottom: 20,
    resizeMode: "contain",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#333",
    marginBottom: 20,
    fontWeight:'600'
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  input: {
    width: 55,
    height: 55,
    borderRadius: 10,
    backgroundColor: "#f6f3ff",
    marginHorizontal: 8,
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
  resendText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 30,
  },
  resendLink: {
    fontWeight: "600",
    color: "#0047AB",
  },
  button: {
    backgroundColor: "#0047AB",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
