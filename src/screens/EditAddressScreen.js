import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    PermissionsAndroid,
    Platform,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const EditAddressScreen = ({ navigation }) => {
    const [selectedLabel, setSelectedLabel] = useState('home');
    const [address, setAddress] = useState('123 Main Street, Dharampeth, Nagpur - 440010');
    const [street, setStreet] = useState('123 Main Street');
    const [postCode, setPostCode] = useState('440010');
    const [location, setLocation] = useState({
        latitude: 21.1458,
        longitude: 79.0882,
    });

    // Request location permission and fetch current location
    useEffect(() => {
        const requestLocation = async () => {
            if (Platform.OS === 'android') {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                );
                if (granted !== PermissionsAndroid.RESULTS.GRANTED) return;
            }

            Geolocation.getCurrentPosition(
                (pos) => {
                    const { latitude, longitude } = pos.coords;
                    setLocation({ latitude, longitude });
                },
                (error) => console.warn('Location error:', error),
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
        };

        requestLocation();
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* 🗺️ Map Section */}
            <View style={styles.mapContainer}>
                <MapView
                    style={styles.map}
                    region={{
                        ...location,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }}
                >
                    <Marker
                        coordinate={location}
                        draggable
                        onDragEnd={(e) => setLocation(e.nativeEvent.coordinate)}
                    />
                </MapView>
                <Text style={styles.mapLabel}>Move to edit location</Text>
            </View>

            {/* 📝 Address Fields */}
            <View style={styles.form}>
                <Text style={styles.label}>Address</Text>
                <TextInput style={styles.input} value={address} onChangeText={setAddress} />

                <Text style={styles.label}>Street</Text>
                <TextInput style={styles.input} value={street} onChangeText={setStreet} />

                <Text style={styles.label}>Post Code</Text>
                <TextInput
                    style={styles.input}
                    value={postCode}
                    onChangeText={setPostCode}
                    keyboardType="numeric"
                />
            </View>

            {/* 🏷️ Label As Section */}
            <Text style={styles.label}>Label As</Text>
            <View style={styles.labelRow}>
                <TouchableOpacity onPress={() => setSelectedLabel('home')}>
                    <View style={[styles.iconCircle, selectedLabel === 'home' && styles.selectedCircle]}>
                        <Image
                            source={require('../screens/Assets/Images/Home.png')}
                            style={styles.labelIcon}
                            onError={(e) => console.warn('Home icon failed to load', e.nativeEvent)}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setSelectedLabel('work')}>
                    <View style={[styles.iconCircle, selectedLabel === 'work' && styles.selectedCircle]}>
                        <Image
                            source={require('../screens/Assets/Images/Work.png')}
                            style={styles.labelIcon}
                            onError={(e) => console.warn('Work icon failed to load', e.nativeEvent)}
                        />
                    </View>
                </TouchableOpacity>
            </View>

            {/* 💾 Save Button */}
            <TouchableOpacity style={styles.saveButton}>
                <Text style={styles.saveText}>Save</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { padding: 16, backgroundColor: '#fff' },
    mapContainer: {
        height: 200,
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 12,
        position: 'relative',
    },
    map: { width: '100%', height: '100%' },
    mapLabel: {
        position: 'absolute',
        bottom: 8,
        left: 12,
        backgroundColor: '#fff',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        fontSize: 12,
        elevation: 2,
    },
    form: { marginBottom: 16 },
    label: { fontSize: 14, fontWeight: '600', marginBottom: 6 },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginBottom: 12,
        fontSize: 14,
    },
    labelRow: { flexDirection: 'row', marginBottom: 24 },
    iconCircle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
        elevation: 2,
    },
    selectedCircle: {
        borderWidth: 2,
        borderColor: '#004AAD',
    },
    labelIcon: { width: 24, height: 24, tintColor: '#004AAD' },
    saveButton: {
        backgroundColor: '#004AAD',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
    },
    saveText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});

export default EditAddressScreen;