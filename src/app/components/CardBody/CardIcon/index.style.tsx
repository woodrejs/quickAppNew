import { StyleSheet } from "react-native";
import { COLORS } from "../../../style/colors";

export const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 30,
  },
  title: {
    color: COLORS.white,
    fontFamily: "Montserrat700",
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 12,
    paddingLeft: 20,
  },
});
