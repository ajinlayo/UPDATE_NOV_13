import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const LogOut = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.logOut}>
      <View style={styles.logOutChild} />
      <View style={styles.logOutChild} />
      <Text style={[styles.home, styles.homeTypo]}>HOME</Text>
      <Image
        style={[styles.more2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/more-3.png")}
      />
      <View style={[styles.button, styles.buttonShadowBox2]}>
        <View style={[styles.buttonChild, styles.buttonChildPosition]} />
        <Text style={[styles.getStarted, styles.getTypo4]}>Get Started</Text>
        <Text style={[styles.getStarted1, styles.getTypo4]} />
      </View>
      <View style={[styles.button1, styles.buttonShadowBox1]}>
        <View style={[styles.buttonChild, styles.buttonChildPosition]} />
        <Text style={[styles.getStarted2, styles.getTypo3]}>Get Started</Text>
        <Text style={[styles.getStarted3, styles.getTypo3]} />
      </View>
      <View style={[styles.button2, styles.buttonPosition]}>
        <View style={[styles.buttonChild, styles.buttonChildPosition]} />
        <Text style={[styles.getStarted2, styles.getTypo3]}>Get Started</Text>
        <Text style={[styles.getStarted3, styles.getTypo3]} />
      </View>
      <View style={[styles.button3, styles.buttonShadowBox]}>
        <View style={[styles.buttonChild, styles.buttonChildPosition]} />
        <Text style={[styles.getStarted2, styles.getTypo3]}>Get Started</Text>
        <Text style={[styles.getStarted3, styles.getTypo3]} />
      </View>
      <View style={[styles.button4, styles.buttonShadowBox]}>
        <View style={[styles.buttonChild, styles.buttonChildPosition]} />
        <Text style={[styles.getStarted2, styles.getTypo3]}>Get Started</Text>
        <Text style={[styles.getStarted3, styles.getTypo3]} />
      </View>
      <View style={[styles.button5, styles.buttonShadowBox]}>
        <View style={[styles.buttonChild, styles.buttonChildPosition]} />
        <Text style={[styles.getStarted2, styles.getTypo3]}>Get Started</Text>
        <Text style={[styles.getStarted3, styles.getTypo3]} />
      </View>
      <View style={[styles.button6, styles.buttonPosition3]}>
        <View style={[styles.buttonChild3, styles.buttonChildPosition]} />
        <Text style={[styles.getStarted12, styles.getTypo2]}>Get Started</Text>
        <Text style={[styles.getStarted13, styles.getTypo2]} />
      </View>
      <Text style={[styles.aboutRiceEar, styles.logOut2Typo]}>
        ABOUT RICE EAR BUGS
      </Text>
      <Text style={[styles.inTheAgricultural, styles.homeTypo]}>
        In the agricultural industry, farms encounter pests such as rice ear
        bugs that cause infestation during a crucial rice grown stage, affecting
        the farmers' rice production and profits. This alarming figure not only
        threatens the economic viability of farmers but also severely impacts
        overall productivity. Among the pests causing the most significant
        issues is the atangya or rice ear bugs, whose needle-like mouthparts
        damage new leaves, tender stems, and developing grains.
      </Text>
      <Image
        style={[styles.logOutInner, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.outputOnlinepngtools22, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/outputonlinepngtools-2-2.png")}
      />
      <Text style={[styles.myento, styles.myentoText]}>MyEnto</Text>
      <View style={[styles.button7, styles.button7Layout]}>
        <Image
          style={[styles.rectangleIcon, styles.buttonChildPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-1.png")}
        />
        <Text style={[styles.getStarted14, styles.getTypo1]}>Get Started</Text>
        <Text style={[styles.getStarted15, styles.getTypo1]} />
      </View>
      <Text style={[styles.historyData, styles.usernameTypo]}>
        History Data
      </Text>
      <Text style={[styles.deviceStatus, styles.usernameTypo]}>
        Device Status
      </Text>
      <Text style={[styles.addDevice, styles.addDeviceTypo]}>Add Device</Text>
      <Text style={[styles.information, styles.addDeviceTypo]}>
        Information
      </Text>
      <Image
        style={[styles.dicons, styles.diconsPosition]}
        contentFit="cover"
        source={require("../assets/AddDevice.png")}
      />
      <Image
        style={[styles.dicons1, styles.diconsPosition]}
        contentFit="cover"
        source={require("../assets/info.png")}
      />
      <Image
        style={[styles.dicons2, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/DeviceStats.png")}
      />
      <View style={styles.button8}>
        <View style={[styles.buttonChild4, styles.childBg]} />
        <Text style={[styles.getStarted16, styles.getTypo]}>Get Started</Text>
        <Text style={[styles.getStarted17, styles.getTypo]}>Get Started</Text>
      </View>
      <Image
        style={[styles.vectorIcon, styles.vectorIconPosition1]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <Text style={[styles.username, styles.usernameTypo]}>USERNAME</Text>
      <Text style={[styles.information1, styles.settingsTypo]}>
        INFORMATION
      </Text>
      <Text style={[styles.settings, styles.settingsTypo]}>SETTINGS</Text>
      <Text style={[styles.privacyPolicy, styles.accountTypo]}>
        PRIVACY POLICY
      </Text>
      <Text style={[styles.termsOfService, styles.accountTypo]}>
        TERMS OF SERVICE
      </Text>
      <Text style={[styles.account, styles.accountTypo]}>ACCOUNT</Text>
      <Text style={styles.logOut1}>LOG OUT</Text>
      <Pressable
        style={styles.addButton}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <Text style={styles.addButtonText}>LOG OUT</Text>
      </Pressable>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconPosition1]}
        contentFit="cover"
        source={require("../assets/information.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconPosition1]}
        contentFit="cover"
        source={require("../assets/settings.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/logout.png")}
      />
      <Image
        style={[styles.layer2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/layer-3.png")}
      />
      <Image
        style={[styles.lockedFilesIcon, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/07-locked-files.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector13.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector12.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.logOut2Position]}
        contentFit="cover"
        source={require("../assets/ellipse-31.png")}
      />
      <Image
        style={[styles.outputOnlinepngtools23, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/outputonlinepngtools-2-21.png")}
      />
      <Image
        style={[styles.logOutChild1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-13.png")}
      />
      <Text style={[styles.areYouSure, styles.homeTypo]}>
        Are you sure you want to log out?
      </Text>
      <Pressable
        style={[styles.vector, styles.vectorIconLayout]}
        onPress={() => navigation.navigate("LeftPanel")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/vector6.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  homeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  buttonShadowBox2: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  buttonChildPosition: {
    borderRadius: Border.br_4xs,
    left: "0%",
    right: "0%",
    top: "0%",
    bottom: "0%",
    height: "100%",
    width: "100%",
  },
  getTypo4: {
    display: "none",
    fontSize: FontSize.size_lg,
    left: "20%",
    top: "26.18%",
    width: "60.38%",
    height: "49.24%",
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  buttonShadowBox1: {
    left: "51.11%",
    right: "16.39%",
    width: "32.5%",
    height: "15.94%",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  getTypo3: {
    width: "60.34%",
    height: "49.22%",
    display: "none",
    fontSize: FontSize.size_lg,
    left: "20%",
    top: "26.18%",
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  buttonPosition: {
    bottom: "29.69%",
    top: "54.38%",
  },
  buttonShadowBox: {
    left: "15.28%",
    right: "52.22%",
    width: "32.5%",
    height: "15.94%",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  buttonPosition3: {
    left: "9.72%",
    top: "72.03%",
    width: "80.56%",
    right: "9.72%",
  },
  getTypo2: {
    top: "26%",
    height: "49%",
    display: "none",
    fontSize: FontSize.size_lg,
    left: "20%",
    width: "60.38%",
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  logOut2Typo: {
    color: Color.colorMediumseagreen,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  ellipseIconLayout: {
    width: "23.06%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  myentoText: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
  },
  button7Layout: {
    width: "23.61%",
    left: "19.72%",
  },
  getTypo1: {
    top: "26.13%",
    width: "60.35%",
    height: "49.25%",
    display: "none",
    fontSize: FontSize.size_lg,
    left: "20%",
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  usernameTypo: {
    color: Color.colorSeagreen,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  addDeviceTypo: {
    left: "55.56%",
    color: Color.colorSeagreen,
    height: "2.81%",
    width: "23.61%",
    fontSize: FontSize.size_smi,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  diconsPosition: {
    left: "57.78%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  childBg: {
    backgroundColor: "#132A17",
    position: "absolute",
  },
  getTypo: {
    top: "26.15%",
    height: "49.22%",
    display: "none",
    fontSize: FontSize.size_lg,
    left: "20%",
    width: "60.38%",
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  vectorIconPosition1: {
    left: "6.39%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  settingsTypo: {
    color: "white",
    fontSize: FontSize.size_mid,
    left: "17.78%",
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  accountTypo: {
    left: "24.17%",
    color: "white",
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontSize: 16,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  vectorIconPosition: {
    right: "77.78%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  logOut2Position: {
    left: "26.94%",
    position: "absolute",
  },
  vectorIconLayout: {
    width: "4.17%",
    height: "2.5%",
  },
  logOutChild: {
    height: "15.78%",
    top: "-3.12%",
    right: "0.28%",
    bottom: "87.34%",
    left: "-0.28%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorAntiquewhite,
    position: "absolute",
    width: "100%",
  },
  home: {
    width: "25.28%",
    top: "6.25%",
    color: Color.colorBlack,
    fontSize: FontSize.size_lgi,
    left: "38.06%",
    height: "4.53%",
  },
  more2Icon: {
    height: "3.75%",
    width: "6.67%",
    top: "6.56%",
    right: "86.11%",
    bottom: "89.69%",
    left: "7.22%",
    maxWidth: "100%",
  },
  buttonChild: {
    backgroundColor: Color.colorGray_100,
    position: "absolute",
  },
  getStarted: {
    color: Color.colorBlack,
  },
  getStarted1: {
    color: Color.colorSnow_100,
  },
  button: {
    height: "26.56%",
    bottom: "1.41%",
    left: "9.72%",
    top: "72.03%",
    width: "80.56%",
    right: "9.72%",
  },
  getStarted2: {
    color: Color.colorBlack,
  },
  getStarted3: {
    color: Color.colorSnow_100,
  },
  button1: {
    bottom: "46.88%",
    top: "37.19%",
  },
  button2: {
    left: "51.11%",
    right: "16.39%",
    width: "32.5%",
    height: "15.94%",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  button3: {
    bottom: "46.88%",
    top: "37.19%",
  },
  button4: {
    bottom: "46.88%",
    top: "37.19%",
  },
  button5: {
    bottom: "29.69%",
    top: "54.38%",
  },
  buttonChild3: {
    backgroundColor: Color.colorPeachpuff_100,
    position: "absolute",
  },
  getStarted12: {
    color: Color.colorBlack,
  },
  getStarted13: {
    color: Color.colorSnow_100,
  },
  button6: {
    bottom: "24.84%",
    height: "3.13%",
    position: "absolute",
  },
  aboutRiceEar: {
    width: "41.39%",
    left: "29.17%",
    fontSize: FontSize.size_smi,
    color: Color.colorMediumseagreen,
    height: "3.13%",
    top: "72.03%",
    position: "absolute",
  },
  inTheAgricultural: {
    height: "18.13%",
    width: "78.33%",
    top: "75.16%",
    left: "10.83%",
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
  },
  logOutInner: {
    height: "14.22%",
    width: "25.83%",
    top: "14.84%",
    right: "36.11%",
    bottom: "70.94%",
    left: "38.06%",
  },
  outputOnlinepngtools22: {
    height: "11.25%",
    top: "16.56%",
    right: "38.06%",
    bottom: "72.19%",
    left: "38.89%",
    position: "absolute",
  },
  myento: {
    height: "5%",
    width: "45.56%",
    top: "29.06%",
    left: "28.06%",
    fontSize: FontSize.size_8xl,
    letterSpacing: 4.3,
    color: Color.colorDarkslategray,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  rectangleIcon: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  getStarted14: {
    color: Color.colorBlack,
  },
  getStarted15: {
    color: Color.colorSnow_100,
  },
  button7: {
    height: "12.5%",
    top: "37.5%",
    right: "56.67%",
    bottom: "50%",
    left: "19.72%",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  historyData: {
    top: "49.06%",
    height: "2.81%",
    color: Color.colorSeagreen,
    fontSize: FontSize.size_smi,
    left: "19.72%",
    width: "23.61%",
  },
  deviceStatus: {
    width: "27.5%",
    left: "18.61%",
    top: "65.94%",
    height: "2.81%",
    color: Color.colorSeagreen,
    fontSize: FontSize.size_smi,
  },
  addDevice: {
    top: "49.06%",
  },
  information: {
    top: "65.94%",
    color: "white",
  },
  dicons: {
    height: "8.91%",
    width: "19.44%",
    top: "38.91%",
    right: "22.78%",
    bottom: "52.19%",
  },
  dicons1: {
    height: "11.56%",
    width: "20%",
    right: "22.22%",
    bottom: "33.59%",
    top: "54.84%",
  },
  dicons2: {
    height: "13.44%",
    width: "23.89%",
    right: "56.39%",
    bottom: "31.72%",
    top: "54.84%",
    left: "19.72%",
  },
  buttonChild4: {
    borderRadius: Border.br_4xs,
    left: "0%",
    right: "0%",
    top: "0%",
    bottom: "0%",
    height: "100%",
    width: "100%",
    color: "#132A17",
  },
  getStarted16: {
    color: Color.colorBlack,
  },
  getStarted17: {
    color: Color.colorSnow_100,
  },
  button8: {
    height: "100.63%",
    top: "-0.62%",
    right: "20.83%",
    left: "-1.39%",
    bottom: "0%",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: "80.56%",
    position: "absolute",
  },
  vectorIcon: {
    top: "3.59%",
    right: "89.44%",
    bottom: "93.91%",
    width: "4.17%",
    height: "2.5%",
  },
  username: {
    top: "28%",
    left: "23.89%",
    fontSize: 24,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
  },
  information1: {
    top: "39.06%",
  },
  settings: {
    top: "48.44%",
  },
  privacyPolicy: {
    top: "54.38%",
  },
  termsOfService: {
    top: "59.06%",
  },
  account: {
    top: "63.26%",
    color: "white",
  },
  logOut1: {
    top: "71.56%",
    color: Color.colorWhite,
    fontSize: 22,
    left: "17.78%",
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  vectorIcon1: {
    height: "5.31%",
    width: "10.89%",
    top: "38.44%",
    right: "84.72%",
    bottom: "56.25%",
  },
  vectorIcon2: {
    height: "4.84%",
    width: "10.61%",
    top: "47.81%",
    right: "85%",
    bottom: "47.34%",
  },
  vectorIcon3: {
    width: "8.94%",
    top: "71.41%",
    right: "85.83%",
    bottom: "24.06%",
    left: "7.22%",
    maxWidth: "100%",
    height: "4.53%",
  },
  layer2Icon: {
    height: "1.09%",
    width: "2.5%",
    top: "49.84%",
    right: "54.72%",
    bottom: "49.06%",
    left: "42.78%",
  },
  logOutChild1: {
    height: "24.69%",
    width: "85%",
    top: "38.59%",
    right: "6.39%",
    bottom: "36.72%",
    left: "8.61%",
    borderRadius: 15,
  },
  lockedFilesIcon: {
    width: "4.72%",
    bottom: "42.5%",
    left: "17.5%",
    height: "3.13%",
    top: "54.38%",
  },
  vectorIcon4: {
    width: "4.44%",
    top: "59.53%",
    bottom: "37.66%",
    left: "17.78%",
    right: "77.78%",
    height: "2.81%",
  },
  vectorIcon5: {
    top: "63.38%",
    bottom: "33.13%",
    left: "18.06%",
    width: "5.17%",
    height: "2.5%",
  },
  ellipseIcon: {
    height: "13.59%",
    top: "15.16%",
    left: "10%",
    right: "50%",
    bottom: "71.25%",
    width: "28.06%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  outputOnlinepngtools23: {
    height: "10.78%",
    width: "24.28%",
    top: "16.88%",
    right: "51.94%",
    bottom: "72.34%",
    left: "27.78%",
  },
  areYouSure: {
    height: "6.69%",
    width: "68.06%",
    top: "44.22%",
    left: "16.39%",
    lineHeight: 22,
    color: Color.colorBlack,
    fontSize: FontSize.size_lgi,
  },
  logOutChild2: {
    height: "6.72%",
    width: "59.17%",
    top: "53.75%",
    right: "20.56%",
    bottom: "39.53%",
    left: "20.28%",
    borderRadius: 15,
  },
  logOut2: {
    width: "45.83%",
    top: "54.84%",
    color: Color.colorMediumseagreen,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_lgi,
    height: "4.53%",
  },
  icon: {
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  vector: {
    left: "86.11%",
    top: "40.63%",
    bottom: "56.88%",
    right: "9.72%",
    height: "2.5%",
    position: "absolute",
  },
  logOut: {
    backgroundColor: Color.colorMediumseagreen,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
addButton: {
  position: 'absolute',
  top: 420, // Adjust this value as needed
  left: 125,
  width: 120,
  paddingVertical: 10,
  paddingHorizontal: 10, // Adjusted to a positive value
  backgroundColor: "#132A17",
  borderRadius: 10,
  elevation: 10, // Increased elevation for placing in front
  zIndex: 10, // Adjust zIndex for stacking order
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },
});

export default LogOut;
