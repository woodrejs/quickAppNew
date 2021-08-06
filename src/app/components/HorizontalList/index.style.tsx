import { StyleSheet } from "react-native";
import { COLORS } from "../../style/colors";

export const style = StyleSheet.create({
  container: { paddingTop: 40 },
  box: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 14,
    paddingBottom: 20,
  },
  title: {
    paddingLeft: 10,
    paddingRight: 10,
    color: COLORS.black,
    fontFamily: "Montserrat700",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 14,
    textTransform: "capitalize",
  },
  list: { height: 200 },
});
