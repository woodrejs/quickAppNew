import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../style/colors";

const SmallButton = ({ handler }) => {
  return (
    <TouchableOpacity onPress={handler}>
      <View style={style.container}>
        <View style={style.box}>
          <AntDesign name="plus" size={20} color={COLORS.white} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SmallButton;

const style = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: COLORS.lightExtra,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
    borderRadius: 50,
  },
});
