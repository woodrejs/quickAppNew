import { StyleSheet } from "react-native";
import { COLORS } from "../../style/colors";
import { STYLES } from "../../style/styles";

export const style = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "flex-start",
  },
  box: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingRight: 20,
  },
  title: {
    paddingLeft: 10,
    paddingRight: 10,
    color: COLORS.black,
    fontFamily: "Montserrat700",
    fontWeight: "700",
    fontSize: 14,
    textTransform: "capitalize",
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
