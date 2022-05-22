import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Platform,
} from "react-native";

import React, { useState } from "react";

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
} from "@expo-google-fonts/lato";
import { useFonts, Alice_400Regular } from "@expo-google-fonts/lato";
import AppLoading from "expo-app-loading";
import langData from "../assets/images/langLogo/langData";
import carTypeData from "../assets/images/carType/carTypeData";
import { FlatList } from "react-native";
import Card from "../components/card";
import CardTyp from "../components/cardTyp";
import { ThemeContext } from "../context/ThemeManager";

export default function Home({ navigation }) {
  const { theme } = React.useContext(ThemeContext);
  const [language, setLanguage] = useState(null);

  //
  const [selectedId, setSelectedId] = useState(null);
  const [selectedIdType, setSelectedIdType] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  let [fontsLoaded, error] = useFonts({
    Lato_900Black_Italic,
    Lato_900Black,
  });

  const handlePress = () => {
    if (language === "Bahasa Melayu") {
      setIsDisabled(false);
      navigation.navigate("myCarHome");
    }

    if (language === "English") {
      setIsDisabled(false);
      navigation.navigate("engHome");
    } else {
      return null;
    }
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaView style={[styles.container, styles[`container${theme}`]]}>
      <View style={styles.container}>
        <View style={styles.introWrapper}>
          <Text
            style={[styles.h2Text, styles[`h2Text${theme}`]]}
            numberOfLines={5}
          >
            Welcome to KPP Practice
          </Text>
        </View>
        <View style={styles.introImageWrapper}>
          <Image
            source={require("../assets/images/homeIcons/dive2.png")}
            style={{
              width: 200,
              height: 200,
            }}
          />
        </View>
        <View style={styles.langWrapper}>
          <Text
            style={[styles.langText, styles[`langText${theme}`]]}
            numberOfLines={5}
          >
            Choose your language
          </Text>
          <FlatList
            extraData={language}
            keyExtractor={(item) => item.id}
            data={langData}
            horizontal={true}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <Card
                txt={item.title}
                onPress={() => {
                  setLanguage(item.title);
                  setSelectedId(item.id);
                }}
                bw={selectedId === item.id ? 8 : 0}
              />
            )}
          />
        </View>
        <TouchableOpacity
          style={[language && styles.buttonLight, styles[`button${theme}`]]}
          onPress={handlePress}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
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
    marginTop: 50,
  },
  introImageWrapper: {
    marginTop: Platform.OS === "ios" ? 50 : 20,
    alignItems: "center",
  },
  langWrapper: {
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: Platform.OS === "ios" ? 50 : 20,
  },
  langTextLight: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 10,
    fontFamily: "Lato_900Black",
    color: "#ff4444",
  },
  langTextDark: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 10,
    fontFamily: "Lato_900Black",
    color: "white",
  },
  typeWrapper: {
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 30,
  },
  typeText: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 10,
    fontFamily: "Lato_900Black",
    color: "#ff4444",
  },

  buttonLight: {
    marginLeft: 100,
    width: 200,
    height: 50,
    marginTop: 30,
    backgroundColor: "#ff4444",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
  },
  buttonDark: {
    marginLeft: 100,
    width: 200,
    height: 50,
    marginTop: 30,
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
    letterSpacing: 0.2,
    fontFamily: "Lato_900Black",
  },
  buttonTextDark: {
    fontSize: 18,
    color: "white",
    letterSpacing: 0.2,
  },
  h2Text: {
    textAlign: "center",
    fontSize: 28,
    letterSpacing: 0.2,
    color: "black",
    fontFamily: "Lato_900Black",
    marginTop: 10,
    color: "#ff4444",
  },
  h2TextDark: {
    textAlign: "center",
    fontSize: 28,
    letterSpacing: 0.2,
    color: "black",
    fontFamily: "Lato_900Black",
    marginTop: 10,
    color: "#f7f7f7",
  },
  picker: {
    height: 0,
    width: 300,
    borderWidth: 1,
    borderColor: "#c63c32",
    color: "white",
  },
});
