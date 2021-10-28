import React from "react";
import { TouchableWithoutFeedback, StyleSheet, View } from "react-native";
//components
import Icon from "../../Icon";
//utils
import { COLORS } from "../../../style/colors";

export default function SubmitButton({ submit }) {
  //handlers
  const handlePress = async () => submit();

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={style.container}>
        <Icon name="search" size={30} color={COLORS.extra} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const style = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    width: 50,
    paddingHorizontal: 10,
  },
});
