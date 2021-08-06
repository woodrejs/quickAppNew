import { StyleSheet } from "react-native";
import { COLORS } from "../../../style/colors";

export const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 30,
  },
  text: {
    color: COLORS.black,
    fontFamily: "Montserrat400",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 12,
    paddingLeft: 10,
  },
});
