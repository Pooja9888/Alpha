import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TermsConditions from '../screen/TermsConditions';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {

  return (
    <Drawer.Navigator>
      <Drawer.Screen name='TermsConditions' component={TermsConditions} options={{ headerShown: true }} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator

const styles = StyleSheet.create({})