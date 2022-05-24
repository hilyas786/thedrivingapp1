import { Image } from "react-native";

export default myColorTest = [
  {
    question: "Berapakah nombor yang tertera?",
    image: (
      <Image
        source={require("../assets/images/colorBlindImages/12.png")}
        style={{
          width: Platform.OS === "ios" ? 150 : 120,
          height: Platform.OS === "ios" ? 150 : 120,
        }}
      />
    ),
    options: ["12", "31", "1", "15"],
    correct_option: "12",
  },
  {
    question: "Apakah bentuk yang tertera?",
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
    question: "Berapakah nombor yang tertera?",
    image: (
      <Image
        source={require("../assets/images/colorBlindImages/29.png")}
        style={{
          width: Platform.OS === "ios" ? 150 : 120,
          height: Platform.OS === "ios" ? 150 : 120,
        }}
      />
    ),
    options: ["72", "46", "29", "42"],
    correct_option: "29",
  },
  {
    question: "Berapakah nombor yang tertera?",
    image: (
      <Image
        source={require("../assets/images/colorBlindImages/97.png")}
        style={{
          width: Platform.OS === "ios" ? 150 : 120,
          height: Platform.OS === "ios" ? 150 : 120,
        }}
      />
    ),
    options: ["29", "71", "86", "97"],
    correct_option: "97",
  },
  {
    question: "Berapakah nombor yang tertera?",
    image: (
      <Image
        source={require("../assets/images/colorBlindImages/15.png")}
        style={{
          width: Platform.OS === "ios" ? 150 : 120,
          height: Platform.OS === "ios" ? 150 : 120,
        }}
      />
    ),
    options: ["14", "25", "5", "15"],
    correct_option: "15",
  },
  {
    question: "Berapakah nombor yang tertera?",
    image: (
      <Image
        source={require("../assets/images/colorBlindImages/004.jpg")}
        style={{
          width: Platform.OS === "ios" ? 150 : 120,
          height: Platform.OS === "ios" ? 150 : 120,
        }}
      />
    ),
    options: ["8", "19", "2", "12"],
    correct_option: "2",
  },
  {
    question: "Berapakah nombor yang tertera?",
    image: (
      <Image
        source={require("../assets/images/colorBlindImages/8.jpg")}
        style={{
          width: Platform.OS === "ios" ? 150 : 120,
          height: Platform.OS === "ios" ? 150 : 120,
        }}
      />
    ),
    options: ["6", "14", "2", "8"],
    correct_option: "8",
  },
];
