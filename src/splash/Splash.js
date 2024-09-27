import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Dimensions, Platform, ImageBackground, StatusBar } from 'react-native';
import RNSSplashScreen from 'react-native-splash-screen';
import images from '../const/images';
import { SafeAreaView } from 'react-native-safe-area-context'; 
import colors from '../const/colors';

const { width, height } = Dimensions.get('window'); // Get device dimensions

const Splash = ({ navigation }) => {
    useEffect(() => {
        RNSSplashScreen.hide(); // Hide splash screen once the component is loaded

        const timeout = setTimeout(() => {
            navigation.replace('Login'); // Navigate to login after 3 seconds
        }, 1000);  // 3-second timeout for transition

        return () => clearTimeout(timeout);  // Clean up the timeout
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar 
                barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'} // Different status bar content for iOS and Android
                backgroundColor={Platform.OS === 'android' ? 'transparent' : undefined} // Transparent background for Android
                translucent={Platform.OS === 'android' ? true : false} // Translucent for Android
            />
            <ImageBackground
                source={images.backgroundImage}
                style={styles.imageBackground}
                resizeMode="cover"
            >
                <View style={styles.textContainer}>
                    <Image
                        style={styles.logo}
                        source={images.finalLogo}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Platform.OS === 'android' ? 'transparent' : colors.background, // Handle background color for iOS and Android
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center', // Centers content vertically
        alignItems: 'center',     // Centers content horizontally
    },
    logo: {
        resizeMode: 'contain',
        width: Platform.OS === 'ios' ? width * 0.55 : width * 0.6, // Make logo size more flexible across platforms
        height: Platform.OS === 'ios' ? height * 0.18 : height * 0.2, // Adjust height based on screen size for iOS and Android
    },
});


export default Splash;
