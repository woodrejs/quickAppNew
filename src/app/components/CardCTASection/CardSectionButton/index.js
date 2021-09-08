import React from "react";
import { View, StyleSheet } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { COLORS } from "../../../style/colors";

const CardSectionButton = ({ type }) => {
  return (
    <View style={style.container}>
      {type === "favorite" && <AntDesign name="heart" size={13} color={COLORS.black} />}
      {type === "schedule" && <Fontisto name="date" size={13} color={COLORS.black} />}
    </View>
  );
};

export default CardSectionButton;

const style = StyleSheet.create({
  container: {
    width: 25,
    height: 25,
    backgroundColor: COLORS.white,
    borderRadius: 50,
    marginBottom: 5,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
