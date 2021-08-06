import { StyleSheet } from "react-native";
import { COLORS } from "../../style/colors";

export const style = StyleSheet.create({
  container: { width: "90%" },
  title: {
    color: COLORS.black,
    fontSize: 30,
    fontFamily: "Montserrat700",
    fontWeight: "700",
    paddingTop: 5,
  },
  text: {
    paddingTop: 15,
    color: COLORS.black,
    fontSize: 12,
    lineHeight: 18,
    fontFamily: "Montserrat400",
    fontWeight: "400",
  },
});
