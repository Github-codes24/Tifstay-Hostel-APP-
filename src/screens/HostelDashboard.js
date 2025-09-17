import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

const HostelDashboard = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("Dashboard"); // ✅ active bottom nav

  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={require("../screens/Assets/Images/UserCircle.png")}
            style={styles.logoImage}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>Green Valley Boys Hostel</Text>
            <Text style={styles.subtitle}>Manage your hostel properties</Text>
          </View>
          <TouchableOpacity style={styles.goOfflineBtn}>
            <Text style={styles.goOfflineText}>Go Offline</Text>
          </TouchableOpacity>
        </View>

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <View style={[styles.statBox, { backgroundColor: "#FFF" }]}>
            <Image
              source={require("../screens/Assets/Images/Hostel1.png")}
              style={styles.iconImage}
            />
            <Text style={[styles.statNumber, { color: "#1976D2" }]}>01</Text>
            <Text style={styles.stat}>Total Hostels</Text>
          </View>
          <View style={[styles.statBox, { backgroundColor: "#FFF" }]}>
            <Image
              source={require("../screens/Assets/Images/Request.png")}
              style={styles.iconImage}
            />
            <Text style={[styles.statNumber, { color: "#E65100" }]}>42</Text>
            <Text style={styles.stat}>Request</Text>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={[styles.statBox, { backgroundColor: "#FFF" }]}>
            <Image
              source={require("../screens/Assets/Images/Accepted.png")}
              style={styles.iconImage}
            />
            <Text style={[styles.statNumber, { color: "#2E7D32" }]}>9</Text>
            <Text style={styles.stat}>Accepted</Text>
          </View>
          <View style={[styles.statBox, { backgroundColor: "#FFF" }]}>
            <Image
              source={require("../screens/Assets/Images/Cancelled.png")}
              style={styles.iconImage}
            />
            <Text style={[styles.statNumber, { color: "#C62828" }]}>01</Text>
            <Text style={styles.stat}>Canceled</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.quickActions}>
          <TouchableOpacity 
           style={[styles.actionBtn, { backgroundColor: "#004AAD" }]}
           >
            <Image
              source={require("../screens/Assets/Images/add_service.png")}
              style={styles.iconImageWhite}
            />
            <Text style={styles.actionText}>Add Service</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionBtn, { backgroundColor: "#FF9800" }]}
            onPress={() => navigation.navigate("EarningsScreen")}
          >
            <Image
              source={require("../screens/Assets/Images/Earnings.png")}
              style={styles.iconImageWhite}
            />
            <Text style={styles.actionText}>View Earnings</Text>
          </TouchableOpacity>
        </View>

        {/* Earnings */}
        <Text style={styles.sectionTitle}>Earnings Overview</Text>
        <View style={styles.earningsBox}>
          <View>
            <Text style={styles.earningsAmount}>₹9850</Text>
            <Text style={styles.earningsSub}>This week’s total</Text>
          </View>
          <Text style={styles.earningsGrowth}>+18% vs last week</Text>
        </View>

        {/* Reviews */}
        <View style={styles.reviewRow}>
          <Text style={styles.reviewText}>⭐ 4.9 (25 reviews)</Text>
          <TouchableOpacity
          onPress={() => navigation.navigate('ReviewScreen')}
          >
            <Text style={styles.reviewLink}>See All Reviews</Text>
          </TouchableOpacity>
        </View>

        {/* Hostel List */}
       {/* Hostel Section */}
<Text style={styles.sectionTitle}>My PG/Hostel</Text>
<Text style={styles.serviceCount}>1 service</Text>

