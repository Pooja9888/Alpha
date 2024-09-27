import { StyleSheet, Text, TouchableOpacity, View, FlatList, SectionList, ImageBackground, Dimensions, Platform, ScrollView } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Toggle from "react-native-toggle-element";
import colors from '../const/colors';
import images from '../const/images';

const { width, height } = Dimensions.get('window');

const DetailSecond = ({ navigation }) => {
  const sections = [
    {
      title: 'Medical History:',
      data: [
        { id: '1', name: 'Do you have any chronic or serious medical conditions (e.g., diabetes, heart disease, cancer)? ' },
        { id: '2', name: 'Have you had any recent surgeries or hospitalizations?' },
      ],
    },
    {
      title: 'Current Health Status:',
      data: [
        { id: '3', name: 'Are you currently taking any medications or supplements?' },
        { id: '4', name: 'Do you have any allergies or adverse reactions to medications?' },
      ],
    },
    {
      title: 'Lifestyle and Behavior:',
      data: [
        { id: '5', name: 'Do you smoke or use tobacco products?' },
        { id: '6', name: 'Do you consume alcohol or recreational drugs?' },
      ],
    },
    {
      title: 'Health Metrics:',
      data: [
        { id: '7', name: 'Have you had recent blood tests or other diagnostic tests?' },
        { id: '8', name: 'Are you aware of your current weight, height, and BMI?' },
      ],
    },
    {
      title: 'Family Medical History:',
      data: [
        { id: '9', name: 'Is there a family history of any hereditary diseases or conditions? ' },
      ],
    },
    {
      title: 'Participation in Other Studies:',
      data: [
        { id: '10', name: 'Are you currently participating in, or have you recently participated in, any other clinical trials or research studies? ' },
      ],
    },
    {
      title: 'Pregnancy and Reproductive Health:',
      data: [
        { id: '11', name: 'Are you currently pregnant or breastfeeding?' },
        { id: '12', name: 'Are you planning to become pregnant during the study? ' },
      ],
    },
    {
      title: 'Informed Consent:',
      data: [
        { id: '13', name: 'Do you understand the purpose of the study and the potential risks and benefits involved?' },
        { id: '14', name: 'Are you willing to adhere to the study protocol and attend all required visits?' },
      ],
    },

  ];

  // Initialize the toggle states for all items
  const initializeToggles = () => {
    const initialToggles = {};
    sections.forEach(section => {
      section.data.forEach(item => {
        initialToggles[item.id] = false;
      });
    });
    return initialToggles;
  };

  const [toggles, setToggles] = useState(initializeToggles);

  const handleToggleChange = (id) => {
    setToggles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Render each item with a toggle
  const renderItem = ({ item }) => (
    <View style={styles.friendItem}>
      <Text style={styles.nameText}>{item.name}</Text>
      <View style={styles.toggleWrapper}>
        <LinearGradient
          colors={['#5888C3', '#192853']}
          style={styles.gradientBackground}
        >
          <View style={styles.innerShadow} />
        </LinearGradient>
        <Toggle
          value={toggles[item.id] || false}
          onPress={() => handleToggleChange(item.id)}
          leftTitle="Yes"
          rightTitle="No"
          trackBar={{ width: width * 0.78, height: 34, borderRadius: 17 }}
          trackBarStyle={{ backgroundColor: '#c8c8c8' }}
          thumbButton={{
            width: width * 0.375,
            height: 34,
            radius: 17,
            activeColor: colors.white,
            inActiveColor: '#818181',
          }}
          thumbStyle={styles.thumbStyle}
          leftTitleStyle={{ color: colors.white, fontWeight: '500', fontSize: 14 }}
          rightTitleStyle={{ color: colors.white }}
        />
      </View>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ImageBackground
        source={images.backgroundImage}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <View style={styles.detailContainer}>
          <Text style={styles.headingText}>Fill the Below Details</Text>
          <View style={styles.hr}>
            <View style={styles.coloredPart} />
            <View style={styles.remainingPart} />
          </View>
          <View style={styles.listBox}>
            <SectionList
              sections={sections}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
              renderSectionHeader={({ section: { title } }) => (
                <View style={{ width: '100%', paddingVertical: 5 }}>
                  <Text style={styles.sectionHeader}>{title}</Text>
                </View>
              )}
              contentContainerStyle={styles.flatListContent}
            />
          </View>

          <View style={styles.buttonContainer}>
            <LinearGradient
              colors={['#02062C', '#40639B']} // Gradient colors
              style={styles.gradientButton}
            >
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('DetailThird')}
              >
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailContainer: {
    backgroundColor: colors.white,
    padding: Platform.OS === 'ios' ? height * 0.02 : height * 0.015,
    borderRadius: 32,
    width: '92%',
    left: width * 0.04,
    marginTop: height * 0.12, // Increased marginTop for more space at the top
    marginBottom: height * 0.08, // Added more space at the bottom
  },
  
  // loginContainer: {
  //   backgroundColor: colors.white,
  //   padding: Platform.OS === 'ios' ? height * 0.03 : height * 0.015,
  //   borderRadius: 32,
  //   width: '92%',
  //   left: width * 0.04,
  //   marginTop: height * 0.1, // Change from 'top' to 'marginTop'
  //   marginBottom: 10, // Add somet top margin based on platform
  // },
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
  },
  coloredPart: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '59%',
    backgroundColor: colors.primary1,
    borderRadius: 50,
  },
  remainingPart: {
    position: 'absolute',
    left: '58%',
    top: 0,
    height: '100%',
    width: '41%',
    backgroundColor: 'gray',
    borderRadius: 50,
  },
  listBox: {
    // marginTop: height * 0.02,
  },
  flatListContent: {
    padding: 12,
    alignItems: 'center',
  },
  friendItem: {
    paddingVertical: height * 0.01,
    paddingHorizontal: 6,
    justifyContent: 'space-between',
    marginBottom: height * 0.02,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#192853',
  },
  // sectionHeader: {
  //   fontSize: 18,
  //   fontWeight: '700',
  //   color: '#080F37',
  //   marginBottom: 8,
  // },
  sectionHeader: {
    fontSize: 16,
    fontWeight: '700',
    color: '#080F37',
  },
  nameText: {
    fontSize: height * 0.018,
    fontWeight: '600',
    color: colors.black,
    marginBottom: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    width: '92%',
    left: Platform.OS === 'ios' ? 12 : 15,
  },
  gradientButton: {
    borderRadius: 15,
    width: '96%',
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
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  gradientBackground: {
    position: 'absolute',
    width: '100%',
    height: 34,
    borderRadius: 17,
    zIndex: -1,
  },
  innerShadow: {
    position: 'absolute',
    width: '100%',
    height: 34,
    borderRadius: 17,
    borderImageSlice: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  thumbStyle: {
    backgroundColor: colors.primary1,
    borderWidth: 1,
    borderColor: colors.primary1,
    shadowColor: 'rgba(0, 0.5, 0.3, 0.6)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 2,
  },
});

export default DetailSecond;
