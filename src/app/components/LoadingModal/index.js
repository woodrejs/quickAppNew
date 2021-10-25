import React from "react";
import { View,  StyleSheet } from "react-native";
import { useSelector } from "react-redux";
//components
import ProgressSection from "../ProgressSection";
//utils & styles
import { COLORS } from "../../style/colors";

export default React.memo(function LoadingModal() {
  const { stage } = useSelector(({ appSlice }) => appSlice);

  if (stage === "waiting") return null;

  return (
    <View style={style.container}>
      <View style={style.mask} />
      <View>
        <ProgressSection progress={0.5} styles={style.box} />
      </View>
    </View>
  );
});

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  mask: {
    backgroundColor: COLORS.extra,
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  box: { position: "relative", bottom: 0 },
 
});
