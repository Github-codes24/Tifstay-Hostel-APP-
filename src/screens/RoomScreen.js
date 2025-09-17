import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const bedData = [
  {
    id: "1",
    bedNo: "Bed 1",
    status: "Occupied",
    customer: "Audrey",
    availability: "1st–30th Sep",
  },
  {
    id: "2",
    bedNo: "Bed 2",
    status: "Occupied",
    customer: "Gloria",
    availability: "1st–30th Sep",
  },
  {
    id: "3",
    bedNo: "Bed 3",
    status: "Available",
    customer: "NA",
    availability: "1st–7th Sep",
  },
];

const RoomScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Image source={require("../screens/Assets/Images/Backarrow.png")} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>View Rooms</Text>
      </View>

      {/* Card */}
      <View style={styles.card}>
        {/* Room Image */}
        <Image
          source={require("../screens/Assets/Images/room1.png")}
          style={styles.image}
          resizeMode="cover"
        />

        {/* Room Info */}
        <View style={styles.infoContainer}>
          <Text style={styles.roomTitle}>Room No.: 101</Text>
          <Text style={styles.subtitle}>Total Beds: 3</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur. Adipiscing semper ut arcu et
            nec massa iaculis condimentum semper. Pharetra felis ac adipiscing
            facilisi. Neque id dui sed pulvinar.
          </Text>
        </View>

        {/* Table */}
        <View style={styles.table}>
          {/* Header */}
          <View style={[styles.row, styles.tableHeader]}>
            {["Bed No.", "Status", "Customer", "Availability"].map((title) => (
              <Text key={title} style={[styles.cell, styles.headerText]}>
                {title}
              </Text>
            ))}
          </View>

          {/* Rows */}
          <FlatList
            data={bedData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.row}>
                <Text style={styles.cell}>{item.bedNo}</Text>
                <Text
                  style={[
                    styles.cell,
                    item.status === "Available"
                      ? { color: "#27AE60", fontWeight: "600" }
                      : { color: "#EB5757" },
                  ]}
                >
                  {item.status}
                </Text>
                <Text style={styles.cell}>{item.customer}</Text>
                <Text style={styles.cell}>{item.availability}</Text>
              </View>
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    flex: 1,
    marginRight:140,
    textAlign: "center",
  },
  card: {
    marginTop: 18, // 👈 pushes card a bit below the header
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 180,
  },
  infoContainer: {
    padding: 16,
  },
  roomTitle: {
    fontSize: 18,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
  },
  description: {
    fontSize: 13,
    color: "#666",
    marginTop: 8,
    lineHeight: 18,
  },
  table: {
    marginTop: 8,
    borderTopWidth: 1,
    borderColor: "#eee",
  },
  row: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  tableHeader: {
    backgroundColor: "#F0F2F5",
  },
  headerText: {
    fontWeight: "700",
    fontSize: 13,
    color: "#333",
  },
  cell: {
    flex: 1,
    textAlign: "center",
    fontSize: 13,
    color: "#444",
  },
  separator: {
    height: 1,
    backgroundColor: "#eee",
    marginHorizontal: 12,
  },
});

export default RoomScreen;
