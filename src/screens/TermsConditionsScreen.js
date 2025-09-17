// TermsConditionsScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

const TermsConditionsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../screens/Assets/Images/Backarrow.png")} // replace with your back arrow image
            style={styles.backArrow}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Terms and Conditions</Text>
      </View>

      {/* Content */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>1. Acceptance</Text>
        <Text style={styles.normalText}>
          By using this app, you agree to these terms. If not, please stop using it.
        </Text>

        <Text style={styles.sectionTitle}>2. Our Role</Text>
        <Text style={styles.normalText}>
          We connect you with verified Tiffin Providers & Hostel Owners. We do not own or operate these services.
        </Text>

        <Text style={styles.sectionTitle}>3. Your Responsibilities</Text>
        <Text style={styles.bullet}>• Provide accurate booking details.</Text>
        <Text style={styles.bullet}>• Follow provider’s cancellation/refund rules.</Text>
        <Text style={styles.bullet}>• Use the app legally and respectfully.</Text>

        <Text style={styles.sectionTitle}>4. Payments & Refunds</Text>
        <Text style={styles.bullet}>• Payments are processed securely.</Text>
        <Text style={styles.bullet}>• Refunds follow provider’s policy & payment method timelines.</Text>

        <Text style={styles.sectionTitle}>5. Cancellations</Text>
        <Text style={styles.normalText}>
          Cancel via My Bookings. Refunds depend on provider’s rules.
        </Text>

        <Text style={styles.sectionTitle}>6. Liability</Text>
        <Text style={styles.normalText}>
          We’re not responsible for service quality, losses, delays, or events beyond our control.
        </Text>

        <Text style={styles.sectionTitle}>7. Changes</Text>
        <Text style={styles.normalText}>
          We may update these terms anytime. Continued use means you accept them.
        </Text>

        <Text style={styles.sectionTitle}>8. Contact</Text>
        <Text style={styles.normalText}>
          Email support@[yourdomain].com or use Contact Us in the app.
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
    paddingTop: 30, // keeps header slightly lower
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  backArrow: {
    width: 25,
    height: 25,
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
    fontWeight:600,
    lineHeight: 20,
  },
  normalText: {
    fontSize: 13,
    color: "#333",
    fontWeight:'600',
    marginBottom: 6,
    lineHeight: 20,
  },
});

export default TermsConditionsScreen;
