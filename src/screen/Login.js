import React from 'react';
import {
    StyleSheet, Text, TextInput, TouchableOpacity, View, Image, SafeAreaView,
    Dimensions, ImageBackground, StatusBar, Platform
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../const/colors';
import images from '../const/images';
import Svg, { Text as SvgText, Defs, LinearGradient as SvgLinearGradient, Stop } from 'react-native-svg';
import { RFValue } from 'react-native-responsive-fontsize'; // For responsive text

const { width, height } = Dimensions.get('window');

const GradientText = ({ text }) => (
    <Svg height={RFValue(50)} width={RFValue(200)}>
        <Defs>
            <SvgLinearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <Stop offset="0%" stopColor="#5888C3" />
                <Stop offset="100%" stopColor="#192853" />
            </SvgLinearGradient>
        </Defs>
        <SvgText
            fill="url(#gradient)"
            fontSize={RFValue(32)}
            fontWeight="bold"
            x="0"
            y={RFValue(35)}
        >
            {text}
        </SvgText>
    </Svg>
);

const Login = ({ navigation }) => {
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    const handlePress = () => {
        navigation.navigate('Otp');
    };

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle={Platform.OS === 'ios' ? 'light-content' : 'light-content'}
                backgroundColor='transparent'
                translucent={true}
            />
            <ImageBackground
                source={images.backgroundImage}
                style={styles.imageBackground}
                resizeMode="cover"
            >
                <SafeAreaView style={styles.safeArea}>
                    <View style={styles.innerContainer}>
                        <Image style={styles.logoSize} source={images.finalLogo} />

                        <View style={styles.loginContainer}>
                            <GradientText text="Log In" style={{ left: 10 }} />
                            <View style={styles.hr}>
                                <View style={styles.coloredPart} />
                                <View style={styles.remainingPart} />
                            </View>

                            <Text style={styles.titleText}>
                                “Empower your health with AlphaIGI: Track, understand, and improve your wellness with personalized insights and incentives.”                            </Text>

                            <View style={styles.inputContainer}>
                                <Image style={styles.icon} source={images.email} />
                                <TextInput
                                    style={styles.input}
                                    onChangeText={onChangeEmail}
                                    placeholderTextColor={'#4F5663'}
                                    value={email}
                                    placeholder="Email address"
                                    keyboardType="default"
                                />
                            </View>

                            <View style={styles.inputContainer}>
                                <Image style={styles.icon} source={images.password} />
                                <TextInput
                                    style={styles.input}
                                    onChangeText={onChangePassword}
                                    placeholderTextColor={'#4F5663'}
                                    value={password}
                                    placeholder="Password"
                                    secureTextEntry={true}
                                />
                            </View>

                            <LinearGradient colors={['#02062C', '#40639B']} style={styles.gradientButton}>
                                <TouchableOpacity style={styles.button} onPress={handlePress}>
                                    <Text style={styles.buttonText}>Log In</Text>
                                </TouchableOpacity>
                            </LinearGradient>

                            <View style={styles.accountContainer}>
                                <Text style={styles.accountText}>Don’t have an account? </Text>
                                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                                    <Text style={styles.signUpText}>Sign Up</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.continueContainer}>
                                <View style={styles.line} />
                                <Text style={styles.continueText}>Or Continue With</Text>
                                <View style={styles.line} />
                            </View>

                            <View style={styles.socialContainer}>
                                {['googleIcon', 'facebookIcon', 'appleIcon'].map((icon, index) => (
                                    <View key={index} style={styles.shadowBox}>
                                        <Image
                                            style={styles.googleIcon}
                                            source={images[icon]}
                                            resizeMode="contain"
                                        />
                                    </View>
                                ))}
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight, // Adjust for iOS and Android
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    gradientButton: {
        borderRadius: RFValue(15),
        padding: RFValue(2),
        marginVertical: RFValue(15),
        width: '100%',
        top: 5
    },
    button: {
        borderRadius: RFValue(10),
        paddingVertical: RFValue(10),
        paddingHorizontal: RFValue(20),
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: RFValue(18),
        fontWeight: '500',
    },
    // loginContainer: {
    //     backgroundColor: colors.white,
    //     padding: RFValue(20),
    //     borderRadius: RFValue(32),
    //     width: '90%',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     marginTop: Platform.OS === 'ios' ? 10 : 0, // Ad
    // },
    loginContainer: {
        backgroundColor: colors.white,
        padding: 20,
        borderRadius: 32,
        width: '100%',
        maxWidth: width * 0.9,
        // left: 20,
        marginBottom: Platform.OS === 'ios' ? 10 : 40,
        // top: 80
    },
    hr: {
        position: 'relative',
        height: RFValue(2.5),
        width: '98%',
        flexDirection: 'row',
        marginLeft: RFValue(2),
        borderRadius: 20
    },
    titleText: {
        fontSize: RFValue(13),
        fontWeight: '500',
        color: '#868585',
        padding: RFValue(10),
        lineHeight: RFValue(18),
    },
    coloredPart: {
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        width: '35%',
        backgroundColor: colors.primary1,
        borderRadius: 50
    },
    remainingPart: {
        position: 'absolute',
        left: '34%',
        top: 0,
        height: '100%',
        width: '65%',
        backgroundColor: 'gray',
        borderRadius: 50
    },
    inputContainer: {
        backgroundColor: '#F6F6F6',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        borderRadius: RFValue(30),
        paddingHorizontal: RFValue(15),
        marginTop: RFValue(15),
        padding: RFValue(4),
    },
    input: {
        flex: 1,
        marginLeft: RFValue(5),
        height: RFValue(40),
        color: '#000',
    },
    googleIcon: {
        resizeMode: 'contain',
        width: RFValue(25),
        height: RFValue(25),
    },
    icon: {
        width: RFValue(16),
        height: RFValue(15),
        resizeMode: 'contain',
    },
    logoSize: {
        width: width * 0.40, // Adjust width based on screen size
        height: height * 0.14, // Adjust height based on screen size
        resizeMode: 'contain', // Ensure the logo fits within the allocated space
        marginBottom: Platform.OS === 'ios' ? 10 : 20, // Adjust margin for different platforms
        marginTop: Platform.OS === 'ios' ? 20 : 20,
    },
    accountContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: RFValue(20),
    },
    accountText: {
        color: colors.lightBlack,
        fontWeight: '400',
        fontSize: RFValue(14),
    },
    signUpText: {
        color: colors.primary1,
        fontWeight: '700',
        fontSize: RFValue(14),
    },
    continueContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: RFValue(20),
        // backgroundColor: 'red',
        bottom: 16
    },
    continueText: {
        textAlign: 'center',
        color: colors.grey,
        marginHorizontal: RFValue(5),
        fontFamily: 'Cairo-Light',
    },
    line: {
        flex: 1,
        height: RFValue(2),
        backgroundColor: colors.primary,
        borderRadius: 50
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: RFValue(5),
        alignItems: 'center',
        width: '88%',
    },
    shadowBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: RFValue(50),
        height: RFValue(50),
        backgroundColor: colors.white,
        borderRadius: RFValue(50),
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 8,
            },
            android: {
                elevation: 2,
            },
        }),
    },
});

export default Login;
