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

import React, { useContext } from "react";

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

export default function engLearnHome({ navigation }) {
  const { theme } = useContext(ThemeContext);
  let [fontsLoaded, error] = useFonts({
    Lato_900Black_Italic,
    Lato_900Black,
  });

  const handleWarning = () => {
    navigation.navigate("engLearnWarningSign");
  };

  const handleProhib = () => {
    navigation.navigate("engLearnProhib");
  };
  const handleInfo = () => {
    navigation.navigate("engLearnInfo");
  };

  return (
    <SafeAreaView style={[styles.container, styles[`container${theme}`]]}>
      <View style={styles.container}>
        <View style={styles.introWrapper}>
          <Text style={[styles.introTextLight, styles[`introText${theme}`]]}>
            Road Signs
          </Text>
        </View>
        <View style={styles.examButtonWrapper}>
          <SelectButton
            txt="Warning Signs"
            onPress={handleWarning}
            src={require("../../assets/images/roadSigns/stop.webp")}
          />
        </View>
        <View style={styles.roadSignsButtonWrapper}>
          <SelectButton
            txt="Prohibitory Signs"
            onPress={handleProhib}
            src={require("../../assets/images/homeIcons/uturn.webp")}
          />
        </View>
        <View style={styles.colorBlindButtonWrapper}>
          <SelectButton
            txt="Mandatory Road Signs"
            onPress={handleInfo}
            src={require("../../assets/images/homeIcons/infohome.webp")}
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
  introWrapper: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  introTextLight: {
    textAlign: "center",
    fontSize: 28,
    letterSpacing: 0.2,
    color: "black",
    fontFamily: "Lato_900Black",
    marginTop: 15,
  },
  introTextDark: {
    textAlign: "center",
    fontSize: 28,
    letterSpacing: 0.2,
    color: "white",
    fontFamily: "Lato_900Black",
    marginTop: 15,
  },
  examButtonWrapper: {
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: Platform.OS === "ios" ? 40 : 10,
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
