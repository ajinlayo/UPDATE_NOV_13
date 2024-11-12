import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const ControlOn = () => {
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = React.useState(false);

  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null; // You can replace this with a loading indicator if needed
  }

  const handleControl = () => {
    // Navigate to ControlOff or any other screen
    navigation.navigate("ControlOff");
  };

  return (
    <View style={styles.aboutUsScreen}>
      <View style={[styles.aboutUsScreenDeviceItem, styles.aboutPosition]} />
      <View style={[styles.aboutUsScreenChild, styles.aboutChildPosition]} />
      <Text style={[styles.about, styles.teamTypo]}>Controls</Text>
      <Pressable
        style={styles.vectorIconPNG}
        onPress={() => navigation.navigate("ControlOff")}
      >
        <Image
          style={styles.vectorIconPNG}
          contentFit="cover"
          source={require("../assets/vector7.png")}
        />
      </Pressable>
      <Pressable
        style={styles.OffIcon}
        onPress={handleControl}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
      >
        <Image
          source={require("../assets/On.png")}
          style={[styles.logo, isPressed && styles.logoPressed]}
          resizeMode="contain"
        />
      </Pressable>
      <View style={styles.statusContainer}>
        <Text style={styles.buttonText}>Device Status</Text>
      </View>
      <Text style={styles.buttonText2}>Running</Text>
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
    overflow: "hidden",
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
  aboutUsScreenDeviceItem: {
    height: "14.53%",
    top: "87.66%",
    right: "-0.28%",
    bottom: "-2.19%",
    left: "0.28%",
    backgroundColor: Color.colorPeachpuff,
    zIndex: 0,
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
  logo: {
    width: 300, // Adjust width as needed
    height: 300, // Adjust height as needed
    marginBottom: 160, // Example spacing
  },
  logoPressed: {
    opacity: 0.5, 
  },
  statusContainer: {
    backgroundColor: "#132A17",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    elevation: 3,
    marginTop: -65, 
  },
  buttonText: {
    color: "#fff",
    fontSize: 23,
    fontFamily: 'Poppins-SemiBold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
  },

  buttonText2: {
    color: "#FF0000",
    fontSize: 27,
    fontWeight: "bold",
    top: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
  },
});

export default ControlOn;
