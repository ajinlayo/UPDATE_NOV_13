import * as React from "react";
import { StyleSheet, View, Text, TextInput, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";
import { Ionicons } from '@expo/vector-icons'; // Ensure you have this package installed

const SignupScreen = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordVisible, setPasswordVisible] = React.useState(false); // New state for password visibility
  const navigation = useNavigation();

  const handleSignUpPress = () => {
    if (username === "" || email === "" || password === "") {
      alert("Please enter username, email, and password.");
    } else {
      console.log("Signing up with:", username, email, password);
      // Example: navigate to AccountSucc upon successful signup
      navigation.navigate("AccountSucc");
    }
  };

  const handleLoginPress = () => {
    navigation.navigate("LoginScreen");
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
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
          autoCapitalize="none"
        />
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
            secureTextEntry={!passwordVisible} // Use the visibility state
          />
          <Pressable onPress={() => setPasswordVisible(!passwordVisible)} style={styles.eyeIcon}>
            <Ionicons 
              name={passwordVisible ? "eye-off" : "eye"} 
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
        onPress={handleSignUpPress}
      >
        <Text style={styles.buttonText}>Sign up</Text>
      </Pressable>

      <Pressable onPress={handleLoginPress}>
        <Text style={styles.signUpText}>Already have an account? Log in</Text>
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
    fontFamily: 'Poppins-SemiBold',
    color: "#fff", // Button text color
  },
  Text2: {
    fontSize: 30,
    fontFamily: 'Poppins-SemiBold',
    color: "#3a7d44", // Text color
    bottom: 50,
    fontWeight: "900",
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
    bottom: 30.5,
    left: 250,
    position: 'absolute',
  }
});

export default SignupScreen;
