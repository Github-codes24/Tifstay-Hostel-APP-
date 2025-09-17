// AddHostelService.js
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";

const ArrowCounter = ({ value, onInc, onDec }) => {
  return (
    <View style={styles.counterBox}>
      <TouchableOpacity onPress={onDec} style={styles.counterIconBtn}>
        {/* down arrow (rotate left-arrow 270deg) */}
        <Image
          source={require("../screens/Assets/Images/Backarrow.png")}
          style={[styles.counterIcon, { transform: [{ rotate: "270deg" }] }]}
        />
      </TouchableOpacity>

      <Text style={styles.counterValue}>{value}</Text>

      <TouchableOpacity onPress={onInc} style={styles.counterIconBtn}>
        {/* up arrow (rotate left-arrow 90deg) */}
        <Image
          source={require("../screens/Assets/Images/Backarrow.png")}
          style={[styles.counterIcon, { transform: [{ rotate: "90deg" }] }]}
        />
      </TouchableOpacity>
    </View>
  );
};

const AddHostelService = () => {
  const navigation = useNavigation();

  const [hostelType, setHostelType] = useState("");
  const [pricing, setPricing] = useState({
    daily: 0,
    weekly: 0,
    monthly: 0,
    security: 0,
  });
  const [room, setRoom] = useState({
    roomNo: "",
    beds: 0,
    details: "",
  });

  const [amenities, setAmenities] = useState({
    wifi: false,
    mess: false,
    security: false,
    studyHall: false,
    commonTV: false,
    cctv: false,
    acRooms: false,
    laundry: false,
  });

  const toggleAmenity = (key) => {
    setAmenities((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const incPricing = (key) =>
    setPricing((p) => ({ ...p, [key]: p[key] + 1 }));
  const decPricing = (key) =>
    setPricing((p) => ({ ...p, [key]: Math.max(0, p[key] - 1) }));

  const incBeds = () => setRoom((r) => ({ ...r, beds: r.beds + 1 }));
  const decBeds = () =>
    setRoom((r) => ({ ...r, beds: Math.max(0, r.beds - 1) }));

  return (
    <View style={styles.wrapper}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../screens/Assets/Images/Backarrow.png")}
            style={styles.backArrow}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add New Hostel Service</Text>
        <TouchableOpacity>
          <Text style={styles.saveText}>Reset</Text>
        </TouchableOpacity>
      </View>

      {/* Form */}
      <ScrollView contentContainerStyle={{ paddingBottom: 160 }}>
        {/* Basic Information */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Image
              source={require("../screens/Assets/Images/Basicinfo.png")}
              style={styles.sectionIcon}
            />
            <Text style={styles.sectionTitle}>Basic Information</Text>
          </View>

          <Text style={styles.label}>PG/Hostel Name *</Text>
          <TextInput
            style={styles.input}
            value={room.name}
            placeholder="Ex: Sunrise Boys Hostel"
            placeholderTextColor="#999"
            onChangeText={(t) => setRoom((r) => ({ ...r, name: t }))}
          />

          <Text style={styles.label}>Hostel Type *</Text>
          <View style={styles.dropdownWrapper}>
            <RNPickerSelect
              onValueChange={(value) => setHostelType(value)}
              items={[
                { label: "Boys Hostel", value: "boys" },
                { label: "Girls Hostel", value: "girls" },
                { label: "Co-ed Hostel", value: "coed" },
              ]}
              placeholder={{ label: "Select Type", value: null }}
              useNativeAndroidPickerStyle={false}
              style={pickerSelectStyles}
              value={hostelType}
            />
          </View>

          <Text style={styles.label}>Description *</Text>
          <TextInput
            style={[styles.input, { height: 80 }]}
            placeholder="Describe your hostel, amenities, and what makes it special"
            placeholderTextColor="#999"
            multiline
            value={room.desc}
            onChangeText={(t) => setRoom((r) => ({ ...r, desc: t }))}
          />
        </View>

        {/* Pricing */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Image
              source={require("../screens/Assets/Images/Pricing.png")}
              style={styles.sectionIcon}
            />
            <Text style={styles.sectionTitle}>Pricing</Text>
          </View>

          {/* Row 1: Day + Weekly */}
          <View style={styles.row}>
            <View style={styles.halfInput}>
              <Text style={styles.label}>Price per Day (₹) *</Text>
              <ArrowCounter
                value={pricing.daily}
                onInc={() => incPricing("daily")}
                onDec={() => decPricing("daily")}
              />
            </View>
            <View style={styles.halfInput}>
              <Text style={styles.label}>Weekly Price (₹) *</Text>
              <ArrowCounter
                value={pricing.weekly}
                onInc={() => incPricing("weekly")}
                onDec={() => decPricing("weekly")}
              />
            </View>
          </View>

          {/* Row 2: Monthly + Security */}
          <View style={styles.row}>
            <View style={styles.halfInput}>
              <Text style={styles.label}>Monthly Price (₹) *</Text>
              <ArrowCounter
                value={pricing.monthly}
                onInc={() => incPricing("monthly")}
                onDec={() => decPricing("monthly")}
              />
            </View>
            <View style={styles.halfInput}>
              <Text style={styles.label}>Security Deposit (₹) *</Text>
              <ArrowCounter
                value={pricing.security}
                onInc={() => incPricing("security")}
                onDec={() => decPricing("security")}
              />
            </View>
          </View>

          <Text style={styles.label}>Offers (Optional)</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 10% discount"
            placeholderTextColor="#999"
          />
        </View>

        {/* Rooms & Bed */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Image
              source={require("../screens/Assets/Images/bed.png")}
              style={styles.sectionIcon}
            />
            <Text style={styles.sectionTitle}>Rooms & Bed</Text>
          </View>

          <TouchableOpacity style={styles.uploadBox}>
            <Image
              source={require("../screens/Assets/Images/upload.png")}
              style={styles.uploadIcon}
            />
            <Text style={{ color: "#888", marginTop: 5, fontSize: 12 }}>
              Upload Photo
            </Text>
          </TouchableOpacity>

          <View style={styles.row}>
            <View style={styles.halfInput}>
              <Text style={styles.label}>Room No</Text>
              <TextInput
                style={styles.input}
                placeholder="101"
                placeholderTextColor="#999"
                keyboardType="numeric"
                value={room.roomNo}
                onChangeText={(t) => setRoom((r) => ({ ...r, roomNo: t }))}
              />
            </View>

            <View style={styles.halfInput}>
              <Text style={styles.label}>No of Beds</Text>
              {/* Arrow counter for beds */}
              <ArrowCounter value={room.beds} onInc={incBeds} onDec={decBeds} />
            </View>
          </View>

          <Text style={styles.label}>Room Details</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: AC room with attached bathroom"
            placeholderTextColor="#999"
            value={room.details}
            onChangeText={(t) => setRoom((r) => ({ ...r, details: t }))}
          />

          <TouchableOpacity style={styles.addRoomBtn}>
            <Text style={{ color: "#ff6600", fontWeight: "bold", marginLeft:94 }}>
              + Add More Room
            </Text>
          </TouchableOpacity>
        </View>

        {/* Facilities & Amenities */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Image
              source={require("../screens/Assets/Images/Facilities.png")}
              style={styles.sectionIcon}
            />
            <Text style={styles.sectionTitle}>Facilities & Amenities</Text>
          </View>

          <Text style={[styles.label, { marginBottom: 10 }]}>
            Select features that apply to your service
          </Text>

          {Object.keys(amenities).map((key) => (
            <TouchableOpacity
              key={key}
              style={styles.checkboxRow}
              onPress={() => toggleAmenity(key)}
            >
              <Image
                source={
                  amenities[key]
                    ? require("../screens/Assets/Images/Checked.png")
                    : require("../screens/Assets/Images/Unchecked.png")
                }
                style={styles.checkboxImg}
              />
              <Text
                style={[
                  styles.checkboxLabel,
                  amenities[key] && { color: "#ffb300", fontWeight: "700" }, // yellow when selected
                ]}
              >
                {key === "wifi"
                  ? "Wi-Fi"
                  : key === "mess"
                  ? "Mess"
                  : key === "security"
                  ? "Security"
                  : key === "studyHall"
                  ? "Study Hall"
                  : key === "commonTV"
                  ? "Common TV"
                  : key === "cctv"
                  ? "CCTV"
                  : key === "acRooms"
                  ? "AC Rooms"
                  : "Laundry"}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Button */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.nextBtn}
         onPress={() => navigation.navigate('AddHostelStep2')}
        >
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: "#fff" },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 14,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  backArrow: { width: 22, height: 22, resizeMode: "contain" },
  headerTitle: { fontSize: 16, fontWeight: "600", padding:18 },
  saveText: { fontSize: 14, color: "#007bff", fontWeight: "bold" },

  section: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 14,
    margin: 12,
    backgroundColor: "#fff",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionIcon: { width: 18, height: 18, resizeMode: "contain", marginRight: 8 },
  sectionTitle: { fontWeight: "600", fontSize: 14 },
  label: { fontSize: 12, fontWeight: "500", color: "#333", marginBottom: 6 },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    padding: 10,
    fontSize: 13,
    backgroundColor: "#fff",
    marginBottom: 10,
  },

  dropdownWrapper: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    marginBottom: 12,
    overflow: "hidden",
  },

  row: { flexDirection: "row", justifyContent: "space-between" },
  halfInput: { flex: 1, marginRight: 6, marginBottom: 12 },
  uploadBox: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#aaa",
    borderRadius: 6,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  uploadIcon: { width: 28, height: 28, resizeMode: "contain" },

  addRoomBtn: { marginTop: 5 },

  // Counter
  counterBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    backgroundColor: "#fafafa",
    justifyContent: "space-between",
    paddingHorizontal: 6,
    height: 40,
  },
  counterIconBtn: {
    padding: 6,
  },
  counterIcon: {
    width: 16,
    height: 16,
    resizeMode: "contain",
    tintColor: "#007bff",
  },
  counterValue: { fontSize: 14, fontWeight: "600", color: "#333" },

  // Amenities
  checkboxRow: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  checkboxImg: { width: 20, height: 20, resizeMode: "contain" },
  checkboxLabel: { marginLeft: 10, fontSize: 14, color: "#444" },

  // Bottom bar
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderColor: "#eee",
    padding: 12,
    backgroundColor: "#fff",
  },
  nextBtn: {
    backgroundColor: "#004AAD",
    borderRadius: 6,
    paddingVertical: 12,
    alignItems: "center",
  },
  nextText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});

const pickerSelectStyles = {
  inputIOS: { fontSize: 13, padding: 10, color: "#333" },
  inputAndroid: { fontSize: 13, padding: 10, color: "#333" },
  placeholder: { color: "#999" },
};

export default AddHostelService;
