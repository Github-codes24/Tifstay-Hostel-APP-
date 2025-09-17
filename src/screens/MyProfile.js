// MyProfile.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const MyProfile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Profile</Text>
        <TouchableOpacity
         onPress={() => navigation.navigate('EditProfile')}
        >
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        {/* Profile */}
        <View style={styles.profileContainer}>
          <Image
            source={require("../screens/Assets/Images/UserCircle.png")}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Green Valley Boys Hostel</Text>
        </View>

        {/* Info Card */}
        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Icon name="account-outline" size={22} color="#000" />
            <View style={styles.infoTextBox}>
              <Text style={styles.infoLabel}>Name</Text>
              <Text style={styles.infoValue}>Green Valley Boys Hostel</Text>
            </View>
          </View>
          <View style={styles.infoRow}>
            <Icon name="email-outline" size={22} color="#000" />
            <View style={styles.infoTextBox}>
              <Text style={styles.infoLabel}>Email</Text>
              <Text style={styles.infoValue}>
                greenvalleyhostel@gmail.com
              </Text>
            </View>
          </View>
          <View style={styles.infoRow}>
            <Icon name="phone-outline" size={22} color="#000" />
            <View style={styles.infoTextBox}>
              <Text style={styles.infoLabel}>Phone Number</Text>
              <Text style={styles.infoValue}>715-601-4598</Text>
            </View>
          </View>
        </View>

        {/* Options */}
        <TouchableOpacity style={styles.optionCard}>
          <Icon name="account-cog-outline" size={22} color="#000" />
          <Text style={styles.optionText}>Manage Profile</Text>
          <Icon name="chevron-right" size={22} color="#000" style={{ marginLeft: "auto" }}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionCard}
        onPress={() => navigation.navigate('ChangePassword')}
        >
          <Icon name="lock-outline" size={22} color="#000" />
          <Text style={styles.optionText}>Change Password</Text>
          <Icon name="chevron-right" size={22} color="#000" style={{ marginLeft: "auto" }}/>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "10%/Primary/Light Blue" },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  headerTitle: { fontSize: 18, fontWeight: "600" , marginTop:30},
  editText: { fontSize: 15, color: "#0A67FF", fontWeight: "bold", marginTop:20 },

  profileContainer: { alignItems: "center", marginVertical: 20 },
  profileImage: { width: 80, height: 80, borderRadius: 40 },
  profileName: { fontSize: 16, fontWeight: "600", marginTop: 10 },

  infoCard: {
    backgroundColor: "#F8F7FF",
    borderRadius: 12,
    marginHorizontal: 15,
    padding: 15,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  infoTextBox: { marginLeft: 10 },
  infoLabel: { fontSize: 13, color: "#777" },
  infoValue: { fontSize: 15, fontWeight: "500" },

  optionCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F7FF",
    borderRadius: 12,
    marginHorizontal: 15,
    padding: 15,
    marginBottom: 15,
  },
  optionText: { marginLeft: 10, fontSize: 15, fontWeight: "500" },
});
