import { StyleSheet } from "react-native";
import { COLORS } from "../../../style/colors";

export const style = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    paddingBottom: 60,
  },
  title: {
    color: COLORS.grey,
    textTransform: "uppercase",
    fontFamily: "Montserrat700",
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 12,
    paddingTop: 15,
  },
});
