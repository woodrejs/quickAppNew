import React, { useCallback } from "react";
import { View, TouchableWithoutFeedback, StyleSheet } from "react-native";
//style & utils
import { COLORS } from "../../../style/colors";

export default React.memo(function NavSectionButton({ navigation }) {
  //handlers
  const handlePress = useCallback(() => navigation.openDrawer());

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={style.box}>
        <View style={style.row}>
          <View style={style.sphere} />
          <View style={style.sphere} />
          <View style={style.sphere} />
        </View>
        <View style={style.row}>
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
    height: "100%",
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
  },
  sphere: {
    backgroundColor: COLORS.lightnest,
    height: 6,
    width: 6,
    borderRadius: 50,
    marginHorizontal: 2,
  },
});
