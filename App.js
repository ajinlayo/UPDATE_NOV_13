import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import SplashScreen from "./screens/SplashScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import AccountSucc from "./screens/AccountSucc"
import HomeScreen from "./screens/HomeScreen";
import AboutUsScreen from "./screens/AboutUsScreen";
import AboutUsScreenTeam from "./screens/AboutUsScreenTeam";
import AboutUsScreenClient from "./screens/AboutUsScreenClient";
import AboutUsScreenExpert from "./screens/AboutUsScreenExpert";
import AboutUsScreenDevice from "./screens/AboutUsScreenDevice";
import ControlOff from "./screens/ControlOff";
import ControlOn from "./screens/ControlOn";
import AddDevice1 from "./screens/AddDevice1";
import AddDevice2 from "./screens/AddDevice2";
import LeftPanel from "./screens/LeftPanel";
import SettingsDropDown from "./screens/SettingsDropDown";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import TermsOfService from "./screens/TermsOfService";
import LogOut from "./screens/LogOut";
import AccountSettingsOption from "./screens/AccountSettingsOption";
import UserInfo from "./screens/UserInfo";
import Stats from "./screens/Stats";
import Details from "./screens/Details";


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
<NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="AccountSucc" component={AccountSucc} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} />
        <Stack.Screen name="AboutUsScreenTeam" component={AboutUsScreenTeam} />
        <Stack.Screen name="AboutUsScreenClient" component={AboutUsScreenClient} />
        <Stack.Screen name="AboutUsScreenExpert" component={AboutUsScreenExpert} />
        <Stack.Screen name="AboutUsScreenDevice" component={AboutUsScreenDevice} />
        <Stack.Screen name="ControlOff" component={ControlOff} />
        <Stack.Screen name="ControlOn" component={ControlOn} />
        <Stack.Screen name="AddDevice1" component={AddDevice1} />
        <Stack.Screen name="AddDevice2" component={AddDevice2} />
        <Stack.Screen name="LeftPanel" component={LeftPanel} />
        <Stack.Screen name="SettingsDropDown" component={SettingsDropDown} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="TermsOfService" component={TermsOfService} />
        <Stack.Screen name="LogOut" component={LogOut} />
        <Stack.Screen name="AccountSettingsOption" component={AccountSettingsOption} />
        <Stack.Screen name="UserInfo" component={UserInfo} />
        <Stack.Screen name="Stats" component={Stats} />
        <Stack.Screen name="Details" component={Details} />

        {/* Add other screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
