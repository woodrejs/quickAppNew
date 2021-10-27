import React, { useRef } from "react";
import * as Animatable from "react-native-animatable";
import { TouchableWithoutFeedback, StyleSheet } from "react-native";
//components
import Icon from "../Icon";
//utils
import { COLORS } from "../../style/colors";

export default function ResetButton({ handleReset, value }) {
  const ref = useRef(null);

  const handlePress = () => {
    ref.current.tada();
    handleReset();
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Animatable.View
        ref={ref}
        animation={value.length ? "fadeIn" : "fadeOut"}
        style={style.container}
        useNativeDriver
      >
        <Icon name="cross" size={18} color={COLORS.grey} />
      </Animatable.View>
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
    paddingHorizontal: 15,
  },
});
