import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image"; 
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const AddDevice1 = () => {
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = React.useState(false);

  const handleGetStartedPress = () => {
    // Navigate to LoginScreen
    navigation.navigate('AddDevice2');
  };

  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null; // You can replace this with a loading indicator if needed
  }

  const handleControl = () => {
    // Navigate to ControlOn or any other screen
    navigation.navigate("ControlOn");
  };

  return (
    <View style={styles.aboutUsScreen}>
      <View style={styles.addDeviceChild} />
      <View style={[styles.aboutUsScreenChild, styles.aboutChildPosition]} />
      <Text style={[styles.about, styles.teamTypo]}>Add Device</Text>
      <Pressable
        style={styles.vectorIconPNG}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Image
          style={styles.vectorIconPNG}
          contentFit="cover"
          source={require("../assets/vector7.png")}
        />
      </Pressable>
      <Image
        style={[styles.more3Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/more-3.png")}
      />
      <Text style={styles.Instruct}>Instruction:</Text>
      <Text style={styles.Description}>Connect the device to the WIFI/Internet.</Text>
      <Pressable
        style={({ pressed }) => [
          styles.buttonContainer,
          { backgroundColor: pressed ? "#0d1f11" : "#3A7D44" }, // Darken when pressed
        ]}
        onPress={handleGetStartedPress}
      >
        <Text style={styles.buttonText}>Turn on WiFi</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutChildPosition: {
    borderRadius: Border.br_xl,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  vectorIconPNG: {
    height: "15.47%",
    width: "25.53%",
    top: "7.28%",
    right: "86.81%",
    bottom: "93.25%",
    left: "3.67%",
    position: "absolute",
    overflow: "hidden"
  },
  addDeviceChild: {
    height: "85%",
    top: "25.03%",
    right: "0%",
    bottom: "-2.03%",
    left: "0%",
    borderRadius: Border.br_xl,
    backgroundColor: "#132A17",
    position: "absolute",
    width: "100%",
  },
  teamTypo: {
    textAlign: "center",
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  aboutUsScreenChild: {
    height: "15.78%",
    top: "-3.44%",
    bottom: "87.66%",
    backgroundColor: "#F9E2D0",
  },
  about: {
    height: "8.53%",
    width: "40.28%",
    top: "6.78%",
    left: "30.5%",
    fontSize: 25,
    fontFamily: 'Poppins-SemiBold',
    color: Color.colorBlack,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
  },
  aboutUsScreen: {
    backgroundColor: Color.colorMediumseagreen,
    flex: 1,
    height: "100%",
    overflow: "hidden",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  Instruct: {
    color: "white",
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    bottom: 100,
    right: 90,
    textShadowColor: '#000',  
    textShadowOffset: { width: 1, height: 1 },  
    textShadowRadius: 3,  
    letterSpacing: 1, 
  },
  Description: {
    color: "#F6D4BA",
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    bottom: 85,
    right: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
  },
  buttonContainer: {
    backgroundColor: "#3A7D44", // Button background color
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 100,
    elevation: 3,
  },
  buttonText: {
    fontSize: 30,
    fontFamily: "Poppins-Bold",
    color: "#fff", // Button text color
    fontWeight: "bold",
  },
});

export default AddDevice1;
