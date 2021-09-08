import React from "react";
import {
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableHighlight,
} from "react-native";

import { COLORS } from "../../../style/colors";
import CardCTASection from "../../CardCTASection";

const GridListItem = () => {
  return (
    <ImageBackground
      style={style.container}
      imageStyle={style.image}
      source={require("../../../../../assets/index_1.jpg")}
    >
      <TouchableHighlight style={style.box}>
        <Text style={style.title}>Long name of some event</Text>
      </TouchableHighlight>

      <CardCTASection />
    </ImageBackground>
  );
};

export default GridListItem;

const style = StyleSheet.create({
  container: {
    position: "relative",
    height: 200,
    width: Dimensions.get("window").width / 2 - 15,
    backgroundColor: COLORS.black,
    marginBottom: 10,
    borderRadius: 20,
  },
  box: {
    padding: 10,
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  image: { width: "100%", borderRadius: 20, opacity: 0.7 },
  title: {
    color: COLORS.white,
    fontSize: 14,
    fontFamily: "Montserrat700",
    fontWeight: "700",
    paddingTop: 5,
    width: "90%",
  },
});
