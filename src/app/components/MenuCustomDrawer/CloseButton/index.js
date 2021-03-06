import React from "react";
import { View, TouchableWithoutFeedback, StyleSheet } from "react-native";
//utils & styles
import { COLORS } from "../../../style/colors";

export default React.memo(function CloseButton({ handler }) {
  return (
    <TouchableWithoutFeedback onPress={handler}>
      <View style={style.box}>
        <View style={[style.row, { transform: [{ rotate: "45deg" }] }]}>
          <View style={style.sphere} />
          <View style={style.sphere} />
          <View style={style.sphere} />
        </View>
        <View style={[style.row, { transform: [{ rotate: "-45deg" }] }]}>
          <View style={style.sphere} />
          <View style={style.sphere} />
          <View style={style.sphere} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
});

const style = StyleSheet.create({
  box: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    minWidth: 50,
    minHeight: 50,
    paddingHorizontal: 5,
    position: "relative",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 2,
    position: "absolute",
  },
  sphere: {
    backgroundColor: COLORS.lightnest,
    height: 6,
    width: 6,
    borderRadius: 50,
    marginHorizontal: 2,
  },
});
