import { StyleSheet } from "react-native";

import { COLORS } from "../../../style/colors";

export const style = StyleSheet.create({
  container: {
    backgroundColor: COLORS.extra,
    height: 50,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 22,
  },
  title: {
    color: COLORS.white,
    fontFamily: "Montserrat700",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 14,
    textTransform: "uppercase",
  },
});
