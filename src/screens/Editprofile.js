// EditProfile.js
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const EditProfile = ({ navigation }) => {
  const [name, setName] = useState("Green Valley Boys Hostel");
  const [email, setEmail] = useState("greenvalleyhostel@gmail.com");
  const [phone, setPhone] = useState("715-601-4598");

  const handleSave = () => {
    // Save profile changes logic here
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
        <View style={{ width: 24 }} /> {/* Placeholder for alignment */}
      </View>

      {/* Profile Image */}
      <View style={styles.profileSection}>
        <Image
          source={require("../screens/Assets/Images/UserCircle.png")}
          style={styles.profileImage}
        />
        <Text style={styles.name}>{name}</Text>
      </View>

      {/* Input Fields */}
      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
        />
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 15 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 50,
  },
  headerTitle: { fontSize: 18, fontWeight: "600", marginTop: 34 },
  profileSection: { alignItems: "center", marginBottom: 20 },
  profileImage: { width: 90, height: 90, borderRadius: 45 },
  name: { fontSize: 18, fontWeight: "bold", marginTop: 10 },
  form: { marginTop: 10 },
  label: { fontSize: 14, fontWeight: "bold", marginTop: 15, padding:5 },
  input: {
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 10,
    padding: 18,
    backgroundColor: "#F8F8FF",
    marginTop: 5,
  },
  saveButton: {
    backgroundColor: "#0A67FF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 30,
  },
  saveText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
