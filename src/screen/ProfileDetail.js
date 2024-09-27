import { StyleSheet, Text, View, ScrollView, Image, Dimensions, ImageBackground } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../const/colors';
import images from '../const/images';
import { BarChart, PieChart } from "react-native-gifted-charts";
import Svg, { Circle } from 'react-native-svg';

const screenWidth = Dimensions.get('window').width; // Get screen width

const ProfileDetail = ({ navigation }) => {
    const progressPercentage = 50; // For demonstration purposes, you can dynamically set this value
    const data = [
        { value: 21, frontColor: '#FFFFFF', },
        { value: 10, frontColor: '#FFFFFF80', },
        { value: 28, frontColor: '#FFFFFF', },
        { value: 15, frontColor: '#FFFFFF80', },
        { value: 20, frontColor: '#FFFFFF', },
        { value: 6, frontColor: '#FFFFFF80', },
        { value: 9, frontColor: '#FFFFFF80', },
        { value: 4, frontColor: '#FFFFFF80', },
        { value: 16, frontColor: '#FFFFFF', },
        { value: 10, frontColor: '#FFFFFF', },
        { value: 12, frontColor: '#FFFFFF80', },
        { value: 20, frontColor: '#FFFFFF', },
        { value: 6, frontColor: '#FFFFFF80', },
        { value: 24, frontColor: '#FFFFFF80', },
        { value: 16, frontColor: '#FFFFFF80', },
        { value: 18, frontColor: '#FFFFFF', },
        { value: 25, frontColor: '#FFFFFF', },
        { value: 6, frontColor: '#FFFFFF80', },
        { value: 22, frontColor: '#FFFFFF80', },
        { value: 34, frontColor: '#FFFFFF80', },
        { value: 10, frontColor: '#FFFFFF', },
        { value: 14, frontColor: '#FFFFFF', },
    ];

    const xLabels = [
        '1', '', '', '', '', '6', '', '', '', '', '', '12', '', '', '', '', '', '18', '', '', '', ''
    ];
    const pieData = [{ value: 50, color: '#A7A5C2E5' }];

    return (
        <ScrollView style={styles.container}>
            <ImageBackground
                source={images.backgroundImage}
                style={styles.imageBackground}
                resizeMode="cover"
            >
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.header}>
                        <Image
                            style={styles.icon}
                            source={images.menu}
                            resizeMode="contain"
                        />
                        <Image
                            style={styles.icon}
                            source={images.notification}
                            resizeMode="contain"
                        />
                    </View>

                    <View style={styles.profileContainer}>
                        <Text style={styles.nameText}>Wade Menpes-Smith</Text>
                        <Text style={styles.numText}>ID: #7B9K1LQX</Text>
                        <View style={styles.hr} />
                        <Image
                            style={styles.profileImage}
                            source={images.profileImage1}
                            resizeMode="contain"
                        />
                    </View>

                    <View style={styles.progressContainer}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                            <Text style={styles.bioText}>Biological Age:</Text>
                            <Text style={styles.num}>45</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                            <Text style={styles.bioText}>Real Age:</Text>
                            <Text style={styles.num}>55</Text>
                        </View>

                        {/* Progress Bar */}
                        <View style={styles.progressBarWrapper}>
                            <LinearGradient
                                colors={['#FF6417', 'rgba(112, 0, 255, 0.94)']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={[styles.progressBarFill, { width: `${progressPercentage}%` }]}
                            />
                        </View>
                    </View>

                    <View style={styles.progressContainer}>
                        <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center' }}>
                            <Image
                                source={images.run}
                                resizeMode="contain"
                            />
                            <Text style={styles.cardioText}>Cardiovascular</Text>
                        </View>
                        <ScrollView horizontal={true} style={styles.horizontalScroll}>
                            <View style={styles.chartContainer}>
                                <BarChart
                                    data={data}
                                    width={data.length * 30} // Dynamically calculate chart width based on data
                                    height={150}
                                    barWidth={4}
                                    barSpacing={4}
                                    xAxisThickness={1}
                                    hideYAxisText={true}
                                    xAxisLabelTexts={xLabels}
                                    showVerticalLines={false}
                                    initialSpacing={0}
                                    hideRules={true}
                                    yAxisColor="transparent"
                                    xAxisColor="transparent"
                                    xAxisLabelTextStyle={{ color: '#fff' }}
                                    barBorderColor="red"
                                    spacing={12}
                                />
                            </View>
                        </ScrollView>
                    </View>

                    <View style={styles.levelContainer}>
                        <View style={styles.levelContent}>
                            <Text style={styles.cardioText}>Diabetes Risk {"\n"}Levels</Text>
                            <View style={styles.levelRightContainer}>
                                <View style={styles.pieChartWrapper}>
                                    <PieChart data={pieData} donut
                                        width={60}
                                        height={60}
                                        radius={60}
                                    />
                                    <Svg height="100" width="100" style={styles.svgCircle}>
                                        <Circle cx="50" cy="50" r="30" fill="#02062C" />
                                        <Image
                                            style={styles.arrow}
                                            source={images.arrow}
                                            resizeMode="contain"
                                        />
                                    </Svg>
                                </View>
                            </View>
                        </View>
                        <Text style={styles.divText}>24/300</Text>
                    </View>
                </ScrollView>
            </ImageBackground>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradient: {
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
        padding: 16,
    },
    profileContainer: {
        borderWidth: 1,
        borderColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 15,
        marginVertical: 10,
    },
    nameText: {
        fontSize: 32,
        color: colors.white,
        marginBottom: 10,
        fontWeight: 'bold',
        fontFamily: 'Sora',
    },
    numText: {
        fontSize: 14,
        color: colors.lightGrey,
        fontWeight: '400',
    },
    
    iconMenu: {
        padding: 10,
    },
    progressContainer: {
        borderWidth: 1,
        borderColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        borderRadius: 15,
        marginVertical: 10,
    },
    bioText: {
        fontSize: 18,
        color: colors.white,
        fontFamily: 'Heebo'
    },
    ageText: {
        textAlign: 'left',
        fontSize: 18,
        color: colors.white,
        fontFamily: 'Heebo'
    },
    num: {
        fontSize: 22,
        color: colors.white,
        fontWeight: '700',
    },
    hr: {
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        width: '95%',
        marginVertical: 15,
    },
    cardioText: {
        fontSize: 20,
        color: '#7F7F7F',
        left: 10,
        lineHeight: 26,
        padding: 8,
    },
    levelContainer: {
        borderWidth: 1,
        borderColor: colors.white,
        paddingVertical: 20,
        borderRadius: 15,
        marginVertical: 10,
    },
    divText: {
        fontSize: 24,
        color: colors.white,
        fontWeight: '500',
        paddingLeft: 18
    },
    progressBarWrapper: {
        width: '92%',
        height: 24,
        backgroundColor: '#292929',
        borderRadius: 12,
        overflow: 'hidden',
        marginTop: 10,
    },
    progressBarFill: {
        height: '100%',
        borderRadius: 12,
    },
    chartContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    horizontalScroll: {
        width: '100%',
    },
    levelContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
    },
    levelRightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        top: 16,
    },
    pieChartWrapper: {
        position: 'relative',
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    svgCircle: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    circleIcon: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -19 }, { translateY: -12 }],
        color: colors.primary,
        marginTop: 3,
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    arrow: {
        width: 25,
        height: 25,
        left: 36,
        bottom: 7
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: 15,
        marginHorizontal: 5,
        marginVertical: 28
    },
    profileImage: {
        borderRadius: 8
    }
});

export default ProfileDetail;
