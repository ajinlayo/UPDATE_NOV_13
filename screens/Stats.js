import * as React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button, Alert, Dimensions, Image, Pressable } from 'react-native';
import { Border, FontSize, FontFamily, Color } from '../GlobalStyles';
import { useNavigation } from '@react-navigation/native';
import { BarChart } from 'react-native-chart-kit';
import axios from "axios";

const Stats = () => {
  const navigation = useNavigation();

  const handleGetStartedPress = () => {
    // Navigate to Details
    navigation.navigate('Details');
  };

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Number of Atangya Detected',
        data: [],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://production-myentobackend.onrender.com/api/v1/auth/get-all-results"
      );
      console.log("Fetched data:", response.data);

      if (response.data.success) {
        const detections = response.data.detections;

        // Prepare labels and data for the chart (Only Time)
        const labels = detections.map((detection) => {
          const time = new Date(detection.createdAt);
          return time.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true, // 12-hour format with AM/PM
          });
        });
        const panicleCounts = detections.map(
          (detection) => detection.numberOfPanicles
        );
        const bugCounts = detections.map(
          (detection) => detection.numberOfBugs
        );

        // Update chart data with time-based labels
        setChartData({
          labels: labels,
          datasets: [
            {
              data: bugCounts,
              color: "rgba(0, 122, 255)", // Blue bars for Bugs
              label: "Bugs",
            },
            {
              data: panicleCounts,
              color: "rgba(255, 99, 132)", // Red bars for Panicles
              label: "Panicles",
            },
          ],
        });
      } else {
        console.error("API returned a success false response.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refreshData = () => {
    // Update the data here, for demonstration using random values
    const newData = chartData.datasets[0].data.map(() => Math.floor(Math.random() * 20));
    setChartData({
      ...chartData,
      datasets: [{
        ...chartData.datasets[0],
        data: newData
      }]
    });
  };

  const screenWidth = Dimensions.get('window').width 

  return (
    <View style={styles.statistics}>
      <View style={styles.statisticsChild} />
      <View style={[styles.statisticsItem, styles.statisticsLayout]} />
      <Text style={styles.historyData}>HISTORY DATA</Text>
      <View style={styles.chartContainer}>
      <BarChart
        data={chartData}
        width={screenWidth - 20}  
        height={300}  
        yAxisLabel=""
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: { borderRadius: 20 },
        }}
        style={styles.chart}
        />
        </View>
        <View style={styles.refreshButton}>
        <Button title="Refresh Data" onPress={refreshData} />
      </View>
      {/* <View style={[styles.button, styles.buttonShadowBox1]}>
        <View style={[styles.buttonChild, styles.buttonPosition]} />
        <Text style={[styles.getStarted, styles.getTypo1]}>Get Started</Text>
        <Text style={[styles.getStarted1, styles.getTypo1]}>Get Started</Text>
      </View> */}
      <View style={styles.groupParent}>
        <View style={[styles.groupContainer, styles.groupPosition]}>
          <View style={[styles.groupWrapper, styles.groupWrapperPosition]}>
            <View style={[styles.groupFrame, styles.t1Layout]}>
              <View style={[styles.groupFrame, styles.t1Layout]}>
                <View style={styles.groupChildPosition6} />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.groupView, styles.groupPosition1]}>
          <View style={[styles.groupWrapper1, styles.groupWrapperPosition]}>
            <View style={[styles.groupFrame, styles.t1Layout]}>
              <View style={[styles.groupFrame, styles.t1Layout]}>
                <View style={styles.groupChildPosition6} />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.groupParent1, styles.groupPosition]}>
          <View style={[styles.groupWrapper1, styles.groupWrapperPosition]}>
            <View style={[styles.groupFrame, styles.t1Layout]}>
              <View style={[styles.groupFrame, styles.t1Layout]}>
                <View style={styles.groupChildPosition6} />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.groupParent2, styles.groupPosition1]}>
          <View style={[styles.groupWrapper1, styles.groupWrapperPosition]}>
            <View style={[styles.groupFrame, styles.t1Layout]}>
              <View style={[styles.groupFrame, styles.t1Layout]}>
                <View style={styles.groupChildPosition6} />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.groupParent3, styles.groupParentLayout]}>
          <View style={[styles.groupWrapper7, styles.groupPosition2]}>
            <View style={[styles.groupFrame, styles.t1Layout]}>
              <View style={[styles.groupFrame, styles.t1Layout]}>
                <View style={styles.groupChildPosition6} />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.groupParent4, styles.groupParentLayout]}>
          <View style={[styles.groupWrapper7, styles.groupPosition2]}>
            <View style={[styles.groupFrame, styles.t1Layout]}>
              <View style={[styles.groupFrame, styles.t1Layout]}>
                <View style={styles.groupChildPosition6} />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.groupParent5, styles.groupParentLayout]}>
          <View style={[styles.groupWrapper7, styles.groupPosition2]}>
            <View style={[styles.groupFrame, styles.t1Layout]}>
              <View style={[styles.groupFrame, styles.t1Layout]}>
                <View style={styles.groupChildPosition6} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.groupParent6}>
          <View style={[styles.groupParent7, styles.groupParentPosition]}>
            <View style={[styles.groupFrame, styles.t1Layout]}>
              <View style={styles.groupChildPosition6} />
            </View>
          </View>
          <View style={[styles.groupParent8, styles.groupParentPosition]}>
            <View style={[styles.groupFrame, styles.t1Layout]}>
              <View style={styles.groupChildPosition6} />
            </View>
          </View>
          <View style={[styles.groupParent9, styles.groupParentPosition]}>
            <View style={[styles.groupFrame, styles.t1Layout]}>
              <View style={[styles.groupFrame, styles.t1Layout]}>
                <View style={styles.groupChildPosition6} />
              </View>
            </View>
          </View>
          <View style={[styles.groupParent10, styles.groupParentPosition]}>
            <View style={[styles.groupFrame, styles.t1Layout]}>
              <View style={styles.groupChildPosition6} />
            </View>
            <View style={[styles.groupFrame, styles.t1Layout]}>
              <View style={styles.groupChildPosition6} />
            </View>
          </View>
        </View>
        <View style={[styles.rectangleParent, styles.rectangleParentPosition]}>
          <View style={[styles.groupChild10, styles.groupChildPosition5]} />
          <View style={[styles.groupChild11, styles.groupChildPosition5]} />
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleParentPosition]}>
          <View style={[styles.groupChild12, styles.groupChildPosition4]} />
          <View style={[styles.groupChild13, styles.groupChildPosition4]} />
        </View>
        <View style={[styles.rectangleParent1, styles.rectangleParentPosition]}>
          <View style={[styles.groupChild14, styles.groupChildPosition3]} />
          <View style={[styles.groupChild15, styles.groupChildPosition3]} />
        </View>
        <View style={[styles.rectangleParent2, styles.rectangleParentPosition]}>
          <View style={[styles.groupChild10, styles.groupChildPosition5]} />
          <View style={[styles.groupChild11, styles.groupChildPosition5]} />
        </View>
        <View style={[styles.rectangleParent3, styles.rectangleParentPosition]}>
          <View style={[styles.groupChild18, styles.groupChildPosition2]} />
          <View style={[styles.groupChild19, styles.groupChildPosition2]} />
        </View>
        <View style={[styles.rectangleParent4, styles.rectangleParentPosition]}>
          <View style={[styles.groupChild20, styles.groupChildPosition1]} />
          <View style={[styles.groupChild21, styles.groupChildPosition1]} />
        </View>
        <View style={[styles.rectangleParent5, styles.rectangleParentPosition]}>
          <View style={[styles.groupChild22, styles.groupChildPosition]} />
          <View style={[styles.groupChild23, styles.groupChildPosition]} />
        </View>
      </View>
      <View style={[styles.statisticsInner, styles.statisticsPosition]} />
      <View style={[styles.statisticsChild1, styles.statisticsPosition]} />
      <View style={[styles.statisticsChild2, styles.buttonShadowBox1]} />
      <View style={[styles.statisticsChild47, styles.statisticsLayout]} />
      <Image
        style={[styles.homeIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/home.png")}
      />
          <Pressable
        style={[styles.homeIcon, styles.iconPosition]}
        onPress={() => navigation.navigate("HomeScreen")}
      >
      </Pressable>
      <Pressable
        style={styles.vectorIconPNG}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Image
          style={styles.vectorIconPNG}
          contentFit="cover"
          source={require("../assets/vector7.png")}
        />
      </Pressable>
      <Image
        style={[styles.vectorIcon2, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Pressable
        style={[styles.vectorIcon2, styles.iconPosition]}
        onPress={() => navigation.navigate("AboutUsScreen")}
      >
        <Image
          style={styles.vectorIcon2}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
      </Pressable>
      <Image
        style={[styles.controlIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/control.png")}
      />
          <Pressable
        style={[styles.controlIcon, styles.vectorIconLayout]}
        onPress={() => navigation.navigate("ControlOff")}
      >
      </Pressable>
      <Image
        style={[styles.vectorIcon9, styles.vectorIconLayout, styles.lightGreenTint]}
        contentFit="cover"
        source={require("../assets/task.png")}
      />
      <Pressable
        style={({ pressed }) => [
          styles.buttonContainer,
          { backgroundColor: pressed ? "#0d1f11" : "#3A7D44" }, // Darken when pressed
        ]}
        onPress={handleGetStartedPress}
      >
        <Text style={styles.buttonText}>View Details</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  statisticsLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
    width: "100%",
  },
  buttonShadowBox1: {
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
  buttonPosition: {
    borderRadius: Border.br_4xs,
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  getTypo1: {
    display: "none",
    fontSize: FontSize.size_lg,
    top: "26.16%",
    width: "60.38%",
    height: "49.25%",
    left: "20%",
    textAlign: "center",
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    position: "absolute",
  },
  groupPosition: {
    bottom: "0.92%",
    top: "88.53%",
    height: "10.55%",
    position: "absolute",
  },
  groupWrapperPosition: {
    top: "8.7%",
    height: "91.3%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  t1Layout: {
    height: "100%",
    left: "0%",
    width: "100%",
  },
  sTypo: {
    lineHeight: 25,
    letterSpacing: 4.1,
    fontSize: FontSize.size_4xs,
    color: Color.colorSnow,
    top: "0%",
    textAlign: "center",
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    position: "absolute",
  },
  groupPosition1: {
    bottom: "0.46%",
    height: "10.55%",
    top: "88.99%",
    width: "9.17%",
    position: "absolute",
  },
  groupParentLayout: {
    height: "11.01%",
    width: "9.17%",
    position: "absolute",
  },
  groupPosition2: {
    position: "absolute",
    right: "0%",
  },
  groupParentPosition: {
    height: "10.88%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  rectangleParentPosition: {
    width: "5.05%",
    bottom: "11.47%",
    position: "absolute",
  },
  groupChildPosition5: {
    backgroundColor: Color.colorGainsboro,
    height: "95.73%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupChildPosition4: {
    height: "95.76%",
    backgroundColor: Color.colorGainsboro,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupChildPosition3: {
    height: "95.81%",
    backgroundColor: Color.colorGainsboro,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupChildPosition2: {
    height: "95.85%",
    backgroundColor: Color.colorGainsboro,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupChildPosition1: {
    height: "95.79%",
    backgroundColor: Color.colorGainsboro,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupChildPosition: {
    height: "95.75%",
    backgroundColor: Color.colorGainsboro,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  buttonShadowBox: {
    left: "9.72%",
    right: "9.72%",
    height: "9.13%",
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
  getTypo: {
    top: "26.11%",
    height: "49.17%",
    display: "none",
    fontSize: FontSize.size_lg,
    left: "20%",
    width: "60.38%",
    textAlign: "center",
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    position: "absolute",
  },
  juneTypo: {
    fontSize: FontSize.size_2xs,
    width: "23.61%",
    left: "20%",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    height: "2.28%",
    position: "absolute",
  },
  pmTypo: {
    width: "13.06%",
    fontSize: FontSize.size_4xs,
    left: "20%",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    height: "2.28%",
    position: "absolute",
  },
  bugsTypo: {
    color: Color.colorDarkred,
    fontSize: FontSize.size_2xs,
    left: "20%",
    textAlign: "center",
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    height: "2.28%",
    position: "absolute",
  },
  noOfBugsTypo: {
    color: Color.colorGray_100,
    lineHeight: 9,
    width: "22.5%",
    fontSize: FontSize.size_4xs,
    textAlign: "center",
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    height: "2.28%",
    position: "absolute",
  },
  durationTypo: {
    color: Color.colorLimegreen,
    left: "73.06%",
    width: "15%",
    lineHeight: 9,
    fontSize: FontSize.size_4xs,
    textAlign: "center",
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    height: "2.28%",
    position: "absolute",
  },
  lightGreenTint: {
    tintColor: "#69B578",
  },
  todayTypo: {
    color: Color.colorDarkgray,
    fontSize: FontSize.size_6xs,
    height: "1.52%",
    left: "73.06%",
    width: "15%",
    lineHeight: 9,
    textAlign: "center",
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    position: "absolute",
  },
  confidenceTypo: {
    left: "71.67%",
    width: "17.5%",
    color: Color.colorDarkgray,
    fontSize: FontSize.size_6xs,
    height: "1.52%",
    lineHeight: 9,
    textAlign: "center",
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    position: "absolute",
  },
  statisticsPosition: {
    backgroundColor: Color.colorLightgreen,
    left: "75%",
    right: "13.89%",
    width: "11.11%",
    height: "2.28%",
    position: "absolute",
  },
  textTypo: {
    color: Color.colorGray_200,
    height: "1.01%",
    left: "73.06%",
    width: "15%",
    lineHeight: 9,
    fontSize: FontSize.size_2xs,
    textAlign: "center",
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  statisticsChildLayout1: {
    height: 0,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  statisticsChildPosition10: {
    left: "40.28%",
    right: "47.22%",
    width: "12.5%",
    height: 0,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  statisticsChildPosition9: {
    right: "70.56%",
    width: "3.06%",
    height: 0,
    left: "26.39%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  statisticsChildPosition8: {
    left: "32.5%",
    width: "4.72%",
    height: 0,
    right: "62.78%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  statisticsChildPosition7: {
    right: "55%",
    width: "4.72%",
    left: "40.28%",
    height: 0,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  statisticsChildPosition6: {
    left: "48.06%",
    width: "4.72%",
    right: "47.22%",
    height: 0,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  statisticsChildPosition5: {
    left: "55.83%",
    right: "39.44%",
    width: "4.72%",
    height: 0,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  statisticsChildPosition3: {
    left: "63.61%",
    height: 0,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  statisticsChildPosition1: {
    left: "71.39%",
    height: 0,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  statisticsChildPosition: {
    left: "79.17%",
    width: "1.39%",
    height: 0,
    maxWidth: "100%",
    right: "19.44%",
    position: "absolute",
    overflow: "hidden",
  },
  statisticsChildLayout: {
    width: "24.72%",
    left: "55.83%",
    height: 0,
    maxWidth: "100%",
    right: "19.44%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    top: "94.04%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPNG: {
    height: "15.47%",
    width: "25.53%",
    top: "7.28%",
    right: "86.81%",
    bottom: "93.25%",
    left: "3.67%",
    position: "absolute",
    overflow: "hidden"
  },
  vectorIconPosition3: {
    left: "36.72%",
    right: "62.69%",
    width: "0.58%",
  },
  vectorIconPosition2: {
    left: "38.22%",
    right: "58.64%",
    width: "3.14%",
  },
  vectorIconPosition1: {
    bottom: "3.93%",
    top: "95.83%",
    height: "0.24%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition: {
    bottom: "3.11%",
    top: "96.65%",
    height: "0.24%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  statisticsChild: {
    width: "177.69%",
    top: "11.28%",
    right: "-177.14%",
    bottom: "86.44%",
    left: "99.44%",
    backgroundColor: "rgba(134, 139, 132, 0.48)",
    transform: [
      {
        rotate: "89.5deg",
      },
    ],
    height: "2.28%",
    position: "absolute",
  },
  statisticsItem: {
    height: "15.78%",
    top: "-2.66%",
    bottom: "86.88%",
    backgroundColor: Color.colorAntiquewhite,
    left: "0%",
    right: "0%",
  },
historyData: {
    height: "35.56%",
    width: "46.94%",
    top: "7.52%",
    left: "27.47%",
    fontSize: 22,
    lineHeight: 23, 
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
    letterSpacing: 2,
    textAlign: "center",
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    color: Color.colorBlack,
    position: "absolute",
  },
  buttonChild: {
    backgroundColor: Color.colorDarkslategray,
  },
  getStarted: {
    color: Color.colorBlack,
  },
  getStarted1: {
    color: Color.colorSnow,
  },
  button: {
    height: "40.3%",
    top: "18.76%",
    right: "9.44%",
    bottom: "40.94%",
    left: "10%",
    width: "80.56%",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  groupChildPosition6: {
    backgroundColor: Color.colorDarkolivegreen,
    borderRadius: Border.br_3xs,
    bottom: "0%",
    top: "0%",
    height: "100%",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupFrame: {
    bottom: "0%",
    top: "0%",
    right: "0%",
    position: "absolute",
  },
  groupWrapper: {
    right: "9.09%",
    width: "90.91%",
  },
  s: {
    left: "9.09%",
    width: "90.91%",
    height: "91.3%",
    lineHeight: 25,
    letterSpacing: 4.1,
  },
  groupContainer: {
    width: "10.09%",
    right: "76.15%",
    left: "13.76%",
  },
  groupWrapper1: {
    right: "0%",
    width: "100%",
  },
  w: {
    height: "91.3%",
    lineHeight: 25,
    letterSpacing: 4.1,
    left: "0%",
    width: "100%",
  },
  groupView: {
    right: "38.53%",
    left: "52.29%",
    bottom: "0.46%",
    top: "88.99%",
    width: "9.17%",
  },
  groupParent1: {
    right: "64.68%",
    left: "26.15%",
    width: "9.17%",
  },
  groupParent2: {
    right: "26.15%",
    left: "64.68%",
    bottom: "0.46%",
    top: "88.99%",
    width: "9.17%",
  },
  groupWrapper7: {
    height: "87.5%",
    top: "8.33%",
    bottom: "4.17%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  t1: {
    height: "100%",
    left: "0%",
    width: "100%",
  },
  groupParent3: {
    right: "51.83%",
    left: "38.99%",
    bottom: "0.46%",
    top: "88.53%",
    height: "11.01%",
  },
  groupParent4: {
    right: "13.3%",
    left: "77.52%",
    top: "88.99%",
    bottom: "0%",
  },
  groupParent5: {
    left: "90.83%",
    top: "88.99%",
    bottom: "0%",
    right: "0%",
  },
  text: {
    height: "66.67%",
    width: "90%",
    top: "19.05%",
    left: "5%",
    fontSize: FontSize.size_4xs,
    color: Color.colorSnow,
    textAlign: "center",
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    position: "absolute",
  },
  groupParent7: {
    top: "22.28%",
    bottom: "66.84%",
  },
  groupParent8: {
    top: "66.84%",
    bottom: "22.28%",
  },
  groupParent9: {
    top: "89.12%",
    bottom: "0%",
  },
  groupParent10: {
    bottom: "89.12%",
    top: "0%",
  },
  groupParent11: {
    top: "44.56%",
    bottom: "44.56%",
  },
  groupParent6: {
    height: "88.53%",
    right: "90.83%",
    bottom: "11.47%",
    width: "9.17%",
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  groupChild10: {
    bottom: "4.27%",
    borderRadius: Border.br_3xs,
    top: "0%",
  },
  groupChild11: {
    top: "4.27%",
    bottom: "0%",
  },
  rectangleParent: {
    height: "34.4%",
    top: "54.13%",
    right: "79.36%",
    left: "15.6%",
  },
  groupChild12: {
    bottom: "4.24%",
    borderRadius: Border.br_3xs,
    top: "0%",
  },
  groupChild13: {
    top: "4.24%",
    bottom: "0%",
  },
  rectangleGroup: {
    height: "84.4%",
    top: "4.13%",
    right: "40.83%",
    left: "54.13%",
  },
  groupChild14: {
    bottom: "4.19%",
    borderRadius: Border.br_3xs,
    top: "0%",
  },
  groupChild15: {
    top: "4.19%",
    bottom: "0%",
  },
  rectangleParent1: {
    height: "48.17%",
    top: "40.37%",
    right: "27.98%",
    left: "66.97%",
  },
  rectangleParent2: {
    height: "40.83%",
    top: "47.71%",
    right: "15.14%",
    left: "79.82%",
  },
  groupChild18: {
    bottom: "4.15%",
    borderRadius: Border.br_3xs,
    top: "0%",
  },
  groupChild19: {
    top: "4.15%",
    bottom: "0%",
  },
  rectangleParent3: {
    height: "29.82%",
    top: "58.72%",
    right: "2.29%",
    left: "92.66%",
  },
  groupChild20: {
    bottom: "4.21%",
    borderRadius: Border.br_3xs,
    top: "0%",
  },
  groupChild21: {
    top: "4.21%",
    bottom: "0%",
  },
  rectangleParent4: {
    height: "75.23%",
    top: "13.3%",
    right: "66.51%",
    left: "28.44%",
  },
  groupChild22: {
    bottom: "4.25%",
    borderRadius: Border.br_3xs,
    top: "0%",
  },
  groupChild23: {
    top: "4.25%",
    bottom: "0%",
  },
  rectangleParent5: {
    height: "55.05%",
    top: "33.49%",
    right: "53.67%",
    left: "41.28%",
  },
  groupParent: {
    height: "27.63%",
    width: "60.56%",
    top: "25.1%",
    bottom: "47.28%",
    right: "19.44%",
    left: "20%",
    position: "absolute",
  },
  buttonItem: {
    backgroundColor: Color.colorGray_300,
  },
  getStarted2: {
    color: Color.colorBlack,
  },
  getStarted3: {
    color: Color.colorSnow,
  },
  button1: {
    top: "74.27%",
    bottom: "16.6%",
  },
  button2: {
    top: "62.48%",
    bottom: "28.39%",
  },
  june292024: {
    top: "74.9%",
  },
  june2920241: {
    top: "63.12%",
  },
  pm: {
    top: "76.55%",
  },
  pm1: {
    top: "64.77%",
  },
  bugsDetected: {
    width: "26.94%",
    top: "78.96%",
  },
  noBugsDetected: {
    width: "28.89%",
    top: "67.17%",
  },
  noOfBugs: {
    top: "21.17%",
    left: "11.39%",
  },
  daysOfThe: {
    top: "53.61%",
    left: "42.22%",
  },
  hrDuration: {
    top: "74.9%",
  },
  hrDuration1: {
    top: "63.12%",
  },
  today: {
    top: "77.82%",
  },
  today1: {
    top: "66.03%",
  },
  confidenceScore: {
    top: "81.24%",
  },
  confidenceScore1: {
    top: "69.46%",
  },
  statisticsInner: {
    bottom: "18.76%",
    top: "78.96%",
  },
  statisticsChild1: {
    bottom: "30.54%",
    top: "67.17%",
  },
  text5: {
    top: "79.59%",
  },
  text6: {
    top: "67.81%",
  },
  vectorIcon: {
    top: "78.83%",
    left: "13.89%",
    right: "80.83%",
    width: "5.28%",
    height: "2.41%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "18.76%",
  },
  vectorIcon1: {
    top: "67.05%",
    left: "13.89%",
    right: "80.83%",
    width: "5.28%",
    height: "2.41%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "30.54%",
  },
  statisticsChild2: {
    height: "2.22%",
    width: "50.11%",
    top: "48.29%",
    right: "-50.06%",
    bottom: "49.49%",
    left: "99.94%",
    borderRadius: Border.br_6xl,
    backgroundColor: "rgba(22, 22, 22, 0.59)",
    transform: [
      {
        rotate: "89.5deg",
      },
    ],
  },
  lineIcon: {
    height: "0.13%",
    width: "54.17%",
    top: "26.24%",
    bottom: "73.64%",
    left: "26.39%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "19.44%",
    position: "absolute",
    overflow: "hidden",
  },
  statisticsChild3: {
    right: "62.78%",
    height: 0,
    width: "10.83%",
    left: "26.39%",
    top: "29.4%",
  },
  statisticsChild4: {
    top: "29.4%",
  },
  statisticsChild5: {
    top: "31.94%",
    right: "62.78%",
    height: 0,
    width: "10.83%",
    left: "26.39%",
  },
  statisticsChild6: {
    top: "34.47%",
    right: "62.78%",
    height: 0,
    width: "10.83%",
    left: "26.39%",
  },
  statisticsChild7: {
    top: "37.01%",
    right: "62.78%",
    height: 0,
    width: "10.83%",
    left: "26.39%",
  },
  statisticsChild8: {
    top: "39.54%",
    right: "62.78%",
    height: 0,
    width: "10.83%",
    left: "26.39%",
  },
  statisticsChild9: {
    top: "42.33%",
  },
  statisticsChild10: {
    top: "44.99%",
  },
  statisticsChild11: {
    top: "48.16%",
  },
  statisticsChild12: {
    top: "42.33%",
  },
  statisticsChild13: {
    top: "44.99%",
  },
  statisticsChild14: {
    top: "48.16%",
  },
  statisticsChild15: {
    top: "48.16%",
  },
  statisticsChild16: {
    top: "48.16%",
  },
  statisticsChild17: {
    top: "48.16%",
  },
  statisticsChild18: {
    right: "31.67%",
    left: "63.61%",
    width: "4.72%",
    top: "48.16%",
  },
  statisticsChild19: {
    right: "23.89%",
    left: "71.39%",
    width: "4.72%",
    top: "48.16%",
  },
  statisticsChild20: {
    top: "44.99%",
  },
  statisticsChild21: {
    top: "44.99%",
  },
  statisticsChild22: {
    top: "44.99%",
  },
  statisticsChild23: {
    right: "31.67%",
    left: "63.61%",
    width: "4.72%",
    top: "44.99%",
  },
  statisticsChild24: {
    right: "23.89%",
    left: "71.39%",
    width: "4.72%",
    top: "44.99%",
  },
  statisticsChild25: {
    top: "42.33%",
  },
  statisticsChild26: {
    top: "42.33%",
  },
  statisticsChild27: {
    top: "42.33%",
  },
  statisticsChild28: {
    right: "31.67%",
    left: "63.61%",
    width: "4.72%",
    top: "42.33%",
  },
  statisticsChild29: {
    right: "23.89%",
    left: "71.39%",
    width: "4.72%",
    top: "42.33%",
  },
  statisticsChild30: {
    top: "42.33%",
  },
  statisticsChild31: {
    top: "44.99%",
  },
  statisticsChild32: {
    top: "48.16%",
  },
  statisticsChild33: {
    top: "34.47%",
  },
  statisticsChild34: {
    top: "37.01%",
  },
  statisticsChild35: {
    top: "39.54%",
  },
  statisticsChild36: {
    top: "37.01%",
  },
  statisticsChild37: {
    top: "39.54%",
  },
  statisticsChild38: {
    top: "37.01%",
  },
  statisticsChild39: {
    top: "39.54%",
  },
  statisticsChild40: {
    right: "31.67%",
    left: "63.61%",
    width: "4.72%",
    top: "39.54%",
  },
  statisticsChild41: {
    width: "16.94%",
    top: "37.01%",
    right: "19.44%",
  },
  statisticsChild42: {
    top: "39.54%",
    width: "9.17%",
    right: "19.44%",
  },
  statisticsChild43: {
    top: "31.94%",
  },
  statisticsChild44: {
    top: "31.94%",
  },
  statisticsChild45: {
    top: "34.47%",
  },
  statisticsChild46: {
    top: "29.4%",
  },
  statisticsChild47: {
    height: "11.79%",
    top: "91.38%",
    right: "-0.28%",
    bottom: "-3.17%",
    left: "0.28%",
    backgroundColor: Color.colorPeachpuff,
  },
  homeIcon: {
    height: "4.31%",
    width: "10%",
    right: "82.5%",
    bottom: "1.65%",
    left: "7.5%",
  },
  vectorIcon2: {
    height: "3.42%",
    right: "5.83%",
    bottom: "2.53%",
    left: "83.33%",
    width: "10.83%",
    top: "94.04%",
  },
  controlIcon: {
    height: "4.06%",
    width: "10.28%",
    top: "93.66%",
    right: "29.89%",
    bottom: "2.28%",
    left: "59.83%",
  },
  vectorIcon3: {
    bottom: "4.74%",
    top: "95.02%",
    height: "0.24%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon4: {
    bottom: "4.74%",
    top: "95.02%",
    height: "0.24%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon5: {
    right: "62.67%",
    left: "36.75%",
    width: "0.58%",
    bottom: "3.93%",
    top: "95.83%",
  },
  vectorIcon6: {
    left: "38.22%",
    right: "58.64%",
    width: "3.14%",
  },
  vectorIcon7: {
    left: "36.72%",
    right: "62.69%",
    width: "0.58%",
  },
  vectorIcon8: {
    left: "38.22%",
    right: "58.64%",
    width: "3.14%",
  },
  vectorIcon9: {
    height: "3.85%",
    width: "6.89%",
    top: "93.7%",
    right: "57.56%",
    bottom: "2.45%",
    left: "35.56%",
  },
  arrowIcon: {
    width: "8.06%",
    top: "9%",
    right: "83.33%",
    left: "8.61%",
  },
  statistics: {
    backgroundColor: Color.colorMediumseagreen,
    flex: 1,
    height: 789,
    overflow: "hidden",
    width: "100%",
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    left: 10,
    top: 195,
    position: "absolute",
  },
  chart: {
    marginVertical: 8,
    borderRadius: 10,
  },
  refreshButton: {
  color: "#AFE1AF",
  borderRadius: 5,
  textAlign: 'center',
  fontWeight: 'bold',
  top: 520,
  width: '45%', 
  left: 105,
  position: "absolute",
  },
  buttonText: {
    fontSize: 20,
    fontFamily: "Poppins-Bold",
    color: "#fff", // Button text color
    fontWeight: "bold",
    left: 20,
    top: 5,
  },
  buttonContainer: {
    backgroundColor: "#3A7D44", // Button background color
    borderRadius: 30,
    elevation: 3,
    top: 570,
    width: 150,
    height: 40,
    left: 113,
  },
});

export default Stats;