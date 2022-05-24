import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  Modal,
  Animated,
  StyleSheet,
} from "react-native";

import React from "react";

import SelectButton from "../../components/selectButton";

import {
  Lato_100Thin,
  Lato_100Thin_Italic,
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  Lato_900Black,
  Lato_900Black_Italic,
  useFonts,
} from "@expo-google-fonts/lato";
import { ThemeContext } from "../../context/ThemeManager";
import { verticalScale } from "react-native-size-matters";

export default function engHome({ navigation }) {
  const { theme } = React.useContext(ThemeContext);

  let [fontsLoaded, error] = useFonts({
    Lato_900Black_Italic,
    Lato_900Black,
  });

  const handleExam = () => {
    navigation.navigate("engExam");
  };

  const handleLearn = () => {
    navigation.navigate("Learn");
  };
  const handleColor = () => {
    navigation.navigate("engColorBlindTest");
  };

  return (
    <SafeAreaView style={[styles.container, styles[`container${theme}`]]}>
      <View style={styles.container}>
        <View style={styles.examButtonWrapper}>
          <SelectButton
            txt="Start Practice Exam"
            onPress={handleExam}
            src={require("../../assets/images/homeIcons/onlinetest.png")}
          />
        </View>
        <View style={styles.roadSignsButtonWrapper}>
          <SelectButton
            txt="Learn Road Signs"
            onPress={handleLearn}
            src={require("../../assets/images/homeIcons/hump.png")}
          />
        </View>
        <View style={styles.colorBlindButtonWrapper}>
          <SelectButton
            txt="Color Blind Test"
            onPress={handleColor}
            src={require("../../assets/images/homeIcons/colorblind.png")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerLight: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  containerDark: {
    flex: 1,
    backgroundColor: "#1f1b24",
  },
  examButtonWrapper: {
    alignItems: "center",
    marginTop: verticalScale(20),
  },
  roadSignsButtonWrapper: {
    alignItems: "center",
    marginTop: verticalScale(10),
  },
  colorBlindButtonWrapper: {
    alignItems: "center",
    marginTop: verticalScale(10),
  },
});
