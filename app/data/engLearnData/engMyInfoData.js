import { Image } from "react-native";

export default engMyInfoData = [
  {
    type: "MandatorySigns",
    image: (
      <Image
        source={require("../../assets/images/Mandatory/1way.png")}
        style={{ width: 250, height: 150 }}
      />
    ),
    description: "One-way traffic",
    mydes: "Jalan sehala",
  },
  {
    type: "MandatorySigns",
    image: (
      <Image
        source={require("../../assets/images/Mandatory/deadEnd.png")}
        style={{ width: 150, height: 150 }}
      />
    ),
    description: "Road ahead is a dead end",
    mydes: "Jalan mati",
  },
  {
    type: "MandatorySigns",
    image: (
      <Image
        source={require("../../assets/images/Mandatory/highwayStarts.png")}
        style={{ width: 150, height: 150 }}
      />
    ),
    description: "Motorway begins",
    mydes: "Lebuhraya bermula",
  },
  {
    type: "MandatorySigns",
    image: (
      <Image
        source={require("../../assets/images/Mandatory/peopleCross.png")}
        style={{ width: 150, height: 150 }}
      />
    ),
    description: "Pedestrian crossing-People can cross",
    mydes: "Lintasan pejalan kaki",
  },
  {
    type: "MandatorySigns",
    image: (
      <Image
        source={require("../../assets/images/Mandatory/parkingPermit.png")}
        style={{ width: 150, height: 150 }}
      />
    ),
    description: "Parking permitted",
    mydes: "Tempat letak kenderaan",
  },
  {
    type: "MandatorySigns",
    image: (
      <Image
        source={require("../../assets/images/Mandatory/highwayEnds.png")}
        style={{ width: 150, height: 150 }}
      />
    ),
    description: "MotorwayEnds",
    mydes: "Lebuhraya tamat",
  },
  {
    type: "MandatorySigns",
    image: (
      <Image
        source={require("../../assets/images/Mandatory/Straight.png")}
        style={{ width: 150, height: 150 }}
      />
    ),
    description: "Driving straight ahead or turning right mandatory",
    mydes: "Terus lurus atau kanan",
  },
  {
    type: "MandatorySigns",
    image: (
      <Image
        source={require("../../assets/images/Mandatory/Ahead.png")}
        style={{ width: 150, height: 150 }}
      />
    ),
    description: "Ahead only",
    mydes: "Terus lurus",
  },
  {
    type: "MandatorySigns",
    image: (
      <Image
        source={require("../../assets/images/Mandatory/passing.png")}
        style={{ width: 150, height: 150 }}
      />
    ),
    description: "Passing left compulsory",
    mydes: "Ke kiri",
  },
  {
    type: "MandatorySigns",
    image: (
      <Image
        source={require("../../assets/images/Mandatory/deadEnd.png")}
        style={{ width: 150, height: 150 }}
      />
    ),
    description: "Road ahead is a dead end",
    mydes: "Jalan mati",
  },
  {
    type: "MandatorySigns",
    image: (
      <Image
        source={require("../../assets/images/Mandatory/cyclist.png")}
        style={{ width: 150, height: 150 }}
      />
    ),
    description: "Cyclist must use mandatory path",
    mydes: "Laluan basikal",
  },
];
