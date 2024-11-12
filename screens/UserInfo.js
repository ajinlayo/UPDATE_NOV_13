import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, Border, FontFamily } from "../GlobalStyles";

const UserInfo = () => {
  const navigation = useNavigation();

  // State to hold user input values
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.userInfo}>
      <Pressable
        style={styles.vectorIcon}
        onPress={() => navigation.navigate("AccountSettingsOption")}
      >
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector7.png")}
        />
      </Pressable>
      <View style={styles.userInfoChild} />
      <Text style={[styles.editUserInfoItem, styles.editUserInfoTypo]}>
        EDIT USER INFO
      </Text>
      <View style={[styles.userInfoItem, styles.userShadowBox]} />
      <View style={[styles.userInfoInner, styles.userShadowBox]} />
      <View style={[styles.rectangleView, styles.userShadowBox]} />
      <Text style={[styles.username, styles.emailTypo]}>USERNAME</Text>
      <Text style={[styles.email, styles.emailTypo]}>EMAIL</Text>
      <Text style={[styles.password, styles.emailTypo]}>PASSWORD</Text>
      <View style={styles.userInfoChild1} />
      <TextInput
        style={[styles.userInfoItem, styles.userShadowBox]}
        placeholder="Enter Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={[styles.userInfoInner, styles.userShadowBox]}
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.rectangleView, styles.userShadowBox]}
        placeholder="Enter Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      
      <View style={styles.userInfoChild1} />
      <Pressable
        style={styles.saveChanges}
        onPress={() => navigation.navigate("AccountSettingsOption")}
      >
        <Text style={[styles.saveChanges1, styles.editUserInfo]}>
          SAVE CHANGES
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  editUserInfoTypo: {
    textAlign: "center",
    fontSize: 24,
    fontFamily: FontFamily.poppinsExtraBold,
    fontWeight: "800",
    color: Color.colorDarkslategray,
    position: "absolute",
  },
  userShadowBox: {
    borderWidth: 1,
    borderColor: Color.colorSeagreen,
    borderStyle: "solid",
    left: "13.06%",
    right: "9.17%",
    width: "77.78%",
    borderRadius: Border.br_xl,
    shadowOpacity: 8,
    elevation: 4,
    shadowRadius: 6,
    shadowOffset: {
      width: 4,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: "6.25%",
    position: "absolute",
    paddingHorizontal: 10,
  },
  emailTypo: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontFamily: FontFamily.poppinsExtraBold,
    fontWeight: "800",
    position: "absolute",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
  },
  vectorIcon: {
    height: "15.47%",
    width: "25.53%",
    top: "7.28%",
    right: "86.81%",
    bottom: "93.25%",
    left: "3.67%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  userInfoChild: {
    width: "88.33%",
    top: "18.19%",
    right: "5.83%",
    bottom: "81.56%",
    left: "5.83%",
    position: "absolute",
    backgroundColor: Color.colorSeagreen,
    borderRadius: Border.br_xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    height: "6.25%",
    position: "absolute",
  },
  editUserInfo: {
    width: "75.83%",
    top: "4.54%",
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: 20,
    height: "65.53%",
    color: "#fffafa",
  },
  editUserInfoItem: {
    width: "75.83%",
    top: "18.54%",
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: 20,
    height: "65.53%",
    left: 40,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
    letterSpacing: 1.5,
  },
  userInfoItem: {
    top: "34.84%",
    bottom: "63.91%",
    fontSize: FontSize.size_mini,
    height: "3.59%",
  },
  userInfoInner: {
    top: "47.81%",
    bottom: "50.94%",
    fontSize: FontSize.size_mini,
    height: "3.59%",
  },
  rectangleView: {
    top: "61.5%",
    bottom: "36.25%",
    fontSize: FontSize.size_mini,
    height: "3.59%",
  },
  username: {
    top: "30.4%",
    left: "6.11%",
    fontSize: FontSize.size_mini,
    width: "31.39%",
    height: "3.59%",
    color: "white",
  },
  email: {
    top: "42.88%",
    left: "0%",
    fontSize: FontSize.size_mini,
    width: "31.39%",
    height: "3.59%",
  },
  password: {
    top: "55.88%",
    left: "6.11%",
    fontSize: FontSize.size_mini,
    width: "31.39%",
    height: "3.59%",
  },
  userInfoChild1: {
    height: "6.72%",
    width: "59.17%",
    top: "81.88%",
    right: "18.06%",
    bottom: "11.41%",
    left: "22.78%",
    borderRadius: 15,
    backgroundColor: "#132A17",
    position: "absolute",
  },
  saveChanges1: {
    width: "45.83%",
    top: "54.84%",
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: 22,
    height: "35.53%",
  },
  saveChanges: {
    width: "59.17%",
    height: "6.72%",
    top: "81.88%",
    left: "22.78%",
    backgroundColor: Color.colorDarkslategray,
    borderRadius: Border.br_mini,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  userInfo: {
    backgroundColor: Color.colorMediumseagreen,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default UserInfo;