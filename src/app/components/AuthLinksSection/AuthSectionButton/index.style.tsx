import { StyleSheet } from "react-native";
import { COLORS } from "../../../style/colors";

export const style = StyleSheet.create({
  button: {
    backgroundColor: "transparent",
    fontSize: 14,
    textTransform: "capitalize",
    textDecorationLine: "underline",
    color: COLORS.black,
    fontFamily: "Montserrat400",
    fontWeight: "400",
  },
});
