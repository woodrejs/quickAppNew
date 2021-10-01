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

const GridListItem = ({ data }) => {
  const { uid, img, title, type } = data;
  return (
    <ImageBackground
      style={style.container}
      imageStyle={style.image}
      source={img ? { uri: img } : require("../../../../../assets/img/no_img.jpg")}
    >
      <TouchableHighlight style={style.box}>
        <Text style={style.title}>{title}</Text>
      </TouchableHighlight>

      <CardCTASection data={{ id: uid, img, title, type }} inFavorite />
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
