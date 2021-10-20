import { StyleSheet } from "react-native";
import { COLORS } from "../../../style/colors";
import { STYLES } from "../../../style/styles";

export const style = StyleSheet.create({
  container: {
    paddingTop: 60,
  },
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
    fontFamily: STYLES.fonts.bold,
    fontSize: 14,
    lineHeight: 14,
    textTransform: "capitalize",
  },
});
