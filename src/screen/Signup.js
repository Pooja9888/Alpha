import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    Dimensions,
    ScrollView,
    ImageBackground,
    StatusBar
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../const/colors';
import images from '../const/images';
import Svg, { Text as SvgText, Defs, LinearGradient as SvgLinearGradient, Stop } from 'react-native-svg';

// Get device width and height
const { width, height } = Dimensions.get('window');

const GradientText = ({ text }) => {
    return (
        <Svg height="50" width="200">
            <Defs>
                <SvgLinearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                    <Stop offset="0%" stopColor="#5888C3" />
                    <Stop offset="100%" stopColor="#192853" />
                </SvgLinearGradient>
            </Defs>
            <SvgText fill="url(#gradient)" fontSize="32" fontWeight="bold" x="0" y="35">
                {text}
            </SvgText>
        </Svg>
    );
};

const Signup = ({ navigation }) => {
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    const handlePress = () => {
        navigation.navigate('Otp');
    };

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle={Platform.OS === 'ios' ? 'light-content' : 'light-content'}
                translucent={true}
                backgroundColor="transparent"
            />
         
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <ImageBackground
                        source={images.backgroundImage}
                        style={styles.imageBackground}
                        resizeMode="cover"
                    >
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image style={styles.logoSize} source={images.finalLogo} />
                        </View>
                        <View style={styles.loginContainer}>
                            <GradientText text="Sign Up" />
                            <View style={styles.hr}>
                                <View style={styles.coloredPart} />
                                <View style={styles.remainingPart} />
                            </View>

                            <View style={styles.inputContainer}>
                                <Image style={styles.icon} source={images.user} />
                                <TextInput
                                    style={styles.input}
                                    onChangeText={onChangeEmail}
                                    placeholderTextColor={'#4F5663'}
                                    value={email}
                                    placeholder="Full name"
                                    keyboardType="default"
                                />
                            </View>

                            <View style={styles.inputContainer}>
                                <Image style={styles.icon} source={images.mobile} />
                                <TextInput
                                    style={styles.input}
                                    onChangeText={onChangePassword}
                                    placeholderTextColor={'#4F5663'}
                                    value={password}
                                    placeholder="Mobile number"
                                    keyboardType="numeric"
                                />
                            </View>

                            <View style={styles.inputContainer}>
                                <Image style={styles.icon} source={images.email} />
                                <TextInput
                                    style={styles.input}
                                    onChangeText={onChangePassword}
                                    placeholderTextColor={'#4F5663'}
                                    value={password}
                                    placeholder="Email address"
                                    keyboardType="email-address"
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
                                    <Text style={styles.buttonText}>Sign Up</Text>
                                </TouchableOpacity>
                            </LinearGradient>

                            <View style={styles.accountContainer}>
                                <Text style={styles.accountText}>Have an account? </Text>
                                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                    <Text style={styles.signUpText}>Log in</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.continueContainer}>
                                <View style={styles.line} />
                                <Text style={styles.continueText}>Or Continue With</Text>
                                <View style={styles.line} />
                            </View>

                            <View style={styles.socialContainer}>
                                <View style={styles.shadowBox}>
                                    <Image style={styles.googleIcon} source={images.googleIcon} resizeMode="contain" />
                                </View>

                                <View style={styles.shadowBox}>
                                    <Image style={styles.googleIcon} source={images.facebookIcon} resizeMode="contain" />
                                </View>

                                <View style={styles.shadowBox}>
                                    <Image style={styles.googleIcon} source={images.appleIcon} resizeMode="contain" />
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </ScrollView>
                </View>
       
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        // backgroundColor: 'red',
    },
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    alphaText: {
        fontSize: 35,
        color: '#fff',
        textAlign: 'center',
        padding: 10,
    },
    loginContainer: {
        backgroundColor: colors.white,
        padding: 20,
        borderRadius: 32,
        width: '100%',
        maxWidth: width * 0.9,
        left: 20,
        marginBottom: Platform.OS === 'ios' ? 10 : 20,
        // top: 80
    },
    hr: {
        position: 'relative',
        height: 2.5,
        width: '98%',
        flexDirection: 'row',
        marginLeft: 2,
        borderRadius:50
    },
    coloredPart: {
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        width: '35%',
        backgroundColor: colors.primary1,
        borderRadius:50
    },
    remainingPart: {
        position: 'absolute',
        left: '34%',
        top: 0,
        height: '100%',
        width: '65%',
        backgroundColor: 'gray',
        borderRadius:50
    },
    gradientButton: {
        borderRadius: 15,
        padding: 2,
        marginTop: 25,
    },
    button: {
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
    },
    accountContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    accountText: {
        color: colors.lightBlack,
        fontWeight: '400',
        fontSize: 14,
    },
    signUpText: {
        color: colors.primary1,
        fontWeight: '700',
        fontSize: 14,
    },
    continueContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
        bottom: 6,
    },
    continueText: {
        textAlign: 'center',
        color: colors.grey,
        marginHorizontal: 10,
    },
    line: {
        flex: 1,
        height: 2,
        backgroundColor: colors.primary,
        borderRadius: 50
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        alignItems: 'center',
    },
    shadowBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        backgroundColor: colors.white,
        borderRadius: 50,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
    },
    inputContainer: {
        backgroundColor: '#F6F6F6',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        borderRadius: 30,
        paddingHorizontal: 15,
        marginTop: 15,
        padding: 4,
    },
    input: {
        flex: 1,
        marginLeft: 5,
        height: 40,
        color: '#000',
    },
    googleIcon: {
        resizeMode: 'contain',
        width: 25,
        height: 25,
    },
    icon: {
        width: 16,
        height: 15,
        resizeMode: 'contain',
    },
    logoSize: {
        width: width * 0.40, // Adjust width based on screen size
        height: height * 0.14, // Adjust height based on screen size
        resizeMode: 'contain', // Ensure the logo fits within the allocated space
        marginBottom: Platform.OS === 'ios' ? 10 : 20, // Adjust margin for different platforms
        marginTop: Platform.OS === 'ios' ? 80 : 70, // Adjust margin for different platforms
    },
});

export default Signup;
