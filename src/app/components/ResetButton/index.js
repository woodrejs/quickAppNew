import React from "react";
import * as Animatable from "react-native-animatable";
import { TouchableWithoutFeedback, StyleSheet, View } from "react-native";
//components
import Icon from "../Icon";
//utils
import { COLORS } from "../../style/colors";

export default function ResetButton({ handleReset, value, styles }) {
  //handlers
  const handlePress = () => handleReset();

  return (
    <View style={styles}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <Animatable.View
          animation={value.length ? "fadeIn" : "fadeOut"}
          style={style.container}
          duration={300}
          useNativeDriver
        >
          <Icon name="cross" size={18} color={COLORS.grey} />
        </Animatable.View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    width: 50,
    paddingHorizontal: 15,
  },
});
