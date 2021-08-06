import { StyleSheet } from "react-native";
import { COLORS } from "../../style/colors";

export const style = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    padding: 10,
  },
  title: {
    color: COLORS.black,
    fontSize: 30,
    fontFamily: "Montserrat700",
    fontWeight: "700",
    paddingTop: 5,
    paddingBottom: 15,
  },
  text: {
    color: COLORS.black,
    fontSize: 12,
    lineHeight: 18,
    fontFamily: "Montserrat400",
    fontWeight: "400",
  },
  subTitle: {
    paddingTop: 60,
    fontSize: 24,
    lineHeight: 24,
    fontFamily: "Montserrat700",
    fontWeight: "700",
    color: COLORS.black,
  },
  label: {
    color: COLORS.black,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "Montserrat400",
    fontWeight: "400",
    paddingBottom: 30,
  },
  footer: { height: 50 },
});
