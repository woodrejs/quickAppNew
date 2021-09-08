import React from "react";
import { ImageBackground, TouchableHighlight, StyleSheet } from "react-native";

import { COLORS } from "../../../style/colors";
import VerticalCardLabel from "./VerticalCardLabel";
import CardCTASection from "../../CardCTASection";

const VerticalListCard = () => {
  return (
    <ImageBackground
      style={style.container}
      imageStyle={style.image}
      source={require("../../../../../assets/index_1.jpg")}
    >
      <TouchableHighlight style={style.box}>
        <VerticalCardLabel title="Long name of some place" />
      </TouchableHighlight>
      <CardCTASection />
    </ImageBackground>
  );
};

export default VerticalListCard;

const style = StyleSheet.create({
  container: {
    height: 220,
    width: "100%",
    backgroundColor: COLORS.black,
    borderRadius: 20,
    marginBottom: 10,
    position: "relative",
  },
  box: {
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  image: { opacity: 0.7, borderRadius: 20 },
});
