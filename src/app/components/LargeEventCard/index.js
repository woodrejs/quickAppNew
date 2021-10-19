import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, ImageBackground } from "react-native";
//components
import CardHeaderSection from "../CardHeaderSection";
import LargeCardHeader from "./LargeCardHeader";
//utils & styles
import { useIsFocused } from "@react-navigation/native";
import { style } from "./index.style";
import useId from "../../hooks/useId";

//!!important!!
const LargeEventCard = ({ list, navigation, variant = "offers" }) => {
  const [counter, setCounter] = useState(0);
  const [intervalId, setIntervalId] = useState();
  const isFocused = useIsFocused();
  const setId = useId();

  const { id, img } = list[counter];

  const handlePress = () => setId(id, variant, navigation);
  const stopRace = () => clearInterval(intervalId, 5000);
  const startRace = () => {
    setIntervalId(
      setInterval(() => {
        setCounter((prevState) => (prevState < list.length - 1 ? prevState + 1 : 0));
      }, 5000)
    );
  };

  useEffect(() => {
    isFocused ? startRace() : stopRace();
  }, [isFocused]);

  return (
    <View style={style.container}>
      <LargeCardHeader
        id={id}
        navigation={navigation}
        title="Wybrane w tym tygodniu"
        variant={variant}
      />

      <TouchableOpacity onPress={handlePress}>
        <ImageBackground
          style={style.imageBox}
          imageStyle={style.image}
          source={{ uri: img }}
        >
          <CardHeaderSection data={list[counter]} />
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};
export default LargeEventCard;
