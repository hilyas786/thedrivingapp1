import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import myTrialExam from "../screens/my/myTrialExam";
import engTrialExam from "../screens/eng/engTrialExam";
import myCarHome from "../screens/my/myCarHome";
import engHome from "../screens/eng/engHome";
import myBikeHome from "../screens/my/motorbike/myBikeHome";
//
import myColorBlindTest from "../screens/my/myColorBlindTest";
import engColorBlindTest from "../screens/eng/engColorBlindTest";
//Learn English

import engLearn from "../screens/eng/learn/engLearnWarningSign";
import engLearnWarningSign from "../screens/eng/learn/engLearnWarningSign";
import engLearnChoice from "../screens/eng/engLearnChoice";
import engLearnProhib from "../screens/eng/learn/engLearnProhib";

// Learn Malay
import myLearn from "../screens/my/myLearnChoice";
import engLearnInfo from "../screens/eng/learn/engLearnInfo";
import myLearnChoice from "../screens/my/myLearnChoice";
import myLearnWarningSign from "../screens/my/learn/myLearnWarningSigns";
import myLearnProhib from "../screens/my/learn/myLearnProhib";
import myLearnInfo from "../screens/my/learn/myLearnInfo";
import bikeTest from "../screens/my/motorbike/bikeTest";

//Themes
import { ThemeContext, ThemeProvider } from "../context/ThemeManager";
import { Button, Switch, View, Image, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import DarkSwitch from "../components/DarkSwitch";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      headerTransparent: true,
      headerTitle: false,
      headerShown: true,
    },
  },

  // ENGLISH LEARNING
  Learn: {
    screen: engLearnChoice,
    navigationOptions: {
      headerTitle: false,
    },
  },
  engLearnWarningSign: {
    screen: engLearnWarningSign,
    navigationOptions: {
      headerTitle: false,
    },
  },
  engLearnProhib: {
    screen: engLearnProhib,
    navigationOptions: {
      headerTitle: false,
    },
  },
  engLearnInfo: {
    screen: engLearnInfo,
    navigationOptions: {
      headerTitle: false,
    },
  },

  // MALAY LEARNING
  MYLearn: {
    screen: myLearnChoice,
    navigationOptions: {
      headerTitle: false,
    },
  },
  myLearnWarningSign: {
    screen: myLearnWarningSign,
    navigationOptions: {
      headerTitle: false,
    },
  },
  myLearnProhib: {
    screen: myLearnProhib,
    navigationOptions: {
      headerTitle: false,
    },
  },
  myLearnInfo: {
    screen: myLearnInfo,
    navigationOptions: {
      headerTitle: false,
    },
  },

  //Exams
  myExam: {
    screen: myTrialExam,
    navigationOptions: {
      title: "Ujian",
    },
  },

  engExam: {
    screen: engTrialExam,
    navigationOptions: {
      title: "Exam",
    },
  },

  //Main Home Pages
  myCarHome: {
    screen: myCarHome,
    navigationOptions: {
      title: "Rumah",
    },
  },
  engHome: {
    screen: engHome,
    navigationOptions: {
      title: `Home`,
    },
  },

  // color blind routing
  engColorBlindTest: {
    screen: engColorBlindTest,
    navigationOptions: {
      headerTitle: false,
    },
  },
  myColorBlindTest: {
    screen: myColorBlindTest,
    navigationOptions: {
      headerTitle: false,
    },
  },

  //Motorbike
  bikeTest: {
    screen: bikeTest,
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: ({ screenProps }) => ({
    headerRight: () => <DarkSwitch />,

    headerTintColor: screenProps.theme === "Dark" ? "#f7f7f7" : "#000000",
    headerStyle: {
      backgroundColor: screenProps.theme === "Dark" ? "#212121" : "#f7f7f7",
    },
  }),
});

const Routes1 = createAppContainer(HomeStack);

const RoutesWithTheme = () => {
  const { theme } = useContext(ThemeContext);
  return <Routes1 screenProps={{ theme }} />;
};

export default () => (
  <ThemeProvider>
    <RoutesWithTheme />
  </ThemeProvider>
);
