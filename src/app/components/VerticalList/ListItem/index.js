import React from "react";
import { ImageBackground, TouchableHighlight, StyleSheet } from "react-native";

import { COLORS } from "../../../style/colors";
import ItemLabel from "./ItemLabel";
import ListButtonsSection from "../../ListButtonsSection";

const ListItem = () => {
  return (
    <ImageBackground
      style={style.container}
      imageStyle={style.image}
      source={require("../../../../../assets/index_1.jpg")}
    >
      <TouchableHighlight style={style.box}>
        <ItemLabel title="Long name of some place" />
      </TouchableHighlight>
      <ListButtonsSection />
    </ImageBackground>
  );
};

export default ListItem;

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
