import React, { useContext, useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Image } from "react-native";

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
import { ThemeContext } from "../context/ThemeManager";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
export default function Card({ onPress, img, bw, txt }) {
  let [fontsLoaded, error] = useFonts({
    Lato_300Light,
    Lato_900Black_Italic,
    Lato_700Bold,
    Lato_900Black,
  });
  const { theme } = useContext(ThemeContext);

  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity onPress={onPress}>
          <View style={[styles[`cardContainer${theme}`], { borderWidth: bw }]}>
            <View style={styles.cardContent}>
              <Text style={[styles.cardTextLight, styles[`cardText${theme}`]]}>
                {txt}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
// { borderWidth: bw }
const styles = StyleSheet.create({
  cardContainerLight: {
    height: verticalScale(100),
    width: scale(120),
    backgroundColor: "#f5f5f5",
    borderRadius: 30,
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 40,
    marginHorizontal: 15,
    borderWidth: 3,
    borderColor: "#ff4444",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 24,
  },
  cardContainerDark: {
    height: verticalScale(100),
    width: scale(120),
    backgroundColor: "#121212",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 30,
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 40,
    marginHorizontal: 15,
    borderWidth: 3,
    borderColor: "#ff4444",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 24,
  },
  cardContent: {
    color: "white",
  },
  cardTextLight: {
    textAlign: "center",
    fontSize: 13,
    letterSpacing: 0.2,
    fontFamily: "Lato_900Black",
  },
  cardTextDark: {
    textAlign: "center",
    fontSize: 13,
    letterSpacing: 0.2,
    fontFamily: "Lato_900Black",
    color: "white",
  },
});
