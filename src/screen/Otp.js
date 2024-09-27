import React from 'react';
import {
    StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions, Platform, Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, { Text as SvgText, Defs, LinearGradient as SvgLinearGradient, Stop } from 'react-native-svg';
import colors from '../const/colors';
import images from '../const/images';

const { width, height } = Dimensions.get('window');

const GradientText = ({ text }) => (
    <Svg height="50" width="200">
        <Defs>
            <SvgLinearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <Stop offset="0%" stopColor="#5888C3" />
                <Stop offset="100%" stopColor="#192853" />
            </SvgLinearGradient>
        </Defs>
        <SvgText
            fill="url(#gradient)"
            fontSize="32"
            fontWeight="700"
            x="0"
            y="35"
        >
            {text}
        </SvgText>
    </Svg>
);

const Otp = ({ navigation }) => {
    const [otp, setOtp] = React.useState(Array(5).fill(''));

    // Array of different placeholder numbers
    const placeholders = ['4', '6', '0', '8', '9'];

    const handlePress = () => {
        navigation.navigate('DrawerNavigator');
    };

    const handleOtpChange = (value, index) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
    };

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#02062C', '#40639B']} style={styles.gradient}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logoSize} source={images.finalLogo} />
                </View>

                <View style={styles.loginContainer}>
                    <GradientText text="Verify OTP" />
                    <View style={styles.hr}>
                        <View style={styles.coloredPart} />
                        <View style={styles.remainingPart} />
                    </View>
                    <Text style={styles.subTitle}>Enter the OTP received in your Email for verification</Text>

                    <View style={styles.otpView}>
                        {otp.map((value, index) => (
                            <TextInput
                                key={index}
                                style={styles.input}
                                onChangeText={(text) => handleOtpChange(text, index)}
                                placeholderTextColor={'#3b3a3a'}
                                value={value}
                                placeholder={placeholders[index]}  // Assigning the placeholder number
                                keyboardType="numeric"
                                maxLength={1}
                            />
                        ))}
                    </View>
                    <Text style={styles.timeText}>00:43 sec</Text>

                    <View style={styles.accountContainer}>
                        <Text style={styles.accountText}>Didn't Receive OTP? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                            <Text style={styles.signUpText}>Resend</Text>
                        </TouchableOpacity>
                    </View>

                    <LinearGradient colors={['#02062C', '#40639B']} style={styles.gradientButton}>
                        <TouchableOpacity style={styles.button} onPress={handlePress}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </LinearGradient>
        </View>
    );
};

const { width: viewportWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    gradient: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Platform.OS === 'ios' ? 20 : 60,
    },
    logoSize: {
        width: width * 0.40,  // Increased width
        height: height * 0.14, 
        resizeMode: 'contain',
        marginTop: Platform.OS === 'ios' ? 40 : 10,
    },
    loginContainer: {
        bottom: Platform.OS === 'ios' ? 10 : 70,
        backgroundColor: colors.white,
        position: 'relative',
        justifyContent: 'center',
        marginTop: Platform.OS === 'ios' ? 30 : 90,
        padding: 20,
        borderRadius: 32,
        width: '100%',
        paddingVertical: 40,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    hr: {
        position: 'relative',
        height: 2.5,
        width: '98%',
        flexDirection: 'row',
        marginLeft: 2,
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
    subTitle: {
        fontSize: 13,
        lineHeight: 15,
        fontWeight: '500',
        color: colors.grey,
        paddingVertical: 13,
        textAlign: 'auto',
    },
    otpView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    input: {
        width: viewportWidth * 0.14,
        height: 55,
        marginVertical: 10,
        backgroundColor: colors.lightGrey,
        textAlign: 'center',
        borderRadius: 30,
    },
    gradientButton: {
        borderRadius: 15,
        padding: 2,
        marginVertical: 20,
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
    timeText: {
        textAlign: 'center',
        paddingVertical: 28,
        color: '#979797',
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'Cairo-Regular'
    },
    accountContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 3,
    },
    accountText: {
        color: '#979797',
        fontWeight: '500',
        fontSize: 14,
        paddingVertical: 5
    },
    signUpText: {
        color: colors.primary1,
        fontWeight: '700',
        fontSize: 14,
        paddingVertical: 5
    },
});

export default Otp;
