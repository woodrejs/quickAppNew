import React from "react";
import { View, Text, TouchableHighlight, ImageBackground } from "react-native";

import CardHeaderSection from "../CardHeaderSection";
import { style } from "./index.style";
import { COLORS } from "../../style/colors";
import { Fontisto } from "@expo/vector-icons";

const LargeEventCard = () => {
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
          source={require("../../../../assets/index_1.jpg")}
        >
          <CardHeaderSection
            title="Long name of some event"
            hour="19:00"
            date="22/12/2021"
          />
        </ImageBackground>
      </TouchableHighlight>
    </View>
  );
};
export default LargeEventCard;
