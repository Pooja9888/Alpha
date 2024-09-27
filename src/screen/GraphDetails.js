import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { LineChart } from 'react-native-gifted-charts';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import colors from '../const/colors';
import images from '../const/images';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width: screenWidth } = Dimensions.get('window');


const GraphDetails = ({ navigation }) => {

    const lineData = [{ value: 20 }, { value: 170 }, { value: 100 }, { value: 504 }, { value: 280 }, { value: 480 }];
    const lineData2 = [{ value: 70 }, { value: 65 }, { value: 400 }, { value: 280 }, { value: 500 }, { value: 350 }];
    const labels = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

    const numberOfDataPoints = lineData.length; // Assuming both lineData and lineData2 have the same length
    const dynamicSpacing = screenWidth / numberOfDataPoints;
    const formatYLabel = (label) => `₹${label}`;

    const [selectedOption, setSelectedOption] = useState('Daily');

    const options = ['Daily', 'Monthly', 'Yearly'];

    return (
        <ScrollView style={styles.container}>
            <LinearGradient colors={['#02062C', '#40639B']} style={styles.gradient}>
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
                <View style={styles.balanceBox}>
                    <Text style={{ color: colors.purple, textAlign: 'center', padding: 5, fontSize: 13 }}>Main balance</Text>
                    <Text style={styles.numText}>14,235<Text style={{ fontSize: 18, fontWeight: '400' }}>.34tk</Text></Text>

                    <View style={styles.iconBox}>
                        <Image
                            style={styles.downIcon}
                            source={images.up}
                            resizeMode="contain"
                        />
                        <Image
                            style={styles.downIcon}
                            source={images.down}
                            resizeMode="contain"
                        />
                        <Image
                            style={styles.downIcon}
                            source={images.exchange}
                            resizeMode="contain"
                        />
                    </View>

                    <View style={styles.balBox}>
                        <Text style={{ color: colors.white }}>Top up</Text>
                        <Text style={{ color: colors.purple, fontSize: 20 }}>|</Text>
                        <Text style={{ color: colors.white }}>Withdraw</Text>
                        <Text style={{ color: colors.purple, fontSize: 20 }}>|</Text>
                        <Text style={{ color: colors.white }}>Transfer</Text>
                    </View>
                </View>

                <View style={styles.chartBox}>
                    <LinearGradient colors={['#40639B', '#02062C']} style={styles.gradientContainer}>
                        <View style={styles.toggleContainer}>
                            {options.map((option) => (
                                <TouchableOpacity
                                    key={option}
                                    onPress={() => setSelectedOption(option)}
                                    style={[
                                        styles.option,
                                        selectedOption === option && styles.selectedOption,
                                    ]}
                                >
                                    {selectedOption === option ? (
                                        <LinearGradient
                                            colors={['#fff', '#fff']}
                                            backgroundColor={[]}
                                            style={styles.gradientBox}
                                        >
                                            <Text style={styles.selectedText}>{option}</Text>
                                        </LinearGradient>
                                    ) : (
                                        <Text style={styles.optionText}>{option}</Text>
                                    )}
                                </TouchableOpacity>
                            ))}
                        </View>
                    </LinearGradient>
                    <LineChart
                        areaChart
                        curved
                        data={lineData}
                        data2={lineData2}
                        height={210} // Increased height for better visibility
                        width={screenWidth - 40} // Adjust width according to screen size
                        showVerticalLines
                        // spacing={50}
                        spacing={dynamicSpacing - 15}
                        initialSpacing={15}
                        color1="#02e821"
                        color2="#f80606"
                        hideDataPoints={true} // Show data points
                        dataPointsColor1="blue"
                        dataPointsColor2="red"
                        startFillColor1="rgba(1, 232, 33, 0.3)" // Start with slight opacity for the first line
                        startFillColor2="rgba(248, 6, 6, 0.3)"  // Start with slight opacity for the second line
                        endFillColor1="rgba(1, 232, 33, 0)" // End with full transparency
                        endFillColor2="rgba(248, 6, 6, 0)" // End with full transparency
                        startOpacity={0.3} // Control the opacity of the gradient start
                        endOpacity={0.0}   // Set to 0 for fully transparent at the end
                        maxValue={700}
                        stepValue={100}
                        xAxisLabelTexts={labels}
                        xAxisLabelTextStyle={{ color: colors.black, fontSize: 12 }} // Adjust font size for readability
                        yAxisLabelWidth={35}
                        yAxisColor={'#FFFFFF'}
                        xAxisColor={'#FFFFFF'}
                        formatYLabel={formatYLabel}
                        rulesLength={0}
                        yAxisLabelTextStyle={{ color: colors.white }}
                    />
                </View>

                {/* Card below the graph */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.histText}>History</Text>
                    <Text style={[styles.histText, { fontWeight: '400', fontSize: 18 }]}>Show More</Text>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Image
                            style={styles.logoIcon}
                            source={images.logo1}
                            resizeMode="contain"
                        />
                        <Text style={styles.cardTitle}>
                            A Multi-center, Longitudinal, Observational Study{' '}
                            <Text style={styles.byText}>By: Pfizer Pharmaceuticals</Text>
                        </Text>
                    </View>
                    <Text style={styles.cardContent}>
                        <Text style={styles.label}>Eligibility :</Text> 18+ years and up, Type 2 Diabetes
                    </Text>
                    <Text style={styles.cardContent1}>
                        <Text style={styles.label}>Location :</Text> Multiple centers
                    </Text>
                    <Text style={styles.cardContent2}>
                        <Text style={styles.label}>Dates :</Text> 2024-2026
                    </Text>
                    <Text style={styles.cardContentText}>Principal Investigator: Edward C Chao, DO</Text>
                    <LinearGradient
                        colors={['#40639B', '#02062C']}
                        start={{ x: 0.2, y: 0.2 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.priceContainer}
                    >
                        <Text style={styles.priceText}>1500tk</Text>
                    </LinearGradient>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Image
                            style={styles.logoIcon}
                            source={images.logo2}
                            resizeMode="contain"
                        />
                        <Text style={styles.cardTitle}>
                            A Multi-center, Longitudinal, Observational Study{' '}
                            <Text style={styles.byText}>By: Pfizer Pharmaceuticals</Text>
                        </Text>
                    </View>
                    <View style={{ bottom: 2 }}>
                        <Text style={styles.cardContent}>
                            <Text style={styles.label}>Eligibility :</Text> 18+ years and up, Type 2 Diabetes
                        </Text>
                        <Text style={styles.cardContent1}>
                            <Text style={styles.label}>Location :</Text> Multiple centers
                        </Text>
                        <Text style={styles.cardContent2}>
                            <Text style={styles.label}>Dates :</Text> 2024-2026
                        </Text>
                        <Text style={styles.cardContentText}>Principal Investigator: Edward C Chao, DO</Text>

                    </View>
                    <LinearGradient
                        colors={['#40639B', '#02062C']}
                        start={{ x: 0.2, y: 0.2 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.priceContainer}
                    >
                        <Text style={styles.priceText}>2000tk</Text>
                    </LinearGradient>
                </View>
                <Text style={styles.histText}>How To Earn More Tokens?</Text>
                <View style={styles.card}>
                    <Text style={styles.tokenCardContent}>Take a home IR test - 500 Tokens{"\n"}
                        Take Latest Health Risk Assessment - 500 Tokens
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('ProfileDetail')}>
                        <MaskedView maskElement={<Text style={styles.getText}>Get Started</Text>}>
                            <LinearGradient
                                colors={['#40639B', '#02062C']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                            >
                                <Text style={[styles.getText, { opacity: 0 }]}>Get Started</Text>
                            </LinearGradient>
                        </MaskedView>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradient: {
        flex: 1,
        padding: 15,
    },
    balanceBox: {
        borderColor: colors.white,
        borderWidth: 1,
        borderRadius: 20,
        padding: 15,
        justifyContent: 'center',
    },
    balBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 6,
        marginHorizontal: 12,
        width: '92%'
    },
    downIcon: {
        width: 16,
        height: 16,
        bottom: Platform.OS === 'ios' ? 0 : 0,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: 15,
        marginHorizontal: 5,
        marginVertical: 28
    },
    chartBox: {
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 20,
        marginVertical: 18,
        overflow: 'hidden',
    },
    histText: {
        fontSize: 20,
        color: colors.white,
        fontWeight: '700'
    },
    card: {
        backgroundColor: colors.white,
        padding: 4,
        borderRadius: 10,
        marginVertical: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        justifyContent: 'space-between',
        position: 'relative',
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: '700',
        color: colors.black,
        flex: 1,
        marginLeft: 10,
        lineHeight: 20
    },
    byText: {
        fontSize: 14,
        fontWeight: '700',
        color: colors.grey,
    },
    cardContent: {
        fontSize: 13,
        color: colors.grey,
        fontWeight: 'normal',
        marginTop: 10,
        left: 10,
        bottom: 10
    },
    cardContent1: {
        fontSize: 13,
        color: colors.grey,
        fontWeight: 'normal',
        marginTop: 10,
        left: 10,
        bottom: 18
    },
    cardContent2: {
        fontSize: 13,
        color: colors.grey,
        fontWeight: 'normal',
        marginTop: 10,
        left: 10,
        bottom: 25
    },
    cardContentText: {
        fontSize: 13,
        color: colors.black,
        fontWeight: '700',
        marginTop: 10,
        left: 10,
        bottom: Platform.OS === 'ios' ? 32 : 33
    },
    tokenCardContent: {
        fontSize: 16,
        fontWeight: '500',
        color: colors.grey,
        lineHeight: 26,
        padding: 10
    },
    label: {
        color: colors.black,
        fontSize: 13,
        fontWeight: '700',
    },
    logoIcon: {
        width: 50,
        height: 50,
    },
    priceContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        padding: 8,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    priceText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white,
    },
    getText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white,
        padding: 10
    },
    gradientContainer: {
        borderRadius: 50,
        overflow: 'hidden',
        width: '88%',
        alignSelf: 'center',
        bottom: 4
    },
    toggleContainer: {
        flexDirection: 'row',
        borderRadius: 70,
        overflow: 'hidden',
        alignSelf: 'center',
    },
    option: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    optionText: {
        fontSize: 12,
        color: '#fff',
        fontWeight: '700',
    },
    selectedOption: {
        borderRadius: 60,
    },
    gradientBox: {
        backgroundColor: 'red',
        width: Platform.OS === 'ios' ? 88 : 88,
        borderRadius: 25,
        paddingHorizontal: Platform.OS === 'ios' ? 18 : 20,
        paddingVertical: Platform.OS === 'ios' ? 14 : 12,
    },
    selectedText: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '700',
        color: colors.primary,
    },
    headerIcon: {
        width: 25,
        height: 25,
        bottom: Platform.OS === 'ios' ? 0 : 0,
    },
    numText: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 36,
        fontWeight: '700',
        padding: 5
    }
});

export default GraphDetails;
