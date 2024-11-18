import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for the eye icon

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const navigation = useNavigation();

  const handleLoginPress = () => {
    if (email === "" || password === "") {
      alert("Please enter both email and password.");
    } else {
      // Perform login logic, e.g., authenticate user
      console.log("Logging in with:", email, password);
      navigation.navigate("HomeScreen");
    }
  };

  const handleSignUpPress = () => {
    navigation.navigate("SignupScreen");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle the password visibility
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/MyEntoLogo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.Text2}>Welcome To MyEnto</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={!showPassword} // Use the state to determine visibility
          />
          <Pressable onPress={togglePasswordVisibility} style={styles.eyeIcon}>
            <Ionicons 
              name={showPassword ? "eye-off" : "eye"} 
              size={24} 
              color="black" 
            />
          </Pressable>
        </View>
      </View>
      
      <Pressable
        style={({ pressed }) => [
          styles.buttonContainer,
          { backgroundColor: pressed ? "#0d1f11" : "#132a17" }, // Darken when pressed
        ]}
        onPress={handleLoginPress}
      >
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      <Pressable onPress={handleSignUpPress}>
        <Text style={styles.signUpText}>Don't have an account? Sign up</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f6d4ba", // Background color of the entire screen
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: FontSize.medium,
    fontFamily: FontFamily.regular,
    borderColor: Color.border,
    borderWidth: 1,
  },
  buttonContainer: {
    backgroundColor: "#132a17", // Button background color
    paddingVertical: 6,
    paddingHorizontal: 35,
    borderRadius: 6,
    elevation: 3,
    marginTop: 16,
  },
  buttonText: {
    fontSize: 21,
    fontFamily: FontFamily.poppinsSemiBold,
    color: "#fff", // Button text color
  },
  Text2: {
    fontSize: 30,
    fontFamily: 'Poppins-SemiBold',
    color: "#3a7d44", // Button text color
    bottom: 50,
    fontWeight: '900',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 4,
  },
  logo: {
    width: 150, // Adjust width as needed
    height: 150, // Adjust height as needed
    bottom: 80,
  },
  signUpText: {
    marginTop: 20,
    fontSize: FontSize.medium,
    fontFamily: FontFamily.regular,
    color: "#132a17",
    textDecorationLine: "underline",
  },
  eyeIcon: {
    bottom: 30,
    left: 250,
    position: 'absolute',
  },
});

export default LoginScreen;
