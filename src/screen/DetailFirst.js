import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SectionList, Dimensions, ScrollView, ImageBackground, Platform, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Progress from 'react-native-progress';
import colors from '../const/colors';
import images from '../const/images';
// import DrawerNavigator from '../drawer/DrawerNavigator';

const { width, height } = Dimensions.get('window');

const sections = [
  {
    data: [
      { id: '1', name: 'How many meals and snacks do you eat per day?', options: ['1: 1-2', '2: 3', '3: 4', '4: 5', '5: More than 5'] },
      { id: '2', name: 'When is your first meal of the day?', options: ['1: Before 7 AM', '2: Between 7-10 AM', '3: After 10 AM'] },
    ]
  },
  {
    data: [
      { id: '3', name: 'When is your last meal of the day?', options: ['1: 12 noon - 5pm', '2: 5-8 PM', '3: After 8 PM'] },
      { id: '4', name: 'How often do you smoke?', options: ['1: Excellent', '2: Good', '3: Fair', '4: Poor'] },
    ]
  },
  {
    data: [
      { id: '5', name: 'How often do you consume soda or juice?', options: ['1: Never', '2: Rarely', '3: Occasionally', '4: Frequently', '5: Daily'] },
      { id: '6', name: 'How stressed do you feel on a scale of 1 to 5?', options: ['1: Never', '2: Rarely', '3: Occasionally', '4: Frequently', '5: Daily'] },
    ]
  },
  {
    data: [
      { id: '7', name: 'How active are you on average, and how many steps do you take per day?', options: ['1: Not Stressed', '2: Slightly Stressed', '3: Moderately Stressed', '4: Very Stressed', '5: Extremely Stressed'] },
      { id: '8', name: 'Are you insulin resistant, diabetic, or pre-diabetic?', options: ['1: Sedentary \n(0-5,000 steps)', '2: Lightly Active \n(5,000-10,000 steps)', '3: Moderately Active \n(10,000-15,000 steps)', '4; Very Active \n(15,000-20,000 steps)', '5: Extremely Active \n(20,000+ steps)'] },
    ]
  },
  {
    data: [
      { id: '9', name: 'How would you rate your mental health on a scale of 1 to 10?', options: ['1: Not Stressed', '2: Slightly Stressed', '3: Moderately Stressed', '4: Very Stressed', '5: Extremely Stressed'] },
      { id: '10', name: 'How many existing medical conditions do you have?', options: ['1: No', '2: Pre-diabetic', '3: Diabetic', '4: Insulin Resistant', '5: Both Diabetic and Insulin Resistant'] },
    ]
  },
  {
    data: [
      { id: '11', name: 'How would you describe your family history of disease?', options: ['1: Very Poor', '2: Poor', '3: Fair', '4: Good', '5: Excellent'] },
      { id: '12', name: 'How frequently do you take medications?', options: ['1: None', '2: 1-2', '3: 3-4', '4: 5-6', '5: More than 6'] },
    ]
  },
];


