import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";
//utils & styles
import { COLORS } from "../../style/colors";

const LoadingSection = () => {
  return (
    <View style={style.container}>
      <Progress.CircleSnail size={90} color={COLORS.extra} indeterminate={true} />
      <Text style={style.text}>Loading</Text>
    </View>
  );
};

export default LoadingSection;

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 10,
    fontFamily: "Montserrat400",
    fontWeight: "400",
    color: COLORS.black,
  },
});
