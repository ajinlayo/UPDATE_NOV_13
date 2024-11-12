import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const AboutUsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.aboutUsScreen}>
      <View style={styles.button}>
        <View style={styles.buttonChild} />
        <Text style={[styles.getStarted, styles.getTypo]}>Get Started</Text>
        <Text style={[styles.getStarted1, styles.getTypo]}>Get Started</Text>
      </View>
      <View style={[styles.aboutUsScreenChild, styles.aboutChildPosition]} />
      <Text style={[styles.information, styles.teamTypo]}>INFORMATION</Text>
      <Pressable
        style={[styles.rectangleParent, styles.rectangleGroupPosition]}
        onPress={() => navigation.navigate("AboutUsScreenTeam")}
      >
        <View style={styles.groupPosition} />
        <Text style={[styles.team, styles.teamTypo]}>Team</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.rectangleGroupPosition]}
        onPress={() => navigation.navigate("AboutUsScreenClient")}
      >
        <View style={styles.groupPosition} />
        <Text style={[styles.team, styles.teamTypo]}>Client</Text>
      </Pressable>
      <Pressable
        style={styles.rectangleContainer}
        onPress={() => navigation.navigate("AboutUsScreenExpert")}
      >
        <View style={styles.groupPosition} />
        <Text style={[styles.team, styles.teamTypo]}>Expert</Text>
      </Pressable>
      <Pressable
        style={[styles.groupPressable, styles.rectangleGroupPosition]}
        onPress={() => navigation.navigate("AboutUsScreenDevice")}
      >
        <View style={styles.groupPosition} />
        <Text style={[styles.team, styles.teamTypo]}>{`Device `}</Text>
      </Pressable>
      
      <Image
        style={styles.groupChat1Icon}
        contentFit="cover"
        source={require("../assets/groupchat-1.png")}
      />
      <Image
        style={styles.user1Icon}
        contentFit="cover"
        source={require("../assets/user-1.png")}
      />
      <Image
        style={styles.expert1Icon}
        contentFit="cover"
        source={require("../assets/expert-1.png")}
      />
      <Image
        style={[styles.pcbBoard1Icon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/pcbboard-1.png")}
      />
      <View style={[styles.aboutUsScreenChild2, styles.aboutChildPosition]} />
      <Image
        style={[styles.homeIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/home.png")}
      />
          <Pressable
        style={[styles.homeIcon, styles.iconLayout]}
        onPress={() => navigation.navigate("HomeScreen")}
      >
      </Pressable>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
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
          <Pressable
        style={[styles.controlIcon, styles.iconPosition]}
        onPress={() => navigation.navigate("ControlOff")}
      >
      </Pressable>
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
      <Pressable
        style={[styles.vectorIcon1, styles.iconLayout]}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Image
          style={styles.vectorIcon1}
          contentFit="cover"
          source={require("../assets/vector7.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  getTypo: {
    display: "none",
    fontSize: FontSize.size_lg,
    left: "20%",
    top: "26.15%",
    width: "60.38%",
    height: "49.23%",
    textAlign: "center",
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    position: "absolute",
  },
  aboutChildPosition: {
    borderRadius: Border.br_xl,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  teamTypo: {
    textAlign: "center",
    fontFamily:'Poppins-SemiBold',
    fontWeight: "600",
    fontHeight: "800",
    position: "absolute",
    top: "-10%",
  },
  rectangleGroupPosition: {
    left: "29%",
    right: "14.17%",
    width: "52.5%",
    height: "7.5%",
    position: "absolute",
  },
  
  iconPosition1: {
    width: 40,
    left: 108,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    top: "90.63%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  buttonChild: {
  borderRadius: Border.br_4xs,
  backgroundColor: "#132A17",
  left: "0%",
  bottom: "0%",
  right: "0%",
  top: "0%",
  height: "100%",
  position: "absolute",
  width: "100%",
  shadowColor: "#000",
  shadowOffset: { width: 5, height: 3 }, 
  shadowOpacity: 0.1, 
  shadowRadius: 2, 
  elevation: 6,
  },
  getStarted: {
    color: Color.colorBlack,
  },
  getStarted1: {
    color: Color.colorSnow,
  },
  button: {
    height: "65.31%",
    width: "80.56%",
    top: "18.28%",
    right: "9.72%",
    bottom: "16.41%",
    left: "9.72%",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  aboutUsScreenChild: {
    height: "15.78%",
    top: "-3.44%",
    bottom: "87.66%",
    backgroundColor: Color.colorAntiquewhite,
  },
  information: {
    height: "4.53%",
    width: "80%",
    top: "7.25%",
    left: "12%",
    fontSize: 25,
    color: Color.colorBlack,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
  },
  groupPosition: {
    backgroundColor: "#70b47c",
    left: "-10%",
    bottom: "0%",
    right: "0%",
    top: "-30%",
    height: "100%",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    width: "100%",
  },
  team: {
    height: "57.42%",
    width: "89.42%",
    top: "14.58%",
    left: "7.41%",
    fontSize: 27,
    color: Color.colorWhite,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
  },
  rectangleParent: {
    top: "27.97%",
    bottom: "64.53%",
  },
  rectangleGroup: {
    top: "40.78%",
    bottom: "51.72%",
  },
  rectangleContainer: {
    top: "53.59%",
    right: "16.44%",
    bottom: "38.91%",
    left: "29.06%",
    width: "52.5%",
    height: "7.5%",
    position: "absolute",
  },
  groupPressable: {
    top: "66.41%",
    bottom: "26.09%",
  },
  aboutUsScreenItem: {
    top: 224,
  },
  aboutUsScreenInner: {
    top: 325,
  },
  ellipseIcon: {
    top: 425,
  },
  aboutUsScreenChild1: {
    top: 521,
  },
  groupChat1Icon: {
    top: 205,
    left: 105,
    width: 54,
    height: 58,
    position: "absolute",
  },
  user1Icon: {
    top: 305,
    left: 105,
    width: 50,
    height: 50,
    position: "absolute",
  },
  expert1Icon: {
    top: 412,
    height: 44,
    width: 40,
    left: 108,
    position: "absolute",
  },
  pcbBoard1Icon: {
    top: 515,
    height: 38,
    left: 7,
    position: "absolute",
  },
  aboutUsScreenChild2: {
    height: "14.53%",
    top: "87.66%",
    bottom: "-2.19%",
    backgroundColor: Color.colorPeachpuff,
  },
  homeIcon: {
    height: "5.31%",
    width: "12%",
    right: "82.78%",
    bottom: "2.75%",
    left: "7.22%",
    top: "90.94%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vectorIcon: {
    height: "4.22%",
    width: "13.83%",
    right: "4.11%",
    bottom: "4.84%",
    left: "81.06%",
    top: "90.94%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  taskIcon: {
    height: "4.84%",
    width: "9.44%",
    right: "59.72%",
    bottom: "4.53%",
    left: "30.83%",
  },
  controlIcon: {
    height: "5%",
    width: "11.28%",
    right: "33.33%",
    bottom: "4.38%",
    left: "56.39%",
  },
  vectorIcon1: {
    height: "3.27%",
    width: "6.83%",
    top: "7.38%",
    right: "88.47%",
    bottom: "89.66%",
    left: "7%",
  },
  aboutUsScreen: {
    backgroundColor: Color.colorMediumseagreen,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default AboutUsScreen;
