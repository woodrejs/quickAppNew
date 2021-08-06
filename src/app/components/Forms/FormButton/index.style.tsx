import { StyleSheet } from "react-native";
import { COLORS } from "../../../style/colors";

export const style = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    textTransform: "capitalize",
    fontSize: 24,
    fontFamily: "Montserrat700",
    fontWeight: "700",
    color: COLORS.black,
  },
  button: {
    height: 75,
    width: 75,
    borderRadius: 50,
    backgroundColor: COLORS.lightExtra,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
