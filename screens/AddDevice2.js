import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image"; // Make sure you are using the correct import if using expo-image
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const AddDevice2 = () => {
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = React.useState(false);

  const handleGetStartedPress = () => {
    // Navigate to LoginScreen
    navigation.navigate('AddDevice1');
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
      <View style={[styles.aboutUsScreenChild, styles.aboutChildPosition]} />
      <Text style={[styles.about, styles.teamTypo]}>Add Device</Text>
      <Pressable
        style={styles.vectorIconPNG}
        onPress={() => navigation.navigate("AddDevice1")}
      >
        <Image
          style={styles.vectorIconPNG}
          contentFit="cover"
          source={require("../assets/vector7.png")}
        />
      </Pressable>
      <Text style={styles.Instruct}>Instruction:</Text>
      <Text style={styles.Description}>Connect the device to the WIFI/Internet.</Text>
      <Pressable
        style={({ pressed }) => [
          styles.buttonContainer,
          { backgroundColor: pressed ? "#0d1f11" : "#132a17" }, // Darken when pressed
        ]}
        onPress={handleGetStartedPress}
      >
        <Text style={styles.buttonText}>Turn off WiFi</Text>
      </Pressable>
      <View style={styles.wifiContainer}>
        <Text style={styles.wifiText}>Connected to "name of WIFI"</Text>
      </View>
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
    color: "#AFE1AF",
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    bottom: 0,
    right: 100,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
    letterSpacing: 1, 
  },
  Description: {
    color: "#AFE1AF",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: 'Poppins-SemiBold',
    bottom: 0,
    right: 0,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
  },
  buttonContainer: {
    backgroundColor: "#132a17", // Button background color
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 100,
    elevation: 3,
    top: 10,
  },
  buttonText: {
    fontSize: 25,
    fontFamily: FontFamily.bold,
    color: "#fff", // Button text color
    fontWeight: "bold",
  },
  
  wifiContainer: {
    backgroundColor: "#132A17",
    paddingVertical: 220,
    paddingHorizontal: 100,
    borderRadius: 5,
    elevation: 3,
    marginTop: 20, // Add some margin for spacing
  },
  wifiText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default AddDevice2;
