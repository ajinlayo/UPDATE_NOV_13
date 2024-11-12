import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const AccountSettingsOption = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.accountSettingsOption2}>
      <Pressable
        style={styles.vectorIcon}
        onPress={() => navigation.navigate("LeftPanel")}
      >
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector7.png")}
        />
      </Pressable>
      <Text style={styles.username}>USERNAME</Text>
      <View
        style={[styles.accountSettingsOption2Child, styles.accountLayout1]}
      />
      <View
        style={[styles.accountSettingsOption2Item, styles.accountLayout1]}
      />
      <Text style={[styles.userInfo, styles.accountTypo]}>USER INFO</Text>
      <Text style={[styles.account, styles.accountTypo]}>ACCOUNT</Text>
      <Image
        style={[styles.layer7Icon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/layer-7.png")}
      />
      <Text style={[styles.username1, styles.emailTypo]}>USERNAME</Text>
      <Text style={[styles.email, styles.emailTypo]}>EMAIL</Text>
      <Text style={[styles.password, styles.emailTypo]}>PASSWORD</Text>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector8.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector10.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector_4.png")}
      />
      <Image
        style={[styles.accountSettingsOption2Inner, styles.accountLayout]}
        contentFit="cover"
        source={require("../assets/line-48.png")}
      />
      <Image
        style={styles.lineIcon}
        contentFit="cover"
        source={require("../assets/line-48.png")}
      />
      <Image
        style={[styles.accountSettingsOption2Child1, styles.accountLayout]}
        contentFit="cover"
        source={require("../assets/line-48.png")}
      />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("UserInfo")}
      />
      <Text style={[styles.editUserInfo, styles.emailTypo]}>
        EDIT USER INFO
      </Text>
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector_5.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  accountLayout1: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  accountTypo: {
    color: "white",
    fontSize: 18,
    top: "39.84%",
    width: "31.39%",
    height: "3.59%",
    textAlign: "center",
    fontFamily: FontFamily.poppinsExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  emailTypo: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
    fontSize: 22,
  },
  accountLayout: {
    left: "26.67%",
    right: "10.56%",
    width: "62.78%",
    height: "0.16%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
  username: {
    height: "4.53%",
    width: "45.83%",
    top: "32.97%",
    left: "27.11%",
    fontSize: 24,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  accountSettingsOption2Child: {
    height: "6.25%",
    width: "88.33%",
    top: "38.59%",
    right: "5.83%",
    bottom: "55.16%",
    left: "5.83%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 2,
      height: 6,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    backgroundColor: Color.colorSeagreen,
  },
  accountSettingsOption2Item: {
    height: "5%",
    width: "41.94%",
    top: "39.22%",
    right: "49.44%",
    bottom: "55.78%",
    left: "8.61%",
    backgroundColor: "rgba(246, 212, 186, 0.72)",
  },
  userInfo: {
    left: "13.89%",
    color: "white",
  },
  account: {
    left: "56.39%",
  },
  layer7Icon: {
    height: "13.91%",
    width: "31.89%",
    top: "18.44%",
    right: "38.06%",
    bottom: "68.75%",
    left: "35.06%",
  },
  username1: {
    top: "50.80%",
    fontSize: FontSize.size_sm,
    left: "25.83%",
    fontWeight: "600",
    color: Color.colorBlack,
  },
  email: {
    top: "59.93%",
    fontSize: FontSize.size_sm,
    left: "25.83%",
    fontWeight: "600",
    color: Color.colorBlack,
  },
  password: {
    top: "69.44%",
    fontSize: FontSize.size_sm,
    left: "25.83%",
    fontWeight: "600",
    color: Color.colorBlack,
  },
  vectorIcon1: {
    height: "4.89%",
    width: "9.22%",
    top: "69.03%",
    right: "78.06%",
    bottom: "28.28%",
    left: "14.72%",
  },
  vectorIcon2: {
    height: "1.47%",
    width: "3.22%",
    top: "51.81%",
    right: "82.56%",
    bottom: "46.72%",
    left: "15.22%",
  },
  vectorIcon3: {
    height: "3.61%",
    width: "11.14%",
    top: "50.86%",
    right: "77.97%",
    bottom: "45.53%",
    left: "13.89%",
  },
  vectorIcon4: {
    height: "1.91%",
    width: "6.56%",
    top: "50%",
    right: "80.25%",
    bottom: "48.69%",
    left: "16.19%",
  },
  accountSettingsOption2Inner: {
    top: "57.34%",
    bottom: "42.5%",
    opacity: 30,
  },
  lineIcon: {
    top: "66.36%",
    right: "10.58%",
    bottom: "33.48%",
    left: "26.64%",
    width: "62.78%",
    height: "0.16%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    opacity: 28,
  },
  accountSettingsOption2Child1: {
    top: "74.84%",
    bottom: "25%",
  },
  rectanglePressable: {
    height: "6.72%",
    width: "59.17%",
    top: "82.97%",
    right: "20.28%",
    bottom: "10.31%",
    left: "20.56%",
    borderRadius: 15,
    backgroundColor: "#132A17",
    position: "absolute",
  },
  editUserInfo: {
    top: "84.23%",
    left: "28.22%",
    fontSize: 16,
    color: "white",
  },
  vectorIcon5: {
    height: "3.44%",
    width: "10.06%",
    top: "60.47%",
    right: "77.5%",
    bottom: "36.09%",
    left: "14.44%",
  },
  accountSettingsOption2: {
    backgroundColor: Color.colorMediumseagreen,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default AccountSettingsOption;
