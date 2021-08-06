import { StyleSheet } from "react-native";
import { COLORS } from "../../style/colors";

export const style = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
    padding: 20,
  },
  title: {
    color: COLORS.black,
    textTransform: "capitalize",
    fontSize: 48,
    lineHeight: 43.2,
    width: "100%",
    paddingBottom: "10%",
    fontFamily: "Montserrat700",
    fontWeight: "700",
    paddingTop: 5,
  },
});
