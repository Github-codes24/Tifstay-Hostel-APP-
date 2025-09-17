// ContactUsScreen.js
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
} from "react-native";

const ContactUsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={require("../screens/Assets/Images/Backarrow.png")} // your back arrow image
                        style={styles.backArrow}
                    />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Contact Us</Text>
            </View>

            {/* Description */}
            <Text style={styles.description}>
                Don't hesitate to contact us whether you have a suggestion on our improvement,
                a complain to discuss or an issue to solve.
            </Text>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Row with Call + Email */}
                <View style={styles.row}>
                    {/* Call Us */}
                    <View style={[styles.card, styles.halfCard]}>
                        <View style={styles.iconContainer}>
                            <Image
                                source={require("../screens/Assets/Images/phone.png")} // phone image
                                style={styles.iconImage}
                            />
                        </View>
                        <Text style={styles.cardText}>514-601-4598</Text>
                        <Text style={styles.cardTitle}>Call us</Text>
                        <Text style={styles.cardSubText}>Our team is on the line</Text>
                        <Text style={styles.cardSubText}>Mon-Fri • 9-17</Text>
                    </View>

                    {/* Email Us */}
                    <View style={[styles.card, styles.halfCard]}>
                        <View style={styles.iconContainer}>
                            <Image
                                source={require("../screens/Assets/Images/mail.png")} // email image
                                style={styles.iconImage}
                            />
                        </View>
                        <Text style={styles.cardText}>contact@tifstay.com</Text>
                        <Text style={styles.cardTitle}>Email us</Text>
                        <Text style={styles.cardSubText}>Our team is online</Text>
                        <Text style={styles.cardSubText}>Mon-Fri • 9-17</Text>
                    </View>
                </View>

                {/* Chat With Admin */}
                <TouchableOpacity
                    style={[styles.card, styles.fullCard]}
                    onPress={() => navigation.navigate("ChatScreen")}
                >
                    <View style={styles.iconContainer}>
                    <Image
                        source={require("../screens/Assets/Images/message.png")}
                        style={styles.cardIcon}
                    />
                    </View>
                    <Text style={styles.cardTitle}>Chat Support</Text>
                    <Text style={styles.cardSubtitle}>Chat With Admin</Text>
                    <Text style={styles.cardDesc}>Our team is on the line</Text>
                    <Text style={styles.cardSubText}>Mon-Fri • 9-17</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        paddingTop: 30,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
    },
    backArrow: {
        width: 20,
        height: 20,
        resizeMode: "contain",
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 10,
        color: "#000",
    },
    description: {
        fontSize: 13,
        color: "#666060", // lighter gray like in your screenshot
        lineHeight: 20,
        marginBottom: 20,
        textAlign: "center", // center aligned
        paddingHorizontal: 19, // keep nice spacing on sides
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    card: {
        backgroundColor: "#f9f6ff",
        borderRadius: 12,
        padding: 20,
        marginBottom: 16,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    halfCard: {
        flex: 1,
        marginHorizontal: 5,
    },
    fullCard: {
        alignSelf: "center",
        width: "60%",
    },
    iconContainer: {
        backgroundColor: "#0047AB",
        padding: 14,
        borderRadius: 50,
        marginBottom: 10,
    },
    iconImage: {
        width: 22,
        height: 22,
        tintColor: "#fff",
        resizeMode: "contain",
    },
    cardText: {
        fontSize: 13,
        color: "#333",
        marginBottom: 6,
        textAlign: "center",
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: "600",
        color: "#000",
        marginBottom: 4,
        textAlign: "center",
    },
    cardSubText: {
        fontSize: 12,
        color: "#666",
        textAlign: "center",
    },
});

export default ContactUsScreen;
