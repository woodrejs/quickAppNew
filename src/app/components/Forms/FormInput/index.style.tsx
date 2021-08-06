import { StyleSheet } from "react-native";
import { COLORS } from "../../../style/colors";

export const style = StyleSheet.create({
  container: { paddingBottom: 20, width: "100%" },
  label: {
    color: COLORS.grey,
    fontSize: 14,
    fontFamily: "Montserrat700",
    fontWeight: "700",
    textTransform: "uppercase",
  },
  input: {
    width: "100%",
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: COLORS.grey,
    borderBottomWidth: 1,
    color: COLORS.black,
    fontSize: 14,
    fontFamily: "Montserrat400",
    fontWeight: "400",
  },
});
