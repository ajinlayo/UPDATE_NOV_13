import React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const SplashScreen = () => {
  const navigation = useNavigation();

  const handleGetStartedPress = () => {
    // Navigate to LoginScreen
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/MyEntoLogo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Pressable
        style={({ pressed }) => [
          styles.buttonContainer,
          { backgroundColor: pressed ? "#0d1f11" : "#132a17" }, // Darken when pressed
        ]}
        onPress={handleGetStartedPress}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8ad499", // Background color of the entire screen
  },
  logo: {
    width: 300, // Adjust width as needed
    height: 300, // Adjust height as needed
    marginBottom: 20, // Example spacing
  },
  buttonContainer: {
    backgroundColor: "#132a17", // Button background color
    paddingVertical: 20,
    paddingHorizontal: 49,
    borderRadius: 6,
    elevation: 3,
  },
  buttonText: {
    fontSize: 21,
    fontFamily: FontFamily.poppinsSemiBold,
    color: "#fff", // Button text color
  },
});

export default SplashScreen;
