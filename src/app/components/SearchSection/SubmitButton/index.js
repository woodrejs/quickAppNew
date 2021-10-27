import React, { useRef } from "react";
import * as Animatable from "react-native-animatable";
import { TouchableWithoutFeedback, StyleSheet } from "react-native";
//components
import Icon from "../../Icon";
//utils
import { COLORS } from "../../../style/colors";

export default function SubmitButton({ submit }) {
  const ref = useRef(null);

  const handlePress = async () => {
    await ref.current.tada();
    submit();
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Animatable.View ref={ref} style={style.container} useNativeDriver>
        <Icon name="search" size={30} color={COLORS.extra} />
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
    paddingHorizontal: 10,
  },
});
