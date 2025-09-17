import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"; // ✅ CLI import


export default function EditProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>MAA ANUSAYA URBAN</Text>
        <Text style={styles.subtitle}>
          Credit Co-operative Socity Ltd. Gondiya
        </Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileBox}>
        {/* Left: Profile Placeholder */}
        <View style={styles.profilePlaceholder}>
          <Text style={{ color: "#aaa" }}>Profile</Text>
        </View>

        {/* Right: Profile Info */}
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Leroy Feest MD</Text>
          <Text style={styles.info}>843 Jenkins Summit, West, 09915.</Text>
          <Text style={styles.info}>Real.Franecki@gmail.com</Text>
          <Text style={styles.info}>879-458-1883</Text>
        </View>
      </View>

      {/* Buttons at Bottom */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('EditProfile')}
        >
          <MaterialCommunityIcons
            name="account-edit"
            size={22}
            color="#000"
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons
            name="logout"
            size={22}
            color="#000"
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 35,
  },
  header: {
    alignItems: "center",
    marginBottom: 80,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#D6271C",
  },
  subtitle: {
    fontSize: 12,
    color: "#000",
    fontWeight: "bold",
  },
  profileBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
  },
  profilePlaceholder: {
    width: 90,
    height: 90,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
  },
  info: {
    fontSize: 11,
    color: "#000",
    fontWeight: "600",
    marginBottom: 4,
  },
  buttonsContainer: {
    marginTop: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    width: "110%",
    backgroundColor: "#F2F3F5",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  icon: {
    marginRight: 8,
  },
  buttonText: {
    fontSize: 14,
    color: "#000",
    fontWeight: "500",
  },
});
