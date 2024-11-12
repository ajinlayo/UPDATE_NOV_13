import * as React from "react";
import { StyleSheet, Text, View, Pressable, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const AboutUsScreenTeam = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.aboutUsScreenTeam}>
      <View style={[styles.aboutUsScreenTeamChild, styles.aboutLayout]} />
      <Text style={[styles.team, styles.teamTypo]}>TEAM</Text>
      <View style={styles.button}>
        <Image
          style={[styles.buttonChild, styles.buttonChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-1.png")}
        />
        <Text style={[styles.getStarted, styles.getPosition]}>Get Started</Text>
        <Text style={[styles.getStarted1, styles.ourTeamIsTypo]}>
          Get Started
        </Text>
      </View>
      <Text style={[styles.ourTeamIs, styles.ourTeamIsTypo]}>
        Our team is composed of four members: Aaron, Dhan, Arwen and Andrew.
        With diverse expertise in Intelligent Systems (Arwen and Andrew), System
        Administration (Aaron), and Data Science (Dhan), we believe that our
        combined efforts and unique insights enable us to produce high-quality
        and meaningful research. Together, we are committed to achieve
        excellence and make a significant impact in our field.
      </Text>
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
      <View style={[styles.aboutUsScreenTeamItem, styles.aboutLayout]} />
      <Image
        style={[styles.homeIcon, styles.iconPosition1]}
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
        style={[styles.taskIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/task.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.controlIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/control1.png")}
      />
      <TouchableOpacity
        style={[styles.vectorIcon6, styles.buttonChildLayout]}
        onPress={() => navigation.navigate("AboutUsScreen")}
      >
        <Image
          style={styles.buttonChildLayout}
          contentFit="cover"
          source={require("../assets/vector7.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
    width: "100%",
  },
  teamTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    position: "absolute",
  },
  buttonChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  getPosition: {
    display: "none",
    fontSize: FontSize.size_lg,
    left: "20%",
    top: "26.14%",
    width: "60.38%",
    height: "49.24%",
  },
ourTeamIsTypo: {
  color: "#AFE1AF",
  textAlign: "center",
  fontFamily: 'Poppins-SemiBold',
  fontWeight: "600",
  position: "absolute",
  textShadowColor: '#000',  
  textShadowOffset: { width: 1, height: 1 },  
  textShadowRadius: 3,  
},
  vectorIconLayout: {
    bottom: "50.94%",
    top: "48.13%",
    width: "1.67%",
    height: "0.94%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition1: {
    top: "91.09%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    top: "90.78%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  aboutUsScreenTeamChild: {
    height: "15.78%",
    top: "-2.5%",
    bottom: "86.72%",
    backgroundColor: Color.colorAntiquewhite,
    left: "0%",
    right: "0%",
  },
  team: {
    height: "4.53%",
    width: "25.28%",
    top: "7.41%",
    left: "38.61%",
    fontSize: 28,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
    letterSpacing: 2,
  },
  buttonChild: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    borderRadius: Border.br_4xs,
    left: "0%",
    right: "0%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  getStarted: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    position: "absolute",
  },
  getStarted1: {
    display: "none",
    fontSize: FontSize.size_lg,
    left: "20%",
    top: "26.14%",
    width: "60.38%",
    height: "49.24%",
  },
  button: {
    height: "30.78%",
    width: "80.56%",
    top: "16.41%",
    right: "9.72%",
    bottom: "52.81%",
    left: "9.72%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    position: "absolute",
  },
  ourTeamIs: {
    height: "37.5%",
    width: "92.22%",
    top: "50%",
    left: "5.56%",
    fontSize: 15,
  },
  vectorIcon: {
    height: "4.22%",
    width: "13.83%",
    right: "6.11%",
    bottom: "4.69%",
    left: "80.06%",
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
    right: "51.94%",
    left: "46.39%",
  },
  vectorIcon2: {
    right: "49.17%",
    left: "49.17%",
  },
  vectorIcon3: {
    right: "46.39%",
    left: "51.94%",
  },
  vectorIcon4: {
    right: "43.61%",
    left: "54.72%",
  },
  aboutUsScreenTeamItem: {
    height: "14.53%",
    top: "87.81%",
    right: "-0.28%",
    bottom: "-2.34%",
    left: "0.28%",
    backgroundColor: Color.colorPeachpuff,
  },
  homeIcon: {
    height: "5.31%",
    width: "12%",
    right: "82.5%",
    bottom: "3.59%",
    left: "7.5%",
  },
  vectorIcon5: {
    height: "4.22%",
    width: "13.83%",
    right: "5.83%",
    bottom: "4.69%",
    left: "81.33%",
  },
  taskIcon: {
    height: "4.84%",
    width: "9.44%",
    right: "59.44%",
    bottom: "4.38%",
    left: "31.11%",
  },
  controlIcon: {
    height: "5%",
    width: "11.28%",
    right: "33.06%",
    bottom: "4.22%",
    left: "56.67%",
  },
  vectorIcon6: {
    height: "3.47%",
    width: "6.53%",
    top: "7.03%",
    right: "88.47%",
    bottom: "89.5%",
    left: "5%",
  },
  aboutUsScreenTeam: {
    backgroundColor: Color.colorMediumseagreen,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default AboutUsScreenTeam;
