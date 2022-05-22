import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { DarkTheme } from "@react-navigation/native";
import Navigator from "./app/routes/homeStack";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { Appearance } from "react-native";
import Routes1 from "./app/routes/homeStack";
import { ThemeProvider } from "./app/context/ThemeManager";

export default function App() {
  return (
    <ThemeProvider>
      <Routes1 />
    </ThemeProvider>
  );
}
