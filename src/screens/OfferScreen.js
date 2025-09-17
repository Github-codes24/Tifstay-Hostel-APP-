import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // For icons
import { useNavigation } from "@react-navigation/native";

const OffersScreen = () => {
  const navigation = useNavigation();

  const offers = [
    {
      id: 1,
      title: "New Offer",
      description: "10% Off on PG/Hostel Booking.",
      bgColor: "#4A90E2", // Blue
      icon: "party-popper",
    },
    {
      id: 2,
      title: "Live",
      description: "10% Off on PG/Hostel Booking.",
      bgColor: "#4CAF50", // Green
      icon: "party-popper",
    },
    {
      id: 3,
      title: "Expired",
      description: "10% Off on PG/Hostel Booking.",
      bgColor: "#F44336", // Red
      icon: "party-popper",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Offers</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingVertical: 10 }}>
        {offers.map((offer) => (
          <View key={offer.id} style={[styles.offerCard, { backgroundColor: offer.bgColor }]}>
            <Icon name={offer.icon} size={40} color="#fff" style={{ marginRight: 10 }} />
            <View>
              <Text style={styles.offerTitle}>{offer.title}</Text>
              <Text style={styles.offerDescription}>{offer.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 10,
    color: "#000",
  },
  offerCard: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  offerTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  offerDescription: {
    fontSize: 13,
    color: "#fff",
  },
});

export default OffersScreen;
