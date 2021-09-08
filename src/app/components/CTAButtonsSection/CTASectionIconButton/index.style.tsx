import { StyleSheet } from "react-native";
import { COLORS } from "../../../style/colors";

export const style = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: COLORS.lightExtra,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
