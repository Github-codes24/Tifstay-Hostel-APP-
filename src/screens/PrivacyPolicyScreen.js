// PrivacyPolicyScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

const PrivacyPolicyScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../screens/Assets/Images/Backarrow.png")} // put your back arrow image in assets
            style={styles.backArrow}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Privacy Policy</Text>
      </View>

      {/* Content */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>1. Information We Collect</Text>
        <Text style={styles.bullet}>• Personal Info: Name, phone, email, address when you register or book.</Text>
        <Text style={styles.bullet}>• Usage Data: Device type, location (if allowed), app activity.</Text>
        <Text style={styles.bullet}>• Booking & Payment Data: Tiffin/Hostel bookings, payment details (processed securely by third parties).</Text>

        <Text style={styles.sectionTitle}>2. How We Use Your Information</Text>
        <Text style={styles.bullet}>• To process your bookings and payments.</Text>
        <Text style={styles.bullet}>• To personalize recommendations based on your city/location.</Text>
        <Text style={styles.bullet}>• To send booking updates, offers, and support messages.</Text>

        <Text style={styles.sectionTitle}>3. Data Sharing</Text>
        <Text style={styles.normalText}>We never sell your personal data.</Text>
        <Text style={styles.normalText}>We may share necessary details with:</Text>
        <Text style={styles.bullet}>• Service providers (for booking fulfilment).</Text>
        <Text style={styles.bullet}>• Payment gateways (for secure transactions).</Text>
        <Text style={styles.bullet}>• Analytics tools (anonymized data only).</Text>

        <Text style={styles.sectionTitle}>4. Your Choices</Text>
        <Text style={styles.bullet}>• Edit/delete your account anytime in Settings.</Text>
        <Text style={styles.bullet}>• Opt-out of promotional messages in Notifications settings.</Text>
        <Text style={styles.bullet}>• Request data deletion via support@[yourdomain].com.</Text>

        <Text style={styles.sectionTitle}>5. Security</Text>
        <Text style={styles.normalText}>
          We use encryption, secure servers, and access control to protect your data.
        </Text>

        <Text style={styles.sectionTitle}>6. Children’s Privacy</Text>
        <Text style={styles.normalText}>
          This app is for users 18+. We do not knowingly collect information from children under 13.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 30, // more top padding so header is lower
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  backArrow: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#000",
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
    marginTop: 14,
    marginBottom: 6,
  },
  bullet: {
    fontSize: 13,
    color: "#333",
    marginBottom: 4,
    lineHeight: 20,
    fontWeight:"600"
  },
  normalText: {
    fontSize: 13,
    color: "#333",
    marginBottom: 6,
    lineHeight: 20,
  },
});

export default PrivacyPolicyScreen;
