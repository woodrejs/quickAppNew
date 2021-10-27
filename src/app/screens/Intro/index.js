import React, { createRef } from "react";
import * as Animatable from "react-native-animatable";
import { View, StyleSheet } from "react-native";
//components
import Logo from "./Logo";
//utils
import { STYLES } from "../../style/styles";
import { COLORS } from "../../style/colors";

export default React.memo(function Intro() {
  const ref = createRef();

  return (
    <View style={style.container}>
      <Animatable.View
        style={style.box}
        ref={ref}
        animation="pulse"
        easing="ease-out"
        useNativeDriver
        iterationCount="infinite"
      >
        <Logo />
      </Animatable.View>
    </View>
  );
});

//style
const style = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: COLORS.extra,
    position: "relative",
  },
  box: {
    ...STYLES.shadow,
    borderRadius: 100,
    backgroundColor: COLORS.extra,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 85,
    width: 85,
  },
});
