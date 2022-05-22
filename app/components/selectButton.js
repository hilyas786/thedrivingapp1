import React, { useContext, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Platform,
} from "react-native";
import { Image } from "react-native";
import { ThemeContext } from "../context/ThemeManager";

export default function SelectButton({ onPress, txt, src }) {
  const { theme } = useContext(ThemeContext);

  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles[`cardContainer${theme}`]}>
          <View style={styles.cardContent}>
            <Image style={styles.itemImage} source={src} />
            <Text style={[styles.itemTextLight, styles[`itemText${theme}`]]}>
              {txt}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainerLight: {
    height: Platform.OS === "ios" ? 150 : 130,
    width: Platform.OS === "ios" ? 220 : 180,
    backgroundColor: "#f5f5f5",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: Platform.OS === "ios" ? 1 : 30,
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
    height: Platform.OS === "ios" ? 150 : 130,
    width: Platform.OS === "ios" ? 220 : 180,
    backgroundColor: "#121212",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: Platform.OS === "ios" ? 1 : 30,
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
    alignItems: "center",
  },
  itemTextLight: {
    textAlign: "center",
    marginTop: Platform.OS === "ios" ? 15 : 25,
    fontFamily: "Lato_900Black",
  },
  itemTextDark: {
    textAlign: "center",
    marginTop: Platform.OS === "ios" ? 15 : 25,
    fontFamily: "Lato_900Black",
    color: "white",
  },
  itemImage: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    height: Platform.OS === "ios" ? 90 : 65,
    width: Platform.OS === "ios" ? 90 : 65,
  },
});
