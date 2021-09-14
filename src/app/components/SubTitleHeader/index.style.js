import { StyleSheet } from "react-native";
import { COLORS } from "../../style/colors";

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
});
