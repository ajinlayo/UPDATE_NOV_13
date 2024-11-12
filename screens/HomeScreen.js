import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const HomeScreen = () => {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null; // You can replace this with a loading indicator if needed
  }

  const handleStatsPress = () => {
    // Navigate to Stats screen or any other screen
    navigation.navigate("Stats");
  };

  const handleAddDevicePress = () => {
    // Navigate to AddDevice screen or any other screen
    navigation.navigate("AddDevice1");
  };

  const handleDeviceStatsPress = () => {
    // Navigate to DeviceStats or any other screen
    navigation.navigate("ControlOff");
  };

  const handleInfoPress = () => {
    // Navigate to InfoPress or any other screen
    navigation.navigate("AboutUsScreen");
  };

  return (
    <View style={styles.aboutUsScreen}>
      <View style={[styles.aboutUsScreenChild, styles.aboutChildPosition]} />
      <Text style={[styles.about, styles.teamTypo]}>HOME</Text>
      <Image
        style={[styles.more3Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/more-3.png")}
      />
      <Pressable
        style={[styles.more3Icon, styles.iconLayout]}
        onPress={() => navigation.navigate("LeftPanel")}
      >
      </Pressable>
      <Image
        source={require("../assets/MyEntoLogo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      
      <Text style={styles.Text2}>MyEnto</Text>
      <Pressable style={styles.StatsContainer} onPress={handleStatsPress}>
      <Image
        source={require("../assets/stats.png")}
        style={styles.logo1}
        resizeMode="contain"
      />
      <Text style={styles.Text3}>History Data</Text>
      </Pressable>

      <Pressable style={styles.AddDeviceContainer} onPress={handleAddDevicePress}>
      <Image
        source={require("../assets/AddDevice.png")}
        style={styles.logo1}
        resizeMode="contain"
      />
      <Text style={styles.Text3}>Add Device</Text>
      </Pressable>

      <Pressable style={styles.DeviceStatsContainer} onPress={handleDeviceStatsPress}>
      <Image
        source={require("../assets/DeviceStats.png")}
        style={styles.logo1}
        resizeMode="contain"
      />
      <Text style={styles.Text3}>Device Status</Text>
      </Pressable>

      <Pressable style={styles.InfoContainer} onPress={handleInfoPress}>
      <Image
        source={require("../assets/info.png")}
        style={styles.logo1}
        resizeMode="contain"
      />
      <Text style={styles.Text3}>Information</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutChildPosition: {
    borderRadius: Border.br_xl,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  teamTypo: {
    textAlign: "center",
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  aboutUsScreenChild: {
    height: "15.78%",
    top: "-3.44%",
    bottom: "87.66%",
    backgroundColor: "#F9E2D0",
  },
  about: {
    height: "4.53%",
    width: "25.28%",
    top: "6.78%",
    left: "37.5%",
    fontSize: 28,
    color: Color.colorBlack,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
  },
  more3Icon: {
    height: "3.75%",
    width: "6.67%",
    top: "6.25%",
    right: "85.83%",
    bottom: "90%",
    left: "7.5%",
  },
  aboutUsScreen: {
    backgroundColor: Color.colorMediumseagreen,
    flex: 1,
    height: "100%",
    overflow: "hidden",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 130, // Adjust width as needed
    height: 130, // Adjust height as needed
    top: 55,
  },

  logo1: {
    width: 85, // Adjust width as needed
    height: 70, // Adjust height as needed
    bottom: 0,
  },

  Text2: {
    fontSize: 30,
    fontFamily: 'Poppins-SemiBold',
    color: "#132a17", 
    fontWeight: "900",
    top: 55,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
    letterSpacing: 2,
  },
  StatsContainer: {
    backgroundColor: "#FDFFFD",
    padding: 15,
    borderRadius: 10,
    top: 65,
    right: 63,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  StatsText: {
    fontSize: 18,
    color: Color.colorBlack,
    fontFamily: 'Poppins-SemiBold',
  },

  AddDeviceContainer: {
    backgroundColor: "#FDFFFD",
    padding: 15,
    borderRadius: 10,
    bottom: 55,
    left: 63,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  AddDeviceText: {
    fontSize: 18,
    color: Color.colorBlack,
    fontFamily: 'Poppins-SemiBold',
  },

  DeviceStatsContainer: {
    backgroundColor: "#FDFFFD",
    padding: 12,
    borderRadius: 10,
    bottom: 47,
    right: 63,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  DeviceStatsText: {
    fontSize: 18,
    color: Color.colorBlack,
    fontFamily: 'Poppins-SemiBold',
  },

  InfoContainer: {
    backgroundColor: "#FDFFFD",
    padding: 15,
    borderRadius: 10,
    bottom: 160,
    left: 63,
    paddingBottom: 13,
    paddingTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  InfoText: {
    fontSize: 18,
    color: Color.colorBlack,
    fontFamily: 'Poppins-SemiBold',
  },
  Text3: {
  fontSize: 15,
  fontFamily: "Poppins-Bold", // Apply the loaded font
  color: "#132a17", // Text color
  fontWeight: "900",
},
});

export default HomeScreen;
