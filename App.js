import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import Splash from './src/splash/Splash';
import Login from './src/screen/Login';
import Signup from './src/screen/Signup';
import Otp from './src/screen/Otp';
import DetailFirst from './src/screen/DetailFirst';
import DetailSecond from './src/screen/DetailSecond';
import DetailThird from './src/screen/DetailThird';
import Profile from './src/screen/Profile';
import GraphDetails from './src/screen/GraphDetails';
import ProfileDetail from './src/screen/ProfileDetail';
import DrawerNavigator from './src/drawer/DrawerNavigator';
// import TermsConditions from './src/screen/TermsConditions';

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator initialRouteName="DetailFirst">
//       <Drawer.Screen name="DetailFirst" component={DetailFirst} />
//       <Drawer.Screen name="Profile" component={Profile} />
//       <Drawer.Screen name="Settings" component={SettingsScreen} />
//       {/* Add other screens here */}
//     </Drawer.Navigator>
//   );
// }

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="Otp" component={Otp} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="DetailSecond" component={DetailSecond} options={{ headerShown: false }} />
        <Stack.Screen name="DetailThird" component={DetailThird} options={{ headerShown: false }} />
        <Stack.Screen name="GraphDetails" component={GraphDetails} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileDetail" component={ProfileDetail} options={{ headerShown: false }} />
        {/* <Stack.Screen name="TermsConditions" component={TermsConditions} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;