// HostelDetailsScreen.js
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const HostelDetailsScreen = () => {
    const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    require("../screens/Assets/Images/Hostel11.png"),
    require("../screens/Assets/Images/Hostel11.png"),
    require("../screens/Assets/Images/Hostel11.png"),
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={require("../screens/Assets/Images/Backarrow.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Hostel Details</Text>
      </View>

      {/* Image Slider */}
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(e) => {
          const index = Math.round(
            e.nativeEvent.contentOffset.x / width
          );
          setActiveIndex(index);
        }}
        scrollEventThrottle={16}
      >
        {images.map((img, index) => (
          <Image key={index} source={img} style={styles.hostelImage} />
        ))}
      </ScrollView>

      {/* Indicator Dots */}
      <View style={styles.dotsContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              activeIndex === index && styles.activeDot,
            ]}
          />
        ))}
      </View>

      {/* Hostel Info */}
      <View style={styles.content}>
        <Text style={styles.title}>Scholars Den Boys Hostel</Text>

        <View style={styles.tagRow}>
          <Text style={styles.tag}>Boys Hostel</Text>
          <Text style={styles.tag}>Dewas</Text>
        </View>

        <Text style={styles.subText}>Near VMR, Medical College</Text>
        <Text style={styles.subText}>Total Rooms: 6, Total Bed: 30</Text>

        <Text style={styles.description}>
          A well-maintained boys hostel with all modern amenities. Located in
          prime area with easy access to colleges and hospitals. Safe and secure
          environment with 24/7 security.
        </Text>

        {/* Pricing Section */}
        <View style={styles.priceBox}>
          <View style={styles.discountBox}>
            <Text style={styles.discountText}>12% OFF</Text>
          </View>
          <View>
            <Text style={styles.oldPrice}>₹9000</Text>
            <Text style={styles.price}>₹8000/month</Text>
            <Text style={styles.note}>
              Note: You may be asked for a security deposit of ₹5000
            </Text>
          </View>
        </View>

        {/* Facilities */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Facilities & Amenities</Text>
          <View style={styles.facilityRow}>
            <FacilityItem title="WiFi" icon={require("../screens/Assets/Images/wifi.png")} />
            <FacilityItem title="Mess" icon={require("../screens/Assets/Images/mesh.png")} />
            <FacilityItem title="Security" icon={require("../screens/Assets/Images/Security.png")} />
            <FacilityItem title="Study Hall" icon={require("../screens/Assets/Images/study.png")} />
            <FacilityItem title="Common TV" icon={require("../screens/Assets/Images/tv.png")} />
            <FacilityItem title="Laundry" icon={require("../screens/Assets/Images/Laundry.png")} />
          </View>
        </View>

        {/* Rules */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Rules & Policies</Text>
          <View style={styles.rulesBox}>
            <Text style={styles.ruleText}>
              🚭 No smoking inside premises. Visitors allowed till 8 PM. Mess
              timing: 7:00 AM, 2:00 PM, 7:30 PM. Maintain cleanliness in common
              areas.
            </Text>
          </View>
        </View>

        {/* Location */}
        <View style={styles.box}>
          <Text style={styles.sectionTitle}>Location</Text>
          <Text style={styles.subText}>
            Near Medical College {"\n"}123, Green Valley Road, Dewas(NMP), Nagar
            - 456010
          </Text>
        </View>

        {/* Contact Info */}
        <View style={styles.box}>
          <Text style={styles.sectionTitle}>Contact Information</Text>
          <Text style={styles.contactText}>📞 9876543210</Text>
          <Text style={styles.contactText}>📞 9876543219</Text>
        </View>

        {/* Create Hostel Listing */}
        <TouchableOpacity style={styles.button}
         onPress={() => navigation.navigate('ListingConfirmationScreen')}
        >
          <Text style={styles.buttonText}>+ Create Hostel Listing</Text>
        </TouchableOpacity>

        <Text style={styles.footerNote}>
          Your listing will be reviewed and approved within 24 hours
        </Text>
      </View>
    </ScrollView>
  );
};

// Reusable Facility Item
const FacilityItem = ({ title, icon }) => (
  <View style={styles.facilityItem}>
    <Image source={icon} style={styles.facilityIcon} />
    <Text style={styles.facilityText}>{title}</Text>
  </View>
);

export default HostelDetailsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  icon: { width: 20, height: 20, marginRight: 10, resizeMode: "contain" },
  headerTitle: { fontSize: 16, fontWeight: "600" },
  hostelImage: { width, height: 220, resizeMode: "cover" },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: -15,
    marginBottom: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    margin: 4,
  },
  activeDot: { backgroundColor: "#FF6B00" },
  content: { padding: 15 },
  title: { fontSize: 20, fontWeight: "700", marginVertical: 5 },
  tagRow: { flexDirection: "row", marginVertical: 5 },
  tag: {
    backgroundColor: "#EEF2F6",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    marginRight: 8,
    fontSize: 12,
  },
  subText: { fontSize: 14, color: "#666", marginVertical: 2 },
  description: { fontSize: 14, marginVertical: 10, lineHeight: 20, color: "#444" },
  priceBox: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#F9F9F9",
    padding: 12,
    borderRadius: 10,
    marginVertical: 10,
  },
  oldPrice: { textDecorationLine: "line-through", color: "#888" },
  price: { fontSize: 18, fontWeight: "700", color: "#1D4ED8" },
  note: { fontSize: 12, color: "#666", marginTop: 3 },
  discountBox: {
    backgroundColor: "#1D4ED8",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: -70,
    alignSelf: "flex-start",
  },
  discountText: { color: "#fff", fontSize: 12, fontWeight: "600", },
  section: { marginVertical: 12 },
  sectionTitle: { fontSize: 16, fontWeight: "600", marginBottom: 8 },
  facilityRow: { flexDirection: "row", flexWrap: "wrap" },
  facilityItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    margin: 4,
  },
  facilityIcon: { width: 18, height: 18, marginRight: 6, resizeMode: "contain" },
  facilityText: { fontSize: 13, color: "#333" },
  rulesBox: {
    backgroundColor: "#FFF8E1",
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FBC02D",
  },
  ruleText: { fontSize: 13, color: "#444", lineHeight: 18 },
  box: {
    backgroundColor: "#F9F9F9",
    padding: 12,
    borderRadius: 8,
    marginVertical: 10,
  },
  contactText: { fontSize: 14, marginVertical: 2, color: "#000" },
  button: {
    backgroundColor: "#1D4ED8",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 15,
  },
  buttonText: { color: "#fff", fontSize: 15, fontWeight: "600" },
  footerNote: { textAlign: "center", fontSize: 12, color: "#666", marginBottom: 30 },
});
