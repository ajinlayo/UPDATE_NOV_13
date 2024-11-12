import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const TermsOfService = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.termsOfService}>
      <Pressable
        style={styles.vectorIcon}
        onPress={() => navigation.navigate("SettingsDropDown")}
      >
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector7.png")}
        />
      </Pressable>
      <Image
        style={styles.termsOfServiceChild}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={styles.outputOnlinepngtools21}
        contentFit="cover"
        source={require("../assets/outputonlinepngtools-2-1.png")}
      />
      <Text style={[styles.termsOfService1, styles.welcomeToOurTypo]}>
        TERMS OF SERVICE
      </Text>
      <Text style={[styles.acceptanceOfTerms, styles.useOfServicesTypo]}>
        Acceptance of terms
      </Text>
      <Text style={[styles.useOfServices, styles.useOfServicesTypo]}>
        Use of services
      </Text>
      <Text style={[styles.welcomeToOur, styles.welcomeToOurTypo]}>
        Welcome to our mobile application and device service for detecting rice
        ear bugs. By using our services, you agree to comply with and be bound
        by the following terms and conditions. Please review them carefully.
      </Text>
      <Text style={styles.byAccessingAnd}>
        By accessing and using our mobile application and device, you accept and
        agree to be bound by these Terms of Service and our Privacy Policy.
      </Text>
      <Text style={[styles.byUsingOur, styles.byUsingOurTypo]}>
        By using our services, you acknowledge that you have read, understood,
        and agree to be bound by these Terms of Service.
      </Text>
      <Text style={[styles.accountRegistrationYou, styles.byUsingOurTypo]}>{`
Account Registration: You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
Prohibited Conduct: You agree not to use the services for any unlawful purpose or in any way that could harm or disable our operations.`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeToOurTypo: {
    textAlign: "center",
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    position: "absolute",
  },
  useOfServicesTypo: {
    color: Color.colorBlack,
    fontSize: 18,
    height: "3.28%",
    width: "70.56%",
    textAlign: "left",
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    left: 10,
  },
  byUsingOurTypo: {
    lineHeight: 15,
    width: 341,
    textAlign: "left",
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    position: "absolute",
  },
  termsOfServiceChild: {
    top: 75,
    left: 117,
    width: 125,
    height: 132,
    position: "absolute",
  },
  outputOnlinepngtools21: {
    top: 91,
    left: 121,
    width: 111,
    height: 105,
    position: "absolute",
  },
  termsOfService1: {
    height: "5%",
    width: "52.78%",
    top: "25.59%",
    left: "22.78%",
    fontSize: 20,
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowRadius: 4,
  },
  acceptanceOfTerms: {
    width: "41.39%",
    top: "42.09%",
    left: "2.33%",
    fontSize: 22,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: -0.9,
  },
  useOfServices: {
    width: "30.56%",
    top: "50.31%",
    left: "4.78%",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: -0.9,
  },
  welcomeToOur: {
    width: "94.44%",
    top: "31.41%",
    fontSize: FontSize.size_smi,
    lineHeight: 14,
    color: Color.colorMediumseagreen,
    left: "3.33%",
  },
  byAccessingAnd: {
    top: "46.38%",
    left: 11,
    lineHeight: 14,
    width: 341,
    height: 55,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    color: Color.colorMediumseagreen,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    position: "absolute",
  },
  byUsingOur: {
    top: "79.38%",
    left: 14,
    color: "#131212",
    height: 82,
  },
  accountRegistrationYou: {
    height: "18.28%",
    top: "56.66%",
    left: 10,
    color: Color.colorMediumseagreen,
  },
  vectorIcon: {
    height: "15.47%",
    width: "25.53%",
    top: "7.28%",
    right: "86.81%",
    bottom: "93.25%",
    left: "3.67%",
    position: "absolute",
    overflow: "hidden"
  },
  termsOfService: {
    backgroundColor: Color.colorAntiquewhite,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default TermsOfService;
