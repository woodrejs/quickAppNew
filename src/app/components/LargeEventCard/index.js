import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableHighlight, ImageBackground } from "react-native";
//components
import CardHeaderSection from "../CardHeaderSection";
//utils & styles
import { useIsFocused } from "@react-navigation/native";
import { Fontisto } from "@expo/vector-icons";
import { style } from "./index.style";
import { COLORS } from "../../style/colors";

const LargeEventCard = ({ data, navigation }) => {
  const [counter, setCounter] = useState(0);
  const [intervalId, setIntervalId] = useState();
  const isFocused = useIsFocused();
  const { title, img, startDate, ticketing } = data[counter];

  const startRace = () => {
    setIntervalId(
      setInterval(() => {
        setCounter((prevState) => (prevState < data.length - 1 ? prevState + 1 : 0));
      }, 5000)
    );
  };
  const stopRace = () => clearInterval(intervalId, 5000);

  useEffect(() => {
    isFocused ? startRace() : stopRace();
  }, [isFocused]);

  return (
    <View style={style.container}>
      <View style={style.box}>
        <Text style={style.title}>Premiera w tym tygodniu</Text>
        <Fontisto name="eye" size={14} color={COLORS.lightExtra} />
      </View>
      <TouchableHighlight>
        <ImageBackground
          style={style.imageBox}
          imageStyle={style.image}
          source={{ uri: img }}
        >
          <CardHeaderSection title={title} ticketing={ticketing} date={startDate} />
        </ImageBackground>
      </TouchableHighlight>
    </View>
  );
};
export default LargeEventCard;
