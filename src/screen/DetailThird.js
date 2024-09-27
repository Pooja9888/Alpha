import { StyleSheet, Text, TouchableOpacity, View, FlatList, ImageBackground, ScrollView, Dimensions, Platform, Image } from 'react-native';
import React, { useState, useRef } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../const/colors';
import { Dropdown } from 'react-native-element-dropdown';
import images from '../const/images';
import { RFPercentage } from 'react-native-responsive-fontsize';

const { width, height } = Dimensions.get('window');

const DetailThird = ({ navigation }) => {
  const [value, setValue] = useState({});
  const [isFocus, setIsFocus] = useState({});
  const [dropdownPosition, setDropdownPosition] = useState({}); // To store dynamic dropdown position
  const inputRefs = useRef({});

  const dataOptions = {
    1: [
      { label: 'Never', value: '1' },
      { label: 'Rarely', value: '2' },
      { label: 'Occasionally', value: '3' },
      { label: 'FrequentlyAlways', value: '4' },
    ],
    2: [
      { label: 'Sedentary (little to no exercise)', value: '1' },
      { label: 'Lightly Active (light exercise or sports 1-3 days a week)', value: '2' },
      { label: 'Moderately Active (moderate exercise or sports 3-5 days a week)', value: '3' },
      { label: 'Very Active (hard exercise or sports 6-7 days a week)', value: '4' },
      { label: 'Extremely Active (very intense exercise or physical work daily)', value: '5' },
    ],
    3: [
      { label: 'Never', value: '1' },
      { label: 'Rarely', value: '2' },
      { label: 'Sometimes', value: '3' },
      { label: 'Often', value: '4' },
      { label: 'Always', value: '5' },
    ],
    4: [
      { label: 'Very Low', value: '1' },
      { label: 'Low', value: '2' },
      { label: 'Moderate', value: '3' },
      { label: 'High', value: '4' },
      { label: 'Very High', value: '5' },
    ],
    5: [
      { label: 'None', value: '1' },
      { label: '1-2 servings', value: '2' },
      { label: '3-4 servings', value: '3' },
      { label: '5-6 servings', value: '4' },
      { label: 'More than 6 servings', value: '5' },
    ],
    6: [
      { label: 'Never', value: '1' },
      { label: 'Rarely', value: '2' },
      { label: 'Sometimes', value: '3' },
      { label: 'Often', value: '4' },
      { label: 'Always', value: '5' },
    ],
    7: [
      { label: 'No', value: '1' },
      { label: 'Yes, controlled with medication', value: '2' },
      { label: 'Yes, but not controlled with medication', value: '3' },
      { label: 'Yes, diagnosed but not currently being treated', value: '4' },
      { label: 'Unsure', value: '5' },
    ],
    8: [
      { label: 'Never', value: '1' },
      { label: 'Rarely', value: '2' },
      { label: 'Occasionally', value: '3' },
      { label: 'Regularly', value: '4' },
      { label: 'Frequently', value: '5' },
    ],
    9: [
      { label: 'No', value: '1' },
      { label: 'Yes, one condition', value: '2' },
      { label: 'Yes, two conditions', value: '3' },
      { label: 'Yes, three or more conditions', value: '4' },
      { label: 'Unsure', value: '5' },
    ],
    10: [
      { label: 'No', value: '1' },
      { label: 'Yes, for health reasons (e.g., low-carb, low-fat)', value: '2' },
      { label: 'Yes, for allergies (e.g., gluten-free, dairy-free)', value: '3' },
      { label: 'Yes, for weight management', value: '4' },
    ],
  };

  const questions = [
    {
      id: '1',
      question: 'How often do you experience symptoms such as fatigue, headaches, or digestive issues?',
    },
    {
      id: '2',
      question: 'How would you describe your typical level of physical activity?',
    },
    {
      id: '3',
      question: 'How often do you consume foods high in sugar or unhealthy fats?',
    },
    {
      id: '4',
      question: 'How would you rate your overall stress level in the past month?',
    },
    {
      id: '5',
      question: 'How many servings of fruits and vegetables do you eat daily?',
    },
    {
      id: '6',
      question: 'How often do you get at least 7-8 hours of sleep per night?',
    },
    {
      id: '7',
      question: 'Do you have a history of high blood pressure or hypertension?',
    },
    {
      id: '8',
      question: 'How frequently do you engage in preventive health check-ups or screenings?',
    },
    {
      id: '9',
      question: 'Do you have a family history of chronic diseases such as heart disease, diabetes, or cancer?',
    },
    {
      id: '10',
      question: 'Do you follow a specific dietary plan or have any dietary restrictions?',
    },
  ];

  const handleDropdownLayout = (id, event) => {
    const { y, height: dropdownHeight } = event.nativeEvent.layout;
    const screenHeight = height;

    const spaceBelow = screenHeight - y - dropdownHeight; // Available space below
    const spaceAbove = y; // Available space above
    const dropdownItemHeight = 200; // Approximate dropdown height

    // If more space is above, show dropdown above
    if (spaceBelow < dropdownItemHeight && spaceAbove > dropdownItemHeight) {
      setDropdownPosition((prev) => ({ ...prev, [id]: 'above' }));
    } else {
      setDropdownPosition((prev) => ({ ...prev, [id]: 'below' }));
    }
  };

  const renderQuestion = ({ item }) => (
    <View style={styles.friendItem}>
      <Text style={styles.nameText}>{item.question}</Text>
      <Dropdown
        style={[
          styles.dropdown,
          // dropdownPosition[item.id] === 'above' && { top: -200 }, // Adjust based on screen space
          isFocus[item.id] && { borderColor: 'blue' },
        ]}
        dropdownStyle={styles.dropdownListStyle} 
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={dataOptions[item.id] || []}
        // maxHeight={Platform.OS === 'ios' ? 310 : 300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus[item.id] ? 'Select' : '...'}
        value={value[item.id]}
        search
        searchPlaceholder="Search..."
        onFocus={() => setIsFocus({ ...isFocus, [item.id]: true })}
        onBlur={() => setIsFocus({ ...isFocus, [item.id]: false })}
        onChange={(selectedItem) => {
          setValue({ ...value, [item.id]: selectedItem.value });
          setIsFocus({ ...isFocus, [item.id]: false });
        }}
        renderRightIcon={() => (
          <Image
            style={styles.downArrow}
            source={images.downArrow}
            resizeMode="contain"
          />
        )}
        onLayout={(event) => handleDropdownLayout(item.id, event)}
        ref={(ref) => (inputRefs.current[item.id] = ref)}
        minHeight={300}
        maxHeight={300}
        
      />
    </View>
  );

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <ImageBackground
          source={images.backgroundImage}
          style={styles.imageBackground}
          resizeMode="cover"
        >
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Fill the Below Details</Text>
            <View style={styles.hr}>
              <View style={styles.coloredPart} />
            </View>
            <View style={styles.listBox}>
              <FlatList
                data={questions}
                renderItem={renderQuestion}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.flatListContent}
              />
            </View>
            <View style={styles.buttonContainer}>
  <LinearGradient colors={['#02062C', '#40639B']} style={styles.gradientButton}>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Profile')}
    >
      <Text style={styles.buttonText}>Next</Text>
    </TouchableOpacity>
  </LinearGradient>
