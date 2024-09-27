import {
    StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView, Platform, ImageBackground
} from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../const/colors';
import images from '../const/images';
import Icon from 'react-native-vector-icons/Ionicons'; // Use Ionicons

const Profile = ({ navigation }) => {
    const data = [
        { id: '1', description: 'Edit Profile' },
        { id: '2', description: 'My points' },
        { id: '3', description: 'Change Password' },
        { id: '4', description: 'My Courses' },
        { id: '5', description: 'My Location' },
        { id: '6', description: 'My Enquiries' },
        { id: '7', description: 'Settings' },
    ];
    const [notifications, setNotifications] = useState(data);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ImageBackground
                source={images.backgroundImage}
                style={styles.imageBackground}
                resizeMode="cover"
            >
                <View style={styles.header}>
                    <Image
                        style={styles.headerIcon}
                        source={images.menu}
                        resizeMode="contain"
                    />
                    <Image
                        style={styles.headerIcon}
                        source={images.notification}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.imageContainer}>
                    <Image
                        style={styles.profileImage}
                        source={images.profileImage1}
                        resizeMode="contain"
                    />
                    <View style={styles.userInfo}>
                        <Text style={styles.userName}>Wade Menpes-Smith</Text>
                        <Text style={styles.userEmail}>Wade Menpes-Smith@gmail.com</Text>
                        <Text style={styles.userPhone}>+971 **998 955** 45</Text>
                    </View>
                </View>

                <FlatList
                    style={styles.notificationList}
                    data={notifications}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.notificationBox}>
                            <Text style={styles.description}>{item.description}</Text>
                            <Image
                                style={styles.forwardArrow}
                                source={images.forwardArrow}
                                resizeMode="contain"
                            />
                        </View>
                    )}
                    contentContainerStyle={{ flexGrow: 0 }} // Add this line to adjust height to content
                />


                <LinearGradient colors={['#02062C', '#40639B']} style={styles.gradientButton}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GraphDetails')}>
                        <Text style={styles.buttonText}>Logout</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </ImageBackground>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    gradient: {
        flex: 1,
        padding: 15,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 18,
        top: 28
    },
    imageContainer: {
        flexDirection: 'row',
        left: 11,
        alignItems: 'center',
        backgroundColor: colors.white,
        padding: 15,
        borderRadius: 15,
        marginBottom: 30,
        top: 20,

        width: '95%',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    profileImage: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        marginRight: 13,
        borderRadius:20
    },
    userInfo: {
        justifyContent: 'center',
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.black,
    },
    userEmail: {
        fontSize: 14,
        color: colors.darkGrey,
        fontWeight: '500',
        lineHeight: 25,
    },
    userPhone: {
        fontSize: 14,
        color: colors.darkGrey,
        fontWeight: '500',
        lineHeight: 20,
    },
    notificationList: {
        width: '95%',
        // backgroundColor: 'plum',
        left: 10,
        marginBottom: 80, // You can add some margin if needed
    },    
    notificationBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 13,
        margin: 8,
        borderColor: colors.white,
        borderWidth: 1,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    description: {
        fontSize: 15,
        color: colors.white,
        fontWeight: '500',
    },
    icon: {
        marginLeft: 10,
    },
    gradientButton: {
        borderRadius: 8,
        padding: 2,
        width: '93%',
        // alignItems: 'center',
        // justifyContent: 'center',
        top: Platform.OS === 'ios' ? -140 : -80,
        left: Platform.OS === 'ios' ? 15 : 15, // Platform-specific left margin
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    forwardArrow: {
        width: 28,
        height: 18
    },
    headerIcon: {
        width: 25,
        height: 25,
        bottom: Platform.OS === 'ios' ? 0 : 0,
    }
});

export default Profile;
