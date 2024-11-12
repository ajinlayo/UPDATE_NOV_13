import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Pressable} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const AboutUsScreenClient = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.aboutUsScreenClient}>
      <View style={[styles.aboutUsScreenClientChild, styles.aboutPosition]} />
      <Text style={[styles.client, styles.clientTypo]}>CLIENT</Text>
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
      <View style={styles.button}>
        <Image
          style={[styles.buttonChild, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-11.png")}
        />
        <Text style={[styles.getStarted, styles.getPosition]}>Get Started</Text>
        <Text style={[styles.getStarted1, styles.getStarted1Typo]}>
          Get Started
        </Text>
      </View>
      <Text style={[styles.ourClientIs, styles.getStarted1Typo]}>
        Our client is a community of farmers from Krus na Ligas, Quezon City,
        who are facing significant challenges due to rice bugs infesting their
        rice crops. These pests are not only reducing their yield but also
        threatening their livelihood. Our research aims to address this critical
        issue by leveraging advanced computer engineering techniques to develop
        innovative solutions tailored specifically to their needs.
      </Text>
      <View style={[styles.aboutUsScreenClientItem, styles.aboutPosition]} />
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
        style={[styles.vectorIcon5, styles.iconPosition1]}
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
        source={require("../assets/control1.png")}
      />
      <TouchableOpacity
        style={[styles.vectorIcon6, styles.vectorIconLayout]}
        onPress={() => navigation.navigate("AboutUsScreen")}
      >
        <Image
          style={styles.vectorIconLayout}
          contentFit="cover"
          source={require("../assets/vector7.png")}
        />
      </TouchableOpacity>
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
  clientTypo: {
    textAlign: "center",
    color: Color.colorBlack,
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
  getPosition: {
    display: "none",
    fontSize: FontSize.size_lg,
    left: "20%",
    top: "26.14%",
    width: "60.38%",
    height: "49.24%",
  },
  getStarted1Typo: {
    color: "#AFE1AF",
    textAlign: "center",
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    position: "absolute",
    textShadowColor: '#000',  
    textShadowOffset: { width: 1, height: 1 },  
    textShadowRadius: 3,  
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
  aboutUsScreenClientChild: {
    height: "15.78%",
    top: "-3.12%",
    bottom: "87.34%",
    backgroundColor: Color.colorAntiquewhite,
  },
  client: {
    height: "4.53%",
    width: "32.28%",
    top: "7.25%",
    left: "35.33%",
    fontSize: 28,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
    letterSpacing: 2,
  },
  vectorIcon: {
    right: "54.44%",
    left: "43.89%",
    bottom: "50.78%",
    top: "48.28%",
    width: "1.67%",
    height: "0.94%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vectorIcon1: {
    right: "51.67%",
    left: "46.67%",
    bottom: "50.78%",
    top: "48.28%",
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
  vectorIcon2: {
    right: "48.89%",
    left: "49.44%",
    bottom: "50.78%",
    top: "48.28%",
    width: "1.67%",
    height: "0.94%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vectorIcon3: {
    right: "46.11%",
    left: "52.22%",
    bottom: "50.78%",
    top: "48.28%",
    width: "1.67%",
    height: "0.94%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vectorIcon4: {
    right: "43.33%",
    left: "55%",
    bottom: "50.78%",
    top: "48.28%",
    width: "1.67%",
    height: "0.94%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  buttonChild: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    borderRadius: Border.br_4xs,
    left: "0%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "100%",
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
  ourClientIs: {
    height: "37.5%",
    width: "92.22%",
    top: "50.31%",
    left: "3.89%",
    fontSize: 14,
  },
  aboutUsScreenClientItem: {
    height: "14.53%",
    top: "87.81%",
    bottom: "-2.34%",
    backgroundColor: Color.colorPeachpuff,
  },
  homeIcon: {
    height: "5.31%",
    width: "11%",
    right: "82.78%",
    bottom: "3.59%",
    left: "7.22%",
  },
  vectorIcon5: {
    height: "4.22%",
    width: "13.83%",
    right: "6.11%",
    bottom: "4.69%",
    left: "81.06%",
  },
  taskIcon: {
    height: "4.84%",
    width: "9.44%",
    right: "59.72%",
    bottom: "4.38%",
    left: "30.83%",
  },
  controlIcon: {
    height: "5%",
    width: "11.28%",
    right: "33.33%",
    bottom: "4.22%",
    left: "56.39%",
  },
  vectorIcon6: {
    height: "3.47%",
    width: "6.53%",
    top: "6.88%",
    right: "87.08%",
    bottom: "89.66%",
    left: "6.39%",
  },
  aboutUsScreenClient: {
    backgroundColor: Color.colorMediumseagreen,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default AboutUsScreenClient;
