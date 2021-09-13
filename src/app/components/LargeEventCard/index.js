import React from "react";
import { View, Text, TouchableHighlight, ImageBackground } from "react-native";

import CardHeaderSection from "../CardHeaderSection";
import { style } from "./index.style";
import { COLORS } from "../../style/colors";
import { Fontisto } from "@expo/vector-icons";

const LargeEventCard = ({ data }) => {
  //data is a list, need to be map in future !!!
  //ticketing change=> <CardHeaderSection hour={ticketing} !!!
  //clock icon to change on ticket icon  !!!
  // date need to be formated  !!!
  //tmp:
  const title = data[0].title;
  const img = data[0].img;
  const startDate = data[0].startDate;
  const ticketing = data[0].ticketing;

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
          <CardHeaderSection title={title} hour={ticketing} date={startDate} />
        </ImageBackground>
      </TouchableHighlight>
    </View>
  );
};
export default LargeEventCard;
