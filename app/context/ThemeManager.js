import React, { useState } from "react";
import { StatusBar } from "react-native";
export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("Light");

  const toggleTheme = () => {
    if (theme === "Light") {
      setTheme("Dark");
      StatusBar.setBarStyle("light-content");
    } else {
      setTheme("Light");
      StatusBar.setBarStyle("dark-content");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
