import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const PrivacyPolicy = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.privacyPolicy}>
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
        style={styles.privacyPolicyChild}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={styles.outputOnlinepngtools21}
        contentFit="cover"
        source={require("../assets/outputonlinepngtools-2-1.png")}
      />
      <Text style={styles.privacyPolicy1}>PRIVACY POLICY</Text>
      <Text style={[styles.informationWeCollect, styles.howWeUseTypo]}>
        Information we collect
      </Text>
      <Text style={[styles.howWeUse, styles.howWeUseTypo]}>
        How we use information
      </Text>
      <Text style={styles.weAreCommitted}>
        We are committed to protecting the privacy and personal information of
        users who engage with our mobile application and use our device designed
        to detect rice ear bugs. This privacy policy outlines our practices
        regarding the collection, use, and protection of personal information in
        compliance with relevant privacy laws and regulations.
      </Text>
      <Text
        style={[styles.personalInformationThis, styles.theUseOfTypo]}
      >{`Personal Information: This may include names, email, and other identifiers necessary for providing our services.

Data: Images captured by the device and detection results.`}</Text>
      <Text
        style={[styles.theUseOf, styles.theUseOfTypo]}
      >{`The use of data collection is for the following purposes:

To protect the user’s data history upon logging in/out.

To provide a statistics and report about the rice ear bugs detected.`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  howWeUseTypo: {
    color: Color.colorBlack,
    fontSize: 18,
    height: "3.28%",
    width: "73.54%",
    left: 8,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    position: "absolute",
  },
  theUseOfTypo: {
    width: 341,
    height: 119,
    textAlign: "left",
    lineHeight: 15,
    fontSize: FontSize.size_xs,
    color: Color.colorMediumseagreen,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    position: "absolute",
  },
  privacyPolicyChild: {
    top: 75,
    left: 117,
    width: 125,
    height: 132,
    position: "absolute",
  },
  outputOnlinepngtools21: {
    top: 91,
    left: 122,
    width: 113,
    height: 105,
    position: "absolute",
  },
  privacyPolicy1: {
    width: 245,
    height: 185,
    top: "25.75%",
    left: "27.22%",
    fontSize: 20,
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowRadius: 4,
    textAlign: "center",
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    width: "45.56%",
    position: "absolute",
  },
  informationWeCollect: {
    top: "51.09%",
    left: "2.22%",
    width: "45.56%",
    fontSize: 28,
    height: "3.28%",
  },
  howWeUse: {
    width: "47.5%",
    top: "70.16%",
    left: "3.06%",
  },
  weAreCommitted: {
    width: "94.44%",
    height: "auto",
    top: "31.41%",
    left: "3.33%",
    fontSize: 15,
    lineHeight: 16,
    color: Color.colorMediumseagreen,
    textAlign: "center",
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    position: "absolute",
  },
  personalInformationThis: {
    top: "55.38%",
    left: 11,
    height: 105,
    fontSize: 17,
  },
  theUseOf: {
    top: "74.84%",
    left: 12,
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
  privacyPolicy: {
    backgroundColor: Color.colorAntiquewhite,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default PrivacyPolicy;
