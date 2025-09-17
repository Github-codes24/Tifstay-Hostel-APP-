import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BottomNav = ({ activeTab }) => {
  const navigation = useNavigation();
  const [currentTab, setCurrentTab] = useState(activeTab || "Dashboard");

  // ✅ Explicit route mapping (instead of auto-adding "Screen")
  const tabs = [
    {
      key: "Dashboard",
      label: "Dashboard",
      icon: require("../screens/Assets/Images/Dashboard.png"),
      route: "DashboardScreen",
    },
    {
      key: "Earnings",
      label: "Earnings",
      icon: require("../screens/Assets/Images/Earnings.png"),
      route: "AccountScreen",
    },
    {
      key: "Bookings",
      label: "Bookings",
      icon: require("../screens/Assets/Images/Bookings.png"),
      route: "BookingsScreen",
    },
    {
      key: "Notifications",
      label: "Notification",
      icon: require("../screens/Assets/Images/notifications.png"),
      route: "NotificationsScreen",
    },
    {
      key: "Profile",
      label: "Profile",
      icon: require("../screens/Assets/Images/profile.png"),
      route: "EarningsScreen", // ✅ navigate to Profile screen
    },
  ];

  return (
    <View style={styles.bottomNav}>
      {tabs.map((item) => (
        <TouchableOpacity
          key={item.key}
          style={[
            styles.navItem,
            currentTab === item.key && styles.activeNavItem,
          ]}
          onPress={() => {
            setCurrentTab(item.key);
            navigation.navigate(item.route); // ✅ now uses correct route
          }}
        >
          <Image
            source={item.icon}
            style={[
              styles.navIcon,
              currentTab === item.key && { tintColor: "#fff" },
            ]}
          />
          <Text
            style={[
              styles.navText,
              currentTab === item.key && { color: "#fff" },
            ]}
          >
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#fff",
    elevation: 5,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  navItem: {
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  activeNavItem: {
    backgroundColor: "#007bff",
  },
  navIcon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
    marginBottom: 2,
  },
  navText: {
    fontSize: 11,
    color: "#555",
  },
});

export default BottomNav;
