import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, ImageBackground } from "react-native";
//components
import CardHeaderSection from "../CardHeaderSection";
import LargeCardHeader from "./LargeCardHeader";
//utils & styles
import { useIsFocused } from "@react-navigation/native";
import { style } from "./index.style";
import { useDispatch } from "react-redux";
import { setId } from "../../redux/singleOffer.slice";
import { screensNames } from "../../utils/screensNames";

const LargeEventCard = ({ data, navigation }) => {
  const [counter, setCounter] = useState(0);
  const [intervalId, setIntervalId] = useState();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const { id, title, img, startDate, ticketing } = data[counter];

  const stopRace = () => clearInterval(intervalId, 5000);
  const startRace = () => {
    setIntervalId(
      setInterval(() => {
        setCounter((prevState) => (prevState < data.length - 1 ? prevState + 1 : 0));
      }, 5000)
    );
  };
  const handlePress = () => {
    dispatch(setId(id));
    navigation.navigate(screensNames.eventSingle);
  };

  useEffect(() => {
    isFocused ? startRace() : stopRace();
  }, [isFocused]);

  return (
    <View style={style.container}>
      <LargeCardHeader id={id} navigation={navigation} title="Wybrane w tym tygodniu" />

      <TouchableOpacity onPress={handlePress}>
        <ImageBackground
          style={style.imageBox}
          imageStyle={style.image}
          source={{ uri: img }}
        >
          <CardHeaderSection title={title} ticketing={ticketing} date={startDate} />
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};
export default LargeEventCard;