<View style={styles.hostelCard}>
  {/* Top Row */}
  <View style={styles.hostelTopRow}>
    <Image
      source={require("../screens/Assets/Images/HostelPic.png")}
      style={styles.hostelImage}
    />
    <View style={{ flex: 1, marginLeft: 10 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.hostelName}>Green Valley Boys Hostel</Text>
        <View style={styles.activeBadge}>
          <Text style={styles.activeText}>Active</Text>
        </View>
      </View>
      <Text style={styles.hostelLocation}>Seminary Hills</Text>

      {/* Facilities */}
      <View style={styles.facilities}>
        <View style={styles.facility}>
          <Image
            source={require("../screens/Assets/Images/wifi.png")}
            style={styles.facilityIcon}
          />
          <Text style={styles.facilityText}>WiFi</Text>
        </View>
        <View style={styles.facility}>
          <Image
            source={require("../screens/Assets/Images/mess.png")}
            style={styles.facilityIcon}
          />
          <Text style={styles.facilityText}>Mess</Text>
        </View>
        <View style={styles.facility}>
          <Image
            source={require("../screens/Assets/Images/Security.png")}
            style={styles.facilityIcon}
          />
          <Text style={styles.facilityText}>Security</Text>
        </View>
        <View style={styles.facility}>
          <Image
            source={require("../screens/Assets/Images/Laundry.png")}
            style={styles.facilityIcon}
          />
          <Text style={styles.facilityText}>Laundry</Text>
        </View>
      </View>
    </View>
  </View>

  {/* Details Row */}
  <View style={styles.detailRow}>
    <Text style={styles.detailText}>
      <Text style={styles.detailValue}>₹8000</Text>/month{"\n"}
      <Text style={styles.detailLabel}>Rent</Text>
    </Text>
    <Text style={styles.detailText}>
      <Text style={styles.detailValue}>6/30</Text>{"\n"}
      <Text style={styles.detailLabel}>Available</Text>
    </Text>
    <Text style={styles.detailText}>
      <Text style={styles.detailValue}>⭐ 4.7</Text>{" "}
      <Text style={{ fontSize: 10, color: "#666" }}>(8)</Text>{"\n"}
      <Text style={styles.detailLabel}>Rating</Text>
    </Text>
    <Text style={styles.detailText}>
      <Text style={styles.detailValue}>Boys</Text>{"\n"}
      <Text style={styles.detailLabel}>Type</Text>
    </Text>
  </View>

  {/* Action Buttons */}
  <View style={styles.actionRow}>
    <TouchableOpacity style={styles.actionBtn}>
      <Image
        source={require("../screens/Assets/Images/View.png")}
        style={styles.actionIcon}
      />
      <Text style={styles.actionBtnText}>View</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.actionBtn}>
      <Image
        source={require("../screens/Assets/Images/edit.png")}
        style={styles.actionIcon}
      />
      <Text style={styles.actionBtnText}>Edit</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.actionBtn}>
      <Image
        source={require("../screens/Assets/Images/Pause.png")}
        style={styles.actionIcon}
      />
      <Text style={styles.actionBtnText}>Pause</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.actionBtn}>
      <Image
        source={require("../screens/Assets/Images/Delete.png")}
        style={styles.actionIcon}
      />
      <Text style={styles.actionBtnText}>Delete</Text>
    </TouchableOpacity>
  </View>

  {/* View Rooms Button */}
  <TouchableOpacity style={styles.viewRoomsBtn}
   onPress={() => navigation.navigate('RoomScreen')}
  >
    <Image
      source={require("../screens/Assets/Images/eye.png")}
      style={styles.viewRoomsIcon}
    />
    <Text style={styles.viewRoomsText}>View Rooms</Text>
  </TouchableOpacity>