</View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  loginContainer: {
    backgroundColor: colors.white,
    padding: Platform.OS === 'ios' ? height * 0.03 : height * 0.015,
    borderRadius: 32,
    width: '92%',
    left: width * 0.04,
    marginTop: height * 0.1, // Top margin based on screen height
    marginBottom: height * 0.1, // Add space for the bottom as well
  },
  
  loginText: {
    color: colors.primary1,
    fontSize: RFPercentage(3.5), // Responsive font size
    fontWeight: '700',
    marginBottom: 10,
    fontFamily: 'Roboto',
  },
  hr: {
    position: 'relative',
    height: 5,
    width: '95%',
    flexDirection: 'row',
    marginLeft: 2,
  },
  coloredPart: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '95%',
    backgroundColor: colors.primary1,
    borderRadius: 50
  },
  listBox: {
    marginTop: 20,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  friendItem: {
    marginBottom: 10,
    padding: width * 0.03, // Adjust padding based on screen width
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 0.6,
    borderColor: colors.primary,
  },
  nameText: {
    fontSize: RFPercentage(2), // Responsive font size
    fontWeight: '600',
    color: colors.black,
    left: 5,
  },
  buttonContainer: {
    alignItems: 'center',
    width: '92%',
    left: Platform.OS === 'ios' ? 12 : 12,
  },
  gradientButton: {
    borderRadius: 15,
    width: '98%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: height * 0.015,
  },
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: width * 0.045,
    fontWeight: '500',
  },
  
  dropdown: {
    height: height * 0.05, // Adjust height based on screen height
    // marginVertical: 10,
    backgroundColor: '#EFEFEF',
    borderRadius: 40,
    paddingHorizontal: width * 0.05, // Adjust padding based on screen width
    position: 'relative',
  },
  dropdownListStyle: {
    // paddingVertical: Platform.OS === 'ios' ? 20 : 20, // Add padding inside the dropdown list to space out items
    // paddingHorizontal: Platform.OS === 'ios' ? 10 : 10,  // Padding for horizontal spacing
    // marginVertical: 5, // Add vertical margin between list items to prevent overlap
    backgroundColor: 'red', // Background color for the dropdown list
    borderRadius: 10, // Border radius for the dropdown list
 
  },
  dropdownItemStyle: {
      // padding: 10, // Add padding to individual dropdown items
      marginVertical: 0, // Space between dropdown items
      
  },
  placeholderStyle: {
    fontSize: RFPercentage(1.8), // Responsive font size
    fontWeight: '500',
    color: '#4F5663',
    left: 8,
  },
  selectedTextStyle: {
    fontWeight: '500',
    color: '#4F5663',
    fontSize: RFPercentage(1.7), // Responsive font size
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: height * 0.05, // Adjust height based on screen height
    fontSize: RFPercentage(2), // Responsive font size
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  downArrow: {
    width: 20,
    height: 20
  }
});

export default DetailThird;
