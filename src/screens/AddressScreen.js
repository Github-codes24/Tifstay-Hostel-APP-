import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddressScreen = () => {
    const navigation = useNavigation();

    const handleDelete = () => {
        Alert.alert(
            'Confirm Delete',
            'Are you sure you want to delete this address?',
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Delete', style: 'destructive', onPress: () => console.log('Deleted') },
            ]
        );
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backCircle} onPress={() => navigation.goBack()}>
                    <Text style={styles.backArrow}>←</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Address</Text>
            </View>

            {/* Location Section */}
            <Text style={styles.sectionTitle}>Location</Text>

            {/* Address Card */}
            <View style={styles.card}>
                <View style={styles.cardText}>
                    <View style={styles.labelRow}>
                        <View style={styles.iconCircle}>
                            <Image source={require('../screens/Assets/Images/Home.png')} style={styles.homeIcon} />
                        </View>
                        <Text style={styles.cardLabel}>Home</Text>
                    </View>
                    <Text style={styles.cardAddress}>
                        123 Main Street, Dharampeth, Nagpur - 440010
                    </Text>
                </View>
                <View style={styles.cardIcons}>
                    <TouchableOpacity onPress={() => navigation.navigate('EditAddressScreen')}>
                        <Image source={require('../screens/Assets/Images/edit.png')} style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleDelete}>
                        <Image source={require('../screens/Assets/Images/Delete.png')} style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', padding: 16, },
    header: { flexDirection: 'row', alignItems: 'center', marginBottom: 30, marginTop:17 },
    backCircle: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    backArrow: {
        fontSize: 20,
        marginTop: 2, // slight downward shift
      },
    headerTitle: { fontSize: 20, fontWeight: 'bold' },
    sectionTitle: { fontSize: 16, fontWeight: '600', marginBottom: 12 },
    card: {
        backgroundColor: '#F8F5FF',
        borderRadius: 8,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 2,
    },
    cardText: { flex: 1 },
    labelRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 4 },
    iconCircle: {
        width: 51,
        height: 52,
        borderRadius: 16,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
        marginBottom:-20,
        elevation: 2, // subtle shadow
      },
      homeIcon: {
        width: 18,
        height: 18,
        tintColor: '#004AAD', // optional: match your theme
      },
    cardLabel: { fontSize: 16, fontWeight: 'bold', marginLeft: 5, marginBottom:-4 },
    cardAddress: { fontSize: 13, color: '#666060', marginLeft: 60 },
    cardIcons: { flexDirection: 'row' },
    icon: { width: 18, height: 20, marginLeft: 12 },
});

export default AddressScreen;