</View>

        {/* Add New Hostel */}
        <TouchableOpacity style={styles.addHostelBtn}
         onPress={() => navigation.navigate('AddHostelService')}
        >
          <Text style={styles.addHostelText}>+ Add New Hostel</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* ✅ Bottom Navigation */}
      <View style={styles.bottomNav}>
        {[
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
            route: "EarningsScreen",
          },
          {
            key: "Bookings",
            label: "Bookings",
            icon: require("../screens/Assets/Images/Bookings.png"),
            route: "BookingScreen",
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
            route: "AccountScreen",
          },
        ].map((item) => (
          <TouchableOpacity
            key={item.key}
            style={[
              styles.navItem,
              activeTab === item.key && styles.activeNavItem,
            ]}
            onPress={() => {
              setActiveTab(item.key);
              navigation.navigate(item.route);
            }}
          >
            <Image
              source={item.icon}
              style={[
                styles.navIcon,
                activeTab === item.key && { tintColor: "#fff" },
              ]}
            />
            <Text
              style={[
                styles.navText,
                activeTab === item.key && { color: "#fff" },
              ]}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginHorizontal: 15,
  },
  logoImage: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  title: { color: "#000", fontWeight: "bold", fontSize: 14 },
  subtitle: { color: "#000", fontSize: 11 },
  goOfflineBtn: {
    borderWidth: 1,
    borderColor: "#007bff",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  goOfflineText: { color: "#007bff", fontSize: 12, fontWeight: "600" },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  statBox: {
    flex: 1,
    margin: 5,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    elevation: 2,
  },
  statNumber: { fontSize: 24, fontWeight: "bold", marginVertical: 5 },
  stat: { fontSize: 12, fontWeight: "600", color: "#444" },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 15,
    marginLeft: 15,
  },

  quickActions: { flexDirection: "row", marginTop: 10, marginHorizontal: 15 },
  actionBtn: {
    flex: 1,
    width:130,
    height:120,
    backgroundColor: "#007bff",
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  actionText: { color: "#fff", fontWeight: "600" },

  earningsBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 15,
    marginTop: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#FFF3E0",
  },
  earningsAmount: { fontSize: 20, fontWeight: "bold", color: "#000" },
  earningsSub: { fontSize: 12, color: "#666" },
  earningsGrowth: { fontSize: 12, color: "#E65100", fontWeight: "bold" },

  reviewRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 15,
    marginTop: 10,
  },
  reviewText: { fontSize: 14, fontWeight: "500" },
  reviewLink: { fontSize: 12, color: "#007bff" },

  serviceCount: {
    fontSize: 12,
    color: "#666",
    marginLeft: 15,
    marginBottom: 5,
  },
  
  hostelCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    margin: 15,
    padding: 12,
    elevation: 3,
  },
  
  hostelTopRow: { flexDirection: "row" },
  hostelImage: { width: 70, height: 70, borderRadius: 8 },
  hostelName: { fontSize: 15, fontWeight: "bold", color: "#000" },
  hostelLocation: { fontSize: 12, color: "#666", marginTop: 2 },
  
  activeBadge: {
    backgroundColor: "#007bff",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  activeText: { color: "#fff", fontSize: 11, fontWeight: "600" },
  
  facilities: { flexDirection: "row", marginTop: 6, flexWrap: "wrap" },
  facility: { flexDirection: "row", alignItems: "center", marginRight: 10 },
  facilityIcon: { width: 13, height: 13, marginRight: 4, resizeMode: "contain" },
  facilityText: { fontSize: 11, color: "#444" },
  
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  detailText: { fontSize: 12, textAlign: "center", flex: 1 },
  detailValue: { fontSize: 13, fontWeight: "bold", color: "#000" },
  detailLabel: { fontSize: 11, color: "#777" },
  
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  actionBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingVertical: 6,
    marginHorizontal: 3,
  },
  actionIcon: { width: 14, height: 14, marginRight: 5, resizeMode: "contain" },
  actionBtnText: { fontSize: 12, color: "#000" },
  
  viewRoomsBtn: {
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  viewRoomsIcon: { width: 16, height: 16, tintColor: "#000", marginRight: 6 },
  viewRoomsText: { fontSize: 13, fontWeight: "600", color: "#000" },
  

  addHostelBtn: {
    margin: 15,
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  addHostelText: { color: "#fff", fontWeight: "bold" },

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
  activeNavItem: { backgroundColor: "#007bff" },
  navIcon: { width: 22, height: 22, resizeMode: "contain", marginBottom: 2 },
  navText: { fontSize: 11, color: "#555" },

  // 🔥 New styles for icons
  iconImage: { width: 24, height: 24, resizeMode: "contain" },
  iconImageWhite: { width: 20, height: 20, tintColor: "#fff", resizeMode: "contain" },
  facilityIcon: { width: 18, height: 18, marginRight: 6, resizeMode: "contain" },
});

export default HostelDashboard;
