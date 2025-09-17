import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const OffersScreen = () => {
  const navigation = useNavigation();

  const offers = [
    {
      id: 1,
      title: "New Offer",
      description: "10% Off on PG/Hostel Booking.",
      bgColor: "#5E9BED", // Blue
    },
    {
      id: 2,
      title: "Live",
      description: "10% Off on PG/Hostel Booking.",
      bgColor: "#1DB435", // Green
    },
    {
      id: 3,
      title: "Expired",
      description: "10% Off on PG/Hostel Booking.",
      bgColor: "#E51A1A", // Red
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../screens/Assets/Images/Backarrow.png")} // ✅ your back arrow image
            style={{ width: 24, height: 24, resizeMode: "contain" }}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Offers</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingVertical: 10 }}>
        {offers.map((offer) => (
          <View key={offer.id} style={[styles.offerCard, { backgroundColor: offer.bgColor }]}>
            <Image
              source={require("../screens/Assets/Images/party.png")} // ✅ Same image for all three
              style={styles.offerIcon}
            />
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
    marginTop: 40,
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#000",
    marginBottom:5
  },
  offerCard: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  offerIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
    resizeMode: "contain",
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
