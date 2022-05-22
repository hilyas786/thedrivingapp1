import { Image, Platform } from "react-native";

export default engColorTest = [
  {
    question: "What number do you see?",
    image: (
      <Image
        source={require("../assets/images/colorBlindImages/12.png")}
        style={{
          width: Platform.OS === "ios" ? 180 : 150,
          height: Platform.OS === "ios" ? 180 : 150,
        }}
      />
    ),
    options: ["12", "31", "1", "15"],
    correct_option: "12",
  },
  {
    question: "What is the order of shapes?",
    image: (
      <Image
        source={require("../assets/images/colorBlindImages/shapes.jpg")}
        style={{
          width: Platform.OS === "ios" ? 350 : 350,
          height: Platform.OS === "ios" ? 200 : 170,
        }}
      />
    ),
    options: [
      "Star, Square, Circle",
      "Circle, Star, Square",
      "Square, Circle, Star",
      "Circle, Square, Star",
    ],
    correct_option: "Circle, Star, Square",
  },
  {
    question: "What number do you see?",
    image: (
      <Image
        source={require("../assets/images/colorBlindImages/29.png")}
        style={{
          width: Platform.OS === "ios" ? 180 : 150,
          height: Platform.OS === "ios" ? 180 : 150,
        }}
      />
    ),
    options: ["72", "46", "29", "42"],
    correct_option: "29",
  },
  {
    question: "What number do you see?",
    image: (
      <Image
        source={require("../assets/images/colorBlindImages/97.png")}
        style={{
          width: Platform.OS === "ios" ? 180 : 150,
          height: Platform.OS === "ios" ? 180 : 150,
        }}
      />
    ),
    options: ["97", "71", "87", "29"],
    correct_option: "97",
  },
  {
    question: "What number do you see?",
    image: (
      <Image
        source={require("../assets/images/colorBlindImages/15.png")}
        style={{
          width: Platform.OS === "ios" ? 180 : 150,
          height: Platform.OS === "ios" ? 180 : 150,
        }}
      />
    ),
    options: ["14", "25", "5", "15"],
    correct_option: "15",
  },
  {
    question: "What number do you see?",
    image: (
      <Image
        source={require("../assets/images/colorBlindImages/004.jpg")}
        style={{
          width: Platform.OS === "ios" ? 180 : 150,
          height: Platform.OS === "ios" ? 180 : 150,
        }}
      />
    ),
    options: ["8", "19", "2", "12"],
    correct_option: "2",
  },
  {
    question: "What number do you see?",
    image: (
      <Image
        source={require("../assets/images/colorBlindImages/8.jpg")}
        style={{
          width: Platform.OS === "ios" ? 180 : 150,
          height: Platform.OS === "ios" ? 180 : 150,
        }}
      />
    ),
    options: ["6", "14", "2", "8"],
    correct_option: "8",
  },
];
