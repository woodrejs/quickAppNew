import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../style/colors";

const ListPaginationButton = ({ handler }) => {
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

export default ListPaginationButton;

const style = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginTop: -10,
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
