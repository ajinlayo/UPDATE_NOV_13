import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const AccountSucc = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.accountCreatedSuccessfully}>
      <Text style={[styles.welcomeToMyento, styles.goToLogTypo]}>
        Welcome to MyEnto
      </Text>
      <Image
        style={styles.accountCreatedSuccessfullyChild}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={styles.outputOnlinepngtools21}
        contentFit="cover"
        source={require("../assets/outputonlinepngtools-2-1.png")}
      />
      <View style={[styles.button, styles.buttonBg]}>
        <View style={[styles.buttonChild, styles.buttonBg]} />
        <Text style={[styles.getStarted, styles.getTypo]}>Get Started</Text>
        <Text style={[styles.getStarted1, styles.getTypo]} />
      </View>
      <Text style={styles.accountCreatedSuccessfully1}>
        Account created successfully!
      </Text>
      <Pressable
        style={[styles.goToLog, styles.goToLogPosition]}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <Text style={styles.goToLog}>Proceed to log in</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("LoginScreen")} >
        <Text style={styles.addButtonText}>Proceed to log in</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goToLogTypo: {
    textShadowRadius: 2,
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    height: "5%",
  },
  buttonBg: {
    backgroundColor: "#132A17",
    position: "absolute",
  },
  getTypo: {
    display: "none",
    left: "20%",
    top: "26.22%",
    width: "60.39%",
    height: "49.33%",
    fontSize: FontSize.size_lg,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  goToLogPosition: {
    left: "33.61%",
    position: "absolute",
  },
  welcomeToMyento: {
    width: "66.11%",
    top: "37.28%",
    left: "16.94%",
    fontSize: 22,
    color: "#737854",
    position: "absolute",
  },
  accountCreatedSuccessfullyChild: {
    top: 145,
    left: 117,
    width: 125,
    height: 132,
    position: "absolute",
  },
  outputOnlinepngtools21: {
    top: 161,
    left: 121,
    width: 111,
    height: 105,
    position: "absolute",
  },
  buttonChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 35,
    width: "100%",
  },
  getStarted: {
    color: Color.colorBlack,
  },
  getStarted1: {
    color: Color.colorSnow,
  },
  button: {
    height: "7.03%",
    width: "55.56%",
    top: "56.31%",
    right: "7.22%",
    bottom: "47.66%",
    left: "24.22%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: 55,
  },
  accountCreatedSuccessfully1: {
    textShadowRadius: 2,
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowColor: "rgba(255, 255, 255, 0.25)",
    width: "91.39%",
    top: "46.41%",
    left: "4.44%",
    color: "#3A7D44",
    fontSize: 19,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    height: "5%",
    position: "absolute",
  },
  goToLog: {
      width: "91.39%",
      top: "50.41%",
      left: "4.44%",
      //color: "white",
      fontSize: 15,
      textAlign: "center",
      fontFamily: FontFamily.poppinsSemiBold,
      fontWeight: "600",
      height: "5%",
      position: "absolute",
  },
  addButtonText: {
    textShadowRadius: 2,
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    color: "white",
    fontSize: 17,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    top: 450,
    left: 10,
  },
  vectorIcon: {
    height: "2.34%",
    width: "4.89%",
    top: "53.36%",
    right: "62.5%",
    bottom: "43.59%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  accountCreatedSuccessfully: {
    backgroundColor: Color.colorAntiquewhite,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default AccountSucc;
