import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import BottomNav from "../screens/BottomNav"; // ✅ import bottom nav

const EarningsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 80 }} // ✅ space for bottom nav
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backBtn}
          >
            <Icon name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Earnings</Text>
        </View>

        {/* Earnings Overview */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>💰 Earnings Overview</Text>
          <View style={styles.row}>
            <View style={[styles.box, { borderColor: "#2D9CDB" }]}>
              <Text style={[styles.value, { color: "#2D9CDB" }]}>₹25420</Text>
              <Text style={styles.label}>Total Balance</Text>
            </View>
            <View style={[styles.box, { borderColor: "#EB5757" }]}>
              <Text style={[styles.value, { color: "#EB5757" }]}>₹5550</Text>
              <Text style={styles.label}>This Week</Text>
            </View>
          </View>
          <View
            style={[styles.box, { borderColor: "#27AE60", alignSelf: "center" }]}
          >
            <Text style={[styles.value, { color: "#27AE60" }]}>₹15450</Text>
            <Text style={styles.label}>This Month</Text>
          </View>
        </View>

        {/* Payout History */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>📑 Payout History</Text>

          <View style={styles.payoutRow}>
            <View>
              <Text style={styles.payoutAmount}>₹25200</Text>
              <Text style={styles.date}>2025-07-10</Text>
            </View>
            <View style={[styles.statusBadge, { backgroundColor: "#E3F2FD" }]}>
              <Text style={[styles.statusText, { color: "#2196F3" }]}>
                Processing
              </Text>
            </View>
          </View>

          <View style={styles.payoutRow}>
            <View>
              <Text style={styles.payoutAmount}>₹35200</Text>
              <Text style={styles.date}>2024-01-20</Text>
            </View>
            <View style={[styles.statusBadge, { backgroundColor: "#E8F5E9" }]}>
              <Text style={[styles.statusText, { color: "#27AE60" }]}>
                Completed
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* ✅ Persistent Bottom Navigation */}
      <BottomNav activeTab="Earnings" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 38,
  },
  backBtn: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  box: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    width: "45%",
    alignItems: "center",
  },
  value: {
    fontSize: 18,
    fontWeight: "700",
  },
  label: {
    fontSize: 14,
    color: "#666",
  },
  payoutRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  payoutAmount: {
    fontSize: 16,
    fontWeight: "600",
  },
  date: {
    fontSize: 12,
    color: "#888",
  },
  statusBadge: {
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
    alignSelf: "center",
  },
  statusText: {
    fontSize: 12,
    fontWeight: "600",
  },
});

export default EarningsScreen;
