// NotificationsScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import BottomNav from "./BottomNav";

const NotificationCard = ({ title, message, icon, isHighlighted }) => {
  return (
    <View
      style={[
        styles.card,
        isHighlighted && styles.highlightCard,
      ]}
    >
      <Image source={icon} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.title,
            isHighlighted && { color: "#fff" },
          ]}
        >
          {title}
        </Text>
        <Text
          style={[
            styles.message,
            isHighlighted && { color: "#fff" },
          ]}
        >
          {message}
        </Text>
      </View>
    </View>
  );
};

const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Today */}
        <Text style={styles.sectionTitle}>Today</Text>
        <NotificationCard
          title="New Booking Received"
          message="You’ve got a new hostel booking! Tap to view details and start preparing."
          icon={require("../screens/Assets/Images/new.png")} // replace with your image
        />
        <NotificationCard
          title="Booking Accepted Confirmation"
          message="You’ve accepted the booking. Keep it ready by the scheduled time!"
          icon={require("../screens/Assets/Images/fire.png")} // replace with your image
          isHighlighted
        />

        {/* Sunday */}
        <Text style={styles.sectionTitle}>Sunday, July 9, 2025</Text>
        <NotificationCard
          title="Earnings Summary (Weekly)"
          message="You earned ₹22000 this week. Keep it up!"
          icon={require("../screens/Assets/Images/money.png")} // replace with your image
        />

        {/* Monday */}
        <Text style={styles.sectionTitle}>Monday, June 16, 2025</Text>
        <NotificationCard
          title="Hostel Service Approved"
          message="Your new hostel service has been approved and is now live!"
          icon={require("../screens/Assets/Images/approved.png")} // replace with your image
        />

      </ScrollView>
      <BottomNav activeTab="Notifications" />
    </View>
    
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 25,
  },
  backArrow: {
    fontSize: 22,
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",

  },
  sectionTitle: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 14,
    fontWeight: "500",
    color: "#666",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7F7F7",
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
  },
  highlightCard: {
    backgroundColor: "#0047FF",
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 12,
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
    color: "#000",
  },
  message: {
    fontSize: 13,
    color: "#555",
  },
});
