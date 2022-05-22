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

import SelectButton from "../../../components/selectButton";

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

export default function myBikeHome({ navigation }) {
  let [fontsLoaded, error] = useFonts({
    Lato_900Black_Italic,
    Lato_900Black,
  });

  const handleExam = () => {
    navigation.navigate("bikeTest");
  };

  const handleLearn = () => {
    navigation.navigate("myLearnChoice");
  };

  const handleColor = () => {
    navigation.navigate("myColorBlindTest");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.introWrapper}>
          <Text style={styles.introText}>Motorsikal</Text>
        </View>
        <View style={styles.examButtonWrapper}>
          <SelectButton
            txt="Mula Latihan"
            onPress={handleExam}
            src={require("../../../assets/images/homeIcons/onlinetest.png")}
          />
        </View>
        <View style={styles.roadSignsButtonWrapper}>
          <SelectButton
            txt="Belajar Tanda Jalan"
            onPress={handleLearn}
            src={require("../../../assets/images/homeIcons/hump.png")}
          />
        </View>
        <View style={styles.colorBlindButtonWrapper}>
          <SelectButton
            txt="Ujian Buta Warna"
            onPress={handleColor}
            src={require("../../../assets/images/homeIcons/colorblind.png")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  introWrapper: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  introText: {
    textAlign: "center",
    fontSize: 28,
    letterSpacing: 0.2,
    color: "black",
    fontFamily: "Lato_900Black",
    marginTop: 15,
  },
  examButtonWrapper: {
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: Platform.OS === "ios" ? 70 : 10,
  },
  roadSignsButtonWrapper: {
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: Platform.OS === "ios" ? 5 : -20,
  },
  colorBlindButtonWrapper: {
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: Platform.OS === "ios" ? 5 : -20,
  },
  langWrapper: {
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 90,
  },
});
