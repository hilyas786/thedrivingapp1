import { Image } from "react-native";

export default englishExamData = [
  {
    question: "Where would you encounter these traffic signs?",
    image: (
      <Image
        source={require("../assets/images/roadSigns/family.webp")}
        style={{ width: 80, height: 80 }}
      />
    ),
    image1: (
      <Image
        source={require("../assets/images/roadSigns/stop.webp")}
        style={{ width: 80, height: 80 }}
      />
    ),

    options: ["Town", "School", "Hospital"],
    correct_option: "School",
  },
  {
    question: "Choose the correct meaning of this traffic sign",
    image: (
      <Image
        source={require("../assets/images/roadSigns/stop.webp")}
        style={{ width: 80, height: 80 }}
      />
    ),
    options: [
      "Stop after white line",
      "Stop before white line",
      "Stop for children to cross",
    ],
    correct_option: "Stop before white line",
  },
  {
    question: "What does this road sign mean",
    image: (
      <Image
        source={require("../assets/images/prohibitory-signs/noslow.png")}
        style={{ width: 80, height: 80 }}
      />
    ),
    options: [
      "Only these types of vehicles allowed ",
      "No parking for these types of vehicles",
      "Only these types of vehicles not allowed",
    ],
    correct_option: "Only these types of vehicles not allowed",
  },
  {
    question: "What does this road sign mean?",
    image: (
      <Image
        source={require("../assets/images/prohibitory-signs/straighorright.webp")}
        style={{ width: 80, height: 80 }}
      />
    ),
    options: [
      "Right turn only",
      "May proceed straight or turn right only",
      "May proceed straight or turn left only",
    ],
    correct_option: "May proceed straight or turn right only",
  },
  {
    question: "Choose the correct statement for this sign",
    image: (
      <Image
        source={require("../assets/images/examimages/noU.webp")}
        style={{ width: 80, height: 80 }}
      />
    ),
    options: ["U-turn permitted ", "No right turn", "No U-turn"],
    correct_option: "No U-turn",
  },
  {
    question: "When driving downhill, you must:",

    options: ["Pull up your handbrake", "Use a high gear", "Use a low gear"],
    correct_option: "Use a low gear",
  },
  {
    question: "Health standard required of an applicant for a driving licence:",

    options: [
      "Physically fit and able to hear from a distance of 23 meters",
      "Physically fit and able to hear from a distance of 20 meters & not color blind",
      "Physically fit and able to see up to a distance of 23 meters & not color blind",
    ],
    correct_option:
      "Physically fit and able to see up to a distance of 23 meters & not color blind",
  },
  {
    question: "Where would one encounter these traffic signs?",
    image: (
      <Image
        source={require("../assets/images/roadSigns/10up.webp")}
        style={{ width: 80, height: 80 }}
      />
    ),
    image1: (
      <Image
        source={require("../assets/images/roadSigns/rocksfall.webp")}
        style={{ width: 80, height: 80 }}
      />
    ),
    image2: (
      <Image
        source={require("../assets/images/examimages/noOvertake.webp")}
        style={{ width: 80, height: 110 }}
      />
    ),
    options: ["Urban area", "Hilly area", "Seashore"],
    correct_option: "Hilly area",
  },
  {
    question: "Why was KEJARA system introduced?",

    options: [
      "To act against PDL holders",
      "To act against traffic offenders",
      "To act against CDL holders",
    ],
    correct_option: "To act against traffic offenders",
  },
  {
    question: "What must a driver do upon seeing this road sign?",
    image: (
      <Image
        source={require("../assets/images/roadSigns/roadbendsright.webp")}
        style={{ width: 80, height: 80 }}
      />
    ),

    options: [
      "Slow down the vehicle, change to a high gear and be prepared to stop",
      "Slow down the vehicle, change to a low gear and no overtaking",
      "Slow down the vehicle, change to a low gear and be prepared to stop",
    ],
    correct_option:
      "Slow down the vehicle, change to a low gear and no overtaking",
  },
  {
    question: "What is the correct driving method on 3-lane highway?",

    options: [
      "Left lane for stopping, middle lane for cruising, right lane for speeding",
      "Left lane for speeding, middle lane for overtaking, right lane for cruising",
      "Left lane for crusing, middle lane for speeding, right lane for overtaking",
    ],
    correct_option:
      "Left lane for crusing, middle lane for speeding, right lane for overtaking",
  },
  {
    question: "Which area would you see this traffic sign while driving?",
    image: (
      <Image
        source={require("../assets/images/examimages/3.5.webp")}
        style={{ width: 80, height: 80 }}
      />
    ),

    options: ["Housing", "Construction", "Tunnel"],
    correct_option: "Tunnel",
  },
  {
    question: "Choose the correct statement",
    image: (
      <Image
        source={require("../assets/images/examimages/chooseabc.png")}
        style={{ width: 160, height: 120 }}
      />
    ),

    options: [
      "Vehicle B gives way to vehicle C",
      "Vehicle A gives way to vehicle B",
      "Vehicle B gives way to vehicle A",
    ],
    correct_option: "Vehicle B gives way to vehicle A",
  },
  {
    question: "Choose the correct statement",
    image: (
      <Image
        source={require("../assets/images/examimages/ab.png")}
        style={{ width: 160, height: 120 }}
      />
    ),

    options: [
      "Vehicle B has to give the right of way to vehicle A",
      "Vehicle A has to give the right of way to vehicle B",
      "Vehicle A has to accelerate upon seeing vehicle B",
    ],
    correct_option: "Vehicle A has to give the right of way to vehicle B",
  },
  {
    question: "Driver A drives slowly in lane Y. Which statement is correct:",
    image: (
      <Image
        source={require("../assets/images/examimages/driverslow.png")}
        style={{ width: 120, height: 120 }}
      />
    ),

    options: [
      "Driver A should change to lane X",
      "Driver A is in the correct lane",
      "Driver A has exceeded the prescribed speed limit",
    ],
    correct_option: "Driver A should change to lane X",
  },
  {
    question: "What factors contribute to accidents?",

    options: ["Condition of vehicle", "Color of vehicle", "Type of vehicle"],
    correct_option: "Condition of vehicle",
  },
  {
    question: "To ensure a safe journey, what must we do before setting out?",

    options: [
      "Borrow your friends car",
      "Ensure the vehicle is in good condition",
      "Ensure that all relevant arrangements are made during the day",
    ],
    correct_option: "Ensure the vehicle is in good condition",
  },
  {
    question: "A driver with good driving practices will do the following:",

    options: [
      "Overtake hurriedly without indicating",
      "Plan the trip before setting out",
      "Drive fast due to delay in departure",
    ],
    correct_option: "Plan the trip before setting out",
  },
  {
    question: "The worst collision is:",

    options: [
      "Collision with a vehicle from the side",
      "Collision with a vehicle from the rear",
      "Collision with a vehicle from the front",
    ],
    correct_option: "Collision with a vehicle from the front",
  },
  {
    question:
      "What is it that you may NOT do when your vehicle is being overtaken by other?",

    options: [
      "Drive on the left lane ",
      "Accelerate your vehicle",
      "Allow the other vehicle to overtake",
    ],
    correct_option: "Accelerate your vehicle",
  },
  //
  {
    question: "What should Driver A do before turning?",
    image: (
      <Image
        source={require("../assets/images/examimages/drivera.png")}
        style={{ width: 80, height: 80 }}
      />
    ),

    options: [
      "Give the signal to turn right, give way to vehicles coming from opposite directions and turn",
      "Give way to vehicles coming out of the junction",
      "Turn while ignoring vehicles from the opposite direction",
    ],
    correct_option:
      "Give the signal to turn right, give way to vehicles coming from opposite directions and turn",
  },
  {
    question: "Select the correct answer:",
    image: (
      <Image
        source={require("../assets/images/examimages/lane.png")}
        style={{ width: 100, height: 100 }}
      />
    ),
    options: [
      "Vehicle C should give way to vehicle B",
      "Vehicle B should give way to vehicle C",
      "Vehicle B should give way to vehicle A",
    ],
    correct_option: "Vehicle B should give way to vehicle A",
  },
  {
    question:
      "What should you do when you see a group of children playing by the road while you are driving?",

    options: [
      "Slow down you vehicle, be prepared to brake and stop if necessary Reduce speed",
      "Stop by the road and watch the children by the road",
      "Accelerate and honk loudly for the children to hear",
    ],
    correct_option:
      "Slow down you vehicle, be prepared to brake and stop if necessary Reduce speed",
  },
  {
    question: "What is allowable alcohol content in urine, breath and blood?",

    options: ["0.00 mg of alcohol", "1.00 mg of alcohol", "2.00 mg of alcohol"],
    correct_option: "0.00 mg of alcohol",
  },
  {
    question: "Which statement indicates the steps to be taken before driving?",

    options: [
      "Change the engine oil and spark plug",
      "Adjust the seat and mirror, and put on your seat belt",
      "Wash the car every week",
    ],
    correct_option: "Adjust the seat and mirror, and put on your seat belt",
  },
  {
    question: "One of the factors that causes road accidents is:",

    options: ["Good weather condition", "Driver error", "Good road condition"],
    correct_option: "Driver error",
  },
  {
    question: "When overtaking a vehicle, one must:",

    options: [
      "Make sure the vehicle in front is moving fast before overtaking",
      "Follow the 12-second rule and signal for at least 3 seconds before",
      "Swerve to the right quickly and accelerate",
    ],
    correct_option:
      "Follow the 12-second rule and signal for at least 3 seconds before",
  },
  {
    question: "What is the correct meaning of this road sign?",
    image: (
      <Image
        source={require("../assets/images/roadSigns/junctionleft.webp")}
        style={{ width: 80, height: 80 }}
      />
    ),

    options: ["Left junction", "Three way junction ahead", "Forked road"],
    correct_option: "Left junction",
  },
  {
    question: "What should a driver do if brake of vehicle fails?",

    options: [
      "Pull the handbrake immediately",
      "Pump your brake pedal vigorously and quickly",
      "Honk and turn on the high beam",
    ],
    correct_option: "Pump your brake pedal vigorously and quickly",
  },
  {
    question: "What is the correct meaning of this road sign?",
    image: (
      <Image
        source={require("../assets/images/roadSigns/railwayborder.webp")}
        style={{ width: 80, height: 110 }}
      />
    ),

    options: [
      "Level crossing with gates",
      "Pedestrian crossing",
      "Level crossing with automatic gates",
    ],
    correct_option: "Level crossing with automatic gates",
  },
  {
    question:
      "What action is required if the driver saw this sign on the road?",
    image: (
      <Image
        source={require("../assets/images/roadSigns/uncontrolled.webp")}
        style={{ width: 100, height: 100 }}
      />
    ),

    options: [
      "Accelerate",
      "Make turn without giving signal",
      "Drive in the correct lane",
    ],
    correct_option: "Drive in the correct lane",
  },
  {
    question:
      "In defensive driving, the following steps could help prevent accidents:",

    options: [
      "Drive at high speed and be prepared to brake at any time",
      "Tailgate the vehicle in front and overtake at any time",
      "Identify, analyse obstacles, make decisions and take action",
    ],
    correct_option:
      "Identify, analyse obstacles, make decisions and take action",
  },
  {
    question: "Pick the correct meaning of this traffic sign?",
    image: (
      <Image
        source={require("../assets/images/roadSigns/stopandgiveway.webp")}
        style={{ width: 80, height: 80 }}
      />
    ),

    options: ["Hump ahead", "Winding road", "Stop ahead"],
    correct_option: "Stop ahead",
  },

  {
    question: "What does this traffic sign stand for?",
    image: (
      <Image
        source={require("../assets/images/examimages/60.webp")}
        style={{ width: 80, height: 80 }}
      />
    ),

    options: [
      "Caution, traffic police ahead",
      "Winding road",
      "Comply with specified speed limit",
    ],
    correct_option: "Comply with specified speed limit",
  },
  {
    question: "The rear view mirror helps the driver to see:",

    options: [
      "The passengers in the rear seat",
      "The scenery through the rear window",
      "The ornaments inside the car",
    ],
    correct_option: "The scenery through the rear window",
  },
  {
    question: "On an uneven road, you should:",

    options: ["Drive faster", "Use the handbrake", "Reduce your speed"],
    correct_option: "Reduce your speed",
  },
  {
    question: "Defensive driving means:",

    options: [
      "Monitoring the behaviour of other road users",
      "Controlling use of fuel and cost of vehicle maintenance",
      "Driving to avoid accidents",
    ],
    correct_option: "Driving to avoid accidents",
  },

  {
    question: "What does this traffic sign mean?",
    image: (
      <Image
        source={require("../assets/images/examimages/obstruct.png")}
        style={{ width: 80, height: 80 }}
      />
    ),
    options: ["Obstruction ahead", "Stop sign ahead", "Slow down"],
    correct_option: "Obstruction ahead",
  },
  {
    question:
      "Accidents while reversing a vehicle could be avoided if the driver:",

    options: [
      "Assesses the true situation before getting into the vehicle, looks in the rear view mirror and side mirror before reversing",
      "Reversing without turning the head to assess the traffic situation",
      "Reverses quickly without assessing the true road condition",
    ],
    correct_option:
      "Assesses the true situation before getting into the vehicle, looks in the rear view mirror and side mirror before reversing",
  },
  {
    question: "What is the rule of distance when following behind a vehicle?",

    options: [
      "The 12-second rule",
      "The 2-second and 4-second rules",
      "The 6-second and 12-second rules",
    ],
    correct_option: "The 2-second and 4-second rules",
  },

  {
    question: "What does this traffic sign mean?",
    image: (
      <Image
        source={require("../assets/images/examimages/noright.webp")}
        style={{ width: 80, height: 80 }}
      />
    ),
    options: ["No left turn", "No right turn", "No parking"],
    correct_option: "No left turn",
  },

  {
    question: "A CDL can be renewed for a maximum period of?",

    options: ["5 years", "8 years", "2 years"],
    correct_option: "5 years",
  },
  {
    question: "What must you do to overcome blind spots?",

    options: [
      "Turn on the high beam before driving",
      "Turn your head slightly to the left and right before changing lanes",
      "Change lanes without indicating",
    ],
    correct_option:
      "Turn your head slightly to the left and right before changing lanes",
  },
  {
    question:
      "As you approach the crossroads with traffic lights and manned by traffic police, you should:",

    options: [
      "Follow the signals and instruction of the police officer",
      "Follow the traffic lights as usual",
      "Proceed according to road priority",
    ],
    correct_option: "Follow the signals and instruction of the police officer",
  },

  {
    question:
      "When the traffic light in front of you turns from red to green, you should:",

    options: [
      "Honk before you proceed",
      "Proceed without exercising caution",
      "Proceed if there is no obstruction",
    ],
    correct_option: "Proceed if there is no obstruction",
  },
  //
  {
    question: "Choose the correct meaning for this traffic sign",
    image: (
      <Image
        source={require("../assets/images/roadSigns/twowaytraffic.webp")}
        style={{ width: 80, height: 80 }}
      />
    ),
    options: ["One way street", "Two-way traffic", "Dual Carriageway"],
    correct_option: "Two-way traffic",
  },
  {
    question:
      "What is the age requirement for applying for a class D driving licence?",

    options: ["16 years old", "17 years old", "18 years old"],
    correct_option: "17 years old",
  },
  {
    question: "Lane x is closed. Choose the correct answer",
    image: (
      <Image
        source={require("../assets/images/examimages/lanex.png")}
        style={{ width: 80, height: 80 }}
      />
    ),
    options: [
      "Vehicle on lane X should merge into lane Y alternately",
      "Vehicles in lane X have to run back",
      "Vehicles in lane Y do not have to give way to vehicles in lane X",
    ],
    correct_option: "Vehicle on lane X should merge into lane Y alternately",
  },
  {
    question: "Pick the offence under the Road Transport Act, 1987:",

    options: [
      "Not displaying vehicle road tax",
      "Not stopping when stopped by other driver",
      "Switching on headlights in daytime",
    ],
    correct_option: "Not displaying vehicle road tax",
  },
  {
    question: "Which statement indicates the steps taken before driving?",

    options: [
      "Change the engine oil and spark plug",
      "Adjust the seat and mirror, and put on your seat belt",
      "Wash the car before leaving",
    ],
    correct_option: "Adjust the seat and mirror, and put on your seat belt",
  },
];
