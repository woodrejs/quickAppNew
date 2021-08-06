import React from "react";
import { View, StyleSheet } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../../../style/colors";

const ListItemButton = () => {
  return (
    <View style={style.container}>
      <AntDesign name="delete" size={18} color="black" />
    </View>
  );
};

export default ListItemButton;

const style = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightExtra,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    padding: 9,
  },
});
