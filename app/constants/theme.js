import { useContext } from "react";
import { Dimensions } from "react-native";
import { styleProps } from "react-native-web/dist/cjs/modules/forwardedProps";
import { ThemeContext } from "../context/ThemeManager";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  primary: "#252c4a",
  secondary: "#1E90FF",
  accent: "#3498db",

  success: "#00C851",
  error: "#ff4444",

  black: "#171717",
  white: "#FFFFFF",
  background: "#f5f5f5",
};

export const SIZES = {
  base: 10,
  width,
  height,
};
