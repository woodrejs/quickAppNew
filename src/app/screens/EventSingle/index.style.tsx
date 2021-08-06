import { StyleSheet } from "react-native";
import { COLORS } from "../../style/colors";

export const style = StyleSheet.create({
  container: { padding: 10 },
  description: {
    color: COLORS.black,
    fontFamily: "Montserrat400",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 17,
    paddingHorizontal: 10,
    paddingBottom: 60,
  },
  title: {
    color: COLORS.black,
    fontFamily: "Montserrat700",
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 24,
    paddingBottom: 5,
    paddingHorizontal: 10,
  },
  subTitle: {
    color: COLORS.black,
    fontFamily: "Montserrat400",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 12,
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
});
