import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Pressable} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const AboutUsScreenExpert = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.aboutUsScreenExpert}>
      <View style={[styles.aboutUsScreenExpertChild, styles.aboutPosition]} />
      <Text style={[styles.expert, styles.expertTypo]}>EXPERT</Text>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={[styles.vectorIcon6, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <View style={styles.button}>
        <Image
          style={[styles.buttonChild, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/rectangle-12.png")}
        />
        <Text style={[styles.getStarted, styles.getPosition]}>Get Started</Text>
        <Text style={[styles.getStarted1, styles.getStarted1Typo]}>
          Get Started
        </Text>
      </View>
      <View style={[styles.aboutUsScreenExpertItem, styles.aboutPosition]} />
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
        style={[styles.vectorIcon7, styles.iconPosition1]}
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
      <Text style={[styles.weAreCollaborating, styles.vectorIcon8Position]}>
        We are collaborating with Mr. Daryl Hernandez, an entomologist with 12
        years of experience in urban pest management, agriculture, and the
        pesticide industry. Mr. Hernandez is a key expert from Raidex Solutions
        Inc., a company renowned for its innovative pest control solutions. His
        extensive knowledge and practical expertise in managing agricultural
        pests provide a solid foundation for our research efforts.
      </Text>
      <TouchableOpacity
        style={[styles.vectorIcon8, styles.vectorIcon8Position]}
        onPress={() => navigation.navigate("AboutUsScreen")}
      >
        <Image
          style={styles.vectorIconLayout1}
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
  expertTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily:'Poppins-SemiBold',
    fontWeight: "600",
  },
  vectorIconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorIconLayout: {
    bottom: "65.94%",
    top: "32.34%",
    width: "2.22%",
    height: "1.72%",
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
    position: "absolute",
  },
  getStarted1Typo: {
    color: Color.colorSnow,
    textAlign: "center",
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
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
  vectorIcon8Position: {
    left: "3.89%",
    position: "absolute",
  },
  aboutUsScreenExpertChild: {
    height: "15.78%",
    top: "-3.12%",
    bottom: "87.34%",
    backgroundColor: Color.colorAntiquewhite,
  },
  expert: {
    height: "4.53%",
    width: "32.28%",
    top: "7.25%",
    left: "34.33%",
    fontSize: 28,
    position: "absolute",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
    letterSpacing: 2,
  },
  vectorIcon: {
    right: "53.89%",
    left: "44.44%",
    bottom: "50.47%",
    top: "48.59%",
    width: "1.67%",
    height: "0.94%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
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
    right: "51.11%",
    left: "47.22%",
    bottom: "50.47%",
    top: "48.59%",
    width: "1.67%",
    height: "0.94%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIcon2: {
    right: "48.33%",
    left: "50%",
    bottom: "50.47%",
    top: "48.59%",
    width: "1.67%",
    height: "0.94%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIcon3: {
    right: "45.56%",
    left: "52.78%",
    bottom: "50.47%",
    top: "48.59%",
    width: "1.67%",
    height: "0.94%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIcon4: {
    right: "42.78%",
    left: "55.56%",
    bottom: "50.47%",
    top: "48.59%",
    width: "1.67%",
    height: "0.94%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIcon5: {
    right: "10.28%",
    left: "87.5%",
  },
  vectorIcon6: {
    right: "85.56%",
    left: "12.22%",
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
    position: "absolute",
    width: "100%",
  },
  getStarted: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
  },
  getStarted1: {
    display: "none",
    fontSize: FontSize.size_lg,
    left: "20%",
    top: "26.14%",
    width: "60.38%",
    height: "49.24%",
    position: "absolute",
  },
  button: {
    height: "30.78%",
    width: "80.56%",
    top: "16.72%",
    right: "9.72%",
    bottom: "52.5%",
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
  aboutUsScreenExpertItem: {
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
  vectorIcon7: {
    height: "4.22%",
    width: "13.83%",
    right: "6.11%",
    bottom: "4.69%",
    left: "80.06%",
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
  weAreCollaborating: {
    height: "37.5%",
    width: "90%",
    top: "50.63%",
    fontSize: 15,
    color: "#AFE1AF",
    textAlign: "center",
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    textShadowColor: '#000',  
    textShadowOffset: { width: 1, height: 1 },  
    textShadowRadius: 3, 
  },
  vectorIcon8: {
    height: "3.47%",
    width: "6.53%",
    top: "6.88%",
    right: "89.58%",
    bottom: "89.66%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  aboutUsScreenExpert: {
    backgroundColor: Color.colorMediumseagreen,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default AboutUsScreenExpert;
