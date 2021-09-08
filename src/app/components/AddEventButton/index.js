import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { COLORS } from "../../style/colors";

const AddEventButton = () => {
  return (
    <View style={style.container}>
      <View style={style.box}>
        <AntDesign name="plus" size={24} color={COLORS.white} />
      </View>
      <Text style={style.title}>dzisiejsze {"\n"}wydarzenia</Text>
    </View>
  );
};

export default AddEventButton;

const style = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingVertical: 25,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  box: {
    backgroundColor: COLORS.lightExtra,
    padding: 20,
    height: 65,
    width: 65,
    borderRadius: 50,
  },
  title: {
    color: COLORS.grey,
    fontSize: 14,
    fontFamily: "Montserrat700",
    fontWeight: "700",
    textTransform: "uppercase",
    paddingLeft: 15,
  },
});