const DetailFirst = ({ navigation }) => {
  const [selectedOptions, setSelectedOptions] = useState({}); 
    const [isPressed, setIsPressed] = useState(false);

  const handleOptionSelect = (id, option) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [id]: option,
    }));
  };

  const handleDrawer = () => {
    navigation.navigate('DrawerNavigator');
};

  // Function to calculate percentage progress based on the selected option
  const getProgressPercentage = (id, options) => {
    const selectedOption = selectedOptions[id];
    if (!selectedOption) {
      return 20; // Default percentage when no option is selected
    }
    // const selectedValue = parseInt(selectedOption); // Assuming options are numbers or prefixed with a number
    // const percentage = (selectedValue / 5) * 100;
    // return percentage;
    const selectedIndex = options.findIndex(option => option === selectedOption) + 1; // Find the index of the selected option
    const totalOptions = options.length; // Get the total number of options

    const percentage = (selectedIndex / totalOptions) * 100;
    return percentage;
  };

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
    // Add your upload logic here if necessary
  };

  const renderItem = ({ item }) => {
    // const progressPercentage = getProgressPercentage(item.id); // Get percentage for each item
    const progressPercentage = getProgressPercentage(item.id, item.options);
    return (
      <View style={styles.friendItem}>
        <Text style={styles.nameText}>{item.name}</Text>
        <View style={styles.progressContainer}>
          <LinearGradient
            colors={['#5888C3', '#192853']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[styles.gradientBackground, { width: `${progressPercentage}%` }]}
          >
            <Progress.Bar
              progress={1}
              width={null}
              color="transparent"
              unfilledColor="transparent"
              height={13}
              borderRadius={10}
              borderWidth={0}
              style={styles.progressBar}
            />
          </LinearGradient>
          <View style={[styles.circleContainer, { left: `${progressPercentage}%` }]}>
            <View style={[styles.circle]} />
          </View>
        </View>
        <View style={styles.optionsContainer}>
          {item.options.map((option) => (
            <TouchableOpacity
              key={option}
              style={styles.optionButton}
              onPress={() => handleOptionSelect(item.id, option)} // Update the specific box's percentage
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <ImageBackground
          source={images.backgroundImage}
          style={styles.imageBackground}
          resizeMode="cover"
        >
          <TouchableOpacity style={styles.header} onPress={handleDrawer}>
            <Image
              style={styles.headerIcon}
              source={images.menu}
              resizeMode="contain"
            />

          </TouchableOpacity>

          <View style={styles.loginContainer}>
            <Text style={styles.headingText}>Fill the Below Details</Text>
            <View style={styles.hr}>
              <View style={styles.coloredPart} />
              <View style={styles.remainingPart} />
            </View>

            <View style={styles.uploadButtonContainer}>
              <Text style={ styles.uploadButtonText}>Upload Your File If any</Text>
              <LinearGradient
                colors={['#5888C3', '#192853']} // Your gradient colors
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.uploadButtonGradient}
              >
                <TouchableOpacity style={styles.uploadButtonInner}>
                  <Text style={ [styles.uploadButtonText, {color: colors.primary1}]}>Upload</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
            <View style={styles.listBox}>
              <SectionList
                sections={sections}
                renderItem={renderItem}
                // renderSectionHeader={renderSectionHeader}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.flatListContent}
              />
            </View>
            <LinearGradient colors={['#02062C', '#40639B']} style={styles.gradientButton}>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DetailSecond')}>
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    backgroundColor: colors.white,
    padding: width * 0.05,
    borderRadius: 32,
    width: '92%',
    marginTop: Platform.OS === 'ios' ? height * 0.12 : height * 0.1, // Increase the top margin
    marginBottom: Platform.OS === 'ios' ? height * 0.05 : height * 0.06, // Add bottom margin for spacing
    ...Platform.select({
      android: {
        left: 15,
      },
      ios: {
        left: 15,
      },
    }),
  },

  headingText: {
    color: colors.primary1,
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 10,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
  },
  hr: {
    position: 'relative',
    height: 5,
    width: '98%',
    flexDirection: 'row',
    marginLeft: 2,
    marginVertical: 10,
  },
  coloredPart: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '35%',
    backgroundColor: colors.primary1,
    borderRadius: 50,
  },
  remainingPart: {
    position: 'absolute',
    left: '34%',
    top: 0,
    height: '100%',
    width: '65%',
    backgroundColor: 'gray',
    borderRadius: 50,
  },
  listBox: {
    marginTop: height * 0.02,
    width: '100%',
  },
  flatListContent: {
    paddingBottom: height * 0.02,
  },
  friendItem: {
    marginBottom: height * 0.01,
    padding: width * 0.05,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: colors.primary,
    borderWidth: 0.7,
  },
  nameText: {
    fontSize: width * 0.04,
    fontWeight: '600',
    color: colors.black,
    bottom: 8,
  },
  progressContainer: {
    marginTop: height * 0.01,
    borderRadius: 8,
    position: 'relative',
    width: '100%',
    backgroundColor: '#c8c8c8',
    marginVertical: 8
  },
  gradientBackground: {
    width: '100%',
    borderRadius: 10,
    height: 13,
    overflow: 'hidden',
  },
  progressBar: {
    position: 'absolute',
    width: '100%',
    height: 13,
    borderRadius: 10,
  },
  circleContainer: {
    position: 'absolute',
    top: -8,
    height: width * 0.08,
    width: width * 0.08,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 0.04,
    overflow: 'hidden',
    marginLeft: -22,
  },
  circle: {
    width: width * 0.07,
    height: width * 0.07,
    borderRadius: width * 0.04,
    backgroundColor: colors.primary1,
    borderWidth: 1,
    borderColor: colors.white,
  },
  stepsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height * 0.015,
    width: '100%',
  },
  stepContainer: {
    alignItems: 'center',
  },
  stepText: {
    fontSize: width * 0.03,
    color: '#868585',
    fontFamily: 'Heebo-SemiBold',
    marginTop: 3,
    textAlign: 'center',
  },
  sectionHeader: {
    padding: width * 0.03,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginBottom: height * 0.01,
  },
  headerText: {
    fontSize: width * 0.05,
    color: colors.primary1,
    fontWeight: '700',
  },
  gradientButton: {
    borderRadius: 15,
    padding: 2,
    width: '94%',
    alignItems: 'center',
    justifyContent: 'center',
    left: Platform.OS === 'ios' ? 8 : 8,
  },
  button: {
    width: '95%',
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.1,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: width * 0.045,
    fontWeight: '500',
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  optionsContainer: {
    marginTop: height * 0.01,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  optionButton: {
    padding: 8,
    backgroundColor: '#ddd',
    borderRadius: 5,
    margin: 3,
  },
  optionText: {
    fontSize: width * 0.03,
    color: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Ensure icons are vertically aligned
    paddingHorizontal: 20, // Add padding for horizontal spacing
    top: Platform.OS === 'ios' ? 50 : 50, // Correct capitalization of 'top'
  },
  headerIcon: {
    width: 25,
    height: 25,
  },
  uploadButton: {
    width: '40%',
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
    padding: 10,
    alignItems: 'center'
  },
  uploadButtonContainer: {
    width: '100%',
    borderRadius: 8,
    // backgroundColor: 'plum',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  uploadButtonGradient: {
    width: '35%',
    padding: 2, // This will be the thickness of the gradient border
    borderRadius: 8, // Ensure this matches the border radius of the button
  },
  uploadButtonInner: {
    padding: 8,
    backgroundColor: '#fff', // Button background color
    borderRadius: 8, // Match border radius again
    alignItems: 'center',
  },
  uploadButtonText: {
    color: colors.primary,
    fontWeight: '500',
    fontSize: 14
  }
});

export default DetailFirst;
