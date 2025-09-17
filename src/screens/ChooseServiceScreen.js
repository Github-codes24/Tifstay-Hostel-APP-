import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const ChooseServiceScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../screens/Assets/Images/tifstay_logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>
            <Text style={styles.title}>Choose Your Service</Text>
            <Text style={styles.subtitle}>Please select your category</Text>

            <TouchableOpacity style={styles.option}>
                <Text style={styles.optionText}>
                    I'm a Tiffin/Restaurant Provider {"\n"}
                    <Text style={styles.subOption}>Want to list my Tiffin/Restaurant</Text>
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.option, styles.optionBlue]}
                onPress={() => navigation.navigate('Login')} // ✅ must match stack name
            >
                <Text style={styles.optionTextWhite}>
                    I'm a PG/Hostel Owner {"\n"}
                    <Text style={styles.subOptionWhite}>Want to list my PG/Hostel</Text>
                </Text>
            </TouchableOpacity>


        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
    logoContainer: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 20,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 4,
        marginBottom: 15,
    },
    logo: { width: 70, height: 40, marginBottom: 20, resizeMode: "contain" },
    title: { fontSize: 22, fontWeight: "bold", marginBottom: 5 },
    subtitle: { fontSize: 14, color: "gray", marginBottom: 20 },
    option: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#007bff",
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
    },
    optionBlue: {
        backgroundColor: "#007bff",
    },
    optionText: { fontSize: 16, fontWeight: "bold", color: "#000" },
    optionTextWhite: { fontSize: 16, fontWeight: "bold", color: "#fff" },
    subOption: { fontSize: 12, fontWeight: "normal", color: "gray" },
    subOptionWhite: { fontSize: 12, fontWeight: "normal", color: "#fff" },
});

export default ChooseServiceScreen;
