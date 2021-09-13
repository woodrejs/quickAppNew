import { StyleSheet, View } from "react-native";
import { COLORS } from "../../../style/colors";

export const style = StyleSheet.create({
  container: {
    backgroundColor: COLORS.extra,
    borderRadius: 20,
    width: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.white,
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
  },
});
