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

import React, { useState, useContext } from "react";
import engLearnWarningData from "../../../data/engLearnData/engLearnWarningData";
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
import { ThemeContext } from "../../../context/ThemeManager";
import { verticalScale } from "react-native-size-matters";

export default function myLearnWarningSign({ navigation }) {
  const { theme } = useContext(ThemeContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const data = engLearnWarningData;

  let [fontsLoaded, error] = useFonts({
    Lato_300Light,
    Lato_900Black_Italic,
    Lato_900Black,
    Lato_400Regular,
  });

  const handlePress = () => {
    if (currentQuestion === data.length - 1) {
      setDisabled(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setDisabled(false);
    }
  };

  const handleLast = () => {
    navigation.navigate("MYLearn");
  };

  const handleBack = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  return (
    <View style={[styles.container, styles[`container${theme}`]]}>
      {!disabled && (
        <>
          <View style={styles.imageWrapper}>
            {data[currentQuestion]?.image}
          </View>
          <View style={styles.descriptionWrapper}>
            <Text style={[styles.description, styles[`description${theme}`]]}>
              {data[currentQuestion]?.mydes}
            </Text>
          </View>
        </>
      )}
      {!disabled && (
        <>
          <View style={styles.button1}>
            <TouchableOpacity
              onPress={handlePress}
              style={[styles.buttonLight, styles[`button${theme}`]]}
            >
              <Text style={styles.buttonText}>Seterusnya</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button2}>
            <TouchableOpacity
              onPress={handleBack}
              style={[styles.buttonLight, styles[`button${theme}`]]}
            >
              <Text style={styles.buttonText}>Kembali</Text>
            </TouchableOpacity>
          </View>
        </>
      )}

      {disabled && (
        <>
          <View style={styles.lastWrapper}>
            <View style={styles.imageWrapper}>
              <Image
                source={require("../../../assets/images/roadSigns/stopandgiveway.webp")}
                style={{ width: 80, height: 80 }}
              />
            </View>
            <View style={styles.rememberTextWrapper}>
              <Text style={styles.rememberText}>Peringatan !</Text>
            </View>
            <View style={styles.lastDescripWrapper}>
              <Text style={[styles.description, styles[`description${theme}`]]}>
                Papan tanda jalan wajib di Malaysia digunakan di mana anda
                dikehendaki untuk menjalankan tugas tertentu, ia bukan cadangan,
                maklumat atau tanda nasihat, ia mesti dipatuhi dan dijadikan
                panduan.{"\n"}
                Papan tanda maklumat di Malaysia adalah jalan yang paling kerap
                digunakan.
              </Text>
            </View>
          </View>
          <View style={styles.button2}>
            <TouchableOpacity
              onPress={handleLast}
              style={[styles.buttonLight, styles[`Button${theme}`]]}
            >
              <Text style={styles.buttonText}>Kembali ke latihan</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  containerLight: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },
  containerDark: {
    flex: 1,
    backgroundColor: "#1f1b24",
    alignItems: "center",
  },
  imageWrapper: {
    marginTop: 40,
    justifyContent: "center",
  },
  description: {
    fontFamily: "Lato_400Regular",
    marginHorizontal: 30,
    textAlign: "center",
    fontSize: 18,
    borderColor: "#FF2400",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  descriptionDark: {
    fontFamily: "Lato_400Regular",
    marginHorizontal: 30,
    textAlign: "center",
    color: "white",
    fontSize: 18,
    borderColor: "#FF2400",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  rememberTextWrapper: {
    marginTop: 20,
  },
  rememberText: {
    textAlign: "center",
    fontSize: 28,
    letterSpacing: 0.2,
    color: "black",
    fontFamily: "Lato_900Black",
    marginTop: verticalScale(5),
    color: "#ff4444",
  },
  lastDescripWrapper: {
    marginTop: 40,
  },
  descriptionWrapper: {
    marginTop: 30,
  },
  lastWrapper: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  button1: { marginTop: 100 },
  button2: { marginTop: 40 },
  buttonLight: {
    width: 200,
    height: 50,
    backgroundColor: "#ff4444",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
  },
  buttonDark: {
    width: 200,
    height: 50,
    backgroundColor: "#121212",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C63c32",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 24,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontFamily: "Lato_900Black",
  },
});
