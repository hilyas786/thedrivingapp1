import { useState, useContext } from "react";
import { StyleSheet, View, Switch, Image } from "react-native";
import { ThemeContext } from "../context/ThemeManager";
import { memo } from "react";
import { TouchableOpacity } from "react-native";
import React from "react";

const ToggleButton = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <View style={styles.nightToggle}>
      <Image
        source={
          theme === "Light"
            ? require("../assets/images/brightness.png")
            : require("../assets/images/moon.png")
        }
        style={{ width: 30, height: 30 }}
      />

      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={theme === "Light" ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        value={theme === "Dark"}
        onValueChange={toggleTheme}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  nightToggle: {
    flexDirection: "row",
    marginRight: 10,
    alignItems: "center",
  },
});

export default memo(ToggleButton);
