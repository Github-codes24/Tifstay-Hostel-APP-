// AddHostelStep2.js
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

const AddHostelStep2 = () => {
  const navigation = useNavigation();
  const [area, setArea] = useState(null);

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

      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        {/* Rules & Policies */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Image
              source={require("../screens/Assets/Images/Rules.png")}
              style={styles.sectionIcon}
            />
            <Text style={styles.sectionTitle}>Rules & Policies</Text>
          </View>
          <Text style={styles.label}>Hostel Rules & Policies</Text>
          <TextInput
            style={[styles.input, { height: 80 }]}
            placeholder="Mention important rules like visiting hours, noise policy, etc."
            placeholderTextColor="#999"
            multiline
          />
        </View>

        {/* Photos */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Image
              source={require("../screens/Assets/Images/Phottos.png")}
              style={styles.sectionIcon}
            />
            <Text style={styles.sectionTitle}>Photos</Text>
          </View>
          <TouchableOpacity style={styles.uploadBox}>
            <Image
              source={require("../screens/Assets/Images/upload.png")}
              style={styles.uploadIcon}
            />
            <Text style={{ color: "#888", marginTop: 5, fontSize: 12 }}>
              Upload photo
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addPhotoBtn}>
            <Text style={{ color: "#ff6600", fontWeight: "bold", marginLeft:90 }}>
              + Add More Photo
            </Text>
          </TouchableOpacity>
        </View>

        {/* Location Details */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Image
              source={require("../screens/Assets/Images/location.png")}
              style={styles.sectionIcon}
            />
            <Text style={styles.sectionTitle}>Location Details</Text>
          </View>

          <Text style={styles.label}>Area/Locality *</Text>
          <View style={styles.dropdownWrapper}>
            <RNPickerSelect
              onValueChange={(value) => setArea(value)}
              items={[
                { label: "MG Road", value: "mgroad" },
                { label: "Viman Nagar", value: "vimannagar" },
                { label: "Kothrud", value: "kothrud" },
              ]}
              placeholder={{ label: "Select Area", value: null }}
              useNativeAndroidPickerStyle={false}
              style={pickerSelectStyles}
              value={area}
            />
          </View>

          <Text style={styles.label}>Nearby Landmarks</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., Near VIT, Medical College..."
            placeholderTextColor="#999"
          />

          <Text style={styles.label}>Full Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter complete address with pincode"
            placeholderTextColor="#999"
          />
        </View>

        {/* Contact Information */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Image
              source={require("../screens/Assets/Images/contact.png")}
              style={styles.sectionIcon}
            />
            <Text style={styles.sectionTitle}>Contact Information</Text>
          </View>

          <Text style={styles.label}>Phone Number *</Text>
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            placeholder="09191848488"
            placeholderTextColor="#999"
          />

          <Text style={styles.label}>WhatsApp Number *</Text>
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            placeholder="09191848488"
            placeholderTextColor="#999"
          />
        </View>
      </ScrollView>

      {/* Bottom Buttons */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.submitBtn}
        onPress={() => navigation.navigate('HostelDetailsScreen')}
        >
          <Text style={styles.submitText}>Submit Listing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.previewBtn}>
          <Text style={styles.previewText}>Preview</Text>
        </TouchableOpacity>
        <Text style={styles.footerNote}>
          Your listing will be reviewed and approved within 24 hours
        </Text>
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
  headerTitle: { fontSize: 16, fontWeight: "600", padding:20 },
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
  label: { fontSize: 12, fontWeight: "bold", color: "#333", marginBottom: 6 },

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
  uploadIcon: { width: 40, height: 30, resizeMode: "contain" },
  addPhotoBtn: { marginTop: 5 },

  // bottom
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#eee",
    alignItems: "center",
  },
  submitBtn: {
    backgroundColor: "#004AAD",
    borderRadius: 6,
    paddingVertical: 12,
    width: "100%",
    alignItems: "center",
    marginBottom: 8,
  },
  submitText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  previewBtn: {
    borderWidth: 1,
    borderColor: "#007bff",
    borderRadius: 6,
    paddingVertical: 12,
    width: "100%",
    alignItems: "center",
    marginBottom: 8,
  },
  previewText: { color: "#007bff", fontSize: 16, fontWeight: "600" },
  footerNote: { fontSize: 12, color: "#666", textAlign: "center" },
});

const pickerSelectStyles = {
  inputIOS: { fontSize: 13, padding: 10, color: "#333" },
  inputAndroid: { fontSize: 13, padding: 10, color: "#333" },
  placeholder: { color: "#999" },
};

export default AddHostelStep2;
