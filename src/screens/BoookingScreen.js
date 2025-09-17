// BookingScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import BottomNav from "./BottomNav";

const BookingScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("Requests");

  const bookingData = [
    {
      id: "1",
      bookingId: "TF2024002",
      date: "20/07/2025",
      hostel: "Scholars Den Boys Hostel",
      customer: "Onil Karmokar",
      plan: "Weekly",
      rooms: [
        { roomNo: "310", bedNo: "10,11,12", checkIn: "01/08/25", checkOut: "07/08/25" },
        { roomNo: "312", bedNo: "10,11", checkIn: "01/08/25", checkOut: "07/08/25" },
      ],
    },
    {
      id: "2",
      bookingId: "TF2024003",
      date: "22/07/2025",
      hostel: "Elite Boys Hostel",
      customer: "Aman Sharma",
      plan: "Monthly",
      rooms: [
        { roomNo: "215", bedNo: "05,06", checkIn: "02/08/25", checkOut: "01/09/25" },
      ],
    },
  ];

  const getBadgeStyle = () => {
    switch (activeTab) {
      case "Requests": return { container: styles.requestTag, text: styles.requestTagText };
      case "Accepted": return { container: styles.acceptedTag, text: styles.acceptedTagText };
      case "Completed": return { container: styles.completedTag, text: styles.completedTagText };
      default: return { container: {}, text: {} };
    }
  };

  const badge = getBadgeStyle();

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Image
              source={require("../screens/Assets/Images/Backarrow.png")}
              style={styles.backArrow}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Bookings</Text>
          <TouchableOpacity>
            <Text style={styles.addBooking}>Add New Booking</Text>
          </TouchableOpacity>
        </View>

        {/* Tabs */}
        <View style={styles.tabs}>
          {["Requests", "Accepted", "Completed"].map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              style={[styles.tabButton, activeTab === tab && styles.activeTabButton]}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Single Badge */}
        <View style={[badge.container, { alignSelf: "flex-start", marginBottom: 12 }]}>
          <Text style={badge.text}>{activeTab}</Text>
        </View>

        {/* Booking List */}
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 90 }}>
          {bookingData.map((booking, idx) => (
            <View key={booking.id} style={[styles.card, idx === 0 && styles.firstCard]}>
              <View style={styles.bookingHeader}>
                <Text style={styles.bookingId}>Booking #{booking.bookingId}</Text>
                <Text style={styles.date}>Booked on {booking.date}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.label}>Hostel Booking :</Text>
                <Text style={styles.value}>{booking.hostel}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Customer :</Text>
                <Text style={styles.value}>{booking.customer}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Plan :</Text>
                <Text style={styles.value}>{booking.plan}</Text>
              </View>

              {booking.rooms.map((room, index) => (
                <View key={index} style={styles.roomBox}>
                  <View style={styles.roomRow}>
                    <Text style={styles.label}>Room No.</Text>
                    <Text style={styles.value}>{room.roomNo}</Text>
                  </View>
                  <View style={styles.roomRow}>
                    <Text style={styles.label}>Bed No.</Text>
                    <Text style={styles.value}>{room.bedNo}</Text>
                  </View>
                  <View style={styles.roomRow}>
                    <Text style={styles.label}>Check-in Date</Text>
                    <Text style={styles.value}>{room.checkIn}</Text>
                  </View>
                  <View style={styles.roomRow}>
                    <Text style={styles.label}>Check-out Date</Text>
                    <Text style={styles.value}>{room.checkOut}</Text>
                  </View>
                </View>
              ))}

              {activeTab === "Requests" && (
                <View style={styles.buttonRow}>
                  <TouchableOpacity style={styles.rejectBtn}>
                    <Text style={styles.rejectText}>Reject</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.acceptBtn}>
                    <Text style={styles.acceptText}>Accept</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          ))}
        </ScrollView>
      </View>

      {/* ✅ Fixed Bottom Nav */}
      <View style={styles.bottomNavWrapper}>
        <BottomNav activeTab="Bookings" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: "#fff" },
  container: { flex: 1, padding: 16, paddingBottom: 0 },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    padding: 10,
  },
  backArrow: { width: 20, height: 20, resizeMode: "contain", marginLeft: -10 },
  headerTitle: { fontSize: 20, fontWeight: "600", marginRight: 70 },
  addBooking: { fontSize: 14, color: "#007bff", fontWeight: "bold", },

  tabs: { flexDirection: "row", justifyContent: "space-around", marginBottom: 8 },
  tabButton: { paddingVertical: 6, paddingHorizontal: 12, borderBottomWidth: 2, borderBottomColor: "transparent" },
  activeTabButton: { borderBottomColor: "#007bff" },
  tabText: { fontSize: 14, color: "#666" },
  activeTabText: { color: "#007bff", fontWeight: "600" },

  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#eee",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  firstCard: { borderTopLeftRadius: 16, borderTopRightRadius: 16 },
  bookingHeader: { flexDirection: "row", justifyContent: "space-between", marginBottom: 6 },
  bookingId: { fontSize: 14, fontWeight: "600", color: "#000" },
  date: { fontSize: 12, color: "#999" },

  // Badge styles
  requestTag: { borderWidth: 1, borderColor: "#f5c518", backgroundColor: "#fff8d9", borderRadius: 6, paddingHorizontal: 8, paddingVertical: 2 },
  requestTagText: { fontSize: 12, fontWeight: "500", color: "#d4a017" },
  acceptedTag: { borderWidth: 1, borderColor: "#007bff", backgroundColor: "#e6f0ff", borderRadius: 6, paddingHorizontal: 8, paddingVertical: 2 },
  acceptedTagText: { fontSize: 12, fontWeight: "500", color: "#007bff" },
  completedTag: { borderWidth: 1, borderColor: "green", backgroundColor: "#e6ffe6", borderRadius: 6, paddingHorizontal: 8, paddingVertical: 2 },
  completedTagText: { fontSize: 12, fontWeight: "500", color: "green" },

  row: { flexDirection: "row", justifyContent: "space-between", marginVertical: 2 },
  label: { fontSize: 13, color: "#555" },
  value: { fontSize: 13, fontWeight: "500", color: "#000" },

  roomBox: { borderWidth: 1, borderColor: "#ddd", borderRadius: 6, padding: 8, marginTop: 8 },
  roomRow: { flexDirection: "row", justifyContent: "space-between", marginVertical: 2 },

  buttonRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 12 },
  rejectBtn: { flex: 1, borderWidth: 1, borderColor: "#007bff", borderRadius: 6, paddingVertical: 8, marginRight: 8, alignItems: "center" },
  rejectText: { color: "#007bff", fontWeight: "500" },
  acceptBtn: { flex: 1, backgroundColor: "#007bff", borderRadius: 6, paddingVertical: 8, marginLeft: 8, alignItems: "center" },
  acceptText: { color: "#fff", fontWeight: "500" },

});

export default BookingScreen;
