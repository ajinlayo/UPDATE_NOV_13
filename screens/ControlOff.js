import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image"; 
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const ControlOff = () => {
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = React.useState(false);

  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null; 
  }

  const handleControl = () => {
    navigation.navigate("ControlOn");
  };

  return (
    <View style={styles.aboutUsScreen}>
      <View style={[styles.aboutUsScreenDeviceItem, styles.aboutPosition]} />
      <View style={[styles.aboutUsScreenChild, styles.aboutChildPosition]} />
      <Text style={[styles.about, styles.teamTypo]}>CONTROLS</Text>
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
        style={[styles.homeIcon, styles.buttonPosition]}
        contentFit="cover"
        source={require("../assets/home.png")}
      />
      <Pressable
        style={[styles.homeIcon, styles.buttonPosition]}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Image
          style={styles.homeIcon}
          contentFit="cover"
          source={require("../assets/home.png")}
        />
      </Pressable>
      <Image
        style={[styles.taskIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/task.png")}
      />
      <Image
        style={[styles.controlIcon, styles.iconPosition, styles.lightGreenTint]}
        contentFit="cover"
        source={require("../assets/control.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Pressable
        style={[styles.vectorIcon5, styles.iconLayout]}
        onPress={() => navigation.navigate("AboutUsScreen")}
      >
        <Image
          style={styles.vectorIcon5}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
      </Pressable>
      <Pressable
        style={styles.OffIcon}
        onPress={handleControl}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
      >
        <Image
          source={require("../assets/Off.png")}
          style={[styles.logo, isPressed && styles.logoPressed]}
          resizeMode="contain"
        />
      </Pressable>
      <View style={styles.statusContainer}>
        <Text style={styles.buttonText}>Device Status</Text>
      </View>
      <Text style={styles.buttonText2}>Idle</Text>
      <Pressable
        style={styles.addButton}
        onPress={() => navigation.navigate("AddDevice1")}
      >
        <Text style={styles.addButtonText}>+ Add Device</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutPosition: {
    borderRadius: Border.br_xl,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  homeIcon: {
    height: "3.94%",
    width: "9.44%",
    right: "29.44%",
    bottom: "6.53%",
    left: "-9.11%",
    top: 709,
    zIndex: 1,
  },
  taskIcon: {
    height: "3.84%",
    width: "7.44%",
    right: "29.44%",
    bottom: "6.53%",
    left: "-12.11%",
    top: 610,
  },
  controlIcon: {
    height: "4%",
    width: "9.28%",
    right: "33.06%",
    bottom: "-74.18%",
    left: "12.67%",
  },
  lightGreenTint: {
    tintColor: "#69B578",
  },
  vectorIcon5: {
    height: "3.22%",
    width: "10.83%",
    right: "5.83%",
    bottom: "4.84%",
    left: "80.33%",
    position: "absolute",
    top: "92.75%",
  },
  button: {
    height: "30.78%",
    width: "80.56%",
    top: "137.03%",
    right: "11.94%",
    bottom: "152.19%",
  },
  buttonPosition: {
    left: "9.5%",
    position: "absolute",
    top: 722,
  },
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
    marginBottom: 20, // Example spacing
  },
  logoPressed: {
    opacity: 0.5, // Adjust the opacity to darken the image when pressed
  },
  statusContainer: {
    backgroundColor: "#132A17",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    elevation: 3,
    marginTop: 10, // Add some margin for spacing
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
    color: "#8E8686",
    fontSize: 27,
    fontFamily: 'Poppins-SemiBold',
    top: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
  },
  addButton: {
    marginTop: 20,
    paddingVertical: 4,
    paddingHorizontal: 17,
    backgroundColor: "#132A17",
    borderRadius: 20,
    elevation: 3,
    left: 94,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },
});

export default ControlOff;
