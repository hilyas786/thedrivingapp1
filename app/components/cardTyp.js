import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Image } from "react-native";

export default function CardTyp({ onPress, bwi, txt, img }) {
  return (
    <View>
      <View style={[styles.cardContainer, { borderWidth: bwi }]}>
        <View style={styles.cardContent}>
          <Image style={{ width: 60, height: 60 }} source={img} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    height: 100,
    width: 150,
    backgroundColor: "#f5f5f5",
    borderRadius: 30,
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 40,
    marginHorizontal: 15,
    borderWidth: 15,
    borderColor: "#ff4444",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  cardContent: {
    color: "white",
  },
});
