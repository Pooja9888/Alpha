import React from 'react';
import {
    StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions, Platform, Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, { Text as SvgText, Defs, LinearGradient as SvgLinearGradient, Stop } from 'react-native-svg';
import colors from '../const/colors';
import images from '../const/images';
import { createDrawerNavigator } from '@react-navigation/drawer';

const drwaer= createDrawerNavigator()

const DrawerNavigator = ({  }) => {
    
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Main' component={Main}/>
            <Drawer.Screen name='DetailFirst' component={DetailFirst}/>
        </Drawer.Navigator>
    );
};


const styles = StyleSheet.create({
    
});

export default DrawerNavigator;
