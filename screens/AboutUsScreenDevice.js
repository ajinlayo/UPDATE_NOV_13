import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const AboutUsScreenDevice = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.aboutUsScreenDevice}>
      <View style={[styles.aboutUsScreenDeviceChild, styles.aboutLayout]} />
      <Text style={[styles.device, styles.deviceTypo]}>DEVICE</Text>
      <Text
        style={[styles.theDeviceIs, styles.deviceTypo]}
      >{`The device consists of several components such as the attractant modules (UV light and piezo buzzer), the web camera, and the DC fans. The enclosure of the components is made of transparent acrylic with a thickness of 3 millimeters. In addition to that, the bait compartment in the figure, which holds the attractant modules, is a customized 3D printed model made with PETG filament.
`}</Text>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <View style={[styles.aboutUsScreenDeviceItem, styles.aboutLayout]} />
      <Image
        style={[styles.homeIcon, styles.buttonPosition]}
        contentFit="cover"
        source={require("../assets/home.png")}
      />
      <Pressable
        style={styles.vectorIconPNG}
        onPress={() => navigation.navigate("AboutUsScreen")}
      >
        <Image
          style={styles.vectorIconPNG}
          contentFit="cover"
          source={require("../assets/vector7.png")}
        />
      </Pressable>
      <Image
        style={[styles.vectorIcon5, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.taskIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/task.png")}
      />
      <Image
        style={[styles.controlIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/control.png")}
      />
      <View style={[styles.button, styles.buttonPosition]}>
        <View style={[styles.buttonChild, styles.childPosition]} />
        <Text style={[styles.getStarted, styles.getTypo]}>Get Started</Text>
        <Text style={[styles.getStarted1, styles.getTypo]}>Get Started</Text>
        <Image
          style={[styles.hardwareDesign1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/hardware-design-1.png")}
        />
      </View>
        <Image
          style={styles.vectorIconLayout}
          contentFit="cover"
          source={require("../assets/vector7.png")}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  aboutLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
    width: "100%",
  },
  deviceTypo: {
    textAlign: "center",
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  buttonPosition: {
    left: "7.5%",
    position: "absolute",
  },
  iconLayout: {
    top: "90.94%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconPosition: {
    top: "90.63%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  getTypo: {
    display: "none",
    fontSize: FontSize.size_lg,
    left: "20%",
    top: "26.14%",
    width: "60.38%",
    height: "49.24%",
    textAlign: "center",
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    position: "absolute",
  },
  aboutUsScreenDeviceChild: {
    height: "15.78%",
    top: "-2.5%",
    bottom: "86.72%",
    backgroundColor: Color.colorAntiquewhite,
    left: "0%",
    right: "0%",
  },
  device: {
    height: "4.53%",
    width: "31.28%",
    top: "7.88%",
    left: "34.33%",
    fontSize: 28,
    color: Color.colorBlack,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
    letterSpacing: 2,
  },
  theDeviceIs: {
    height: "32.5%",
    width: "85.83%",
    top: "51.56%",
    fontSize: 16,
    color: "#AFE1AF",
    left: "6.94%",
    textShadowColor: '#000',  
    textShadowOffset: { width: 1, height: 1 },  
    textShadowRadius: 3, 
  },
  vectorIcon: {
    right: "54.17%",
    left: "44.17%",
    bottom: "49.53%",
    top: "49.53%",
    width: "1.67%",
    height: "0.94%",
    maxHeight: "100%",
    maxWidth: "100%",
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
  vectorIcon1: {
    right: "51.39%",
    left: "46.94%",
    bottom: "49.53%",
    top: "49.53%",
    width: "1.67%",
    height: "0.94%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vectorIcon2: {
    right: "48.61%",
    left: "49.72%",
    bottom: "49.53%",
    top: "49.53%",
    width: "1.67%",
    height: "0.94%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vectorIcon3: {
    right: "45.83%",
    left: "52.5%",
    bottom: "49.53%",
    top: "49.53%",
    width: "1.67%",
    height: "0.94%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vectorIcon4: {
    right: "43.06%",
    left: "55.28%",
    bottom: "49.53%",
    top: "49.53%",
    width: "1.67%",
    height: "0.94%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  aboutUsScreenDeviceItem: {
    height: "14.53%",
    top: "87.66%",
    right: "-0.28%",
    bottom: "-2.19%",
    left: "0.28%",
    backgroundColor: Color.colorPeachpuff,
  },
  homeIcon: {
    height: "5.31%",
    width: "11%",
    right: "82.5%",
    bottom: "3.75%",
    top: "90.94%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorIcon5: {
    height: "4.22%",
    width: "13.83%",
    right: "5.83%",
    bottom: "4.84%",
    left: "80.33%",
    position: "absolute",
    top: "90.94%",
  },
  taskIcon: {
    height: "4.84%",
    width: "9.44%",
    right: "59.44%",
    bottom: "4.53%",
    left: "31.11%",
  },
  controlIcon: {
    height: "5%",
    width: "11.28%",
    right: "33.06%",
    bottom: "4.38%",
    left: "56.67%",
  },
  buttonChild: {
    height: "97%",
    top: "4%",
    bottom: "0%",
    borderRadius: Border.br_4xs,
    backgroundColor: "rgba(255, 255, 255, 1)",
    left: "20%", 
    right: "10%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  childPosition: {
    left: "4%",
    right: "0%",
  },
  getStarted: {
    color: Color.colorBlack,
  },
  getStarted1: {
    color: Color.colorSnow,
  },
  button: {
    height: "30.78%",
    width: "80.56%",
    top: "17.03%",
    right: "11.94%",
    bottom: "52.19%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  vectorIcon6: {
    height: "3.47%",
    width: "6.53%",
    top: "7.5%",
    right: "86.53%",
    bottom: "89.03%",
    left: "6.94%",
    height: "2.2%",
    width: "18.97%",
    top: "45.63%",
    right: "42.67%",
    bottom: "52.17%",
    left: "38.36%",
    borderRadius: 25,
    backgroundColor: "rgba(249, 251, 255, 0.27)",
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.41)",
    borderWidth: 1,
    transform: [
      {
        rotate: "0.4deg",
      },
    ],  
  },
  buttonShadowBox: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  hardwareDesign1: {
    height: "79.54%",
    width: "93.06%",
    top: "14.8%",
    right: "13.06%",
    bottom: "52.66%",
    left: "6.89%",
  },
  aboutUsScreenDevice: {
    backgroundColor: Color.colorMediumseagreen,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default AboutUsScreenDevice;
